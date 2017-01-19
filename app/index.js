var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
  render: function () {
    return (
      <div>
      <div>Hello ReactJS Program!</div>
      <div>Welcome, {this.props.username}</div>
      </div>   
    )
  }
});

ReactDOM.render(<Hello username="Mauricio"/>, document.getElementById("app"));
