import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurentCategory";
import { title } from "process";

const RestaurentMenu = () => {
  // console.log("menu comp");
  const [resMenu, setResMenu] = useState([]);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4860808&lng=78.3963095&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const menu = await data.json();
    console.log(menu);

    setResMenu(menu?.data);
    console.log(resMenu);
  };
  if (resMenu === null) return <Shimmer />;
  if (resMenu?.cards?.[0]?.card?.card?.info) {
    var { name, costForTwo, cloudinaryImageId, price, imageId } =
      resMenu?.cards?.[0]?.card?.card?.info;
  }

  // const { name } = resMenu?.cards?.[0].card?.card?.info;
  // console.log(resMenu);
  // const { itemCards } =
  //   resMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
  //     .card;
  // console.log(resMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  const CategoryList =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(CategoryList);

  return (
    <div className=" font-bold text-center my-5 text-xl">
      <h1>{name}</h1>
      <h3>{}</h3>
      <span className="b-4 m-4 w-4 h-6 border-spacing-y-56 "> </span>

      {CategoryList?.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.id}
          data={category.card.card}
          showList={index === showIndex ? true : false}
          setShowIndex={() => {
            if (index != showIndex) {
              setShowIndex(index);
            } else {
              setShowIndex(null);
            }
          }}
        />
      ))}
    </div>
  );
};
export default RestaurentMenu;
