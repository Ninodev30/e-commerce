import React, { useState } from 'react';
import { CarouselContainer } from '../styles/styles';
import { ThumbContainer } from '../styles/styles';
import { Thumbnails } from '../styles/styles';
import Image0 from '../images/image-product-1.jpg'
import Image1 from '../images/image-product-2.jpg'
import Image2 from '../images/image-product-3.jpg'
import Image3 from '../images/image-product-4.jpg'
import Image0Thumbnail from '../images/image-product-1-thumbnail.jpg'
import Image1Thumbnail from '../images/image-product-2-thumbnail.jpg'
import Image2Thumbnail from '../images/image-product-3-thumbnail.jpg'
import Image3Thumbnail from '../images/image-product-4-thumbnail.jpg'

const Carousel = () => {

    const [centralImage, setCentralImage] = useState(0);
    const [viewModal, setViewModal] = useState(false);

    const showModal = () => {
        setViewModal(true);
    }

    const hideModal = () => {
        setViewModal(false);
    }

    const clickOutModal = (event) => {

        const modalDesktop = document.getElementById("modalDesktop");
        const carouselContainer = document.getElementById("carouselContainer");

        if (event.target === modalDesktop && event.target.parentNode === carouselContainer) {
            hideModal();
        }

    }

    const Images = [
        Image0,
        Image1,
        Image2,
        Image3
    ]

    const ImagesThumbnails = [
        Image0Thumbnail,
        Image1Thumbnail,
        Image2Thumbnail,
        Image3Thumbnail
    ]

    const renderImagesThumbnails = (numberOfImage) => {

        if (centralImage === numberOfImage) {
            return (

                <ThumbContainer border>

                    <Thumbnails opacity="true" src={ImagesThumbnails[numberOfImage]}
                        onClick={() => {
                            setCentralImage(numberOfImage);
                        }}></Thumbnails>

                </ThumbContainer>

            )
        }
        else {
            return (

                <ThumbContainer>

                    <Thumbnails src={ImagesThumbnails[numberOfImage]}
                        onClick={() => {
                            setCentralImage(numberOfImage);
                        }}></Thumbnails>

                </ThumbContainer>

            )
        }

    }

    const carouselScript = (lifeOfModal) => {

        return (

            <div id="carousel">

                <img id='imageMain' src={Images[lifeOfModal]} alt="main" onClick={() => {
                    if (window.matchMedia("(min-width: 1024px)").matches) {
                        showModal();
                    }
                }}></img>

                <div id="thumbnails">

                    {renderImagesThumbnails(0)}
                    {renderImagesThumbnails(1)}
                    {renderImagesThumbnails(2)}
                    {renderImagesThumbnails(3)}

                </div>

            </div>

        )

    }

    const arrows = () => {

        return (

            <>

                <span id="containerArrowStart" className='left'
                    onClick={() => {
                        centralImage > 0 ? setCentralImage(centralImage - 1) : setCentralImage(3);
                    }}>
                    <div id="arrowStart"></div>
                </span>

                <span id="containerArrowEnd" className='right'
                    onClick={() => {
                        centralImage < 3 ? setCentralImage(centralImage + 1) : setCentralImage(0);
                    }}>
                    <div id="arrowEnd"></div>
                </span>

            </>

        )

    }

    return (

        <>

            <CarouselContainer id="carouselContainer" onMouseUp={clickOutModal}>

                <div>
                    {
                        viewModal === true ? (
                            carouselScript(0)
                        ) : (
                            carouselScript(centralImage)
                        )
                    }
                </div>

                {arrows()}

                <div id='modalDesktop'
                    style={viewModal === true ? { display: "flex" } : { display: "none" }}>

                    <div className='modalDesktop-container'>

                        <div id="closeContainer" onClick={hideModal}></div>

                        <div className='modal-roll'>

                            {carouselScript(centralImage)}
                            {arrows()}

                        </div>

                    </div>

                </div>

            </CarouselContainer>

        </>

    )

}

export default Carousel;