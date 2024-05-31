import { useEffect } from "react";
import "./App.css";
import { tasksApi } from "./api/api";
import { Sticker } from "./components/Sticker";
import React from "react";
import { TaskType } from "./types/taskStatusType";
export type columnType = {
  key: string;
  name: string;
};
function App() {
  const [tasks, setTasks] = React.useState<TaskType[]>([]);
  console.log("QQQ", tasks);
  const columnsNames: columnType[] = [
    { key: "step1", name: "Пришло в КГИК" },
    { key: "step2", name: "В работе КГИК" },
    { key: "step3", name: "На согласовании у председателя КГИК" },
    { key: "step4", name: "Ждет отметки об исполнении" },
  ];

  // const tasks: TaskType[] = [
  //   {
  //     task_id: 4,
  //     task_name: "Task 4",
  //     description: "Review project proposal and provide feedback",
  //     deadline: "2024 May 24",
  //     task_issuance_date: "April 25",
  //     responsible_individual: "John",
  //     status: "In Progress",
  //   },
  //   {
  //     task_id: 12,
  //     task_name: "Task 12",
  //     description: "Prepare presentation for team meeting",
  //     deadline: "2024 May 29",
  //     task_issuance_date: "May 10",
  //     responsible_individual: "John",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 3,
  //     task_name: "Task 3",
  //     description: "Conduct market research and compile data",
  //     deadline: "2024 June 30",
  //     task_issuance_date: "April 30",
  //     responsible_individual: "Natalie",
  //     status: "In Progress",
  //   },
  //   {
  //     task_id: 1,
  //     task_name: "Task 1",
  //     description: "Revise product design based on feedback",
  //     deadline: "2024 May 15",
  //     task_issuance_date: "May 20",
  //     responsible_individual: "John",
  //     status: "In Progress",
  //   },
  //   {
  //     task_id: 9,
  //     task_name: "Task 9",
  //     description: "Update website content and layout",
  //     deadline: "2024 June 10",
  //     task_issuance_date: "May 15",
  //     responsible_individual: "John",
  //     status: "Testing",
  //   },
  //   {
  //     task_id: 6,
  //     task_name: "Task 6",
  //     description: "Analyze sales data and create report",
  //     deadline: "2024 June 9",
  //     task_issuance_date: "May 30",
  //     responsible_individual: "Natalie",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 5,
  //     task_name: "Task 5",
  //     description: "Coordinate logistics for upcoming event",
  //     deadline: "2024 May 5",
  //     task_issuance_date: "June 20",
  //     responsible_individual: "Sophia",
  //     status: "Testing",
  //   },
  //   {
  //     task_id: 8,
  //     task_name: "Task 8",
  //     description: "Develop social media marketing plan",
  //     deadline: "2024 June 5",
  //     task_issuance_date: "June 10",
  //     responsible_individual: "Sophia",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 7,
  //     task_name: "Task 7",
  //     description: "Research new technology trends in the industry",
  //     deadline: "2024 July 15",
  //     task_issuance_date: "June 15",
  //     responsible_individual: "John",
  //     status: "Testing",
  //   },
  //   {
  //     task_id: 14,
  //     task_name: "Task 14",
  //     description: "Create training materials for new employees",
  //     deadline: "2024 June 14",
  //     task_issuance_date: "June 25",
  //     responsible_individual: "Sophia",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 11,
  //     task_name: "Task 11",
  //     description: "Review and update client contracts",
  //     deadline: "2024 August 5",
  //     task_issuance_date: "July 10",
  //     responsible_individual: "Sophia",
  //     status: "Testing",
  //   },
  //   {
  //     task_id: 2,
  //     task_name: "Task 2",
  //     description: "Organize team building activity",
  //     deadline: "2024 August 15",
  //     task_issuance_date: "July 15",
  //     responsible_individual: "Sophia",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 13,
  //     task_name: "Task 13",
  //     description: "Update inventory records and reorder supplies",
  //     deadline: "2024 August 10",
  //     task_issuance_date: "July 20",
  //     responsible_individual: "Sophia",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 10,
  //     task_name: "Task 10",
  //     description: "Conduct performance evaluations for team members",
  //     deadline: "2024 August 25",
  //     task_issuance_date: "July 15",
  //     responsible_individual: "John",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 26,
  //     task_name: "Task 26",
  //     description: "Implement customer feedback system",
  //     deadline: "2024 August 5",
  //     task_issuance_date: "July 10",
  //     responsible_individual: "Natalie",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 16,
  //     task_name: "Task 16",
  //     description: "Develop training program for new software rollout",
  //     deadline: "2024 September 10",
  //     task_issuance_date: "August 9",
  //     responsible_individual: "John",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 17,
  //     task_name: "Task 17",
  //     description: "Prepare quarterly financial report",
  //     deadline: "2024 September 15",
  //     task_issuance_date: "August 20",
  //     responsible_individual: "Ethan",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 18,
  //     task_name: "Task 18",
  //     description: "Collaborate with design team on new product prototype",
  //     deadline: "2024 September 25",
  //     task_issuance_date: "August 30",
  //     responsible_individual: "John",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 19,
  //     task_name: "Task 19",
  //     description: "Plan and execute company anniversary celebration",
  //     deadline: "2024 October 5",
  //     task_issuance_date: "September 10",
  //     responsible_individual: "Ethan",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 20,
  //     task_name: "Task 20",
  //     description:
  //       "Develop employee training schedule for upcoming quarter lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  //     deadline: "2024 October 10",
  //     task_issuance_date: "September 15",
  //     responsible_individual: "John",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 23,
  //     task_name: "Task 23",
  //     description: "Conduct training session on data analysis techniques",
  //     deadline: "2024 October 15",
  //     task_issuance_date: "September 20",
  //     responsible_individual: "Ethan",
  //     status: "In Progress",
  //   },
  //   {
  //     task_id: 22,
  //     task_name: "Task 22",
  //     description: "Update security protocols for company systems",
  //     deadline: "2024 October 20",
  //     task_issuance_date: "September 25",
  //     responsible_individual: "Sophia",
  //     status: "In Progress",
  //   },
  //   {
  //     task_id: 21,
  //     task_name: "Task 21",
  //     description: "Collate feedback from recent customer survey",
  //     deadline: "2024 October 25",
  //     task_issuance_date: "September 30",
  //     responsible_individual: "Sophia",
  //     status: "In Progress",
  //   },
  //   {
  //     task_id: 24,
  //     task_name: "Task 24",
  //     description: "Optimize internal communication processes",
  //     deadline: "2024 October 30",
  //     task_issuance_date: "October 5",
  //     responsible_individual: "John",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 25,
  //     task_name: "Task 25",
  //     description: "Evaluate software for project management",
  //     deadline: "2024 November 5",
  //     task_issuance_date: "October 10",
  //     responsible_individual: "Gabriel",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 15,
  //     task_name: "Task 15",
  //     description: "Review and update company policies",
  //     deadline: "2024 November 10",
  //     task_issuance_date: "October 15",
  //     responsible_individual: "Madison",
  //     status: "To Do",
  //   },
  //   {
  //     task_id: 29,
  //     task_name: "Task 29",
  //     description: "Organize team building workshop",
  //     deadline: "2024 November 15",
  //     task_issuance_date: "October 20",
  //     responsible_individual: "Owen",
  //     status: "Testing",
  //   },
  //   {
  //     task_id: 28,
  //     task_name: "Task 28",
  //     description: "Implement new vendor management system",
  //     deadline: "2024 November 20",
  //     task_issuance_date: "October 25",
  //     responsible_individual: "Hannah",
  //     status: "Testing",
  //   },
  //   {
  //     task_id: 27,
  //     task_name: "Task 27",
  //     description: "Research sustainability initiatives for company",
  //     deadline: "2024 November 25",
  //     task_issuance_date: "October 30",
  //     responsible_individual: "Justin",
  //     status: "Testing",
  //   },
  //   {
  //     task_id: 30,
  //     task_name: "Task 30",
  //     description: "Create marketing campaign for new product launch",
  //     deadline: "2024 November 30",
  //     task_issuance_date: "November 5",
  //     responsible_individual: "Samantha",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 31,
  //     task_name: "Task 31",
  //     description: "Review employee training effectiveness",
  //     deadline: "2024 December 5",
  //     task_issuance_date: "November 10",
  //     responsible_individual: "Nicholas",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 32,
  //     task_name: "Task 32",
  //     description: "Collaborate with IT team on system upgrades",
  //     deadline: "2024 December 10",
  //     task_issuance_date: "November 15",
  //     responsible_individual: "Ella",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 33,
  //     task_name: "Task 33",
  //     description: "Plan company holiday party",
  //     deadline: "2024 December 15",
  //     task_issuance_date: "November 20",
  //     responsible_individual: "Carter",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 34,
  //     task_name: "Task 34",
  //     description: "Analyze customer feedback for product improvement",
  //     deadline: "2024 December 20",
  //     task_issuance_date: "November 25",
  //     responsible_individual: "Scarlett",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 35,
  //     task_name: "Task 35",
  //     description: "Prepare budget proposal for next fiscal year",
  //     deadline: "2024 December 25",
  //     task_issuance_date: "November 30",
  //     responsible_individual: "Zachary",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 36,
  //     task_name: "Task 36",
  //     description: "Evaluate training needs for department restructuring",
  //     deadline: "2025 January 5",
  //     task_issuance_date: "December 5",
  //     responsible_individual: "Avery",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 37,
  //     task_name: "Task 37",
  //     description:
  //       "Implement feedback system for cross-department communication",
  //     deadline: "2025 January 10",
  //     task_issuance_date: "December 10",
  //     responsible_individual: "Dominic",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 38,
  //     task_name: "Task 38",
  //     description: "Collaborate with HR on employee wellness program",
  //     deadline: "2025 January 15",
  //     task_issuance_date: "December 15",
  //     responsible_individual: "Alexa",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 39,
  //     task_name: "Task 39",
  //     description: "Update customer service guidelines",
  //     deadline: "2025 January 20",
  //     task_issuance_date: "December 20",
  //     responsible_individual: "Jaxon",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 40,
  //     task_name: "Task 40",
  //     description: "Create diversity and inclusion training program",
  //     deadline: "2025 January 25",
  //     task_issuance_date: "December 25",
  //     responsible_individual: "Maya",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 41,
  //     task_name: "Task 41",
  //     description: "Review supplier contracts and renegotiate terms",
  //     deadline: "2025 January 30",
  //     task_issuance_date: "January 5",
  //     responsible_individual: "Greyson",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 42,
  //     task_name: "Task 42",
  //     description: "Organize team bonding event",
  //     deadline: "2025 February 5",
  //     task_issuance_date: "January 10",
  //     responsible_individual: "Harper",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 43,
  //     task_name: "Task 43",
  //     description:
  //       "Conduct review of company expenses for cost-cutting measures",
  //     deadline: "2025 February 10",
  //     task_issuance_date: "January 15",
  //     responsible_individual: "Wesley",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 44,
  //     task_name: "Task 44",
  //     description:
  //       "Implement training tracking system for employee development",
  //     deadline: "2025 February 15",
  //     task_issuance_date: "January 20",
  //     responsible_individual: "Piper",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 45,
  //     task_name: "Task 45",
  //     description: "Evaluate customer retention strategies",
  //     deadline: "2025 February 20",
  //     task_issuance_date: "January 25",
  //     responsible_individual: "Max",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 46,
  //     task_name: "Task 46",
  //     description: "Design marketing materials for upcoming campaign",
  //     deadline: "2025 February 25",
  //     task_issuance_date: "January 30",
  //     responsible_individual: "Luna",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 47,
  //     task_name: "Task 47",
  //     description: "Research industry trends for strategic planning",
  //     deadline: "2025 March 5",
  //     task_issuance_date: "February 5",
  //     responsible_individual: "Kai",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 48,
  //     task_name: "Task 48",
  //     description: "Create documentation for new company procedures",
  //     deadline: "2025 March 10",
  //     task_issuance_date: "February 10",
  //     responsible_individual: "Nova",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 49,
  //     task_name: "Task 49",
  //     description: "Develop mentoring program for employee growth",
  //     deadline: "2025 March 15",
  //     task_issuance_date: "February 15",
  //     responsible_individual: "Ryder",
  //     status: "Done",
  //   },
  //   {
  //     task_id: 50,
  //     task_name: "Task 50",
  //     description: "Implement software for process automation",
  //     deadline: "2025 March 20",
  //     task_issuance_date: "February 20",
  //     responsible_individual: "Aria",
  //     status: "Done",
  //   },
  // ];


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tasksApi.getTasks();
        console.log("***", tasks);

        setTasks([...tasks, ...response]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="app__container">
        {tasks.length === 0 ? (
          <p> загрузка</p>
        ) : (
          <div className="app__container">
            {columnsNames.map((column) => (
              <div key={column.name} className="column">
                <Sticker
                  key={column.key}
                  tasks={tasks.filter((task) => task.stepOrder.key === "step1")}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
