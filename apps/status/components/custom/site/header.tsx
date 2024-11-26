"use client";
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-3">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Image
          src="/images/plura-logo.jpg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="hidden font-bold text-lg lg:inline-block">
          Plura Ai
        </span>
        <Badge className='hidden md:block'>Beta</Badge>
      </Link>

      <Button size={"sm"} variant={"secondary"} className="ml-4">
              Get Updates
            </Button>
      </div>
    </header>
  )
}
