import React, {Component} from 'react'
// async
// import ExampleComponent from 'subpackage'
// insider
import {Handle2} from 'subpackage'
// outsider
// import Handle from 'subpackage/dist/outsider/handle_3.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 1,
      able: true,
      method: 'async'
    }
  }

  render() {
    return (
      <div>
        {/*async*/}
        {/*{this.state.able && <ExampleComponent type={this.state.type}/>}*/}
        {/*insider*/}
        <Handle2/>
        {/*outsider*/}
        {/*<Handle/>*/}
        {this.state.method === 'async' && <button onClick={() => {
          let index = this.state.type
          if (index >= 3) {
            index = 1
          } else {
            index = index + 1
          }
          this.setState({
            type: index,
            able: false
          })
          setTimeout(() => {
            this.setState({able: true})
          })
        }}>exchange
        </button>}
      </div>
    )
  }
}
