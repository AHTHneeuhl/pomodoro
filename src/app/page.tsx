import { Header } from "@/components/common";
import { Timer } from "@/components/pomodoro";
import { Tasks } from "@/components/tasks";

function Home() {
  return (
    <>
      <Header />
      <Timer />
      <Tasks />
    </>
  );
}

export default Home;
