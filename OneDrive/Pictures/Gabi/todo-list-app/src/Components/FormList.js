import React from "react";
import "./style.css";

class FormList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      work: "",
    };
  }

  // HandleChange function
  handleChange = (event) => {
    this.setState({
      work: event.target.value,
    });
  };

  // handleSubmit function samee, kaas oo u diraayo "addItem" function oo APP ku jiro

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newWork(this.state.work);
    this.setState({
      work: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input_feild"
          type="text"
          placeholder="What Do You Want to Do?"
          name="workName"
          value={this.state.work}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default FormList;
