import axios from 'axios'

const baseUrl =
  'https://simple-twitter-ken-porject-11e706cdc2e3.herokuapp.com/api'

const axiosInstance = axios.create({
  baseUrl: baseUrl,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

export const getUserInfo = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}`)
    return res.data
  } catch (error) {
    console.error('[Get User Info failed]: ', error)
  }
}

export const getUserTweets = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/tweets`)
    return res.data
  } catch (error) {
    console.error('[Get User Tweets failed]: ', error)
  }
}

export const getUserReplies = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/replied_tweets`)
    return res.data
  } catch (error) {
    console.error('[Get User Replies failed]: ', error)
  }
}

export const getUserLikes = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/likes`)
    return res.data
  } catch (error) {
    console.error('[Get User Replies failed]: ', error)
  }
}
