'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png';
import ftlogo from '../assets/images/ft-logo.png';

import menuBtn from '../assets/images/menu.svg';
import ReactPlayer from 'react-player'
import cross from '../assets/images/cross.svg';

import Loader from './Loader'

const Navbar = () => {
    const [menuOpen, setMenuClose] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [domloaded, setDomLoaded] = useState(false);

    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const handleContentLoad = () => {
            // setIsLoading(false);
        };
        window.addEventListener('DOMContentLoaded', handleContentLoad);
        setTimeout(() => {
        console.log('Fetching data (simulated delay)...');
        setIsLoading(false);
        }, 5000);

        return () => {
        window.removeEventListener('DOMContentLoaded', handleContentLoad);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 300) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
        setDomLoaded(true)
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        {
            name : 'Home',
            link : '/'
        },
        {
            name : 'Who We Are',
            link : '/about-us'
        },
        {
            name : 'Careers',
            link : '/career'
        },
        {
            name : 'Culture',
            link : '/culture'
        },
    ]

  return (
    <>
        {isLoading && <Loader />}
        <nav className={`main-nav ${isSticky ? 'sticky-menu' : ''}`}>
            <div className="container">
                <div className="nav-inner">
                    <div className="l-part">
                        <button className="menu-btn" onClick={()=>setMenuClose(true)}>
                            <Image src={menuBtn} alt="" />
                        </button>
                        <Link href="/" className='head-logo'>
                            {/* <Image src={logo} alt="" /> */}
                            {domloaded && <ReactPlayer width={'200px'} height={'auto'} url={'/algo-logo.mp4'} playing={true} muted={true} playsinline={true} />} 
                        </Link>
                    </div>
                    <div className="m-part">
                        <ul className="nav-list">
                            {
                                links.map((link,index) =>{
                                    return(
                                        <li key={index}>
                                            <Link href={link.link}>
                                            {link.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="r-part">
                        <ul className="ot-nav">
                            <li>
                                <Link href="/contact-us" className='main-btn'>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        {/* mobile menu */}
        <div className={`mob-menu ${menuOpen && 'active'}`}>
            <Link href="/" className='mob-logo'>
                <Image src={ftlogo} alt="" />
            </Link>
            <button className="close-btn" onClick={()=>setMenuClose(false)}>
                <Image src={cross} alt="" />
            </button>
            <ul>
                {
                    links.map((link,index) =>{
                        return(
                            <li key={index}>
                                <Link href={link.link} onClick={()=>setMenuClose(false)}>
                                {link.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Navbar