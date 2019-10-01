import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <h3
        onClick={this.props.toggle(this.props.item.id)}
        className={this.props.item.completed ? "" : "completed"}
      >
        {this.props.item.task}
      </h3>
    );
  }
}

export default Todo;
