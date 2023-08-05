import Base64Form from '@/components/Base64Form'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <SectionTitle title='Base64 Converter' subtitle='Here you can convert a string to a Base64 encode!'/> 
      <Base64Form/>
    </div>
  )
}

export default page