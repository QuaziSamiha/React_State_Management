import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch(); // send
  return (
    <div className="container p-4 flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-2xl font-semibold text-violet-600">
        React with Redux
      </h1>
      <div className="m-8 p-8 rounded-md shadow-lg shadow-purple-500">
        <div className="flex items-center justify-evenly gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="rounded bg-purple-400 px-3 py-2 text-purple-900 font-bold"
          >
            Increment
          </button>
          <p className="font-bold text-lg text-violet-700">{count}</p>
          <button
            onClick={() => dispatch(decrement())}
            className="rounded bg-yellow-200 px-3 py-2 text-yellow-900 font-bold"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
