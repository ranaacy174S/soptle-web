import React, { useEffect } from 'react'
// import Faq from '../../Components/Faq/Faq'
import Slider from '../../components/Slider/Slider'
// import { SDP_DATA, SDP_Testimonial } from "../../Data/Data"
import "./Retailer.scss"
// import { sendAmplitudeData } from '../../utils/amplitude';

 const SDP_Testimonial = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>
      }
    ]
  };

function Retailer() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     sendAmplitudeData("LANDED_BECOMESDP_BECOMESDP", {
    //         "ACTION": "LANDED",
    //         "LOCATION": "BECOMESDP",
    //         "SCREEN": "BECOMESDP",
    //         "PLATFORM": "WEB_STATIC"
    //     })
    // }, [])
    return (
        <div className='sdp'>
            <div className="banner">
                <div className="overlay"></div>
                <div className="content">
                    <h2>
                        Start your entrepreneurship journey today!
                    </h2>
                    <p>
                        Become a Soptle Development Partner, introduce retailers in your market to the Soptle App, earn a commission on every order placed.
                    </p>
                    <a href="#form_sdp">
                        <button>
                            Join Now
                        </button>
                    </a>
                </div>

            </div>

            <div className="sec_3">
                <h2>
                    SDP 🔥<br />
                    Benefits</h2>
                <div className="content">
                    <div className="item">
                        <img src="./Assets/parto-01.svg" alt="" />
                        <h2>
                            Easy to Get Started
                        </h2>
                        <p>
                            If you are tech-savvy and a persuasive salesman, you are welcome to start your journey as an SDP.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-05.svg" alt="" />
                        <h2>
                            Wide Assortment to Sell
                        </h2>
                        <p>
                            Soptle lists popular brands across all categories that a kirana store sells.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-02.svg" alt="" />
                        <h2>
                            Generous Commission
                        </h2>
                        <p>
                            By taking all middle-men out of the transaction, Soptle guarantees generous commissions for its SDPs.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-04.svg" alt="" />
                        <h2>
                            Great Earning Potential
                        </h2>
                        <p>
                            Earn on every order from every retailer you recruit plus fees for postering, surveys, etc.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-03.svg" alt="" />
                        <h2>
                            Grow with Soptle
                        </h2>
                        <p>
                            Avail career growth training and opportunities within the Soptle team.
                        </p>
                    </div>

                    <div className="item">
                        <img src="./Assets/parto-06.svg" alt="" />
                        <h2>
                            Be your own Boss
                        </h2>
                        <p>
                            Plan your day, plan your targets, grow your business.
                        </p>
                    </div>

                </div>
            </div>

            <hr className='highlighted_divider' />

            <div className="sec_2">
                <h2>
                    Soptle Development Partner <br />
                    Requirements
                </h2>
                <div className="content">
                    <div className="left">

                        <h6 className='highlighted_text'>Requirements</h6>

                        <ul>
                            <li>At least 18 years of age.</li>
                            <li>Indian Citizen.</li>
                        </ul>

                    </div>

                    <div className="right">
                        <h6 className='highlighted_text'>Documents</h6>
                        <ul>
                            <li>Pan Card</li>
                            <li>Aadhar Card</li>
                        </ul>
                    </div>
                </div>

            </div>

            <hr className='highlighted_divider' />
            <Slider data={SDP_Testimonial} heading={"What SDPs have to say about us"} />

            {/* <Faq />             */}

            <div className="form_section" id="form_sdp">
                <div className="left">
                    <h2>
                        Let’s Get <br />Started
                    </h2>

                    <img src="./Assets/Become_sd preview.png" alt />
                </div>
                <div className="right">
                    <div className="form_div">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe91m-oXHeAamKZEWVKB46R5rYRibuaxSNbJLxoKHWHKyqHWA/viewform?embedded=true" width={640} height={915} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
                    </div>
                </div>
            </div>

            <hr />

            {/*
            <div className="faq">
                <div className="left">
                    <h2>
                        SDP's <br />FAQ
                    </h2>
                </div>
                <div className="right">
                    <div className="faq-style-wrapper">
                        <Faq data={SDP_DATA} />
                    </div>
                </div>
            </div>
            */}




        </div>
    )
}

export default Retailer
