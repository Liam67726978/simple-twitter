import axios from 'axios'

const userURL =
  'https://simple-twitter-ken-porject-11e706cdc2e3.herokuapp.com/api/user'

export async function checkPermission(token) {
  try {
    // 根據傳入的 token 驗證取得回傳資料
    const { data } = await axios.get(userURL, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    // return 取得資料
    return { success: true, data }
  } catch (error) {
    console.error('Check Permission Failed:', error.response.data.message)
    return { success: false, error }
  }
}
