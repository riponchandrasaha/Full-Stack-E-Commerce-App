import { productType } from '@/constants/Data'
import Link from 'next/link'
import React from 'react'



interface Props {
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  
    return (
        <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-1.5 text-sm font-semibold'>

                {productType?.map((item) => {
                    const isActive = selectedTab === item?.title;
                    const activeClass = isActive ? "bg-green-500 text-white border-green-800" : "bg-green-500/20";
                    const baseClasses = 'border border-green-500/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-green-500 hover:border-green-800 hover:text-white transition-colors duration-200 ease-in-out';

                    return (
                        <button
                            key={item?.title}
                            className={`${baseClasses} ${activeClass}`}
                            onClick={() => onTabSelect(item?.title)}
                        >
                            {item?.title}
                        </button>
                    )
                })}
            </div>


            <Link
                className='border border-green-500/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-green-500 hover:border-green-800 hover:text-white transition-colors duration-200 ease-in-out'
                href={"/shop"}
            >
                see all
            </Link>
        </div>
    )
}

export default HomeTabBar