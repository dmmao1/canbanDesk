type ValueTypes =
  | "Черновик"
  | "Отменено"
  | "В работе / отправлено"
  | "Согласовано"
  | "Не согласовано"
  | "Прочтано"
  | "Исполнено"
  | "Не исполнено";
type KeyTypes = "" | "0" | "1" | "2" | "3" | "4" | "Y" | "N";

export type TaskStatusType = {
  value: ValueTypes;
  key: KeyTypes;
};

type OrderKeyType = "step1" | "step2" | "step3" | "step4";
type OrderValueTypes =
  | "Ждет отметки об исполнении"
  | "В работе КГИК"
  | "На согласовании у председателя КГИК"
  | "Пришло в КГИК";

type OrderType = {
  value: OrderValueTypes;
  key: OrderKeyType;
};

export type TaskType = {
  notesUrl: string;
  projectNumber: string;
  taskControlDate: string;
  taskTheme: string;
  executer: string;
  currentExecutor: string;
  taskUNID: string;
  taskParentUNID: string;
  ordStatus: TaskStatusType;
  ord_Processed: "1" | "";
  ord_ExistReport: "1" | "";
  stepOrder: OrderType;
  author: string;
  authorFull: string;
  childOrders?: [];
};
