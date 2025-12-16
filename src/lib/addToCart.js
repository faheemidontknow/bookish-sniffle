import { apiServices } from "../api-services";

const addToCart = (name, price) => {
  let guestId = localStorage.getItem("guestId");
  if (!guestId) {
    const randomValue = crypto.randomUUID();
    localStorage.setItem("guestId", randomValue);
    guestId = randomValue;
  }

  apiServices("POST", { guestId, product: { name, price } }, "/cart/add");
};

export default addToCart;
