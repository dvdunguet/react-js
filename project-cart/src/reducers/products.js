const initialState = [
  {
    id: 1,
    name: "iphone 7",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-32gb-den-400x460.png",
    description: "Sản phẩm do apple sx",
    price: 500,
    inventory: 10,
    rating: 3
  },
  {
    id: 2,
    name: "iphone X",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png",
    description: "Sản phẩm do apple sx",
    price: 700,
    inventory: 15,
    rating: 4
  },
  {
    id: 3,
    name: "iphone Xs Max",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-400x460.png",
    description: "Sản phẩm do apple sx",
    price: 1100,
    inventory: 30,
    rating: 5
  },
  {
    id: 4,
    name: "Samsung Galaxy S9",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/147939/samsung-galaxy-s9-plus-black-400x460.png",
    description: "Sản phẩm do samsung sx",
    price: 800,
    inventory: 60,
    rating: 2
  },
  {
    id: 5,
    name: "Samsung Galaxy Note 9",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-400x460-400x460.png",
    description: "Sản phẩm do samsung sx",
    price: 1000,
    inventory: 100,
    rating: 1
  }
];

const products = (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    //   return { ...state, ...payload };

    default:
      return state;
  }
};

export default products;
