import { CLOUD_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
const {cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla} = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[180px] rounded-lg bg-zinc-100 hover:bg-slate-300"
    >
      <img
        className="rounded-lg w-40"
        alt="logo"
        src={CLOUD_IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-[17px] py-2">{name}</h3>
      <h4 className="card-items">{cuisines.join(", ")}</h4>
      <h4 className="card-items">{avgRating} stars</h4>
      <h4 className="card-items">Rs{costForTwo}</h4>
      <h4 className="card-items">{sla.slaString}</h4>
    </div>
  );
};
//Higher order component
//promotedResstaurantCard is a function which takes restaurantcard as input and will return a enhanced component.
export const promotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black px-2 text-white rounded-md m-2">Open Now!</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
