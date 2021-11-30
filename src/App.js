import React, { Component } from 'react';
import Counter from './Counter';
import Fourth from './Fourth';
import Total from './TotalComponent';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [
        { id: 1, value: 0 },

        { id: 2, value: 0 },

        { id: 3, value: 0 },
      ],
      fourth: { id: 3, value: 0 },
    };
  }
  onIncrement = (id) => {
    this.setState((state) => {
      const incrementedState = state.data.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      );

      return { ...state, data: incrementedState };
    });
  };
  onDecrement = (id) => {
    this.setState((state) => {
      const decrementedState = state.data.map((item) =>
        item.id === id ? { ...item, value: item.value - 1 } : item
      );
      return { ...state, data: decrementedState };
    });
  };
  handleClick = (value) => {
    this.setState((state) => {
      return {
        ...state,
        fourth: { ...state.fourth, value: state.fourth.value + value },
      };
    });
  };
  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter
            key={counter.id}
            increment={this.onIncrement}
            decrement={this.onDecrement}
            value={counter.value}
            id={counter.id}
          />
        ))}
        <Fourth {...this.state.fourth} handleClick={this.handleClick} />
        <Total {...this.state} />
      </div>
    );
  }
}

export default App;
