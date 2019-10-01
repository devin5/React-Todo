// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TododoList extends React.Component {
  constructor(props) {
    super(props);
    console.log("i am to do list props", props);
  }

  render() {
    //   note you need this before props from here down to have access to construcotr
    console.log("i am to do list props in return", this.props);
    return (
      <div>
        {this.props.data.map(item => {
          return <Todo toggle={this.props.toggle} key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default TododoList;
