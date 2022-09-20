import React from 'react'

const Topbar = () => {
    return (
        <section className=" relative hidden md:flex flex-row justify-center items-center bg-[#000000]  py-2">
            <h2 className="md:text-[16px] lg:text-[20px] text-[white]">
                🎉 Groyyo has raised $40M in series A led by Tiger Global 🎉
            </h2>
            <a
                target="_blank"
                className="text-[white] pl-4"
                href="https://www.businesstoday.in/entrepreneurship/news/story/b2b-manufacturing-startup-groyyo-raises-40-mn-in-round-led-by-tiger-global-337647-2022-06-15"
            >
                <button className="bg-[#e14444] rounded-lg p-2">
                    <p className="md:text-[18px] lg:text-[20px] "> Read More</p>
                </button>
            </a>
            <button className="absolute md:right-[30px] lg:right-[170px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
        </section>

    )
}

export default Topbar