import { Box } from "grommet";
import Task from "./Task";

const tasks = [
  {
    id: 1,
    title: "Complete project proposal",
    description:
      "Write a detailed proposal outlining the project scope, objectives, and deliverables.",
    status: "In progress",
    priority: "High",
  },
  {
    id: 2,
    title: "Review client feedback",
    description:
      "Go through the feedback provided by the client and make necessary revisions based on their suggestions.",
    status: "Pending",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Prepare presentation slides",
    description:
      "Create a visually appealing presentation with key project highlights and outcomes.",
    status: "Not started",
    priority: "Medium",
  },
  {
    id: 4,
    title: "Conduct team meeting",
    description:
      "Schedule and facilitate a team meeting to discuss progress, address concerns, and assign tasks.",
    status: "Scheduled",
    priority: "High",
  },
  {
    id: 5,
    title: "Submit progress report",
    description:
      "Compile a report summarizing the project's current status, achievements, and challenges faced.",
    status: "Completed",
    priority: "Low",
  },
];

const Tasks: React.FC = () => {
  return (
    <Box direction="column" gap="medium">
      {tasks.map(({ id, title, status, priority, description }) => (
        <Task
          key={id}
          title={title}
          status={status}
          priority={priority}
          description={description}
        />
      ))}
    </Box>
  );
};

export default Tasks;
