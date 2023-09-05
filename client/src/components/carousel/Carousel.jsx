import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import "./Carousel.css"
import axios from "../../api/axios";

const CARDS = 30;
const MAX_VISIBILITY = 3;
const LATEST_URL = `${process.env.REACT_APP_BASE_URL}/popups/latest`;

const Card = ({ imageUrl }) => (
    <div className='card'>
        <img src={imageUrl} alt="Card Image" />
    </div>
);

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = CARDS;
    const [latestData, setLatestData] = useState([]);

    useEffect(() => {
        axios
            .get(LATEST_URL)
            .then((response) => {
                const imageUrls = response.data.map(data => data.popup_imgs[0]);
                setLatestData(imageUrls);
                console.log("Latest Data:", imageUrls);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div className='carousel'>
            {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><FaAngleLeft /></button>}
            {latestData.map((imageUrl, i) => (
                <div className='card-container' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>

                    <div className='card'>
                        <img
                            src={imageUrl}
                            alt={`Card ${i + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            ))}
            {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><FaAngleRight /></button>}
        </div >
    );
};

export default () => {
    return (
        <Carousel />
    )
}