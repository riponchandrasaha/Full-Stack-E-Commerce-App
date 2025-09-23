import { Facebook, Github, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
    className?: string;         // wrapper div
    iconClassName?: string;     // icon itself
    tooltipClassName?: string;  // tooltip content
}

const socialLink = [
    {
        title: "Youtube",
        href: "https://youtube.com",
        icon: Youtube,
    },
    {
        title: "Github",
        href: "https://github.com/riponchandrasaha",
        icon: Github,
    },
    {
        title: "Linkedin",
        href: "https://linkedin.com/in/riponchandrasaha",
        icon: Linkedin,
    },
    {
        title: "Facebook",
        href: "https://facebook.com",
        icon: Facebook,
    }
]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-4", className)}>
                {socialLink?.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Tooltip key={item?.title}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item?.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "p-2 border rounded-full transition-colors hover:bg-green-600 hover:text-white",
                                        iconClassName
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className={cn(tooltipClassName)}>
                                {item?.title}
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </div>
        </TooltipProvider>
    )
};

export default SocialMedia
