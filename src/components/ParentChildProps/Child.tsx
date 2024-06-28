type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Child = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-red-600 my-8 p-6 w-full">
      <h1 className="font-semibold text-lg text-pink-500">Child</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="my-4 px-12 py-3 bg-yellow-500 rounded-md text-xl text-white"
      >
        click me {count}
      </button>
    </div>
  );
};

export default Child;