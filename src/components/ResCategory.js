import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({items})=> {
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // console.log("clicked");
        setShowItems(!showItems);
    }
return (
<div>
    {/* header */}
    {/*Accordion body */}
    <div className="bg-gray-50 p-4 w-6/12 m-auto my-4 shadow-lg cursor-pointer" onClick={handleClick}>
        <div className="flex justify-between">
    <span className="font-bold text-lg">{items.title} ({items.itemCards.length})</span>
    <span>🔽</span>
    </div>
    {showItems &&<ItemList data={items.itemCards}/>}
    </div>
    
</div>
)
}
export default ResCategory;