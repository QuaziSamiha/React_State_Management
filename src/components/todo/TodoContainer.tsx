// import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        {/* <Button className="bg-primary-gradient text-xl font-semibold">
          Edit Profile
        </Button> */}
        <AddTodoModal />
        {/* <button>Filter</button> */}
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
          {/* <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard /> */}
          {todos.map((item) => (
            // <TodoCard />
            <TodoCard title={item.title} description={item.description}/>
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-3 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
