// import { CLOUD_IMAGE_URL } from "../utils/constants";
import { ITEM_IMG } from "../utils/constants";

const ItemList = ({data}) => {
    console.log(data);
    return (
        <div>
            {data.map((item)=> (
                <div key={item.card.info.id} className="py-2 my-2 border-b-2 text-left">
                    {/* <img src={ITEM_IMG + item.card.info.imageId } /> */}
                    <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    {/* <img src={ITEM_IMG + item.card.info.imageId} /> */}
                </div>
            ))}
        </div>
    )
}
export default ItemList;