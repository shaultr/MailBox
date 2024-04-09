import axios from "axios"

export const axiosReq = async ({ method = 'POST', body, url }) => {
  try {
    console.log('api req \n', { url, method, body })
    const { data: result } = await axios({
      baseURL: 'http://localhost:8000/',
      method,
      data: body,
      url,
      headers: {
        Authorization: localStorage.token || "",
      },
    })
    return result
  } catch (error) {
    console.log('api error \n', { error })
    throw { msg: error.success === false ? error.message : 'something went wrong' }
  }
}