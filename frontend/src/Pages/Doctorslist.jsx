

import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

const Doctorslist = () => {
    const [doctors] = useState([
        {
            image: '/doctor1.jpeg',
            title: '',
            desc: '',
            link: '/doctors'
        },
        {
            image: '',
            title: '',
            desc: '',
            link: '/doctors'
        },
    ])

    return (
        <div>
            <Hero
                title={"Learn More About Our Doctors | ZeeCare Medical Institute"}
                imageUrl={"/about.png"}
            />
            <div className="row g-4">
                {doctors.map((item) => {
                    return (<div className="col-md-4 col-12">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.desc}</p>
                                <Link to={item.link} className="btn btn-primary">See Details</Link>
                            </div>
                        </div>
                    </div>)

                })}
            </div>
        </div>
    )
}

export default Doctorslist