import React, {Component} from 'react'

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: true,
    }
  
    this.onHeadingClicked = this.onHeadingClicked.bind(this);
  }

  onHeadingClicked() {
    this.setState({
      isCollapse: !this.state.isCollapse,
    })
  }

  render() {
    const {heading, children} = this.props;
    // console.log(this.state);
    const {isCollapse} = this.state;
    
    return <div className="Accordion">
      <div className="Heading" onClick={this.onHeadingClicked}>
        <h2>{heading}</h2>
      </div>
      {!isCollapse && <div className="Content">{children}</div>}
    </div>
  }
}

export default Accordion