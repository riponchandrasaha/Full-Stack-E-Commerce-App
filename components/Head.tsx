import React from 'react'
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Searchbar from './Searchbar';
import CartIcon from './CartIcon';
import FavouriteButton from './FavouriteButton';
import SignInn from './SignInn';
import MobileMenu from './MobileMenu';

/* header */
const Head = () => {
    return <header className='bg-white py-5 border-b border-b-black/21' >
        <Container className='flex items-center justify-between' >


            {/* logo */}
            <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
               <MobileMenu/>
                <Logo />

            </div>
            {/* navbutton */}
            <HeaderMenu />
            {/* navadmin */}
            <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
                <Searchbar />
                <CartIcon />
                <FavouriteButton />
                <SignInn />

            </div>
        </Container>
    </header>;

};

export default Head;