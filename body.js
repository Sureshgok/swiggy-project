import { useState, useEffect } from "react";
import RestuarentCard, { PromotedLabel } from "/restuarentcard";
import { resList } from "./mockdata";
import Shimmers from "./components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
const Body = () => {
  const [ListofRestuarent, setListofRestuarent] = useState([]);
  const [filterResutaurents, setFilterResutaurents] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const RestaurantPromoted = PromotedLabel(RestuarentCard);

  // console.log("hi");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4879651&lng=78.3822011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );
    const json = await data.json();
    console.log(json);

    setListofRestuarent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterResutaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(ListofRestuarent);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    console.log("suresh");
    return <h1>Please Check Your Internet Connection</h1>;
  } else
    return ListofRestuarent.length === 0 ? (
      <Shimmers />
    ) : (
      <div className="body  bg-cyan-100 border ">
        <div className="filter flex p-1 b-1 px-2 ">
          <div className="p-2 m-2">
            <div className="flex space-x-1">
              <input
                type="text"
                placeholder=" search --here--"
                className="border border-solid border-black text-center px-1 rounded-xl  "
                value={searchtext}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.gH3ysHaIMftXeO3_Vv4m1wHaHa&pid=Api&P=0&h=180"
                alt="search"
                className="w-[40px]  cursor-pointer h-8 rounded-xl"
                onClick={() => {
                  const filterResutaurents = ListofRestuarent.filter((res) =>
                    res?.info?.name
                      .toLowerCase()
                      .includes(searchtext.toLowerCase())
                  );

                  setFilterResutaurents(filterResutaurents);
                  // console.log(filterResutaurents);
                }}
              />
            </div>
          </div>
          <button
            className="filter bg-gray-400 px-8 py-0.1 rounded-lg  h-[30px] mt-4"
            onClick={() => {
              const filteredList = ListofRestuarent.filter(
                (res) => res?.info?.avgRating > 3.8
              );

              setFilterResutaurents(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className=" m-5 p-4 rounded-xl  flex-wrap grid grid-flow-row-dense grid-cols-5 grid-rows-4 ... ">
          {filterResutaurents.map((restuarent) => (
            <Link to={"/" + restuarent.info.id} key={restuarent.info.id}>
              {
                /* {/* if restaurants are promoted */
                restuarent.info.promoted ? (
                  <RestaurantPromoted
                    restuarent={restuarent}
                    key={restuarent.info.id}
                  />
                ) : (
                  <RestuarentCard
                    restuarent={restuarent}
                    key={restuarent.info.id}
                  />
                )
              }
            </Link>
          ))}
        </div>{" "}
      </div>
    );
};

export default Body;
