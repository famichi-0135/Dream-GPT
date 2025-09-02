export type sidebarType = {
  title: string;
  href: string;
  icon: React.FC;
};

export type todoList = {
  title: string;
  deadline: string
};

export type todoData = {
  periodType: string;
  planName: string;
  schedules: {
    periodNumber: number;
    plans: {
      id: number;
      title: string;
      deadline: string;
    }[];
  }[];
};
