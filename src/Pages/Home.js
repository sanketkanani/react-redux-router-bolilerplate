import React from "react";
import { connect } from "react-redux";
import { handleIncrement, handleDecrement } from "./../Redux/Actions/Counter";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickHandleIncrement = () => {
    this.props.handleIncrement();
  };

  onClickHandleDecrement = () => {
    this.props.handleDecrement();
  };

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <div className="count-wrap">
          <button onClick={this.onClickHandleIncrement}>+</button>
          <h4>{this.props.count}</h4>
          <button onClick={this.onClickHandleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  handleIncrement,
  handleDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
