import { todoList } from "@/lib/type";

export function TodoCard(props: todoList) {
  const { title, month, date } = props;
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 transition-all hover:shadow-lg">
        <div className="flex items-start space-x-4">
          <input
            type="checkbox"
            className="custom-checkbox h-6 w-6 mt-1 appearance-none border-2 border-gray-300 rounded-md bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition cursor-pointer flex-shrink-0"
          />

          <div className="flex-grow">
            <p className="font-semibold text-gray-800">{title}</p>
            <div className="flex items-center space-x-3 mt-2 text-sm">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                高優先度
              </span>

              <span className="text-gray-500">
                期日: {month}月{date}日
              </span>
            </div>
          </div>

          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
