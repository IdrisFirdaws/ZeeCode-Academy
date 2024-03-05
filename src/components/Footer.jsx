import React from 'react'

const Footer = () => {
    return (
        <div className='footer section'>
            <div className="footerTop">
                <img src="assets/menu.svg" alt="" />
                <img src="assets/menu.svg" alt="" />
                <img src="assets/menu.svg" alt="" />
            </div>

            <hr />

            <div className="footerBottom">
                <p>
                    &copy; ZeeCode, 2024. All rights reserved.
                </p>

                <p>
                    Designed by <a href="https://firdaws.vercel.com">Firdaws.io</a>
                </p>

            </div>
        </div>
    )
}

export default Footer
