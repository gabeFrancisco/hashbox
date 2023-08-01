import GuidForm from '@/components/GuidForm'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <SectionTitle title='GUIDs' subtitle='Generate Global Unique Identifier(GUID) in this section!'/>
      <GuidForm/>
    </div>
  )
}

export default page