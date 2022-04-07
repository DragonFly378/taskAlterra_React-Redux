export const addTask = (newData) => {
  return {
    type: "addTask",
    payload: newData,
  };
};

export const delTask = (newData) => {
  return {
    type: "delTask",
    payload: newData,
  };
};
