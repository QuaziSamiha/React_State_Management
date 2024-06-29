// import ToDoForm from "./components/todoForm/ToDoForm";
import ToDoForm3 from "./components/todoForm/ToDoForm3";
import ToDoList from "./components/todoForm/ToDoList";
// import ToDoProvider from "./context/ToDoProvider";
import ToDoProvider3 from "./context/ToDoProvider3";

function App() {
  return (
    //   <ToDoProvider>
    //     <div>
    //       <h1 className="text-3xl font-bold text-center m-4">
    //         Initialize UseReducer Inside Provider Component
    //       </h1>
    //       <ToDoForm />
    //     </div>
    //   </ToDoProvider>

    // ================================================
    <ToDoProvider3>
      <div>
        <h1 className="text-3xl font-bold text-center m-4">
          Initialize UseReducer Inside Provider Component
        </h1>
        <h1 className="text-3xl font-bold text-center m-4">Handle AddTodo</h1>
        <ToDoForm3 />
        <h1 className="text-3xl font-bold text-center m-4">Todo List</h1>
        <ToDoList />
      </div>
    </ToDoProvider3>
  );
}

export default App;
