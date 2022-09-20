import React from 'react'
import "./Slider.scss"

function Slider(props) {
    const slideLeft = () => {
        var slider = document.getElementById('slider-container');
        slider.scrollLeft = slider.scrollLeft - 300;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider-container');
        slider.scrollLeft = slider.scrollLeft + 300;
    }

    return (
        <div className="testimonials">
            <div className="left">
                <img src="./Assets/speaker.svg" alt="" />
                <h2>{props.heading}</h2>
                <div className="controls">
                    <div className="prev round" onClick={() => slideLeft()}><i class="bi bi-arrow-left-circle"></i></div>
                    <div className="next round" onClick={() => slideRight()}><i class="bi bi-arrow-right-circle"></i></div>
                </div>
            </div>
            <div className="right" id="slider-container">

                {
                    props.data.rows.map((data, key) => {
                        return <div className="item">
                            <h2>{data.title}</h2>
                            <p>"{data.description}"</p>
                            <i className='highlighted_text'>- {data.name}</i>
                            <h6>{data.store}</h6>
                        </div>
                    })
                }

                {/* 
                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div>

                <div className="item">
                    <h2>“Good going guys, I am loving it."</h2>
                    <p>"I’ve been using this app for a few days now and I am shocked after seeing the offers and
                        that too with no upper limit. Also, the most amazing thing I feel is that there is a lot
                        less delivery charge for any order. Good going guys, I am loving it.”</p>
                    <i className='highlighted_text'>- Bhavna Gupta</i>
                </div> */}

            </div>
        </div>

    )
}

export default Slider