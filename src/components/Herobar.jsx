import React from 'react'
import '../css/herobar.css'

const Herobar = ({title = 'Dashboard'}) => {
    return (
        <section className="is-hero-bar">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <h1 className="title">{title}</h1>
                {/* <button className="button light">Button</button> */}
            </div>
        </section>
    )
}

export default Herobar