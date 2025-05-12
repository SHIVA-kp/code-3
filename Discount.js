const cartItems =  [
    { name: "Shoes", category: "Footwear", price: 4999, discount: 20 },
    { name: "T-shirt", category: "Apparel", price: 1999, discount: 35 },
    { name: "Bag", category: "Accessories", price: 2499, discount: 40 },
    { name: "Socks", category: "Apparel", price: 499, discount: 10 }
  ];
  
  const discountedItems = cartItems.map(item => ({
    name: item.name,
    discountPrice: item.price - (item.price * (item.discount/100))
  }));
  
  const filteredItems = discountedItems.filter(item => item.discountPrice < item.price && (item.price - item.discountPrice)/item.price >= 0.3);
  
  const totalDiscountedValue = filteredItems.reduce((total, item) => total + item.discountPrice, 0);
  
  const result = {
    filteredItems: filteredItems,
    totalDiscountedValue: totalDiscountedValue
  };
  
  console.log(result);