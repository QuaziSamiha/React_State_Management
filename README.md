**25.06.24**

# React + TypeScript + Vite + Tailwind CSS steps for installation

1. npm create vite@latest react-state-management -- --template react-ts
2. cd react-state-management

- **Tailwind CSS:** (https://tailwindcss.com/docs/guides/vite)

3. npm install -D tailwindcss postcss autoprefixer
4. npx tailwindcss init -p
5. modify tailwind.config.js file
6. modify index.css file

# PH Guideline:

**State Management in React**
In This Module, You Will Delve Into The Essential Aspects Of State Management In React, Equipping You With The Skills To Build Dynamic And Responsive Applications. The Topics Covered Will Provide A Comprehensive Understanding Of Handling States Effectively, Overcoming Limitations, And Utilizing Advanced Techniques With TypeScript. Here’s What You Will Learn,

- **State In React:**
  Gain An Understanding Of The Concept Of State In React And Its Pivotal Role In Creating Interactive Applications.

- **Limitations Of One-Way Data Binding In React:**
  Explore The Constraints Of React One-Way Data Binding And How It Impacts State Management And Component Interactions.

- **Using Objects As State For A Component:**
  Learn To Use Objects As The State For Components, Enabling You To Manage Complex State Structures More Efficiently.

- **Using `UseReducer` To Maintain The State:**
  Discover How To Use The **UseReducer** Hook For Managing State, Particularly Useful For Handling Complex State Logic And Actions In A Structured Manner.

- **Dynamic Payload And Proper Usage With TypeScript:**
  Understand How To Manage Dynamic Payloads In State Actions And Leverage **TypeScript** To Ensure Type Safety And Robustness In Your State Management.

- **Initialize A Context Provider Component:**
  Learn To Set Up A Context Provider Component, Facilitating Global State Management And Sharing State Across Multiple Components Without **Prop Drilling**.

- **Initialize `UseReducer` Inside Provider Component:**
  Master The Integration Of **`UseReducer` Within A Context Provider Component** To Manage State Globally In A React Application.

- Handle AddTodo:
  Implement The Logic For Adding A New To-Do Item To Your State, Understanding The Nuances Of Updating State Immutably.

- Handle Todo List:
  Develop The Functionality To Manage And **Render** A List Of To-Dos, Focusing On Efficient State Updates And **Re-Renders**.

- **Refactor Action Types:**
  Learn To Refactor Your Action Types To Make Your State Management Logic Cleaner, More Maintainable, And Scalable.
  By The End Of This Module, You Will Have A Solid Grasp Of State Management In React And Be Capable Of Building And Maintaining Complex Stateful Applications With Confidence And Precision.

# My Notes:

- **What is react state?**
- **Why we use useState instead of a variable to store a state?**

**26.06.24**

# 23-1 State In React

- state within react class component
- stateless react functional component
- useState() hook within react functional component

**26.06.24 & 27.06.24**

# 23-2 Limitations Of One-Way Data Binding In React.

- state lift up
- one way data binding --> data can send from parent to child but child cannot send data to parent
- props drilling --> unnecessary data pass

# 23-3 Use Object As State For A Component

- mutable & immutable (when we change a state, we cannot store any reference of previous state, directly set the new state)

**28.06.24**

# 23-4 Use UseReducer To Maintain The State

- useReducer hook is inspired by Redux
- useState return an array with two elements
- useReducer also returns an array with two elements (1. state and 2. dispatch)
- useReducer takes two parameter as arguments, first one is a function (conventionally called reducer) and second one is a value(we can send an object or a variable). By default this reducer function get access of two things, 1. currentState, 2. action
- we are sending dispatch to reducer function

# 23-5 Dynamic Payload And Proper Usage With TypeScript

# 23-6 Initialize A Context Provider Component

# 23-7 Initialize UseReducer Inside Provider Component

# 23-8 Handle AddTodo

**29.06.24**

# 23-9 Handle Todo List

# 23-10 Refactor Action Types

- react-redux --> not opinionated
- redux-toolkit --> opinionated, currently mostly used, redux toolkit also give rtk query which helps us for data fetching.

# 24-1 What Is Redux ?

- redux is a predictable state container for JavaScript applications (vue, react, angular)
- predictable:
  1. single source of truth
  2. Immutable behavior
  3. usage of pure function
  4. object as a action
  5. unidirectional flow
- centralize (we can get state from anywhere)
- debuggable (it gives a devtool --> its kind of a time machine , so we can refine previous state)
- flexible (its a independent ui framework --> vue, react, angular, middleware support --> for helps in data fetching, handle side effects, rtk query helps in data fetching)

**30.06.24**

# 24-2 Inner Workings Of Redux

- action --> action taken by user, each action has a corresponding reducer function.
- dispatch --> sending the action object to the store. Dispatching an action triggers the corresponding reducer to update the state.
- payload --> optional data that is attached to an action. it carries any additional information that needs to be send along with the acton to update the state.
- reducer --> a reducer is a pure function that takes the current state and an acton as inputs and returns a new state. It defines how the application's state changes in response to different actions.
- store --> the store holds the state of the application. The store is responsible for dispatching actions maintaining the state and notifying subscribers about state changes.

- view --> action --> state --> view

# 24-3 Initial Project Setup

- **Steps:**
  1. npm create vite
  2. react , typescript, cd to code folder
  3. npm install
  4. redux toolkit (https://redux-toolkit.js.org/)
  5. npm install @reduxjs/toolkit react-redux (https://redux-toolkit.js.org/tutorials/quick-start)

**01.07.24**

# 24-4 Initialize Store And Slice

- make src --> redux --> store.ts
- import Provider from react-redux at main.tsx & also import store from store.ts
- make src --> redux --> features --> counterSlice.tsx

# 24-5 Basic Counter With Redux
