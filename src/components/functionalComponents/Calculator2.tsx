import { useState } from "react";

const Calculator2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="m-12 px-12 py-6 bg-yellow-500 rounded-md text-xl text-white"
      >
        {count}
      </button>
    </div>
  );
};

export default Calculator2;
