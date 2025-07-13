import React, { useContext } from "react";
import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggyApi } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const RestaurantCardPromoted = promotedRestaurantCard(RestaurantCard)

  const {loggedUser, setUserName} = useContext(UserContext);

 useEffect(()=>{
    fetchData();
 }, [])

  const fetchData = async () => {
    const data = await fetch(swiggyApi)

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
// console.log(resList);
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) 
  return (
    <h1>Looks like you're offline. Please check your internet connection.</h1>
    );

  //Conditional Rendering
  if(resList.length === 0){
    return <Shimmer />
  }
  
  return (
    <div className="body">
      <div className="flex m-6">
      <div className="flex px-4 justify-between mr-3">
        <input className="px-3 mr-6 border border-solid border-black focus:outline-none focus:border-blue-600" type="text" onChange={(e)=> {
          setSearchText(e.target.value);
        }} value={searchText} />
        
        <button className="px-4 bg-green-200 rounded-lg py-1" onClick={()=> {
          const filterRestaurant =  resList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setFilterRestaurant(filterRestaurant);
        }}>Search</button>
        </div>
        <button
          className="bg-pink-200 px-3 rounded-lg"
          onClick={() => {
            const filterList = resList.filter((res) => res.info.avgRating > 4.2);
            setFilterRestaurant(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
        <label className="mx-2">UserName : </label>
        <input className="w-40 p-2 border border-black" value={loggedUser} onChange={(e)=> {setUserName(e.target.value)}}/>
        </div>
      
      <div className="flex flex-wrap">
        {filterRestaurant.map((restaurant) => (
          <Link  key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
           { restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant} />) :
            (<RestaurantCard resData={restaurant}/>)}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
