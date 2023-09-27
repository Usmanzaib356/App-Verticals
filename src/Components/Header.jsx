'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import logo from '../Images/logo.webp'
import solutionDropdown from '../Images/solution.webp'
import Link from 'next/link'
function Header() {
  
  const [showService, setShowService] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [showTechnologies, setShowTechnologies] = useState(false)
  const [showLocaton, setShowLocaton] = useState(false)
  const [showInsights, setShowInsights] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  return (
    <>
      <section className='header'>
        <nav className='nav-container'>
          <div className='nav-logo'>
            <Image src={logo} height='' className='image' alt='logo' />
          </div>
          <div className='nav-items-none'>
            <ul className='nav-items'>
              <Link href='' className='nav-link'>
                HOME
              </Link>
              <Link href='' className='nav-link '
                onMouseEnter={() => setShowService(true)
                }
                onMouseLeave={() => setShowService(false)}
              >
                SERVICES
                {
                  showService && (
                    <div className='service-dropdown' >
                      <ul className='service-dropdown-ul' >
                        <Link className='service-dropdown-link' href=''>
                          MOBILE APPLICATION DEVELOPMENT
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          IPHONE APP DEVELOPMENT
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          ANDROID APP DEVELOPMENT
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          WEB APPLICATION DEVELOPMENT
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          FRONT END DEVELOPMENT
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          PRODUCT PROTOTYPE
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          CLOUD && DEVOPS
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          DIGITAL MARKETING
                        </Link>
                        <Link className='service-dropdown-link' href=''>
                          WINDOWS APP DEVELOPMENT
                        </Link>
                      </ul>
                    </div>
                  )
                }
              </Link>

              <Link href='' className='nav-link'
                onMouseEnter={() => setShowSolution(true)}
                onMouseLeave={() => setShowSolution(false)}
              >
                SOLUTIONS
                {
                  showSolution && (
                    <div className='solution-dropdown'>
                      <div className='solution-dropdown-items'>
                        <div>
                          <Image src={solutionDropdown} width={300} />
                        </div>
                        <div className='solution-dropdown-cards-main'>
                          <div className='solution-dropdown-card-cantainer'>
                            <ul className='solution-dropdown-link-container'>
                              <h3 className='solution-dropdown-heading'>Consulting</h3>
                              <div className='solution-dropdown-link-card'>
                                <Link href='' className='solution-dropdown-link'>FULL CYCLE PRODUCT DEVELOPMENT</Link>
                                <Link href='' className='solution-dropdown-link'> PRODUCT MANAGMENT </Link>
                                <Link href='' className='solution-dropdown-link'> MVP</Link>
                                <Link href='' className='solution-dropdown-link'> UI/UX</Link>
                                <Link href='' className='solution-dropdown-link'> STARTUP</Link>
                                <Link href='' className='solution-dropdown-link'> ENTERPRISE</Link>
                                <Link href='' className='solution-dropdown-link'> HIRE DEDICATED DEVELOPER</Link>
                              </div>
                            </ul>
                          </div>
                          <div className='solution-dropdown-card-cantainer'>
                            <ul className='solution-dropdown-link-container'>
                              <h3 className='solution-dropdown-heading'>Industries</h3>
                              <div className='solution-dropdown-link-card'>
                                <Link href='' className='solution-dropdown-link'>ON-DEMAND</Link>
                                <Link href='' className='solution-dropdown-link'> HEALTH CARE</Link>
                                <Link href='' className='solution-dropdown-link'> SOCIAL NETWORKETING</Link>
                                <Link href='' className='solution-dropdown-link'> TRAVEL</Link>
                                <Link href='' className='solution-dropdown-link'> RESTURANTE</Link>
                                <Link href='' className='solution-dropdown-link'> COMMERCE</Link>
                              </div>
                            </ul>
                          </div>
                          <div className='solution-dropdown-card-cantainer'>
                            <ul className='solution-dropdown-link-container'>
                              <div className='solution-dropdown-link-card'>
                                <Link href='' className='solution-dropdown-link'>SAAS</Link>
                                <Link href='' className='solution-dropdown-link'> SPORT</Link>
                                <Link href='' className='solution-dropdown-link'> FINANCE</Link>
                                <Link href='' className='solution-dropdown-link'> REAL ESTATE</Link>
                                <Link href='' className='solution-dropdown-link'> LMS</Link>
                                <Link href='' className='solution-dropdown-link'> WELLNESS</Link>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </Link>

              <Link href='' className='nav-link' onMouseEnter={() => setShowTechnologies(true)}
                onMouseLeave={() => setShowTechnologies(false)}
              >
                TECHNOLOGIES
                {
                  showTechnologies && (
                    <div className='technologies-dropdown' >
                      <ul className='solution-dropdown-link-container'>
                        <h3 className='solution-dropdown-heading'>CMS</h3>
                        <div className='solution-dropdown-link-card'>
                          <Link href='' className='solution-dropdown-link'>WORDPRESS DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> SHOPIFY DEVELOPMENT </Link>
                          <Link href='' className='solution-dropdown-link'> MAGENTO DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> WOOCOMMERCE DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> OPEN CART DEVELOPMENT</Link>
                        </div>
                      </ul>
                      <ul className='solution-dropdown-link-container'>
                        <h3 className='solution-dropdown-heading'>Stacks</h3>
                        <div className='solution-dropdown-link-card'>
                          <Link href='' className='solution-dropdown-link'>REACT NATIVE DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> IONIC DEVELOPMENT </Link>
                          <Link href='' className='solution-dropdown-link'> FLUTTER DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> XAMARIN DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> VUE.JS DEVELOPMENT</Link>
                        </div>
                      </ul>
                      <ul className='solution-dropdown-link-container mt-2'>
                        <div className='solution-dropdown-link-card'>
                          <Link href='' className='solution-dropdown-link'>.NET DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> NODE.JS DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> PHP DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> JAVA DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> PYTHON DEVELOPMENT</Link>
                        </div>
                      </ul>
                      <ul className='solution-dropdown-link-container mt-2'>
                        <div className='solution-dropdown-link-card '>
                          <Link href='' className='solution-dropdown-link'>ANGULAR DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> PRODUCT MANAGMENT </Link>
                          <Link href='' className='solution-dropdown-link'> JAVASCRIPT DEVELOPMENT</Link>
                          <Link href='' className='solution-dropdown-link'> REACTJS DEVELOPMENT</Link>
                        </div>
                      </ul>
                    </div>
                  )
                }
              </Link>

              <Link href='' className='nav-link' onMouseEnter={() => setShowLocaton(true)}
                onMouseLeave={() => setShowLocaton(false)}
              >
                LOCATION
                {
                  showLocaton && (
                    <div className='location-dropdown-container' >
                      <div className='location-dropdown'    >
                        <ul className='service-dropdown-ul' >
                          <Link className='service-dropdown-link' href=''>
                            DALLAS
                          </Link>
                          <Link className='service-dropdown-link' href=''>
                            SOUTHLAKE
                          </Link>
                        </ul>
                      </div>
                    </div>
                  )
                }
              </Link>


              <Link href='' className='nav-link'>
                CASE STUDIES
              </Link>
              <Link href='' className='nav-link' onMouseEnter={() => setShowInsights(true)}
                onMouseLeave={() => setShowInsights(false)}
              >
                INSIGHTS
                {
                  showInsights && (
                    <div className='location-dropdown-container' >
                      <div className='location-dropdown'    >
                        <ul className='service-dropdown-ul' >
                          <Link className='service-dropdown-link' href=''>
                            ABOUT US
                          </Link>
                          <Link className='service-dropdown-link' href=''>
                            BLOG
                          </Link>
                          <Link className='service-dropdown-link' href=''>
                            HOW WE WORK
                          </Link>
                          <Link className='service-dropdown-link' href=''>
                            TESTIMONIALS
                          </Link>
                          <Link className='service-dropdown-link' href=''>
                            CONTACT US
                          </Link>
                        </ul>
                      </div>
                    </div>
                  )
                }
              </Link>

            </ul>
          </div>
          <div className='nav-btn nav-items-none' >
            <Link href='' className='nav-btn-Link'>
              GET ESTIMATE
            </Link>
          </div>
          {/* For mobile */}
          {
            sideBar ? (
              <div className='toggle-btn nav-items-none-des' onClick={() => setSideBar(false)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#000" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path>
                </svg>
              </div>
            ) : (
              <div className='toggle-btn nav-items-none-des' onClick={() => setSideBar(true)}>

                <svg
                  stroke="currentColor"
                  fill="#ec1c24"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>

              </div>)
          }
        </nav>

        {
          sideBar ? (
            <div className={`mob-items-container nav-items-none-des `}>
              <div className='mob-items-sidebar'>
                <ul className='sidebar-item-con'>
                  <Link href='' className='sidebar-items'>
                    <svg
                      stroke="#ec1c24"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    <li href='' className='sidebar-item-link' >
                      HOME
                    </li>
                  </Link>
                  <Link href='' className='sidebar-items-container' onClick={() => setShowService(!showService)}>
                    <div className='sidebar-items-dropdwon'>
                      <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                      </svg>

                      <li href='' className='sidebar-item-link' >
                        SERVICES
                      </li>
                    </div>
                    <div>
                      <svg stroke="#ec1c24" fill="#ec1c24" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </Link>
                  {
                    showService ? (

                      <>
                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            MOBLE APPLICATION DEVELOPMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            IPHONE APP DEVELOPMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            ANDROID APP DEVELOPMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            WEB APPLICATION DEVELOPMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            FRONT END DEVELOPMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            PRODUCT PROTOTYPING
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            CLOUDS && DEVOPS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            DIGITAL MARKETING
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            WINDOWS APP DEVELOPMENT
                          </Link>
                        </div>
                      </>
                    ) : null
                  }
                  <Link href='' className='sidebar-items-container' onClick={() => setShowSolution(!showSolution)}>
                    <div className='sidebar-items-dropdwon'>
                      <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                      <li href='' className='sidebar-item-link' >
                        SOLUTIONS
                      </li>
                    </div>
                    <div>
                      <svg stroke="#ec1c24" fill="#ec1c24" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </Link>

                  {
                    showSolution ? (

                      <>
                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            FULLY CYCLE PRODUCT DEVELOPMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            PRODUCT MANAGMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            MVP
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            UI/UX
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            STARTUP
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            ENTERPRISE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            HIRE DEDICATED DEVELOPER
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            ON DEMAND
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            HEALTH CARE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            SOCIAL NETWORKING
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            TRAVEL
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            RESTURANTE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            COMMERCE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            SAAS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            SPORTS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            FINANCE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            REAL ESTATE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            LMS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            WELLNESS
                          </Link>
                        </div>
                      </>
                    ) : null
                  }




                  <Link href='' className='sidebar-items-container' onClick={() => setShowTechnologies(!showTechnologies)}>
                    <div className='sidebar-items-dropdwon'>
                      <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                      </svg>
                      <li href='' className='sidebar-item-link' >
                        TECHNOLOGY
                      </li>
                    </div>
                    <div>
                      <svg stroke="#ec1c24" fill="#ec1c24" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </Link>


                  {
                    showTechnologies ? (

                      <>
                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            FULLY CYCLE PRODUCT DEVELOPMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            PRODUCT MANAGMENT
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            MVP
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            UI/UX
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            STARTUP
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            ENTERPRISE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            HIRE DEDICATED DEVELOPER
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            ON DEMAND
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            HEALTH CARE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            SOCIAL NETWORKING
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            TRAVEL
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            RESTURANTE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            COMMERCE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            SAAS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            SPORTS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            FINANCE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            REAL ESTATE
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            LMS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            WELLNESS
                          </Link>
                        </div>
                      </>
                    ) : null
                  }

                  <Link href='' className='sidebar-items-container' onClick={() => setShowLocaton(!showLocaton)}>
                    <div className='sidebar-items-dropdwon'>
                      <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                      </svg>
                      <li href='' className='sidebar-item-link' >
                        LOCATION
                      </li>
                    </div>
                    <div>
                      <svg stroke="#ec1c24" fill="#ec1c24" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </Link>

                  {
                    showLocaton ? (

                      <>
                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            DALLAS
                          </Link>
                        </div>

                        <div className='mob-solution-sidebar'>
                          <Link href='' className='mob-dropdown-link' >
                            SOUTHLAKE
                          </Link>
                        </div>


                      </>
                    ) : null
                  }


                  <Link href='' className='sidebar-items'>
                    <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>

                    <li href='' className='sidebar-item-link' >
                      CASE STUDIES
                    </li>
                  </Link>

                  <Link href='' className='sidebar-items'>
                    <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>

                    <li href='' className='sidebar-item-link' >
                      ABOUT US
                    </li>
                  </Link>


                  <Link href='' className='sidebar-items'>

                    <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path>
                    </svg>

                    <li href='' className='sidebar-item-link' >
                      BLOG
                    </li>
                  </Link>


                  <Link href='' className='sidebar-items'>
                    <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                    </svg>
                    <li href='' className='sidebar-item-link' >
                      HOW WE WORK
                    </li>
                  </Link>


                  <Link href='' className='sidebar-items'>

                    <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                    <li href='' className='sidebar-item-link' >
                      TESTIMONIALS
                    </li>
                  </Link>


                  <Link href='' className='sidebar-items'>
                    <svg stroke="#ec1c24" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <li href='' className='sidebar-item-link' >
                      CONTACT US
                    </li>
                  </Link>


                </ul>
              </div>
            </div>
          ) : ''
        }

      </section>
    </>
  )
}

export default Header