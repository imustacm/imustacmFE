import { storage } from '@/config'

/**
 * @description 获取freshTime
 */
export function getFreshTime() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem('freshTime')
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem('freshTime')
    } else {
      return localStorage.getItem('freshTime')
    }
  } else {
    return localStorage.getItem('freshTime')
  }
}

/**
 * @description 存储freshTime
 * @param freshTime
 */
export function setFreshTime(freshTime) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem('freshTime', freshTime)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem('freshTime', freshTime)
    } else {
      return localStorage.setItem('freshTime', freshTime)
    }
  } else {
    return localStorage.setItem('freshTime', freshTime)
  }
}
