import { UseDispatch, useDispatch } from "react-redux";
import { addItems } from "../../cartslice";
const CategoryLists = ({ eachcategory }) => {
  console.log(eachcategory);
  const dispatch = useDispatch();
  const handleItemAdd = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {eachcategory?.map((list) => {
        return (
          <div
            key={list?.card?.info?.id}
            className=" border-gray-500 border-b-24  py-4 text-left flex justify-between m-4"
          >
            <div className="w-9/12 ">
              <span className=" font-semibold ">{list?.card?.info?.name}</span>
              <div>
                <span className=" font-semibold flex flex-wrap ">
                  <img
                    src="https://im.indiatimes.in/content/2020/Jul/indian-currency-389006_1920_5f1547587ee6e.jpg?w=640&h=480&cc=1"
                    className="w-6 bg-gray-400 "
                  />
                  {list?.card?.info?.price
                    ? list?.card?.info?.price / 100
                    : list?.card?.info?.defaultPrice / 100}
                </span>
                <span className=" font-extralight py-4">
                  ⭐:
                  {list.card.info.ratings.aggregatedRating.rating
                    ? list.card.info.ratings.aggregatedRating.rating
                    : 3.8}
                </span>
              </div>
              <p className=" font-light p-1 m-2">
                {list?.card?.info?.description}
              </p>
            </div>

            <div className=" w-3/12 ">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${list?.card?.info?.imageId}`}
              />
              <button
                className=" p-1 mx-0 my-1 w-[183px]  shadow-xl bg-slate-800 text-white"
                onClick={() => handleItemAdd(list)}
              >
                ADD+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CategoryLists;
