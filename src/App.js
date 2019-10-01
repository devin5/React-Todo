import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  toggleCompleted = id => {
    console.log("function running ", id);
    this.setState({
      data: this.state.data.map(item => {
        if (id === item.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    });
  };

  addItem = item => {
    this.setState({
      data: [
        ...this.state.data,
        {
          task: item,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>I Am the Todo List Project</h1>
        <TodoList toggle={this.toggleCompleted} data={this.state.data} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
