export type sidebarType = {
  title: string;
  href: string;
  icon: React.FC;
};

export type todoList = {
  title: string;
  deadline: string;
  id: string;
  bool: boolean;
  periodNum:number
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

export type DBPushDataType = {
  goalId: string;
  periodNum: number;
  title: string;
  deadline: string;
  userId: string | undefined;
};
