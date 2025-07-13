// import { CLOUD_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { ITEM_IMG } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

const ItemList = ({data}) => {
    const dispatch = useDispatch();
const handleAddItem = (item) => {
dispatch(addItem(item))
}
    console.log(data);
    return (
        <div>
            {data.map((item)=> (
                <div key={item.card.info.id} className="py-2 my-2 border-b-2 text-left ">
                   
                    <div className="py-2 flex flex-wrap justify-between">
                        <div>
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                    </div>
                    <div>
                        <button className="bg-black text-white absolute rounded-lg w-14 text-sm h-7 my-16 mx-5 shadow-lg" onClick={() => handleAddItem(item)}>add +</button>
                        <img src={ITEM_IMG + item.card.info.imageId } className="w-[90px]" />
                    </div>
                    </div>
                    
                    <p className="text-xs">{item.card.info.description}</p>
                    {/* <img src={ITEM_IMG + item.card.info.imageId} /> */}
                </div>
            ))}
        </div>
    )
}
export default ItemList;