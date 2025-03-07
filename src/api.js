export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

export const getProductCatageries = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

export const getProductByCategory = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

export const getProductForMeUsingCategory = async (category) => {
  console.log(`I received category ${category}`);
  let url = `https://fakestoreapi.com/products/category/${category}`
  console.log("I created URL For fetching products")
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    console.log("Got new Products, thank you server");
    return data;
  }
};

export const getProductById = async (id) => {
  console.log(`I received category ${id}`);
  let url = `https://fakestoreapi.com/products/${id}`
  console.log("I created URL For fetching products")
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    console.log("Got new Products, thank you server");
    return data;
  }
};



// getProducts();


// TODO: Create new api for fetching users list from
//  url - https://jsonplaceholder.typicode.com/users
// Create new component called UsersList and display the names