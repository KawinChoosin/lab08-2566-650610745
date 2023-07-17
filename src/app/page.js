import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task detail="Read a book" />
        {/* task */}
        <Task detail="Take a shower" />
        {/* task */}
        <Task detail="Sleep" />
      </div>

      {/* //footer section */}
      <Footer years="2023" fullname="Kawin  Choosin" id="650610745" />
    </div>
  );
}
