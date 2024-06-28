import { useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  age: 0,
  hobbies: [] as string[],
};

// it is a decision making area
// here we keep the logic to manage the state
// keeps state management business logic
const reducer = (currentState: typeof initialState, action: TAction) => {
  // here we take decision based on 'Action'
  //   for decision taking we use if-else, or switch
  // conventionally reducer use 'Switch' for decision making
  switch (action.type) {
    case "addName":
      return { ...currentState, name: "Programming Hero" };
    default:
      return currentState;
  }
};

const UserInfo1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="m-6 border border-blue-600 p-8">
      <form
        action=""
        className="w-1/2 p-8 rounded-lg shadow-lg shadow-purple-400 "
      >
        <input
          // dispatch is sending a object property type to the reducer function which is accepted by a action to the reducer function
          onChange={() => dispatch({ type: "addName" })}
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

export default UserInfo1;
