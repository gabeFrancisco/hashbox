import React from 'react'

interface SectionTitleProps{
  title: string;
  subtitle?: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className='pb-2 mb-5 text-gray-700 border-b border-gray-400'>
      <h1 className='mx-2 text-3xl'>{props.title}</h1>
      <h2 className='mx-2 mt-1 text-sm'>{props.subtitle}</h2>
    </div>
  )
}

export default SectionTitle