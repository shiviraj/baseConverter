import React from 'react';
import BaseNumber from './BaseNumber';

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, base) {
    const number = parseInt(value, base) || 0;
    this.setState({ value: number });
  }

  render() {
    const baseComponents = [];

    for (let base = 2; base <= 16; base++) {
      baseComponents.push(
        <BaseNumber
          base={base}
          key={base}
          value={this.state.value}
          onChange={this.handleChange}
        />
      );
    }

    return (
      <div className="main-container">
        <h1>Base Converter</h1>
        {baseComponents}
      </div>
    );
  }
}

export default BaseConverter;
