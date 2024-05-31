import React from "react";

import {
  daysUntilDeadline,
  defineStickerColor,
  sliderSpeedValue,
  sortStickers,
} from "./utils";
import { TaskType } from "../types/taskStatusType";

type StickerPropsType = {
  tasks: TaskType[];
};

export const Sticker = ({ tasks }: StickerPropsType) => {
  const [sortValue, setSortValue] = React.useState("all");

  const tasksLength: number = tasks.length;

  const filterTasks = (type: string) => {
    setSortValue(type);
  };
  const sortedTasks = sortStickers(tasks, sortValue);
  console.log("@@@", tasks);
  return (
    <>
      <div style={{ textAlign: "center", borderRadius: "50%" }}>
        <h3> {}</h3>
        <p>Всего задач: {tasksLength}</p>
        <button onClick={() => filterTasks("daysLeft")}> ост. </button>
        <button onClick={() => filterTasks("all")}> алл </button>
      </div>
      <div className="sticker__container">
        <div
          style={{
            animation: `columnConveyor ${sliderSpeedValue(
              tasksLength
            )}s linear infinite`,
          }}
          className="column__with__stickers"
        >
          {sortedTasks.map((task: TaskType) => (
            <div
              key={task.projectNumber}
              className={`sticker__body + ${defineStickerColor(task)}`}
            >
              <section className="sticker__section">
                <h2>{task.taskTheme}</h2>
                <p>{task.executer}</p>
                <p>Срок до: {task.taskControlDate}</p>

                <div className="sticker__footer">
                  <div>
                    {daysUntilDeadline(task.taskControlDate) < 0 ? (
                      <p className="deadline__expired">
                        {"Срок истек на " +
                          Math.abs(daysUntilDeadline(task.taskControlDate))}
                      </p>
                    ) : daysUntilDeadline(task.taskControlDate) < 3 ? (
                      <p className="deadline__warning">
                        {"До срока  " + daysUntilDeadline(task.taskControlDate)}
                      </p>
                    ) : (
                      <p className="deadline__normal">
                        {"Осталось дней: " +
                          daysUntilDeadline(task.taskControlDate)}
                      </p>
                    )}
                  </div>

                  <p>Ответственное лицо: {task.currentExecutor}</p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
