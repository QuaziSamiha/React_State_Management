import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="border border-blue-600 m-6 p-6">
      <h1 className="font-semibold text-lg text-green-500">Parent</h1>
      <h1 className="my-4 px-8 py-2 w-fit bg-purple-500 rounded-md text-xl text-white">
        Count : {count}
      </h1>
      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
