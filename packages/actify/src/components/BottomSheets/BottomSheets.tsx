'use client'
import React from 'react'
import { Content } from './Content'
import { Activator } from './Activator'
import { BottomSheetsProvider, BottomSheetsProviderProps } from './Context'

const BottomSheets: React.FC<BottomSheetsProviderProps> = (props) => {
  const { children, ...rest } = props
  return <BottomSheetsProvider {...rest}>{children}</BottomSheetsProvider>
}

BottomSheets.displayName = 'Actify.BottomSheets'

export default Object.assign(BottomSheets, {
  Activator,
  Content
})
