

import CommunityCard from '@/components/custom/community-card'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/custom/text-wrappers'
import BlurFade from '@/components/ui/blur-fade'
import React from 'react'

function Community() {
  return (
    <section className='flex flex-col justify-center mb-12 min-h-[80vh]'>

        <PageHeader className='md:items-center'>
            <BlurFade delay={0.2}>
                <PageHeaderHeading className='flex item-center border-red-600 w-full'>
                    Community
                </PageHeaderHeading>
            </BlurFade>
            <BlurFade delay={0.2 * 2}>
                <PageHeaderDescription className='text-center'>
                Join the community to get help, share ideas, and stay up-to-date.
                </PageHeaderDescription>

            </BlurFade>
        </PageHeader>
        <BlurFade delay={0.2 * 4}>

            <div className='grid grid-cols-2 gap-3 '>
                <CommunityCard 
                heading='Discord'
                subHeading='Chat in real-time, collaborate, and connect with other members.'
                buttonText='Join our Discord'
                />

                <CommunityCard 
                heading='Twitter'
                subHeading='Get the latest updates on plura.'
                buttonText='Follow us on Twitter'
                />

            </div>
            
        </BlurFade>

    </section>
  )
}

export default Community