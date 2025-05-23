"use client";

import { ColumnsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import {
    Fullscreen,
    Thumbnails,
    Zoom,
} from "yet-another-react-lightbox/plugins";
import { useState } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-photo-album/styles.css";

const slides = [
    {
        src: "/images/events/inauguration/IMG_3749.jpg",
        width: 3456,
        height: 5184,
    },
    {
        src: "/images/events/inauguration/IMG_3750.jpg",
        width: 5184,
        height: 3456,
    },
    // {
    //     src: "/images/events/inauguration/IMG_3745.jpg",
    //     width: 5184,
    //     height: 3456,
    // },
    {
        src: "/images/events/inauguration/IMG_3771.jpg",
        width: 5184,
        height: 3456,
    },
    {
        src: "/images/events/inauguration/IMG_0439.JPG",
        width: 6000,
        height: 4000,
    },
    {
        src: "/images/events/inauguration/IMG_0464.JPG",
        width: 6000,
        height: 4000,
    },
    {
        src: "/images/events/inauguration/IMG_0474.JPG",
        width: 4000,
        height: 6000,
    },
    {
        src: "/images/events/inauguration/IMG_3761.jpg",
        width: 5184,
        height: 3456,
    },
    {
        src: "/images/events/inauguration/IMG_3785.jpg",
        width: 5184,
        height: 3456,
    },
    {
        src: "/images/events/inauguration/IMG_3773.jpg",
        width: 3456,
        height: 5184,
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
                }}
            />
            <Lightbox
                plugins={[Fullscreen, Zoom, Thumbnails]}
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={slides}
            />
        </div>
    );
}
