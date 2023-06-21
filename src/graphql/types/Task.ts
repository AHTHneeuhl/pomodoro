import { builder } from "../builder";

builder.prismaObject("Task", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    description: t.exposeString("description"),
    dueDate: t.exposeString("dueDate"),
  }),
});

builder.mutationField("createTask", (t) =>
  t.prismaField({
    type: "Task",
    args: {
      title: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      dueDate: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, description, dueDate } = args;

      if (!(await ctx).user) {
        throw new Error("You have to be logged in to perform this action");
      }

      return prisma.task.create({
        ...query,
        data: {
          title,
          description,
          dueDate,
        },
      });
    },
  })
);
