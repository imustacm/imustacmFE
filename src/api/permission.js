import request from '@/utils/request'
import { userServiceUrl } from '@/config'

export function getList(data) {
  return request({
    url: userServiceUrl + '/permission/list',
    method: 'post',
    data,
  })
}

export function doEdit(data) {
  return request({
    url: '/table/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/table/doDelete',
    method: 'post',
    data,
  })
}
