import { DEFAULT_ERROR } from '@root/src/errors/statuses'

export class BaseError extends Error {
  status: number = DEFAULT_ERROR
  data: any
  url: any
  constructor(message: string, data: any, url: string, status: number) {
    super(message)
    this.data = data
    this.url = url
    this.status = status
    Object.setPrototypeOf(this, BaseError.prototype)
  }
}
