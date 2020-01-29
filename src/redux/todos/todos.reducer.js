const INITIAL_STATE = {
  todos: "hi"
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "test":
      return {
        ...state,
        todos: ""
      };
    default:
      return state;
  }
};

export default todosReducer;
