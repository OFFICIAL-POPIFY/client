import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons/ti';
import React, { useState, useEffect } from 'react';
import "./Carousel.css"
import axios from "../../api/axios";

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
    <div className='card'>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    const LATEST_URL = `${process.env.REACT_APP_BASE_URL}/popups/latest`;
    const [latestData, setLatestData] = useState([]);
    // const [currentImgId, setCurrentImgId] = useState(0);
    useEffect(() => {
        axios
            .get(LATEST_URL)
            .then((response) => {
                setLatestData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='carousel'>
            {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline /></button>}
            {React.Children.map(children, (child, i) => (
                <div className='card-container' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline /></button>}
        </div >
        // </div>
    );
};


export default () => {
    return (
        <Carousel>
            {[...new Array(CARDS)].map((_, i) => (
                <Card title={'Card ' + (i + 1)} />
            ))}
        </Carousel>
    )
}