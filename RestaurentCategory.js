import { useState } from "react";
import CategoryLists from "./CategoryList";

const RestaurantCategory = ({ data, setShowIndex, showList }) => {
  // const [showList, setShowlist] = useState(false);
  //   console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-5 bg-gray-200 shadow-lg  b-2">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold">
          {data.title}({data.itemCards?.length})
        </span>
        <span className="w-10">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACmpqazs7P29vZ/f3/8/Pz5+fmpqakhISF9fX2MjIyurq7w8PC1tbUZGRlqampxcXFvb287Ozvk5OQyMjKTk5MtLS0MDAwUFBTc3NweHh6GhoYRERGcnJxBQUHQ0NDDw8NNTU2h38TsAAAC40lEQVR4nO3bbVPiMBSGYUPBCpb6QkHQBdT//yO3Ou62aU5LGoJJmPv67plzJiFPm443NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDkbmvplbbvoTqslDoeqgvUriZHpdabKuiQ0+xFfXspvdf++Ck9L6bea1vLi7n6Z+K5dvm/8sMk91zb3utKNe68li62TeX1u9fSI+Sb1oBq53MVW5ujdh9qny6P7Tbq3eStcqYNqI6XOMhsVFul87VRy07h7aunwmNVquvOy8meGXVDTbhcXWTE0qi6CrVLp/dGLx5Cw1xBNVt66NbJ+9zs5tzfojDg24eXbl3kB7Od/XmrWLyZJYOFRW36x+znrNAohF2xCDhg/eS9MDvaum/UcmeWewz9ejEze1ITx6aE36B68tuuC2EVHUPDjIl6BX2360JaRZeNKq3gIvQW/ZYLsegworSCs6CHTENK/tHRXzwIAwZL+i4PoSHGRDQDyqGxG7NRS2EFH8O92kvE0LD+60hjQieeqJYnYbQxoRNz0eovk1jBWi4cN1YbNeaY0DmGRiE8i8YTEzppxJM3cLHHhC4XjpsTI2bC++BTlFv0h3TcDI0oHTLPv9atk3GhIR0ykQ84LjRSiQndrX1oSCsY9srCjhga0ipm3StzFW9M6CxDQ4qJNAa0fJnKhAGjjgnd6eOm+/HlS4QP2/1OhUaCOdg1fAOXZA52DYWGeKsW1xu9hYHQkAZM5RRtk0bcfq2i9PElxQF7QyO+jy/upBu4+acwYPCPL+6k0DDF/7A9QAoNYwVDN3me06sYx8cXd+Jnm7Y4b9XGEHOxNWCSMaGTQqPZolcwYL1R+4+b5+Qe1Xr0HTfJPWz3k0dMPCZ00kZNOugNwg1c+jGhM0LjGmJC1xnxOmJCp322SehWbYxmxCuKCd1hta/H2683oRu5nOowW8wu8i9EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBf8RcpKRd8sANLvQAAAABJRU5ErkJggg==" />
        </span>
      </div>
      {showList && <CategoryLists eachcategory={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
