import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfo3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="m-6 border border-blue-600 p-8">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-8 rounded-lg shadow-lg shadow-purple-400 "
      >
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="userName"
          id="nameId"
          placeholder="Enter name..."
          className="w-full block outline-none border border-pink-500 rounded my-3 p-2"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="number"
          name="userAge"
          id="ageId"
          placeholder="Enter age..."
          className="w-full block outline-none border border-pink-500 rounded my-3 p-2"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobby", payload: e.target.value })
          }
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

export default UserInfo3;
