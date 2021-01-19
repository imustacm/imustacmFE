import request from '@/utils/request'
import { problemServiceUrl } from '@/config'

export function getList(data) {
  return request({
    url: problemServiceUrl + '/problem/listProblems',
    method: 'get',
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
