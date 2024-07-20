"use client";
import AboutSlider from "@/components/AboutSlider";
import React from "react";

import Image from "next/image";

import v1 from "../../assets/images/v1.jpg";
import v2 from "../../assets/images/v2.jpg";
import v3 from "../../assets/images/v3.jpg";
import ab from "../../assets/images/ab01.jpg";
import bannerImg from "../../assets/images/cul-banner.jpg";

import locIcon2 from "../../assets/images/loc2.svg";

import Animated from "@/components/Animated";

import InnerHeader from "@/components/InnerHeader";

const culture = () => {
  const data = [
    "New Delhi, Delhi",
    "Mumbai, Maharashtra",
    "Bengaluru, Karnataka",
    "Haryana",
    "Kolkata, West Bengal",
    "Gift City, Gujarat",
    "Uttar Pradesh",
    "Singapore",
  ];
  return (
    <>
      <InnerHeader
        title={"Driving Progress, Defining Futures, Upholding Principles."}
        image={bannerImg}
      />
      <section className="vs-sec sec">
        <div className="container">
          <div className="row row-gap-25">
            <div className="col-lg-4 col-12">
              <Animated variant="scale">
                <div className="vs-wrap grr">
                  {/* <Image src={v1} alt="" /> */}
                  <h3>Our Vision</h3>
                  <p className="para">
                    We envision becoming a one-stop financial ecosystem through
                    technology and human brilliance, unlocking capital pathways
                    for a dynamic global market.
                  </p>
                </div>
              </Animated>
            </div>
            <div className="col-lg-4 col-12">
              <Animated variant="scale" delay="0.1">
                <div className="vs-wrap grr">
                  {/* <Image src={v2} alt="" /> */}
                  <h3>Our Mission</h3>
                  <p className="para">
                    To be dedicated to unlocking distinctive financial avenues
                    and ensuring secure and prosperous growth for our clients
                    through innovation and integrity.
                  </p>
                </div>
              </Animated>
            </div>
            <div className="col-lg-4 col-12">
              <Animated variant="scale" delay="0.2">
                <div className="vs-wrap grr">
                  {/* <Image src={v3} alt="" /> */}
                  <h3>Our Philosophy</h3>
                  <p className="para">
                    Innovation, Expertise, and Speed drive everything we do. We
                    leverage state-of-the-art technology, embrace quantitative
                    mastery, and prioritise unwavering dedication to our
                    clients&apos; success.
                  </p>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Animated variant="fadeUp">
                <h3 className="sec-head">
                  Crafting a Better Tomorrow Driven by a{" "}
                  <span>Foundation of Excellence & Integrity</span>
                </h3>
              </Animated>
              <Animated variant="fadeUp" delay="0.1">
                <p className="para mt-4">
                  At the heart of our working lies a vibrant culture, nurtured
                  by the values we share and the experiences we create together.
                  We are a team motivated by a steadfast work ethic, believing
                  that dedication and perseverance pave the path to success. Our
                  commitment to excellence fuels our desire to constantly
                  improve, pushing boundaries and exceeding expectations in all
                  endeavors.
                  <br />
                  <br />
                  We foster a healthy work environment, encouraging individuals
                  to take ownership and actively seek new solutions and
                  opportunities for growth. Together, these values empower us to
                  build a dynamic and forward-thinking community where
                  individuals thrive and collective success flourishes.
                </p>
              </Animated>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div className="row">
            <Animated variant="fadeUp">
              <h3 className="sec-head text-center">
                Benefits & <span>Perks</span>
              </h3>
            </Animated>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="cc-grid">
                <Animated variant={"scale"} delay="0.1">
                  <div className="cc-card sc2">
                    {/* <div className="cc-icon">
                                            <Image src={cc2} alt="" />
                                        </div> */}
                    <div className="cc-con">
                      <h3>Competitive Remuneration</h3>
                      <p className="para">
                        We offer an attractive compensation that recognizes your
                        skills and experience, ensuring that you feel valued and
                        motivated to excel in your role
                      </p>
                    </div>
                  </div>
                </Animated>
                <Animated variant={"scale"} delay="0.2">
                  <div className="cc-card sc2">
                    {/* <div className="cc-icon">
                                            <Image src={cc3} alt="" />
                                        </div> */}
                    <div className="cc-con">
                      <h3>Open Communication</h3>
                      <p className="para">
                        We foster an environment of transparency and open
                        dialogue, where every team member’s voice is heard and
                        respected
                      </p>
                    </div>
                  </div>
                </Animated>
                <Animated variant={"scale"} delay="0.3">
                  <div className="cc-card sc2">
                    {/* <div className="cc-icon">
                                            <Image src={cc4} alt="" />
                                        </div> */}
                    <div className="cc-con">
                      <h3>Employee Autonomy</h3>
                      <p className="para">
                        We empower our employees with the autonomy to make
                        decisions, invoking a sense of ownership and
                        responsibility in their work
                      </p>
                    </div>
                  </div>
                </Animated>
                <Animated variant={"scale"} delay="0.1">
                  <div className="cc-card sc2">
                    {/* <div className="cc-icon">
                                            <Image src={cc2} alt="" />
                                        </div> */}
                    <div className="cc-con">
                      <h3>Employee Engagement</h3>
                      <p className="para">
                        We fuel creativity with a fully-stocked kitchen and
                        in-office breakfasts. Our monthly team dinners, birthday
                        celebrations, and exciting offsite gaming activities
                        cultivate a strong sense of community and engagement
                        among employees
                      </p>
                    </div>
                  </div>
                </Animated>
                <Animated variant={"scale"} delay="0.2">
                  <div className="cc-card sc2">
                    {/* <div className="cc-icon">
                                            <Image src={cc3} alt="" />
                                        </div> */}
                    <div className="cc-con">
                      <h3>Work-life balance</h3>
                      <p className="para">
                        We provide a flexible work environment enabling our
                        employees to seamlessly balance personal and
                        professional lives along with the freedom to work from
                        any Algoquant offices pan-India
                      </p>
                    </div>
                  </div>
                </Animated>
                <Animated variant={"scale"} delay="0.3">
                  <div className="cc-card sc2">
                    {/* <div className="cc-icon">
                                            <Image src={cc4} alt="" />
                                        </div> */}
                    <div className="cc-con">
                      <h3>Health & Wellness</h3>
                      <p className="para">
                        Prioritizing the well-being of our employees, we support
                        a healthy lifestyle with in-office gym, wellness
                        programs and other initiatives
                      </p>
                    </div>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="sec">
                <div className="container">
                  
                    <div className="row align-items-center">
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
                                    <h3 className='sec-head'>
                                        Contributing to a Greener Environment, <span>Trade by Trade!</span>
                                    </h3>
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
      <section className="sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 mb-4">
              <h3 className="sec-head text-center">
                Contributing to a Greener Environment,{" "}
                <span>Trade by Trade!</span>
              </h3>
            </div>
            <div className="col-lg-6 col-12">
              <Animated variant="fadeLeft">
                <div className="ab-img">
                  <Image src={ab} alt="" />
                </div>
              </Animated>
            </div>
            <div className="col-lg-5 offset-lg-1 col-12">
              <Animated variant="fadeRigth" delay="0.2">
                <div className="ab-con2">
                  <h4 className="sub-head">
                    Embracing Sustainable Initiatives for a Planet-friendly
                    Tomorrow.
                  </h4>
                  <p className="para">
                    At Algoquant, we believe success goes beyond the charts.
                    We&apos;re making strides towards a healthier planet because
                    a green future makes for a brighter tomorrow.
                  </p>
                  <ul className="point-list">
                    <li>
                      Illuminating our corporate headquarters with solar energy,
                      expanding to all offices by 2025.
                    </li>
                    <li>
                      We&apos;re committed to achieving carbon neutrality across
                      our operations, minimising our environmental impact.
                    </li>
                    <li>
                      We support initiatives that promote sustainable practices
                      and empower communities to make a difference.
                    </li>
                  </ul>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>
      <section className="sec our-pres-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="sec-head">
                Our <span>Prescence</span>
              </h3>
            </div>
            <div className="col-12">
              <div className="co-container">
                {data.map((item, index) => {
                  return (
                    <div className="co-wrap" key={index}>
                      <Image src={locIcon2} alt="" />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default culture;
