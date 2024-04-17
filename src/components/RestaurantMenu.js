import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ResCategory";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const {resId} =   useParams();

   const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) {
        return <Shimmer />
    }
     const {name, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories);
    return (
<div className="text-center">
    <h1 className="my-6 font-bold text-2xl">{name}</h1>
    <p className="font-bold text-lg py-2">{cuisines.join(", ")}  - {costForTwoMessage}</p>
    {categories.map((category)=><ResCategory key={category?.card?.card.title} items={category?.card?.card}/>)}
</div>
    )
}
export default RestaurantMenu; 