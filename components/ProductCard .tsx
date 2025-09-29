import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className='text-sm border-[1px] bg-green-100 border-blue-900 rounded-xl'>
            <div className='relative group overflow-hidden '>
                {product?.images && (
                    <Image
                        src={urlFor(product?.images[0]).url()}
                        alt="ProductImage"
                        loading="lazy"
                        width={700}
                        height={700}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductCard