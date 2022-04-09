import React from 'react'
import { NotFoundError } from '@root/src/errors/NotFoundError'
import { Alert } from 'antd'

interface Props {
  error: unknown
  message?: string
}

const PageError: React.FC<Props> = ({ error, message }) => {
  const errorMessage = message ?? (error as NotFoundError | Error).message

  if (error instanceof NotFoundError) {
    return (
      <Alert
        message={errorMessage}
        type="info"
        className="text-center !py-10 !bg-white !border-slate-300 opacity-70"
      />
    )
  }
  return (
    <Alert message={errorMessage} description="Could not load characters" type="error" showIcon />
  )
}
export default PageError
