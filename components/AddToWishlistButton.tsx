import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types';
import { Heart } from 'lucide-react';
import React from 'react'

const AddToWishlistButton = ({
    product,
    className,
}: {
    product: Product;
    className?: string;
}) => {
    return <div className={cn("absolute top-2 right-2 z-10", className)}>
        <button className='p-2.5 rounded-full hover:bg-green-500 hover:text-white'>
            <Heart size={16} />
        </button>
    </div>;

};

export default AddToWishlistButton;