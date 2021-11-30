import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { value, increment, decrement, id } = this.props;
    return (
      <div className='counter container'>
        <b className='lead m-2 p-2'>{value}</b>

        <div className='d-flex'>
          <button
            onClick={() => decrement(id)}
            className='btn btn-danger m-2 btn-sm'>
            -
          </button>
          <div className='counter-controls'>
            <button
              onClick={() => increment(id)}
              className='btn btn-success m-2 btn-sm'>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
