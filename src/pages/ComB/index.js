import React from "react";
import { connect, Connect } from "react-redux";
class ComB extends React.Component {

    render() {
        console.log("ComB render this.props:", this.props);
        return (
            <div>                {this.props.count} </div>
        )

    }

}
const mapStateToprops = (state) => {
    console.log("ComB", state);
    return state
}
// B组件是接受方

export default connect(mapStateToprops, null)(ComB)