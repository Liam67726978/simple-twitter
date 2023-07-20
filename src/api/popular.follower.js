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

export const getPopularFollowers = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/followships?top=10`)
    return res.data
  } catch (error) {
    console.error('[Get Popular Followers failed]: ', error)
  }
}
