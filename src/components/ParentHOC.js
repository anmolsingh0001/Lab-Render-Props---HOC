import React from "react";


const parentcomp=(Originalcomp)=>{
    
    class ParentHOC extends React.Component {

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
        return  <Originalcomp 
        
            count={this.state.count}
            increment={this.change}
        
        />
            
        
      }
    }
    
    return ParentHOC
}

export default parentcomp;