import React from 'react'
import { SectionHeader, SectionHeaderDescription, SectionHeaderHeading } from '../text-wrappers'

export default function AgentsSec() {
  return (
    <div className="relative flex-col items-center justify-center mt-40">
      <div className="absolute inset-0 mx-auto h-full w-full bg-[linear-gradient(to_bottom,rgba(18,20,22,1),rgba(18,20,22,0.8),rgba(18,20,22,0))]" />
      <div className="px-8 md:px-12">
      <SectionHeader>
        <SectionHeaderHeading>
        Made for modern product teams
        </SectionHeaderHeading>
        <SectionHeaderDescription>
        Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft. 
        </SectionHeaderDescription>
      </SectionHeader>
      </div>
    </div>
  )
}
