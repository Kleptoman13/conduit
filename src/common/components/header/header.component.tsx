import clsx from 'clsx';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../container/container.component';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const naLinkClasses = ({ isActive }: {isActive: boolean}) => clsx('py-navItem hover:text-black/60 hover:no-underline', {
        'text-black/30': !isActive,
        'text-black/80': isActive
    });

    return (
        <header>
            <nav className='px-2 py-4'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <Link className='font-titillium text-2xl mr-8 text-conduit-green' to='/'>conduit</Link>
                        <ul className='pl-0 mb-0 list-none flex'>
                            <li>
                                <NavLink to='/' className={naLinkClasses}>Home</NavLink>
                            </li>
                            <li className='ml-4'>
                                <NavLink to='/sign-in' className={naLinkClasses}>Sign in</NavLink>
                            </li>
                            <li className='ml-4'>
                                <NavLink to='/sign-up' className={naLinkClasses}>Sign up</NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    );
};

export default Header;