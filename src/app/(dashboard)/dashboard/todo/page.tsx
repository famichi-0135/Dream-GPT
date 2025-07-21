import { TodoCard } from "@/components/todoCard";

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Todoリスト</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 space-x-10 space-y-8">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">1週目</h2>
          <TodoCard title="勉強" month={12} date={23} />
          <TodoCard title="勉強" month={12} date={23} />
          <TodoCard title="勉強" month={12} date={23} />
          <TodoCard title="勉強" month={12} date={23} />
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">2週目</h2>
          <TodoCard title="勉強" month={12} date={23} />
          <TodoCard title="勉強" month={12} date={23} />
          <TodoCard title="勉強" month={12} date={23} />
          <TodoCard title="勉強" month={12} date={23} />
        </div>
      </div>
    </div>
  );
}
