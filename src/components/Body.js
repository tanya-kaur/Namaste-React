import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);

 useEffect(()=>{
    fetchData();
 }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING")

    // console.log(data);
   const json = await data.json();
    
    console.log(json);
    async function  checkData(jsonData) {
      //Optional chaining
      for(let i = 0; i < jsonData?.data?.cards?.length; i++) {
        let cData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(cData !== undefined){
          return cData;
        }
      }
    }
    const newData = await checkData(json);
      setResList(newData);
      setFilterRestaurant(newData);
  };
  //Conditional Rendering
  if(resList.length === 0){
    return <Shimmer />
  }
  return (
    <div className="body">
      <div className="filter-container">
        <input type="text" onChange={(e)=> {
          setSearchText(e.target.value);
        }} value={searchText} />
        <button className="search" onClick={()=> {
          const filterRestaurant =  resList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setFilterRestaurant(filterRestaurant);
        }}>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = resList.filter((res) => res.info.avgRating > 4.2);
            setResList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
