import React from 'react'

interface Props {
  title: string
  rightContent?: React.ReactNode | null
}
const PageTitle: React.FC<Props> = ({ title, rightContent }) => {
  return (
    <div className="flex justify-between items-center my-3">
      <h1 className="border-l-4 border-red-400 px-3 py-1.5 text-xl mb-0">{title}</h1>
      {rightContent}
    </div>
  )
}
export default PageTitle
