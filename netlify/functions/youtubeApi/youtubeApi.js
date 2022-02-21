// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require("axios");
const handler = async (event) => {
  try {
    const youtubeResource = event.queryStringParameters.youtubeResource || "search";
    const key = process.env.REACT_APP_GOOGLE_API_KEY;

    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/${youtubeResource}`, {
      params: {
        ...event.queryStringParameters,
        key
      }
    })

    // const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=${key}`)

    return {
      statusCode: response.status,
      statusText: response.statusText,
      headers: response.headers,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
