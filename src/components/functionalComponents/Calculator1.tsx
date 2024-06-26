/* eslint-disable prefer-const */
// function is always stateless
const Calculator1 = () => {
  let count = 0;
  console.log(count);
  return (
    <div>
      <button
        onClick={() => (count = count + 1)}
        className="m-12 px-12 py-6 bg-green-500 rounded-md text-xl text-white"
      >
        {count}
      </button>
    </div>
  );
};

export default Calculator1;
