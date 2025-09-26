import React from 'react'
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText, SubTitle } from './ui/text';
import Link from 'next/link';
import { Subtitles } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
export const quickLinksData = [
    { title: "About us", href: "/about" },
    { title: "Contact us", href: "/contact" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "FAQs", href: "/faqs" },
    { title: "Help", href: "/help" },
];
export const categoriesData = [
    { title: "Mobiles", href: "mobiles" },
    { title: "Appliances", href: "appliances" },
    { title: "Smartphones", href: "smartphones" },
    { title: "Air Conditioners", href: "air-conditioners" },
    { title: "Washing Machine", href: "washing-machine" },
    { title: "Kitchen Appliances", href: "kitchen-appliances" },
    { title: "gadget accessories", href: "gadget-accessories" },
];
const Footer = () => {
    return (
        <footer className=' bg-white border-t '>
            <Container>
                <FooterTop />
                <div className=' py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='space-y-4'>
                        <Logo />
                        <SubText >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus.</SubText>
                        <SocialMedia className="text-black/60"
                            iconClassName='border-darkColor/60  '
                            tooltipClassName=' text-white'
                        />
                    </div>
                    <div>
                        <SubTitle>
                            Quick Link
                        </SubTitle>
                        <ul className='space-y-3 mt-4'>
                            {quickLinksData?.map((item) => (
                                <li key={item?.title}>
                                    <Link href={`/category/${item?.href}`} className='hover:text-green-700 font-medium'>
                                        {item?.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div>
                            <SubTitle>
                                Quick Link
                            </SubTitle>
                            <ul className='space-y-3 mt-4'>
                                {categoriesData?.map((item) => (
                                    <li key={item?.title}>
                                        <Link href={`/category/${item?.href}`}
                                            className='hover:text-green-700 font-medium'>
                                            {item?.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className='space-y-4'>


                        <SubTitle>News Letter </SubTitle>
                        <SubText> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi?</SubText>
                        <form className=' space-y-4'>
                            <Input placeholder='Enter your Email' type="email" required/>
                            <Button className=' w-full'>Subcribe</Button>
                        </form>
                    </div>
                </div>

                <div className=' py-6 border-t text-center text-sm text-gray-600'>
                    <div>
                       @ {new Date().getFullYear()} <Logo/>. all right reserve
                    </div>
                    
                </div>
            </Container>
        </footer>
    );
};

export default Footer