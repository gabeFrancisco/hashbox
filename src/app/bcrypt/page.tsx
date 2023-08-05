import BCryptForm from '@/components/BCryptForm'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <SectionTitle title='BCrypt' subtitle='Generate BCrypt passwords in this section'/>
      <BCryptForm/>
    </div>
  )
}

export default page