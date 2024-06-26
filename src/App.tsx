import Counter1 from "./components/classComponents/Counter1";
import Counter2 from "./components/classComponents/Counter2";
import Calculator1 from "./components/functionalComponents/Calculator1";
import Calculator2 from "./components/functionalComponents/Calculator2";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Class Components</h1>
      <Counter1 />
      <Counter2 />
      <h1 className="text-3xl font-bold text-center">Functional Components</h1>
      <Calculator1 />
      <Calculator2 />
    </>
  );
}

export default App;
