export const resolvers = {
  Query: {
    tasks: () => {
      return [
        {
          id: "1",
          title: "Finish Project Proposal",
          description:
            "Write and submit the project proposal by end of the week.",
          dueDate: "2023-06-21",
        },
        {
          id: "2",
          title: "Prepare Presentation",
          description:
            "Create slides and rehearse presentation for upcoming conference.",
          dueDate: "2023-06-25",
        },
        {
          id: "3",
          title: "Review Code Pull Request",
          description:
            "Review and provide feedback on the latest code pull request.",
          dueDate: "2023-06-23",
        },
      ];
    },
  },
};
