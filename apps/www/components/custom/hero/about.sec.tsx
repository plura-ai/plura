import React from 'react'
import { SectionActions, SectionHeader, SectionHeaderDescription, SectionHeaderHeading } from '../text-wrappers'
import { TiltSpotlight } from './about.card'

export default function AboutSection() {
  return (
    <div className="relative flex-col items-center justify-center">
        <div className="absolute inset-0 mx-auto h-full w-full bg-[radial-gradient(circle,rgba(211,211,211,0.1),rgba(18,20,22,0.05),rgba(18,20,22,0))] opacity-60" />
        <div className="px-8 md:px-12">
      <SectionHeader>
        <SectionHeaderHeading>
        Made for modern product teams
        </SectionHeaderHeading>
        <SectionHeaderDescription>
        Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft. 
        </SectionHeaderDescription>
      </SectionHeader>

      <SectionActions className='flex md:flex-row flex-col'>
        <TiltSpotlight/>
        <TiltSpotlight/>
        <TiltSpotlight/>
</SectionActions>
</div>

    </div>
  )
}
