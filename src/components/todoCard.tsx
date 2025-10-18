import { changePlansBool, changePlanTitle } from "@/lib/query";
import { todoList } from "@/lib/type";
import { useAtomValue, useSetAtom } from "jotai";
import { Plans, plans } from "./part/todoCard";
import { ChangeEvent, useState } from "react";
import { isEditState, PopOver } from "./part/popOver";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function TodoCard(props: todoList) {
  const { title, deadline, id, bool, periodNum } = props;
  const [isCheck, setIsCheck] = useState<boolean>(bool);
  const [editTitle, setEditTitle] = useState<string>(title);
  const allPlans = useAtomValue(Plans);
  const setAllPlans = useSetAtom(Plans);
  const edit = useAtomValue(isEditState);
  const isEdit = useSetAtom(isEditState);

  const HandleCheck = async (data: todoList) => {
    await changePlansBool(data);
    UpdatePlansBool();
  };

  const handleStop = () => {
    isEdit({ ...edit, isEdit: false });
    setEditTitle(title);
    console.log(edit.isEdit);
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
    // console.log(editTitle);
  };

  const handleEdit = async () => {
    await changePlanTitle(edit.uniqueId, editTitle);
    isEdit({ ...edit, isEdit: false });
    UpdatePlansTitle();
    console.log(edit.isEdit);
  };

  const UpdatePlansBool = () => {
    const updateAllPlans: plans[] = (allPlans ?? []).map((p) =>
      p.uniqueId === props.id ? { ...p, isDone: !p.isDone } : p
    );
    console.log(updateAllPlans);
    setAllPlans(updateAllPlans);
  };

  const UpdatePlansTitle = () => {
    const updateAllPlans: plans[] = (allPlans ?? []).map((p) =>
      p.uniqueId === props.id ? { ...p, title: editTitle } : p
    );
    // console.log(updateAllPlans);
    setAllPlans(updateAllPlans);
  };

  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 transition-all hover:shadow-lg">
        <div className="flex items-start space-x-4">
          <input
            onClick={() => HandleCheck(props)}
            checked={isCheck}
            onChange={(e) => setIsCheck(e.target.checked)}
            type="checkbox"
            className="custom-checkbox h-6 w-6 mt-1 appearance-none border-2 border-gray-300 rounded-md bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition cursor-pointer flex-shrink-0"
          />

          <div className="flex-grow">
            {edit.isEdit === false ? (
              <p className="font-semibold text-gray-800">{editTitle}</p>
            ) : edit.uniqueId !== id ? (
              <p className="font-semibold text-gray-800">{title}</p>
            ) : (
              <div className="space-y-2">
                <Input
                  type="text"
                  value={editTitle}
                  onChange={handleChangeTitle}
                ></Input>
                <div className="space-x-2 flex justify-end">
                  <Button variant="outline" onClick={() => handleEdit()}>
                    変更
                  </Button>
                  <Button variant="destructive" onClick={() => handleStop()}>
                    中止
                  </Button>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-3 mt-2 text-sm">
              {periodNum === 1 ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  高優先度
                </span>
              ) : periodNum === 2 ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  中優先度
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  低優先度
                </span>
              )}

              <span className="text-gray-500">期日: {deadline}</span>
            </div>
          </div>
          <PopOver uniqueId={id} title={title} deadline={deadline} />
        </div>
      </div>
    </div>
  );
}
