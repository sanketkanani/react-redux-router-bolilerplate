export const handleIncrement = () => (dispatch) => {
  dispatch({ type: "INCREMENT", payload: null });
};

export const handleDecrement = () => (dispatch) => {
  dispatch({ type: "DECREMENT", payload: null });
};
