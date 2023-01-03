








import React, { Component } from 'react'

export class Parentrender extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count:0,
        }
      }

      change=()=>{
          this.setState(prev=>{
             return{ count:prev.count+1 }
          })
      }


  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.change)}
      </div>
    )
  }
}

export default Parentrender