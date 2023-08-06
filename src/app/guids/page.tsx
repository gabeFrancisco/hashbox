import GuidForm from '@/components/GuidForm'
import Information from '@/components/Information'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import data from '../data/data'

const page = () => {
  return (
    <div>
      <SectionTitle title='GUIDs' subtitle='Generate Global Unique Identifier(GUID) in this section!'/>
      <Information title={data[1].title} text={data[1].text}/>
      <GuidForm/>
    </div>
  )
}

export default page