import FooterServer from '@/blocks/global/Footer/Server'
import HeaderServer from '@/blocks/global/Header/Server'
import React, { ReactNode } from 'react'
import { Livvic } from 'next/font/google'

const livvic = Livvic({  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',}) 

export default function layout({children}: {children: ReactNode}) {
  return (
    <div className={livvic.className}>
        <HeaderServer />
        {children}
        <FooterServer />
    </div>
  )
}
