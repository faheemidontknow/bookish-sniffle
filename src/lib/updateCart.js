import React from "react";
import { apiServices } from "../api-services";

export default async function updateCart(name, quantity) {
  let guestId = localStorage.getItem("guestId");
  if (!guestId) {
    const randomValue = crypto.randomUUID;
    localStorage.setItem("guestId", randomValue);
    guestId = randomValue;
  }

  try {
    const response = await apiServices(
      "POST",
      { guestId, quantity, name },
      `/cart/update-quantity`
    );
    return response;
  } catch (error) {}
}
