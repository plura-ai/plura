
import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'

interface CommunityCardProps {
    heading: string,
    subHeading: string,
    buttonText: string
}

function CommunityCard({
    heading,
    subHeading,
    buttonText

}: CommunityCardProps) {
  return (
    <div className='flex flex-col border items-center p-9 space-y-2 bg-gradient-to-tr from-zinc-950 to-black/80 px-10'>
        {
            heading.toLowerCase() === "discord" ? <Icons.discord className=' h-10 w-10'/>:
            heading.toLowerCase() === "twitter" ? <Icons.twitter className=' h-10 w-10 fill-current'/> : null
        }

        <h1 
        className='text-2xl md:text-4xl font-semibold tracking-tighter drop-shadow-sm max-w-3xl select-none'>
            {heading}
        </h1>

        <p 
        className='text-start text-sm/2 text-muted-foreground max-w-lg font-medium mt-auto z-50 select-none'>
            {subHeading}
        </p>

        <Link 
        href = {
            heading.toLowerCase() === "discord" ? siteConfig.links.discord:
            heading.toLowerCase() === "twitter" ? siteConfig.links.x : "/"
        }
        className='border font-medium p-2 px-4 hover:cursor-pointer hover:bg-black'>
            {buttonText}
        </Link>
    </div>
  )
}

export default CommunityCard