import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

const Home = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='Home' style={{ backgroundColor: "rgb(242, 243, 247)" }}>

      {/* Section 1 */}

      <section className="max-w-[1380px] m-auto">
        <section className=" mx-[25px] lg:mx-[35px] pt-[50px] lg:pt-[120px]">
          <section
            className=" flex flex-col-reverse  lg:flex-row  items-center lg:pt-[15px] relative"
            style={{ justifyContent: "space-between", paddingTop: 25 }}
          >
            <section
              className=" sm:max-w-[363px] md:max-w-[674px] z-[0] md:z-[1]"
              style={{ position: "relative", top: "-80px" }}
            >
              <h1 className="font-bold text-2xl md:text-[26px] lg:text-[36px] pt-[20px]">
                {" "}
                Asia’s leading B2B Manufacturing Growth Platform
              </h1>
              <p className="pt-4 pb-4 text-[14px]  !font-normal  md:text-[18px] !leading-8 text-[#171717]">
                {" "}
                Our vision is to empower the 20 million+ micro-manufacturers across
                Asia and give them an opportunity to take their business global.
              </p>
              <section className="flex">
                <p className="pt-[20px] sm:pb-3 font-[600] text-[16px]  md:text-[18px] ">
                  <span className="text-#e14444-500 md:text-2xl text-xl   relative top-[2px]">
                    |
                  </span>{" "}
                  Explore Groyyo solutions
                </p>
              </section>
              <section className="hidden md:flex items-center gap-6 pt-[20px]  ">
                <section>
                  <a href="/brands">
                    <button
                      className=" flex justify-center items-center text-base font-semibold transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:!text-white hover:!bg-[#e14444] duration-300  text-[18px]  rounded-full min-w-[200px] min-h-[51px]"
                      style={{
                        backgroundColor: "white",
                        color: "#e14444",
                        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                      }}
                    >
                      <section className="flex flex-row justify-center items-center">
                        <h2 className="text-base font-semibold">For Brands</h2>
                      </section>
                    </button>
                  </a>
                </section>
                <section>
                  <a href="/factory">
                    <button
                      className=" flex justify-center items-center text-base font-semibold transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:!text-white hover:!bg-[#e14444] duration-300  text-[18px]  rounded-full min-w-[200px] min-h-[51px]"
                      style={{
                        backgroundColor: "white",
                        color: "#e14444",
                        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 6px 0px"
                      }}
                    >
                      <section className="flex flex-row justify-center items-center">
                        <h2 className="text-base font-semibold">For Factories</h2>
                      </section>
                    </button>
                  </a>
                </section>
              </section>
            </section>
            <section
              className="hidden lg:inline absolute "
              style={{ top: "-130px", right: 86 }}
            >
              <video
                width={450}
                autoPlay
                loop
                src="https://groyyo.com/_next/static/videos/tetsvid1-ec3718145f1be835a252a86a3c3e67b8.mp4"
              />
            </section>
            <section
              className="inline lg:hidden  pb-10"
              style={{ top: "-130px", right: 86 }}
            >
              <video
                width={400}
                autoPlay
                loop
                src="https://groyyo.com/_next/static/videos/tetsvid1-ec3718145f1be835a252a86a3c3e67b8.mp4"

              />
            </section>
          </section>
        </section>
      </section>


      {/* Section 2 */}

      <section style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 3px 6px 0px" }}>
        <section className=" max-w-[1380px] m-auto">
          <section className=" flex  flex-col gap-[20px] mx-[25px] lg:mx-[30px]  mt-4 pb-2  items-start md:flex-row justify-between md:items-center ">
            <section className="flex items-center justify-center gap-3  md:ml-0">
              <div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  <img
                    alt="Partner"
                    srcSet="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands_3x.fbaa4e7e.png&w=128&q=75 1x, https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands_3x.fbaa4e7e.png&w=256&q=75 2x"
                    src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands_3x.fbaa4e7e.png&w=256&q=75"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="flex flex-col items-baseline gap-1 max-w-[250px]">
                <div className="font-extrabold">
                  <h2 className="inline text-[28px] md:text-4xl font-extrabold text-[#1d1d1d]">
                    <span>470</span>+
                  </h2>
                </div>
                <h3 className="text-[14px] md:text-base md:font-semibold">
                  Partners Factories and Brands
                </h3>
              </div>
            </section>
            <section className="flex items-center justify-center gap-3  md:ml-0">
              <div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  <img
                    alt="Product"
                    srcSet="https://groyyo.com//_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands2_3x.d401bc8d.png&w=128&q=75 1x, https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands2_3x.d401bc8d.png&w=256&q=75 2x"
                    src="https://groyyo.com//_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands2_3x.d401bc8d.png&w=256&q=75"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="flex flex-col items-baseline gap-1 max-w-[250px]">
                <div className="font-extrabold">
                  <h2 className="inline text-[28px] md:text-4xl font-extrabold text-[#1d1d1d]">
                    <span>150</span>+
                  </h2>
                </div>
                <h3 className="text-[14px] md:text-base md:font-semibold">
                  Product Categories
                </h3>
              </div>
            </section>
            <section className="flex items-center justify-center gap-3  md:ml-0">
              <div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                    />
                  </span>
                  <img
                    alt="Efficiency"
                    srcSet="https://groyyo.com//_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands3_3x.a521b04e.png&w=128&q=75 1x, https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands3_3x.a521b04e.png&w=256&q=75 2x"
                    src="https://groyyo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPFBrands3_3x.a521b04e.png&w=256&q=75"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="flex flex-col items-baseline gap-1 max-w-[250px]">
                <div className="font-extrabold">
                  <h2 className="inline text-[28px] md:text-4xl font-extrabold text-[#1d1d1d]">
                    ~<span>25</span>%
                  </h2>
                </div>
                <h3 className="text-[14px] md:text-base md:font-semibold">
                  More Efficiency
                </h3>
              </div>
            </section>
          </section>
        </section>
      </section>


      {/* SECTION 3 */}

      <section className='flex bg-black w-100 px-20 py-16'>
        <div className="w-[30%] flex-col">
          <h2 className='text-white text-3xl w-100 '>Powering the global supply chain</h2>
          <p className='text-white'>A technology platform that
            powers brands, wholesalers,
            distributors, retailers, and
            factories with innovative
            products and trade services.</p>
        </div>

        <div className="w-[70%] flex flex-row justify-between">
          <div className="w-[30%]">
            <div className="card bg-[#f7f7f7] flex-col">
              <div className="card-header py-6 flex items-center bg-orange-900 w-[100%]">
                <h2 className='text-white text-center w-[100%]'>Z trade</h2>
              </div>
              <div className="card-body flex flex-col items-center justify-center">
                <p className='text-black text-center my-3'>Source custom-made appereal, fabric, yarn and more
                </p>
                <a className='text-orange-700'>zilingotrade.com</a>
                <button className='p-3 my-3 border-solid border-2 border-orange-700'>Start Sourcing</button>

              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="card bg-[#f7f7f7] flex-col">
              <div className="card-header py-6 flex items-center bg-orange-900 w-[100%]">
                <h2 className='text-white text-center w-[100%]'>Z trade</h2>
              </div>
              <div className="card-body flex flex-col items-center justify-center">
                <p className='text-black text-center my-3'>Source custom-made appereal, fabric, yarn and more
                </p>
                <a className='text-orange-700'>zilingotrade.com</a>
                <button className='p-3 my-3 border-solid border-2 border-orange-700'>Start Sourcing</button>

              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="card bg-[#f7f7f7] flex-col">
              <div className="card-header py-6 flex items-center bg-orange-900 w-[100%]">
                <h2 className='text-white text-center w-[100%]'>Z trade</h2>
              </div>
              <div className="card-body flex flex-col items-center justify-center">
                <p className='text-black text-center my-3'>Source custom-made appereal, fabric, yarn and more
                </p>
                <a className='text-orange-700'>zilingotrade.com</a>
                <button className='p-3 my-3 border-solid border-2 border-orange-700'>Start Sourcing</button>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex relative h-[100%] overflow-hidden flex-row w-[100%]">
        <img src="https://dj7u9rvtp3yka.cloudfront.net/layout/banners/promotions/ZilingoRevamp/Banner2-2p301-w2880p0-h1252p0-en_v6.jpg" className='absolute w-100%' alt="" />
        <div className='w-[50%] px-20 py-16 z-[100]'>
          <h2>Source custom-made apparel,
            fabric, yarn and more</h2>
          <h3>
            Source from our trusted manufacturers and suppliers in Bangladesh,
            India, Sri Lanka, Thailand, Indonesia, Vietnam & more regions
          </h3>
          <ul className='list-inside list-disc'>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>

          </ul>
          <p>Low MDQ | Quick Turnaround Time | Wide Price Range | Multiple Categories</p>

          <button className='font-bold'>
            Source Now
          </button>
        </div>
        <div className='w-[50%]'>

        </div>
      </section>

      {/* SECTION 5 */}
      <section className="flex relative h-[100%] overflow-hidden flex-row w-[100%]">
        <img src="https://dj7u9rvtp3yka.cloudfront.net/layout/banners/promotions/ZilingoRevamp/Banner6-2p301-w2880p0-h1252p0-en_v6.png" className='absolute w-[100]%' alt="" />
        <div className="w-[50%]"></div>
        <div className='w-[50%] px-20 py-16 z-[100]'>
          <h2>Source custom-made apparel,
            fabric, yarn and more</h2>
          <h3>
            Source from our trusted manufacturers and suppliers in Bangladesh,
            India, Sri Lanka, Thailand, Indonesia, Vietnam & more regions
          </h3>
          <ul className='list-inside list-disc'>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>
            <li>Brands can launch collection faster with less hassle</li>

          </ul>
          <p>Low MDQ | Quick Turnaround Time | Wide Price Range | Multiple Categories</p>

          <button className='font-bold'>
            Source Now
          </button>
        </div>
      </section>


      {/* SECTION 6 */}
      
      <section className="flex flex-col px-20 py-16">
        <h2 className='text-center text-3xl'>Our Presence</h2>

      </section>


    </div>
  )
}

export default Home