import React, { Component } from "react";

class LIfeCycleComponent extends Component {
  // 자식 필드
  state = {
    number: 0,
    color: null,
  };

  handleNumberOnClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // ref
  colorRef = null;

  constructor(props) {
    super(props);
    console.log(props);
  }

  // 버츄얼돔을 호출하는 매서드
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 5 !== 0;
  }

  getSnapshotBeforeUpdate(prevProbs, prevState) {
    if (prevProbs.color !== this.props.color) {
      return this.colorRef.style.backgroundColor;
    }
    return null;
  }

  componentDidUpdate(prevProbs, prevState, snapshot) {
    if (prevState) {
      console.log("업테이트 직전 state: ", prevState);
    }

    if (prevProbs) {
      console.log("업데이트 직전 색상:", snapshot);
    }
  }

  render() {
    return (
      <div>
        <div
          ref={(el) => (this.colorRef = el)}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: this.state.color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000000",
          }}
        >
          {this.state.number}
        </div>

        <button onClick={this.handleNumberOnClick}>더하기 버튼</button>
      </div>
    );
  }
}

export default LIfeCycleComponent;
