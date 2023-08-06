import BCryptForm from '@/components/BCryptForm'
import Information from '@/components/Information'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import data from '../data/data'

const page = () => {
  return (
    <div>
      <SectionTitle title='BCrypt' subtitle='Generate BCrypt passwords in this section'/>
      <Information title={data[3].title} text={data[3].text}/>
      <BCryptForm/>
    </div>
  )
}

export default page