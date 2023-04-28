import React, { Component } from 'react';

class AddItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: '',
      itemDescription: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.setState({
        itemName: this.props.item.name,
        itemDescription: this.props.item.description
      });
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Item Description:
          <textarea
            name="itemDescription"
            value={this.state.itemDescription}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddItemForm;