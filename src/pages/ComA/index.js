import React from "react";
//
import { connect } from "react-redux";

// 加号按钮
class ComA extends React.Component {
  handleClick = () => {
    console.log("ComA's this.props: ", this.props)
    this.props.sendAction()
  }
  
  render() {
    return (
      <button onClick={this.handleClick}> + </button>
    )
  }

}
/**
 * 要有一个返回值，
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      // 利用dispatch 发送一个action
      dispatch({
        type: 'add_action'
      })
    }
  }
}
// A 是发送方
export default connect(null, mapDispatchToProps)(ComA)
