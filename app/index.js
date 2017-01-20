var React = require("react");
var ReactDOM = require("react-dom");

var Hello = function(props) {
  return (
    <div>
    <div>Hello ReactJS Program!</div>
    <Welcome usernames={props.usernames}/>
    <Time>12h30</Time>
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

var Time = function(props) {
  return (<div><strong>{props.children}</strong></div>);
}

ReactDOM.render(<Hello usernames="Mauricio;Sara"/>, document.getElementById("app"));

