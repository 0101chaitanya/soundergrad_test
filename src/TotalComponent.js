import React, { Component } from 'react';

export default class Total extends Component {
  render() {
    const { data, fourth } = this.props;
    return (
      <div className='counter container'>
        Total :{' '}
        {data.reduce((acc, item) => {
          return acc + item.value;
        }, 0) + fourth.value}
      </div>
    );
  }
}
