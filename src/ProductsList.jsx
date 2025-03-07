// import { useEffect, useLayoutEffect, useState } from "react";
// import { getProducts,getProductCatageries,getProductByCategory,getProductForMeUsingCategory  } from "./api";
// import { ProductCard } from "./ProductCard/ProductCard";
// import { Input } from "./components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// const ProductsList = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [categories, setProductCategory] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState([]);

//   const fetchProductsData = async () => {
//     const data = await getProducts();
//     setProducts(data);
//   };

//   const fetchCategoryData = async () => {
//     const data = await getProductCatageries();
//     setProductCategory(data);
//   };
//   // const fetchProductByCategory = async (Category) => {
//   //   const data = await getProductByCategory(Category);
//   //   setProducts(data);
//   // };

//   const CategoryUpdateTrigger = async () => {
//     console.log(`Inside Trigger; Category Changed to ${selectedCategory}`)
//     const recivedData = await getProductForMeUsingCategory(selectedCategory);
//     console.log("Received Data",recivedData);
//     setProducts(recivedData);
//     }
//     useEffect(() => {
//       console.log("INSIDE USE EFFECT");
//         CategoryUpdateTrigger();
//     }, [selectedCategory]);

//   useEffect(() => {
//     fetchCategoryData();
//     fetchProductsData();
//   }, []); //Component Did Mount

//   // useEffect(() => {
//   //   if(selectedCategory) {
//   //     fetchProductByCategory(selectedCategory)
//   //   }

//   // }, [selectedCategory])
//   useEffect (() => {
//     console.log(`Category Changed to ${selectedCategory}`);
//   },[selectedCategory])

//   console.log(search);
//   console.log(categories);
//   console.log(selectedCategory);
//   console.log(categories);

//   const filteredProducts = products.filter((product) => {
//     return product.title.includes(search);
//   });

//   return (
//     <>
//       <Input
//         autoFocus
//         className="my-2 mx-auto w-1/2 h-10"
//         placeholder="Search Products"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />

// <Select onValueChange={(SelectedVal) => {
//   setSelectedCategory(SelectedVal)
// }}>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a items" />
//         <SelectContent>
//           {
//             categories.map((Category) => {
//               return <SelectItem key={Category} value={Category}>{Category}</SelectItem>
//             })
//           }
//         </SelectContent>
//       </SelectTrigger>
//       </Select>

//       <div className="grid grid-cols-5 gap-4 p-2">
//         {filteredProducts.map((product) => {
//           return (
//             <ProductCard
//               key={product.id}
//               imageUrl={product.image}
//               price={product.price}
//               title={product.title}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ProductsList;



import { useEffect, useState } from "react";
import { getProducts, getProductCatageries, getProductForMeUsingCategory } from "./api";
import { ProductCard } from "./ProductCard/ProductCard";
import { Input } from "./components/ui/input";
import { ShoppingCart, User, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setProductCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityName(latitude, longitude);
        },
        (error) => {
          setLocation("Location not available");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  const fetchCityName = async (lat, lon) => {
    try {
      const apiKey = "YOUR_REAL_OPENCAGE_API_KEY";
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=${apiKey}`
      );
      const data = await response.json();
      const city =
        data.results[0]?.components?.city ||
        data.results[0]?.components?.town ||
        data.results[0]?.components?.village ||
        data.results[0]?.components?.state ||
        "Unknown City";

      setLocation(city);
    } catch (error) {
      setLocation("City not found");
    }
  };

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProductsData();
  }, []);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const data = await getProductCatageries();
      setProductCategory(data);
    };
    fetchCategoryData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchProductsByCategory = async () => {
        const receivedData = await getProductForMeUsingCategory(selectedCategory);
        setProducts(receivedData);
      };
      fetchProductsByCategory();
    }
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmbfXaN25UrQQUqMeowT18BHvbKLt6tvT_g&s" 
          alt="Logo" 
          className="w-24 h-12 object-contain" 
        />
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span>{location}</span>
        </div>
        <Input
          className="w-1/2 h-10 px-4 border rounded-lg"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-4">
          <User className="w-6 h-6 text-gray-700 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Offers & Dropdown Section */}
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg text-center text-xl font-semibold">
        <p>Offers</p>
        <p>Dropdown Products</p>
      </div>

      {/* Categories Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Product Page</h2>
        <div className="grid grid-cols-4 gap-4 mt-2">
          {categories.map((category) => (
            <div
              key={category}
              className="p-4 border rounded-lg bg-white shadow-md text-center cursor-pointer hover:bg-gray-200"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-5 gap-4 p-2 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
