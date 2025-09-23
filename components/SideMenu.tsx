import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerData } from '@/constants/Data';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)
    return (
        <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
            <div ref={sidebarRef} className='min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-green-900 flex flex-col gap-6'>
                <div className='flex items-center justify-between gap-5'>
                    <Logo className='text-white'
                        spanDesign="group-hover:text-green-500" />
                    <button
                        onClick={onClose}
                        className=' hover:text-green-400 hoverEffect'><X />
                    </button>
                </div>
                <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>

                    {headerData?.map((item) => (
                        <Link href={item?.href} key={item?.title}
                            className={`hover:text-green-500 hoverEffect ${pathname === item?.href && "text-green-500"}`}>
                            {item?.title}
                        </Link>
                    ))}
                </div>
                <SocialMedia />
            </div>
        </div>
    )
};

export default SideMenu