const GrandChild = ({ count }: { count: number }) => {
  return (
    <div className="border border-green-600 my-8 p-6 w-full">
      <h1 className="font-semibold text-lg text-orange-500">Grandchild</h1>
      <div className="my-4 px-12 py-3 bg-pink-300 rounded-md text-xl w-fit">
        {count}
      </div>
    </div>
  );
};

export default GrandChild;
