var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
  render: function() {
  console.log("Debug is o the table");
  var usernames = ["Mauricio", "Luciana", "Sara", "Eurice"];  
  return (
      <div>
      <div>Hello ReactJS Program!</div>
      <Welcome usernames={usernames}/>
      </div>   
    )
  }
});

var Welcome = React.createClass({
  render: function() {
   var usernames = this.props.usernames.map(function(username) { return <div>Welcome, {username}</div>; }); 
   return (
      <div>{usernames}</div>
    )
  }
});
ReactDOM.render(<Hello/>, document.getElementById("app"));

