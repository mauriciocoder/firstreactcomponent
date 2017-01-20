var React = require("react");
var ReactDOM = require("react-dom");

var Hello = function(props) {
  return (
    <div>
    <div>Hello ReactJS Program!</div>
    <Welcome usernames={props.usernames}/>
    </div>
  );
} 

var Welcome = function(props) {
  var usernames = props.usernames.split(";");
  usernames = usernames.map(function(username) { return ( <li> Welcome, {username} </li> );});
  return (
    <div>{usernames}</div>
  );
}
ReactDOM.render(<Hello usernames="Mauricio;Sara"/>, document.getElementById("app"));

