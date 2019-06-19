import React, {Component} from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.init()
  }

  init() {
    import('./components/handle_' + this.props.type).then(Handle => {
      let handle = new Handle(this.ref.current)
    })
  }

  render() {
    return (<div ref={this.ref} />)
  }
}

export default Index
