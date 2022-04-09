import React from 'react'

interface Props {
  title: string
}
const PageTitle: React.FC<Props> = ({ title }) => {
  return <h1 className="border-l-4 border-red-400 px-3 text-xl mb-0">{title}</h1>
}
export default PageTitle
