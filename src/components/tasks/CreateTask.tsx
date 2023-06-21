import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

type FormValues = {
  title: string;
  description: string;
  dueDate: Date;
};

const CreateLinkMutation = gql`
  mutation createLink(
    $title: String!
    $description: String!
    $dueDate: DateTime!
  ) {
    createLink(title: $title, description: $description, dueDate: $dueDate) {
      title
      description
      dueDate
    }
  }
`;

const CreateTask: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [createLink, { loading, error }] = useMutation(CreateLinkMutation, {
    onCompleted: () => reset(),
  });

  return null;
};

export default CreateTask;
