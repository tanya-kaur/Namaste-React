import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2]= useState(1);
return (
    <div className="user">
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <h3>Name: {name}</h3>
        <h3>Location: Delhi</h3>
        <h3>Contact: @Tanya0597</h3>
    </div>
)
}
export default User;