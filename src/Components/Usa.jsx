import React, { useState } from 'react';

function Usa() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <section className="usa-container">
        <div className="usa-text-card">
          <div className="cards-text">
            <h3 className="One-Stop">Top App Development Company In USA</h3>
            <h2 className="Our">
              Why You Need The Best App Development Services?
            </h2>
            <h1 className="text-border"></h1>
            <div className="text-border"></div>
            <div className="usa-card-bottom-sec">
              <p className="With-people-p">
                With people spending an average of 3 hours using apps, it&apos;s
                pretty obvious where businesses should be heading. Working with
                the best mobile app development services is one of the best ways
                to ensure trust and a successful outcome. So if you want to be
                become a success, hire app developers from AppVerticals. We are
                here to deliver cutting-edge app development services to you.
              </p>
              <h5 className="What-Custom" style={{ color: '#000' }}>
                What Custom App Development Company AppVerticals Offers?
              </h5>
              <p className="We-are-one">
                We are one of the leading app development agency in USA
                specializing in web and app design. We pride ourselves in
                delivering smooth and flawless solutions{' '}
                {showText ? (
                  <>
                    {' '}
                    to all of our clients. Whether its healthcare, automotive or
                    hospitality, our experts can develop an app for your
                    specific needs. While we are based in USA, our services are
                    for everyone. Our application development company has
                    satisfied businesses from a wide range of industries and
                    regions. Through the custom solutions we deliver, our app
                    developers promise boost your ROI.
                  </>
                ) : null}{' '}
              </p>
              <div>
                {showText ? (
                  <>
                    <div className="usa-card-bottom-sec">
                      <h5 className="What-Custom" style={{ color: '#000' }}>
                        We Provide Best App Development Services In USA
                      </h5>
                      <p className="We-are-one">
                        We don&apos;t discriminate between platforms. Whether it
                        be Android or iOS, our application development agency
                        can develop and design apps for all. We understand that
                        your customers may be present on various platforms. So
                        if you decide to focus on only one platform, you are
                        bound to lose some potential customers. In the watch of
                        our app development experts, this will never happen! We
                        will design your apps, keeping in mind the requirements
                        of the various platforms. We make sure that the services
                        we deliver are usable, visually pleasing and
                        user-friendly. You won&apos;t find web and app
                        development services in USA like us that offers it all
                        so professionally.
                      </p>
                      <div></div>
                    </div>
                    <div className="usa-card-bottom-sec">
                      <h5 className="What-Custom" style={{ color: '#000' }}>
                        Our Expertise Your Prosperity
                      </h5>
                      <p className="We-are-one">
                        Our best app development company in USA has worked with
                        all types of businesses. Whether it be startups or
                        massive enterprises, our experienced web developers are
                        equipped with the skills to cater to the needs of all.
                        Make sure to partner with the top app development
                        companies instead. Hire application development services
                        are at your disposal. Contact us today to let us know
                        about your project requirements. We will develop an app
                        or website just like you want us to. Our technology
                        experts won&apos;t disappoint you and we will work with
                        you through it all. Be it the design or the development
                        phase, our knowledge of the app industry coupled with
                        your expertise will make a duo that will transform your
                        customers&apos; life. READ LESS
                      </p>
                      <div></div>
                    </div>
                  </>
                ) : null}

                <button
                  className="READ-MORE"
                  onClick={() => setShowText(!showText)}
                >
                  {showText ? 'READ LESS' : 'READ MORE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Usa;
