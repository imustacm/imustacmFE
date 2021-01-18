import request from '@/utils/request'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, tokenName, userServiceUrl } from '@/config'

export function getCaptcha() {
  return request({
    url: userServiceUrl + '/verification/get',
    method: 'get',
  })
}

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: userServiceUrl + '/user/login',
    method: 'post',
    data,
  })
}

export function getLoginInfo(accessToken) {
  return request({
    url: '/user/user/userInfo',
    method: 'post',
    data: {
      [tokenName]: accessToken,
    },
  })
}
