"use client";

import { ColumnsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";

const slides = [
    {
        src: "/images/misc/95066358-72f8-4973-802e-adf33bd9bf6f.png",
        width: 680,
        height: 113,
    },
    {
        src: "/images/misc/e9b1c27f-f9fd-4cc7-a174-a7f1b4ec62bf.png",
        width: 677,
        height: 166,
    },
    {
        src: "/images/misc/General_Post_3.png",
        width: 1080,
        height: 1350,
    },
    {
        src: "/images/misc/Rectangle_127.png",
        width: 1330,
        height: 1505,
    },
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <div>
            <ColumnsPhotoAlbum
                photos={slides}
                columns={2}
                onClick={({ index: current }) => {
                    setIndex(current);
                    console.log(current);
                }}
            />
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={slides}
            />
        </div>
    );
}
