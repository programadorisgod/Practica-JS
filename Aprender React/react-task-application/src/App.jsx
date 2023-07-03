import TaksList from "./components/TaksList";
import TaskForm from "./components/TaskForm";



function App() {
  
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container  mx-auto p-10">
      <TaskForm/>
      <TaksList/>
      </div>
    </main>
  );
}

export default App;
