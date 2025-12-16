import { apiServices } from "../api-services";

export default async function getItems() {
  let guestId = localStorage.getItem("guestId");
  if (!guestId) {
    const randomValue = crypto.randomUUID;
    localStorage.setItem("guestId", randomValue);
    guestId = randomValue;
  }

  try {
    const response = await apiServices("GET", undefined, `/cart/${guestId}`);
    return response;
  } catch (error) {
    console.log(error);
    
  }
}
