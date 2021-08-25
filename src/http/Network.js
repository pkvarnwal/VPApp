import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.dev.veepaywallet.com/api/v1/',
    timeout: 1000
  });

// export const postRequest =  async (url, requestObject) => {
//   let responseObject = ""
//     try {
//        const response = await instance.post(url, requestObject)
//        responseObject = response.data
//        console.log("Success")
//     } catch( err) {
//        console.log("Error")
//        responseObject = err.response
//     }
  
//     console.log(responseObject)
//     return responseObject;
// }