import React from 'react'
import { Title } from './ui/text'

const HomeBanner = () => {
    return (
        <div className='py-16 md:py-0 bg-pink-100 rounded-lg px-10 lg:px-24 flex items-center justify-between'>
            <div>
                <Title>Grab Upto 50% off on <br /> Selected headphone</Title>
            </div>
            <div></div>
        </div>
    )
}

export default HomeBanner