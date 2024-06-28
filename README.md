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

# 23-1 State In React

- state within react class component
- stateless react functional component
- useState() hook within react functional component

# 23-2 Limitations Of One-Way Data Binding In React.

- state lift up
- one way data binding --> data can send from parent to child but child cannot send data to parent
- props drilling --> unnecessary data pass

# 23-3 Use Object As State For A Component

- mutable & immutable (when we change a state, we cannot store any reference of previous state, directly set the new state)
