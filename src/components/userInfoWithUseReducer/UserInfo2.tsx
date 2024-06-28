import { useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

// =============================== object initialized
const initialState = {
  name: "",
  age: 0,
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    default:
      return currentState;
  }
};

const UserInfo2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="m-6 border border-blue-600 p-8">
      <form
        action=""
        className="w-1/2 p-8 rounded-lg shadow-lg shadow-purple-400 "
      >
        <input
          onChange={() => dispatch({ type: "addName", payload: "Sam" })}
          type="text"
          name="userName"
          id="nameId"
          placeholder="Enter name..."
          className="w-full block outline-none border border-pink-500 rounded my-3 p-2"
        />
        <input
          type="number"
          name="userAge"
          id="ageId"
          placeholder="Enter age..."
          className="w-full block outline-none border border-pink-500 rounded my-3 p-2"
        />
        <input
          type="text"
          name="userHobbies"
          id="hobbyId"
          placeholder="Enter hobbies..."
          className="w-full block outline-none border border-pink-500 rounded my-3 p-2"
        />
        <button
          className="block outline-none w-full bg-purple-500 font-semibold rounded p-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfo2;
