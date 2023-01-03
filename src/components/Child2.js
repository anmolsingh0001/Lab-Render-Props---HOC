





import React, { Component } from 'react'
import parentcomp from './ParentHOC'

export class Child2 extends Component {
  render() {
    const {count,increment} = this.props;
    return (
      <div>
        
        <button onClick={()=>increment()} >
            Like Post {count} 
        </button>
      </div>
    )
  }
}

export default parentcomp(Child2)