import axios from "axios"
axios.defaults.baseURL = 'https://restcountries.com/v3.1'

// fetchRequest
export const fetchRequest = (route) => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(route)
    if (response.status === 200) {
      resolve(response.data)
    } else {
      reject(null)
    }
  } catch (e) {
    reject(null)
  }
}) // promise end
