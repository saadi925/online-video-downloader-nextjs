'use client'
import React from 'react'
import Header from './Header'
import { Sidebar } from './Sidebar'
import { useHeaderStore } from '@/context/HeaderContext'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const { state, toggleSidebar, closeSidebar } = useHeaderStore()
  return (
    <>
     
      <Header
        isSidebar={state.isSidebar}
        toggleSidebar={toggleSidebar} />
     
  
      {children}
    </>
  )
}
