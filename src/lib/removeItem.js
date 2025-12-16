import { apiServices } from "../api-services";


export default async function removeItem(name) {
   let guestId = localStorage.getItem("guestId");
   if (!guestId) {
     const randomValue = crypto.randomUUID;
     localStorage.setItem("guestId", randomValue);
     guestId = randomValue;
   }
 
   try {
     const response = await apiServices("POST", {guestId, name}, `/cart/remove`);
     return response;
   } catch (error) {
    console.log(error);
    
   }
}
