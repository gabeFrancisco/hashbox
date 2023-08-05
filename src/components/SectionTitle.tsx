import React from 'react'

interface SectionTitleProps{
  title: string;
  subtitle?: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className='mb-10 border-b-2 border-dashed border-gray-400 pb-2 text-gray-700'>
      <h1 className='text-3xl mx-2'>{props.title}</h1>
      <h3 className='text-sm mx-2 mt-1'>{props.subtitle}</h3>
    </div>
  )
}

export default SectionTitle