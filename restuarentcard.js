const RestuarentCard = (props) => {
  const { restuarent } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    restuarent.info;
  const { deliveryTime } = restuarent.info.sla;

  return (
    <div className="flex w-52  h-16">
      <div className="p-2 m-2 bg-gray-200 border border-black rounded-xl w-[400px]">
        <img
          className="rounded-xl w-full h-40 object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4 className="bg-green-100 w-10">⭐{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>🛵: {deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export const PromotedLabel = (props) => {
  return (
    <div>
      Label
      <RestuarentCard {...props} />
    </div>
  );
};

export default RestuarentCard;
