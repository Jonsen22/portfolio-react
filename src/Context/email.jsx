import axios from 'axios';


// const API_URL = "https://localhost:7297/";

export async function postEmail(name, email, message) {
  try {
    const API_URL = process.env.EMAIL_URL;
    console.log(API_URL)
    const response = await axios.post(API_URL+"api/Email", { name, email, message });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Server not responding')
    return('Server not responding')
  }
}
