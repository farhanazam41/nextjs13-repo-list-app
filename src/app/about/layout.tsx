import React, { ReactElement, ReactNode } from 'react'

interface AboutLayoutProps {
    children: ReactElement
}
const AboutLayout = ({children}:AboutLayoutProps) => {
  return (
    <div>
      <h1>THIS IS ABOUT LAYOUT</h1>
      {children}
    </div>
  )
}

export default AboutLayout
