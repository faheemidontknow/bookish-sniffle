import axios from "axios";

 export const apiServices = async (method, data, url) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: { "x-api-key": "bafutostudents" },
      baseURL:"https://simplecart-irao.onrender.com"
    });
    return await response.data

  } catch (error) {
    console.log(error);
    
  }
};
