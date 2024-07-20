import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import notFoundImg from '../assets/images/404.svg';

const NotFound = () => {
  return (
    <section className='sec not-found-sec'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div class="col-lg-8 col-12">
                    <div className='not-found-wrapper'>
                        <div className='not-found-img'>
                            <Image src={notFoundImg} alt="" />
                        </div>
                        <p className='para text-center'>
                            The page you are looking for is not found
                        </p>
                        <Link href="/" className='center main-btn'>
                            <span>Go Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound