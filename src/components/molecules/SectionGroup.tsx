import React from 'react'
import SectionDivider from '../atoms/SectionDivider'
import CardGroup from '../atoms/CardGroup'

const SectionGroup = () => {
  return (
    <div>
      <SectionDivider section={'menús para grupos'} />
      <CardGroup />
    </div>
  )
}

export default SectionGroup