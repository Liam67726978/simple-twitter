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

export const getLikes = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/likes`)
    return res.data
  } catch (error) {
    console.error('[Get User Likes failed]: ', error)
  }
}

export const createLike = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/like`)
    return res.data
  } catch (error) {
    console.error('[Create Like failed]: ', error)
  }
}

export const createUnLike = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/unlike`)
    return res.data
  } catch (error) {
    console.error('[Create UnLike failed]: ', error)
  }
}
