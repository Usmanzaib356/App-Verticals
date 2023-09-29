import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
function Customer() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='customer-container'>
                <div className='customer-heading'>
                    <h4 className='Customer'>Customer</h4>
                    <h4 className='Testimonials'>Testimonials</h4>
                </div>
                <div className='customer-card-con'>
                    <Slider {...settings} >
                        <div    >
                            <div className='customer-card'>
                                <h6 className='Works-Efficiently'>Works Efficiently</h6>
                                <p className='Works-Efficiently-p'>Hey my name is Roody Labaze, I have been working with AppVerticals for about</p>
                                <div className='customer-card-logo'>
                                    <img className='customer-card-logo-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2Fupcity-logo.png&w=64&q=75" alt="" />
                                    <Link href='' className='links'>Youtube</Link>

                                </div>
                                <div className='customer-card-last'>
                                    <img className='customer-card-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2F02.gif&w=256&q=75" alt="" />
                                    <p className='customer-card-name'>Billal Busniess</p>
                                </div>
                            </div>
                        </div>

                        <div className='abc'>
                            <div className='customer-card'>
                                <h6 className='Works-Efficiently'>Works Efficiently</h6>
                                <p className='Works-Efficiently-p'>Hey my name is Roody Labaze, I have been working with AppVerticals for about</p>
                                <div className='customer-card-logo'>
                                    <img className='customer-card-logo-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2Fupcity-logo.png&w=64&q=75" alt="" />
                                    <Link href='' className='links'>Youtube</Link>

                                </div>
                                <div className='customer-card-last'>
                                    <img className='customer-card-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2F02.gif&w=256&q=75" alt="" />
                                    <p className='customer-card-name'>Billal Busniess</p>
                                </div>
                            </div>
                        </div>


                        <div className='abc'>
                            <div className='customer-card'>
                                <h6 className='Works-Efficiently'>Works Efficiently</h6>
                                <p className='Works-Efficiently-p'>Hey my name is Roody Labaze, I have been working with AppVerticals for about</p>
                                <div className='customer-card-logo'>
                                    <img className='customer-card-logo-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2Fupcity-logo.png&w=64&q=75" alt="" />
                                    <Link href='' className='links'>Youtube</Link>

                                </div>
                                <div className='customer-card-last'>
                                    <img className='customer-card-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2F02.gif&w=256&q=75" alt="" />
                                    <p className='customer-card-name'>Billal Busniess</p>
                                </div>
                            </div>
                        </div>


                        <div className='abc'>
                            <div className='customer-card'>
                                <h6 className='Works-Efficiently'>Works Efficiently</h6>
                                <p className='Works-Efficiently-p'>Hey my name is Roody Labaze, I have been working with AppVerticals for about</p>
                                <div className='customer-card-logo'>
                                    <img className='customer-card-logo-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2Fupcity-logo.png&w=64&q=75" alt="" />
                                    <Link href='' className='links'>Youtube</Link>

                                </div>
                                <div className='customer-card-last'>
                                    <img className='customer-card-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2F02.gif&w=256&q=75" alt="" />
                                    <p className='customer-card-name'>Billal Busniess</p>
                                </div>
                            </div>
                        </div>


                        <div className='abc'>
                            <div className='customer-card'>
                                <h6 className='Works-Efficiently'>Works Efficiently</h6>
                                <p className='Works-Efficiently-p'>Hey my name is Roody Labaze, I have been working with AppVerticals for about</p>
                                <div className='customer-card-logo'>
                                    <img className='customer-card-logo-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2Fupcity-logo.png&w=64&q=75" alt="" />
                                    <Link href='' className='links'>Youtube</Link>

                                </div>
                                <div className='customer-card-last'>
                                    <img className='customer-card-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2F02.gif&w=256&q=75" alt="" />
                                    <p className='customer-card-name'>Billal Busniess</p>
                                </div>
                            </div>
                        </div>


                        <div className='abc'>
                            <div className='customer-card'>
                                <h6 className='Works-Efficiently'>Works Efficiently</h6>
                                <p className='Works-Efficiently-p'>Hey my name is Roody Labaze, I have been working with AppVerticals for about</p>
                                <div className='customer-card-logo'>
                                    <img className='customer-card-logo-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2Fupcity-logo.png&w=64&q=75" alt="" />
                                    <Link href='' className='links'>Youtube</Link>

                                </div>
                                <div className='customer-card-last'>
                                    <img className='customer-card-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Ftestimonials%2F02.gif&w=256&q=75" alt="" />
                                    <p className='customer-card-name'>Billal Busniess</p>
                                </div>
                            </div>
                        </div>
                       

                    </Slider>

                </div>
            </section>
        </>
    )
}

export default Customer