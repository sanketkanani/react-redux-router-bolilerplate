import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrement, handleIncrement } from "../Redux/Actions/Counter";

const About = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>About Page</h2>
      <div className="count-wrap">
        <button onClick={() => dispatch(handleIncrement())}>+</button>
        <h4>{count}</h4>
        <button onClick={() => dispatch(handleDecrement())}>-</button>
      </div>
    </div>
  );
};

export default About;
