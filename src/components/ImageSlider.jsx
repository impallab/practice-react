import React, { useEffect, useState } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import images from '../const';

export default function ImageSlider() {
    const [index, setIndex] = useState(0)


    // for automatic slider movement:
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index) => (index + 1) % images.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [index])

    return (

        <div style={{ display: "flex", padding: "40px", border: ["2px solid cyan"], borderRadius: "2%", backgroundColor: "gray" }} >
            <button style={{ backgroundColor: "transparent", outline: "none", height: "500px", width: "auto" }}
                onClick={() => setIndex((index - 1 + images.length) % images.length)}
            >
                <GrLinkPrevious style={{ backgroundColor: "black", border: "3px solid cyan", padding: "22px", marginRight: "30px", borderTopLeftRadius: "50%", borderBottomLeftRadius: "50%" }} />
            </button>

            {/* <img  style={{
                        border: "0.5px solid cyan",
                        borderRadius: '2%',
                        height: "500px",
                        width: "1100px",
                        objectFit: "contain",
                        padding: "2px",
                        boxShadow: "18px 16px 7px black"}} src={images[index]} alt='img-${index}'/> */}

            {/* To prevent extra re-rendering of same image : */}

            {
                images.map((url, i) => (
                    <img key={url} style={{
                        border: "0.5px solid cyan",
                        borderRadius: '2%',
                        height: "500px",
                        width: "1100px",
                        objectFit: "cover",
                        padding: "2px",
                        boxShadow: "18px 16px 7px black",
                        display: index == i ? "block" : "none",
                        // transition: 'opacity 1s ease'
                    }} src={images[index]} alt='img' />
                ))
            }

            <button style={{ backgroundColor: "transparent", outline: "none" }}
                onClick={() => setIndex((index + 1) % images.length)}
            >
                <GrLinkNext style={{ backgroundColor: "black", border: "3px solid cyan", padding: "22px", marginLeft: "30px", borderTopRightRadius: "50%", borderBottomRightRadius: "50%" }} />
            </button>

        </div>
    )
}

