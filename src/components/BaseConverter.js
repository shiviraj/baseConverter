import React from 'react';
import BaseNumber from './BaseNumber';

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const baseComponents = Array.from(new Array(16)).map((_, index) => (
      <BaseNumber
        base={index + 2}
        key={index}
        value={this.state.value}
        onChange={this.handleChange}
      />
    ));

    return (
      <div className="main-container">
        <h1>Base Converter</h1>
        {baseComponents}
      </div>
    );
  }
}

export default BaseConverter;
