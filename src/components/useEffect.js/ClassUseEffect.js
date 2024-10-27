import React, { Component } from 'react'

export class ClassUseEffect extends Component {
constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}

componentDidMount(){
  console.log("componentDidUpdate")
    document.title = `You clicked ${this.state.count} times`;
}
componentDidUpdate(){
  console.log("componentDidUpdate")
    document.title = `You clicked ${this.state.count} times`;
}
 clickHandler=()=>{
        this.setState(prevState=>{
            return {count :prevState.count +1}
        })
    }
  render() {
    const{count} = this.state
    return (
      <>
      
      <button onClick={this.clickHandler}>Click Couter {count}</button>
      </>
    )
  }
}

export default ClassUseEffect