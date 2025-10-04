"use client";
import { Product } from '@/sanity.types';
import React from 'react';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
    product: Product;
    className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
    const isOutOfStock = product?.stock === 0;
    const handleAddToCart = () => {
        window.alert("Added to cart");
    };

    return (
        <div>
            <Button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={cn(
                    "w-full bg-green-500/50 border text-white  border-green-100 font-semibold tracking-wide hover:bg-green-500 ",
                    className
                )}>
                <ShoppingBag />{isOutOfStock ? "out of stock" : "add to cart"}
            </Button>
        </div>
    );
};

export default AddToCartButton;