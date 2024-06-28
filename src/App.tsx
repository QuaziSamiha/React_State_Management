import UserInfo from "./components/userInfo/UserInfo";
import UserInfo2 from "./components/userInfo/UserInfo2";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center m-4">
        Use Object As State For A Component
      </h1>
      {/* <UserInfo /> */}
      <UserInfo2 />
    </>
  );
}

export default App;
