import React from 'react';
import PriceFormatter from './PriceFormatter';
interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
    return (
    <div className='flex items-center gap-2.5'>
        <PriceFormatter amount={price} />
        {price && discount && <PriceFormatter amount={price + (discount * price) / 80}
            className='line-through font-normal ' />}
    </div>
    );

};

export default PriceView;