import axios from 'axios';


// const API_URL = "https://localhost:7297/";
const API_URL = process.env.REACT_APP_EMAIL_URL;
export async function postEmail(name, email, message) {
  try {
    

    const response = await axios.post(API_URL+"api/Email", { name, email, message });

    return response;
  } catch (error) {
    console.log(error)
    if(error.message === "Network Error")
      return("Server not responding")
    
    return(error.response)
  }
}
