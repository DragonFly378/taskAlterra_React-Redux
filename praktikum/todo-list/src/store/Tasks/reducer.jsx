const initialState = {
  tasks: [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: false,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: false,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        // tasks: state.tasks.concat(action.payload),
      };
    case "delTask":
      return {
        ...state,
        tasks: [...(state.tasks = action.payload)],
        // tasks: state.tasks.concat(action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
