import Parent from "./components/ParentChildProps/Parent";
import Parent2 from "./components/ParentChildProps2/Parent2";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">State Lift Up</h1>
      <h1 className="text-xl font-bold text-center">Data One Way Binding</h1>
      <h1 className="text-xl font-bold text-center">
        Props Drilling (Anti Pattern)
      </h1>
      <Parent />
      <Parent2 />
    </>
  );
}

export default App;
