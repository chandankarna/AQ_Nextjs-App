'use client'
import InnerHeader from '@/components/InnerHeader'
import React from 'react'

const TermsAndConditions = () => {
  return (
    <div>
        <InnerHeader hasAnim={false} title="Terms & Conditions" />
        <section className="sec pri-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="doc-con-area">
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias accusantium nam rem sed necessitatibus iure porro vel dicta incidunt iste error ipsum, molestias esse rerum nisi soluta. Laboriosam, perferendis.
                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, in labore molestiae suscipit nemo dignissimos, doloribus maxime delectus voluptate totam tenetur! Libero at ducimus, beatae quis ad rerum sint aspernatur?
                            <br /><br />
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur </li>
                                <li>Lorem ipsum dolor sit amet consectetur </li>
                                <li>Lorem ipsum dolor sit amet consectetur </li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TermsAndConditions