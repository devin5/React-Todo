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
      <div
        className={this.props.item.completed ? "completed" : ""}
        onClick={e => {
          this.props.toggle(this.props.item.id);
        }}
      >
        {this.props.item.task}
      </div>
    );
  }
}

export default Todo;
