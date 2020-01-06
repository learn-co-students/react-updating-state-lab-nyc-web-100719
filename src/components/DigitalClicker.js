// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
    state ={
        timesClicked: 0
    }

    incrementNumber=()=>{
        this.setState(previousState => ({
                timesClicked: previousState.timesClicked + 1
        })
    )
    }

    render(){
        return(
           <button onClick={this.incrementNumber}>{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker