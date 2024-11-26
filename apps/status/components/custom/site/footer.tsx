import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="flex flex-col items-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; 2024 Plura Ai. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
