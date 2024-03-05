import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="brand">
                <h2>ZeeCode Academy</h2>
            </div>
            <ul className="links">
                <li>
                    <a href="#">
                        <img src="assets/menu.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/menu.svg" alt="" />
                    </a>
                </li>
                <li className='lg'>
                    <a href="#">
                        <button className="btn1">Start Now</button>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
