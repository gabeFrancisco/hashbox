import Base64Form from '@/components/Base64Form'
import Information from '@/components/Information'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import data from '../../data/data'

const page = () => {
  return (
    <div>
      <SectionTitle title='Base64 Converter' subtitle='Here you can convert a string to a Base64 encode!'/> 
      <Base64Form/>
      <Information title={data[2].title} text={data[2].text}/>
    </div>
  )
}

export default page