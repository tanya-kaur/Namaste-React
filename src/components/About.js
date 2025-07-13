import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent component after mount");
    }
render(){
    console.log("Parent render");
    return (
                <div>
                    <h1>About Us</h1>
                    <h3>This is my Food Ordering App!!</h3>
                    <h4>Logged User
                        <UserContext.Consumer>
                           {({loggedUser})=>
                            <h1 className="font-bold">{loggedUser}</h1>
                           }
                        </UserContext.Consumer>
                    </h4>
                    <UserClass />
                </div>
            )
}
}



// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h3>This is my Food Ordering App!!</h3>
//             <UserClass name={"Tanya class"}/>
//         </div>
//     )
// }
export default About;