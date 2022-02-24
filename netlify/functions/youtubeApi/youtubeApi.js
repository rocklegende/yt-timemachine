// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require("axios");

const makeYoutubeRequest = async (event, key) => {
  const youtubeResource = event.queryStringParameters.youtubeResource || "search";
  const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/${youtubeResource}`, {
    params: {
      ...event.queryStringParameters,
      key
    }
  })

  return {
    statusCode: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: JSON.stringify(response.data),
  }
}

const handler = async (event) => {
  const available_keys = [
      process.env.REACT_APP_GOOGLE_API_KEY,
      process.env.REACT_APP_GOOGLE_API_KEY_1,
      process.env.REACT_APP_GOOGLE_API_KEY_2,
      process.env.REACT_APP_GOOGLE_API_KEY_3,
      process.env.REACT_APP_GOOGLE_API_KEY_4
  ]
  for (let i = 0; i < available_keys.length; i++) {
    const randomNumber = Math.floor(Math.random() * available_keys.length);
    // console.log(`random number is ${randomNumber}`);
    const key = available_keys[i];
    try {
      const res = await makeYoutubeRequest(event, key);
      return res;
    } catch (error) {
      if (error.response) {
        console.log(`attempt ${i+1}, using key ${key}`);
        if (i === available_keys.length - 1) {
          console.log(`made ${i+1} attempts, returning error now`);
          return {statusCode: error.response.status, body: JSON.stringify({ error: 'Failed fetching data' })};
        }
      } else if (error.request) {
        return {statusCode: 500, body: "Request was made, but no response from server!"}
      } else {
        console.log('Error', error.message);
      }
    }
  }

}

module.exports = { handler }
