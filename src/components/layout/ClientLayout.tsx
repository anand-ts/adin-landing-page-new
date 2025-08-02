'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import PageTransition from './PageTransition'

interface ClientLayoutProps {
  children: ReactNode
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={true}>
      <PageTransition key={pathname}>
        {children}
      </PageTransition>
    </AnimatePresence>
  )
}

export default ClientLayout
