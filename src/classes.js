import React from 'react'
//reach.componnet?
//go back and look at class component functions in Phase-2
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0 
        }
    }
//how you set state in class components 
//what is a class component 
//legacy code??
    render() {
        //what runs whenever the compnent loads 
        return(
            <div>
                <h1>hello react class </h1>
                <h2>count is {this.state.count}</h2>
                <button onClick={() => { this.setState({count: this.state.count+1})}}>CLICK ME</button>
            </div>
        )
    }
}
export default App 