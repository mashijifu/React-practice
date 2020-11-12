import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = "初期値"
  }
  render() {
    return (
      <div className="box">
        <h1>Class Component</h1>
        <p>{this.state}を表示</p>
      </div>
    );
  }
}

export default ClassComponent;
