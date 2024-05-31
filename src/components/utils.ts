

export const sliderSpeedValue = (tasksLength: number) => {
  if (tasksLength < 5) {
    return 5;
  } else if (tasksLength < 10) {
    return 80
  } else if (tasksLength < 15) {
    return 120;
  } else if (tasksLength < 20) {
    return 170;
  } else if (tasksLength < 25) {
    return 180;
  } else if (tasksLength < 30) {
    return 200;
  } else if (tasksLength < 35) {
    return 40;
  } else if (tasksLength < 40) {
    return 30;
  } else if (tasksLength < 45) {
    return 20;
  } else if (tasksLength < 50) {
    return 10;
  } else {
    return 5;
  }
};

export const defineStickerColor = (task: TaskType) => {
  switch (task.status) {
    case "To Do":
      return "toDo";
    case "In Progress":
      return "inProgress";
    case "Testing":
      return "testing";
    case "Done":
      return "done";
    default:
      return "toDo";
  }
};

export const daysUntilDeadline = (deadlineDate: string) => {
  const today: Date = new Date();
  const deadline: Date = new Date(deadlineDate);
  const timeDiff: number = deadline.getTime() - today.getTime();

  const daysDiff: number = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};

export const sortStickers = (tasks: TaskType[], sortValue: string) => {


  if (sortValue === "all") {
    return tasks;
  } else if (sortValue === "daysLeft") {
    return [
      ...tasks.sort(
        (a, b) => daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline)
      ),
    ];
  }
  return tasks;
};
