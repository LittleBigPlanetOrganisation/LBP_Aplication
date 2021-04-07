import React from "react";

const subscribeFormReducer = (state, action) => {
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };

    case "setPassword":
      return { ...state, password: action.payload };

    default:
      return state;
  }
};

const subscribeFormInitialState = {
  username: "",
  password: "",
};

export default function useSubscribeForm() {
  const [{ username, password }, dispatch] = React.useReducer(
    subscribeFormReducer,
    subscribeFormInitialState
  );

  const setUsername = (event) =>
    dispatch({ type: "setUsername", payload: event.target.value });

  const setPassword = (event) =>
    dispatch({ type: "setPassword", payload: event.target.value });

  return [username, password, { setUsername, setPassword }];
}
