import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "DUMMY",
                location: "default"
            }
        }
        // console.log(this.props.name+"Child constructor");
    }
async componentDidMount(){
   const data = await fetch("https://api.github.com/users/tanya-kaur");
   const json = await data.json();
   this.setState({
    userInfo: json
   })
   console.log(json);
}
componentDidUpdate(){
    console.log("component updated");
}
componentWillUnmount(){
    console.log("component mount done");
}
render(){
 
    const {name, location, avatar_url} = this.state.userInfo;
    return (
        <div className="user">     
        <img src={avatar_url}/>      
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: CHD@123</h3>
        </div>
    )
}
}
export default UserClass;