import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className,spanDesign}: {className?: string,spanDesign?:string}) => {
  return (
   <Link href={"/"}>
    <h2 className={cn("text-2xl text-green-950 font-black tracking-wider uppercase hover:text-green-400",className)}>
        Shopcar <span>t</span>
    </h2>
   </Link>
  )
}

export default Logo