import React from "react";
import FormList from "./Components/FormList";
import WorkList from "./Components/WorkList";
import "./App.css";

//Example Data
const works = [
  {
    name: "Reading",
    id: "1",
    done: false,
  },
  {
    name: "Sports",
    id: "2",
    done: false,
  },
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myWorks: works,
    };
  }
  //Create a function Toggle
  toggleItem = (id) => {
    const changeItem = this.state.myWorks.map((oneWork) => {
      if (oneWork.id === id) {
        return {
          ...oneWork,
          done: !oneWork.done,
        };
      } else {
        return oneWork;
      }
    });

    this.setState({
      myWorks: changeItem,
    });
  };
  //Remove Work
  removeItem = (id) => {
    const remove = this.state.myWorks.filter((oneItem) => oneItem.id !== id);
    this.setState({
      myWorks: remove,
    });
  };

  //Create Function which add each Work
  addItem = (newJob) => {
    const newObject = {
      name: newJob,
      id: Date.now(),
      done: false,
    };

    this.setState({
      myWorks: [...this.state.myWorks, newObject],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>
            <span class="styling">TODO</span>List App
          </h1>
          <FormList newWork={this.addItem} />
        </div>
        <WorkList
          newItem={this.state.myWorks}
          toggleItem={this.toggleItem}
          delete={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
