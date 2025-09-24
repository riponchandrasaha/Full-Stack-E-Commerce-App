import React from 'react'
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText, SubTitle } from './ui/text';
import Link from 'next/link';
export const quickLinksData = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
  { title: "Help", href: "/help" },
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
                                    <Link href={item?.href}>
                                        {item?.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer