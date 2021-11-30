import React, { Component } from 'react';

export default class Fourth extends Component {
  render() {
    const { id, value, handleClick } = this.props;
    return (
      <div className='counter container'>
        <b className='lead m-2 p-2'>{value}</b>

        <div className='d-flex'>
          <button
            onClick={() => handleClick(-1)}
            className='btn btn-danger m-2 btn-sm'>
            -
          </button>
          <div className='counter-controls'>
            <button
              onClick={() => handleClick(+1)}
              className='btn btn-success m-2 btn-sm'>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
