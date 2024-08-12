import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="container p-4 flex flex-col justify-center items-center h-screen w-full">
      <h1>My ToDo</h1>
      <div>
        <Button>Add</Button>
      </div>
    </div>
  );
}

export default App;
