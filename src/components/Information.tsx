import React from 'react'

interface InformationProps{
  title: string
  text: string
}

const Information = (props: InformationProps) => {
  return (
    <div className='my-5 py-2 px-3 border border-gray-200 shadow-lg rounded-lg'>
      <div className='pt-1 border-b border-gray-200'>
        <h3 className='text-xl'>{props.title}</h3>
      </div>
    </div>
  )
}

export default Information