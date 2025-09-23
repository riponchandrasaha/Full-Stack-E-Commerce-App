import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignInn = () => {
    return (
        <SignInButton mode='modal'>
            <button
                className='text-sm font-semibold hover:text-black text-lime-500 hover:cursor-pointer hoverEffect'>Login
            </button>

        </SignInButton>
    );
};

export default SignInn