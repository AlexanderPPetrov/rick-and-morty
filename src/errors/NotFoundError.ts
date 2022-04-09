import { NOT_FOUND } from '@root/src/errors/statuses'
import { BaseError } from '@root/src/errors/BaseError'

export class NotFoundError extends BaseError {
  constructor(message: string, data: any, url: string) {
    super(message, data, url, NOT_FOUND)
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
}
