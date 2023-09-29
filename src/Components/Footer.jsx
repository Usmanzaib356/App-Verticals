import React from 'react'
import Link from 'next/link'
function Footer() {
    return (
        <>
            <footer className='footer-section'>
                <div className='footer-container'>
                    <div className='Technologies-con'>
                        <h4 className='Technologies'>Technologies</h4>
                        <div className='Technologies-line'></div>
                        <div className='Technologies-list-con'>
                            <ul className='Technologies-list'>
                                <li>
                                    <Link href='' className='text-decoration'>iOS</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Android</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Xamarian</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>React Native</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Ionic</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Flutter</Link>
                                </li>
                            </ul>
                            <ul className='Technologies-list'>
                                <li>
                                    <Link href='' className='text-decoration'>Angular</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Javascript</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>ReactJS</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Vue.js</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Java</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Node.js</Link>
                                </li>
                            </ul>
                            <ul className='Technologies-list'>
                                <li>
                                    <Link href='' className='text-decoration'>ASP.NET</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Python</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>PHP</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                    <div className='Core-con'>
                    <h4 className='Technologies'>Core Services</h4>
                        <div className='Technologies-line'></div>
                        <div className='Technologies-list-con'>
                            <ul className='Technologies-list'>
                                <li>
                                    <Link href='' className='text-decoration'>Web Application Development</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Mobile App Development</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Front End Development</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Dedicated Developer </Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Product Prototyping</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Cloud & DevOps</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Hire-con'>
                    <h4 className='Technologies'> Hire Developers</h4>
                        <div className='Technologies-line'></div>
                        <div className='Technologies-list-con'>
                            <ul className='Technologies-list'>
                                <li>
                                    <Link href='' className='text-decoration'>Hire PHP Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Node.js Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Codeigniter Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Laravel Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire WordPress Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Kotlin Developers</Link>
                                </li>
                            </ul>
                            <ul className='Technologies-list'>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Android Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Shopify Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire ReactJS Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Vue.js Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Xamarin Developers</Link>
                                </li>
                                <li>
                                    <Link href='' className='text-decoration'>Hire Angular Developers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-two-con'>
                        <hr />
                        <div className='footer-two'>
                            <div className='footer-two-left'>
                            <img className='footer-two-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Ffooter-logo.webp&w=384&q=75" alt="" />
                            </div>
                            <div className='footer-two-right'>
                            <p className='Our-strength'>Our strength lies in the comprehensive suite of services we offer to our clients. Our core competence in technology from full-stack development to just consultancy, allows us to offer a diverse portfolio of services as per your requirements. You Demand We Deliver,</p>
                            </div>
                        </div>
                        <hr />
                </div>
                <div className='footer-two-last'>
                    <p className='Privacy-Policy'>© 2023 AppVerticals. ALL RIGHTS RESERVED.</p>
                    <div className='footer-two-last-links'>
                        <p className='Privacy-Policy'>Privacy Policy</p> 
                        |
                        <p className='Privacy-Policy'>Terms of Use</p>
                        |
                        <p className='Privacy-Policy'>Sitemap</p> 
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer