import request from '@/utils/request'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, tokenName, userServiceUrl } from '@/config'

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
    url: userServiceUrl + '/user/getLoginInfo',
    method: 'post',
    data: {
      [tokenName]: accessToken,
    },
  })
}

export function logout() {
  return request({
    url: userServiceUrl + '/user/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: '/register',
    method: 'post',
  })
}
