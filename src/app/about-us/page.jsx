'use client'
import AboutSlider from '@/components/AboutSlider'
import React, {useCallback} from 'react'

import Image from 'next/image'

import v1 from '../../assets/images/v1.jpg'
import v2 from '../../assets/images/v2.jpg'
import v3 from '../../assets/images/v3.jpg'
import ab from '../../assets/images/ab01.jpg'
import cc1 from '../../assets/images/cc01.svg';
import cc2 from '../../assets/images/cc02.svg';
import cc3 from '../../assets/images/cc03.svg';
import cc4 from '../../assets/images/cc04.svg';
import banner from '../../assets/images/ab-banner.JPEG'
import ab1 from '../../assets/images/ab-new.png'
import Animated from '@/components/Animated'
import InnerHeader from '@/components/InnerHeader'




const AboutUs = () => {
    
    
  return (
    <>
    <InnerHeader title={'At Algoquant, We are Revolutionizing Trading Dynamics by Leveraging State-of-the-Art Technology'} image={ab1} />
        
        <section className="sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                        <div className="ab-im">
                            <Image src={banner} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-12">
                        <div className="ab-c">
                            <p className="para">
                                Established in 2017, with deep expertise in algorithmic trading we have assembled a formidable
                                team—a fusion of technologists, quantitative analysts and researchers. As an emerging force in
                                electronic trading, we seamlessly blend key components of finance, systems engineering and
                                statistics. While rooted in quantitative trading, we also offer a diverse portfolio of financial services
                                with expertise spanning across – high-frequency trading (HFT), non-banking financial services
                                (NBFC), angel investing, stock broking, and discretionary trading.<br /><br />
                                With unmatched expertise in cutting-edge technology and financial analysis, we meticulously craft
                                and deploy sophisticated trading algorithms and have engineered some of the swiftest trading 
                                systems known to financial markets. <br /><br />
                                The unique synergy between quantitative analysis and human expertise positions Algoquant as a
                                front runner in a constantly developing capital markets landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AboutSlider />
        <section className="banner-btm-sec sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center col-12">
              <Animated variant={'fadeUp'}>
                <h3 className='sec-head'>Cutting-Edge Tech <br className='d-none d-sm-block' />Built for <span>Speed and Precision</span></h3>
              </Animated>
              <Animated variant={'fadeUp'} delay="0.1">
                <p className="para">
                  Experience the edge of possibility with our state-of-the-art hardware, advanced software, and FPGA-powered execution for superior results.
                </p>
              </Animated>

            </div>
          </div>
          <div className="row row-gap-25">
            <div className="col-12">
              <div className="cc-grid">
                {/* <Animated variant={'scale'}>
                  <div className="cc-card">
                    <div className="cc-icon">
                      <Image src={cc1} alt="" />
                    </div>
                    <div className="cc-con">
                      <h3>100+</h3>
                      <p className="para">
                        Software Patents
                      </p>
                    </div>
                  </div>
                </Animated> */}
                <Animated variant={'scale'} delay="0.1">
                  <div className="cc-card">
                    <div className="cc-icon">
                      <Image src={cc2} alt="" />
                    </div>
                    <div className="cc-con">
                      <h3>$5M+</h3>
                      <p className="para">
                        Investment in co-location infrastructure
                      </p>
                    </div>
                  </div>
                </Animated>
                <Animated variant={'scale'} delay="0.2">
                  <div className="cc-card">
                    <div className="cc-icon">
                      <Image src={cc3} alt="" />
                    </div>
                    <div className="cc-con">
                      <h3>350+</h3>
                      <p className="para">
                        Servers
                      </p>
                    </div>
                  </div>
                </Animated>
                <Animated variant={'scale'} delay="0.3">
                  <div className="cc-card">
                    <div className="cc-icon">
                      <Image src={cc4} alt="" />
                    </div>
                    <div className="cc-con">
                      <h3>70+</h3>
                      <p className="para">
                        Field Programmable Gate Arrays (FPGAs)
                      </p>
                    </div>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="text-sec pt-0 sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12">
              <Animated variant={'fadeUp'}>
              
                <p className="para big-para text-center ">
                  Algoquant is a pioneering Algorithmic Trading firm, combining technological innovation with financial expertise to uncover untapped opportunities in capital markets. The company&apos;s unparalleled domain proficiency in quantitative trading, high-frequency trading (HFT), low-risk arbitrage, mid-frequency trading, and discretionary trading, empowers it to be an industry leader. With over 3% market share in traded volume across Indian markets, Algoquant&apos;s smart algorithms and state-of-the-art technology ensure ultra-low latency and lightning-fast execution. Algoquant also enables retail clients to trade and invest through its in-house stock broking platform.
                </p>
              </Animated>
            </div>
          </div>
        </div>
      </section> */}
        {/* <section className="sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <Animated variant="fadeUp" >
                            <h3 className="sec-head">
                                At Algoquant, we have been pioneering <span>algorithmic trading</span> since inception. 
                            </h3>
                        </Animated>
                        <Animated variant="fadeUp" delay="0.1">
                            <p className="para">
                                Combining technology and market insight, we revolutionise trading dynamics. Our mantra, &quot;Tech | Trade | Redefined,&quot; encapsulates our commitment to cutting-edge simplicity. In a rapidly evolving financial landscape, we stand as an innovative beacon, utilising Machine Learning for enhanced risk control and transformative trading experiences.
                            </p>
                        </Animated>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <section className="sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 mb-4">
                        <h3 className='sec-head text-center'>
                        Contributing to a Greener Environment, <span>Trade by Trade!</span>
                        </h3>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Animated variant="fadeLeft" >
                        <div className="ab-img">
                            <Image src={ab} alt="" />
                        </div>
                        </Animated>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-12">
                        <Animated variant="fadeRigth" delay="0.2" >
                            <div className="ab-con2">
                                
                                <h4 className="sub-head">Embracing Sustainable Initiatives for a Planet-friendly Tomorrow.</h4>
                                <p className="para">
                                At Algoquant, we believe success goes beyond the charts. We&apos;re making strides towards a healthier planet because a green future makes for a brighter tomorrow.
                                </p>
                                <ul className="point-list">
                                    <li>
                                    Illuminating our corporate headquarters with solar energy, expanding to all offices by 2025.
                                    </li>
                                    <li>
                                    We&apos;re committed to achieving carbon neutrality across our operations, minimising our environmental impact.
                                    </li>
                                    <li>
                                    We support initiatives that promote sustainable practices and empower communities to make a difference.
                                    </li>
                                </ul>
                            </div>
                        </Animated>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  )
}

export default AboutUs