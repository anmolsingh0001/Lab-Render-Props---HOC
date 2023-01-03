








import React, { Component } from 'react'
// import parentcomp from './ParentHOC'

export class Child2rend extends Component {
  render() {
    const {count,increment} = this.props;
    return (
      <div>
        
        <button onClick={increment} >
            Like Image {count}
        </button>
      </div>
    )
  }
}

export default Child2rend;