'use client'
import Image from 'next/image'
import styles from './page.module.css'

import BannerSlider from '@/components/BannerSlider'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import sec41 from '../assets/images/sec41.jpg';
import algooffice from '../assets/images/algo-office.jpg';
import Indiamap from '@/components/Indiamap';
import Worldmap from '@/components/Worldmap';
import Gradientballs from '@/components/Gradientballs';
import Teamcard from '@/components/Teamcard';
import TeamcardSlider from '@/components/TeamcardSlider';
import CareerSlider from '@/components/CareerSlider';
import Link from 'next/link';

import newYork from '../assets/images/new-york.svg';
import singapore from '../assets/images/singapore.svg';
import mumbai from '../assets/images/mumbai.svg';
import brazil from '../assets/images/brazil.svg';
import london from '../assets/images/london.svg';

import Animated from '@/components/Animated';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SmoothScrollProvider } from '@/contexts/SmoothScroll.context';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import TimeSlideShow from '@/components/TimeSlideShow';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const scTrigger = useRef(null)
  const lineEl = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.line-sec',
          start: "+250px 80%",
          end: "bottom center",
          markers: false,
          scrub: true
        },
        // delay: 0.5
      });

      timeline.to('.line span', {
        scaleY: '10%'
      })
      timeline.to('.tb-list >*:nth-child(2) > span span', {
        scale: 1
      })
      timeline.to('.line span', {
        scaleY: '40%'
      })
      timeline.to('.tb-list >*:nth-child(3) > span span', {
        scale: 1
      })
      timeline.to('.line span', {
        scaleY: '60%'
      })
      timeline.to('.tb-list >*:nth-child(4) > span span', {
        scale: 1
      })
      timeline.to('.line span', {
        scaleY: '100%'
      })
      timeline.to('.tb-list >*:nth-child(5) > span span', {
        scale: 1
      })

    });

    // const handleResize = () => {
    //   gsap.context(() => {
    //     let timeline = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: '.line-sec',
    //         start: "+250px 80%",
    //         end: "bottom center",
    //         markers: false,
    //         scrub: true
    //       },
    //       // delay: 0.5
    //     });
    //     timeline.to('.line span', {
    //       scaleY: '10%'
    //     })
    //     timeline.to('.tb-list >*:nth-child(2) > span span', {
    //       scale: 1
    //     })
    //     timeline.to('.line span', {
    //       scaleY: '40%'
    //     })
    //     timeline.to('.tb-list >*:nth-child(3) > span span', {
    //       scale: 1
    //     })
    //     timeline.to('.line span', {
    //       scaleY: '60%'
    //     })
    //     timeline.to('.tb-list >*:nth-child(4) > span span', {
    //       scale: 1
    //     })
    //     timeline.to('.line span', {
    //       scaleY: '100%'
    //     })
    //     timeline.to('.tb-list >*:nth-child(5) > span span', {
    //       scale: 1
    //     })
    //   })
    // }
    // window.addEventListener('resize', handleResize);
    return () => {
      // window.removeEventListener('resize', handleResize);
      ctx.revert();
    }
  });


  return (

    <main className='home-page'>
      <section className="hm-banner-sec">
        <div className="container">
          <div className="row">
            <BannerSlider />
          </div>
        </div>
      </section>
      <section className="sc-2 sec">
        <div className="container">
          <div className="row row-gap-25 align-items-center justify-content-center">
            <div className="col-lg-8 mb-5 col-12">
              <Animated variant={'fadeUp'}>
                <h3 className='sec-head text-center'>Redefining Algorithmic Trading with a Unique Blend of <span>Technological and Financial Expertise</span></h3>
              </Animated>
            </div>
            <div className="col-lg-5 col-12">
              <div className="algo-office-img">
                <Image src={algooffice} className='img-full' alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-12">
              <div className="algo-con">
                <p className="para">
                  Our smart algorithms and state-of-the-art
                  technology ensure ultra-low latency and lightning-
                  fast execution.
                  <br /><br />
                  Our unparalleled domain proficiency includes
                </p>
                <div className="row row-gap-25">
                  <div className="col-lg-3 col-6">
                    <div className="cc-card s2">
                      <div className="cc-con">
                        <p>High Frequency Trading (HFT)</p>
                        {/* <p className="para">
                          Software Patents
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="cc-card s2">
                      <div className="cc-con">
                        <p>Mid Frequency Trading (MFT)</p>
                        {/* <p className="para">
                          Software Patents
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="cc-card s2">
                      <div className="cc-con">
                        <p>Low Risk Arbitage</p>
                        {/* <p className="para">
                          Software Patents
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="cc-card s2">
                      <div className="cc-con ">
                        <p>Discretionary trading</p>
                        {/* <p className="para">
                          Software Patents
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="para mt-4">
                At Algoquant, we stand as a beacon of innovation in
                the global financial landscape.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
     
     
      <section className="sec no-container line-sec" ref={scTrigger}>
        <div className="">
          <div className="row">
            <div className="col-lg-5 col-12">
              <Animated variant={'fadeLeft'}>
                {/* <div className="se-img">
                  <Image src={sec41} alt="" />
                </div> */}
                <TimeSlideShow />
              </Animated>
            </div>
            <div className="col-lg-6 offset-lg-1 col-12">
              <div className="container-right">
                <div className="se-con">
                  <Animated variant={'fadeUp'}>
                    <h3 className="sec-head">
                      Algorithmic Insights,
                      <br className="d-none d-sm-block" />
                      <span>Optimised Trading!</span>
                    </h3>
                  </Animated>
                  <Animated variant={'fadeUp'} delay="0.1">
                    <h4 className="sub-head mt-3">Simplifying Trading through Algorithmic Excellence!</h4>
                  </Animated>
                  <br />
                  <Animated variant={'fadeUp'} delay="0.2">
                    <p className="para">
                      At Algoquant, we don&apos;t just trade – we shape the financial landscape.
                    </p>
                  </Animated>
                </div>
                <ul className="tb-list">
                  <div className="line"><span ref={lineEl}></span></div>
                  <li>
                    <span><span></span></span>
                    <p>Actionable intelligence driven by advanced analytics.</p>
                  </li>
                  <li>
                    <span><span></span></span>
                    <p>Math minds, engineering superiority and financial foresight to navigate smoothly through market turbulence.</p>
                  </li>
                  <li>
                    <span><span></span></span>
                    <p>Leveraging top-notch tech to craft effective quantitative strategies.</p>
                  </li>
                  <li>
                    <span><span></span></span>
                    <p>Rewriting the rules with every algorithm, preparing you for the markets of tomorrow.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec map-sec">
        <Gradientballs />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Animated variant={'fadeUp'}>
                <h3 className="sec-head">Broadening Horizons, <span>Bridging Markets.</span></h3>
              </Animated>
            </div>
          </div>
          <div className="row mt-5 align-items-end">
            <div className="col-lg-4 col-12">
              {/* <Animated Animated variant={'scale'}> */}
              <Indiamap />
              {/* </Animated> */}
            </div>
            <div className="col-lg-8 col-12">
              {/* <Animated Animated variant={'scale'}> */}
              <Worldmap />
              {/* </Animated> */}
            </div>
          </div>
        </div>
      </section>
      <section className="team-sec pt-0 sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center col-12 mb-2">

              <h3 className="sec-head">
                The <span>Visionaries</span> Shaping <br className='d-none d-sm-block' /> Algorithmic Trading
              </h3>

              <p className="para">
                Meet the Passionate Minds Propelling Algoquant&apos;s Growth Story.
              </p>

            </div>
          </div>
        </div>
        <div className="">
          <div className="row justify-content-center">
            <div className="col-12">
              <Animated Animated variant={'fadeUp'} >
                <Tabs
                  defaultActiveKey="home"
                  id="justify-tab-example"
                  className="mb-3 cc-tabs"
                  justify
                >
                  <Tab eventKey="home" title="Leadership">
                    <TeamcardSlider type="leader" />
                  </Tab>
                  <Tab eventKey="profile" title="Management Team">
                    <TeamcardSlider type="management" slides={5} />
                  </Tab>
                </Tabs>
              </Animated>
            </div>
          </div>
        </div>
      </section>
      <section className="sec loc-sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="loc-strip">
                  <div className="row align-items-center row-gap-25">
                    <div className="col-lg-6 col-12">
                      <h3 className='sec-head'>
                        Algoquant is a Distinguished Quantitative Trading Firm, Making Significant Strides in the <span>International Financial Markets.</span>
                      </h3>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="loc-strip-wrap">
                        <div className="loc">
                          <Image src={mumbai} alt="" />
                          <p>Mumbai</p>
                        </div>
                        <div className="loc">
                          <Image src={brazil} alt="" />
                          <p>Brazil</p>
                        </div>
                        <div className="loc">
                          <Image src={london} alt="" />
                          <p>London</p>
                        </div>
                        <div className="loc">
                          <Image src={newYork} alt="" />
                          <p>New York</p>
                        </div>
                        <div className="loc">
                          <Image src={singapore} alt="" />
                          <p>Singapore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ca-grid">
                <div className="ca-left">
                  <Animated Animated variant={'fadeLeft'}>
                    <CareerSlider />
                  </Animated>
                </div>
                <div className="ca-right">
                  <Animated Animated variant={'fadeRigth'} delay="0.2">
                    <div className="ca-con">
                      <h3 className="sec-head">
                        Forge Your <span>Career Path</span> with Us - Discover Your Potential with Our Team!
                      </h3>
                      <h2 className="sub-head">Join a Vibrant Team Pushing the Boundaries of Algorithmic Trading.</h2>
                      <p className="para">
                        If you dream in data, think in algorithms - Algoquant is your playground.
                        Join our innovative team, unleash your potential in algorithmic and HFT trading, and leave your mark on the financial frontier.
                      </p>
                      <Link href="career" className="main-btn">
                        <span>Start your journey</span>
                      </Link>
                    </div>
                  </Animated>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}
