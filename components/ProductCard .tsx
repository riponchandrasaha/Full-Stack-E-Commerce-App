import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import { FlameIcon, StarIcon, StarsIcon } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import AddToWishlistButton from './AddToWishlistButton';
import Title from './Title';
import { SubTitle } from './ui/text';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

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
                        className={`w-full h-64 object-contain overflow-hidden transition-transform bg-white duration-500 ${product?.stock !== 0 ? "group-hover:scale-200" : "opacity-50"}`}
                    />
                )}
                <AddToWishlistButton product={product} />
                {
                    product?.status === "sale" && (
                        <p className=' absolute top-2 left-2 z-10 text-xs border border-black px-2 rounded-full group-hover:bg-green-200'>Sale!</p>
                    )
                }
                {
                    product?.status === "new" && (
                        <p className=' absolute top-2 left-2 z-10 text-xs border border-black px-2 rounded-full group-hover:bg-green-200'>New!</p>
                    )
                }
                {product?.status === "hot" && <Link
                    href={"/deal"}
                    className=' absolute top-2 left-2 z-10 text-xs border border-black p-1 rounded-full group-hover:bg-red-500'
                >
                    <FlameIcon
                        size={12}
                        fill="orange"
                        className='text-orange-500/50 group-hover:text-pink-600'
                    />
                </Link>}
                <div className='p-3 flex flex-col gap-2'>
                    {product?.categories && (
                        <p className='uppercase line-clamp-1 text-xs '>
                            {product?.categories?.map((cat) => cat).join(",")}
                        </p>
                    )}
                    <SubTitle className='text-sm line-clamp-1'>{product?.name}</SubTitle>
                    <div className='flex items-center gap-3'>
                        <div className=' flex items-center'>
                            {[...Array(5)].map((_, index) => (
                                <StarIcon
                                    key={index}
                                    className={index < 4 ? "text-green-500" :
                                        "text-red-100"
                                    }
                                    fill={index < 4 ? "#93D991" : "red"}
                                />
                            ))}
                        </div>
                        <p className='text-gray-600 text-xs tracking-wide'>5 Reviews</p>
                    </div>

                    <div className='flex items-center gap-2.5'>
                        <p className=' font-medium'>In Stock</p>
                        <p className={`${product?.stock === 0 ? "text-red-600" : "text-green-500 font-semibold"}`}>{(product?.stock as number) > 0 ? product?.stock : "unavailable"}
                        </p>
                    </div>
                    <PriceView
                        price={product?.price}
                        discount={product?.discount}
                        className="text-sm"
                    />
                    <AddToCartButton />
                </div>

            </div>
        </div>
    );
};

export default ProductCard