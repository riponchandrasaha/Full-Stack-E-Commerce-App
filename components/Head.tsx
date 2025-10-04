import React from 'react'
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Searchbar from './Searchbar';
import CartIcon from './CartIcon';
import FavouriteButton from './FavouriteButton';
import SignInn from './SignInn';
import MobileMenu from './MobileMenu';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs';

/* header */
const Head = async () => {
    const user = await currentUser();

    return <header className=' py-5 sticky top-0 z-50 backdrop-blur-md bg-white/80 ' >
        <Container className='flex items-center justify-between' >


            {/* logo */}
            <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
                <MobileMenu />
                <Logo />

            </div>
            {/* navbutton */}
            <HeaderMenu />
            {/* navadmin */}
            <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
                <Searchbar />
                <CartIcon />
                <FavouriteButton />
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                   {!user &&  <SignInn />}
                </ClerkLoaded>

            </div>
        </Container>
    </header>;

};

export default Head;