import React, { useEffect, useState } from 'react';
import { Nav } from '../styles/styles';
import ImageTitle from '../images/logo.svg'
import ImageMenu from '../images/icon-menu.svg';
import IconCloseBlack from '../images/icon-close-black.svg';
import ImageCart from '../images/icon-cart.svg';
import ImageAvatar from '../images/image-avatar.png';

const Header = () => {

    const [viewModal, setViewModal] = useState(false);

    useEffect(() => {

        if (viewModal === true) {
            document.getElementById("containerArrowStart").style.display = "none";
            document.getElementById("containerArrowEnd").style.display = "none";
        }
        else {
            document.getElementById("containerArrowStart").style.display = "flex";
            document.getElementById("containerArrowEnd").style.display = "flex";
        }

    })

    const showModal = () => {
        setViewModal(true);
    }

    const hideModal = () => {
        setViewModal(false);
    }

    const clickOutModal = (event) => {

        const headerContainer = document.getElementById("headerContainer");
        const modalContainer = document.getElementById("modalContainer");

        if (event.target !== modalContainer && event.target.parentNode === headerContainer) {
            hideModal();
        }

    }

    let x = 0;

    const showCart = () => {

        const buyContainer = document.getElementById("buyContainer");
        x % 2 === 0 ? buyContainer.style.display = "block" : buyContainer.style.display = "none"
        x++;

    }

    return (

        <Nav id="headerContainer" onMouseUp={clickOutModal}>

            <div>

                <img src={ImageMenu} alt="menu" onClick={showModal} id="menu"></img>
                <img className='title' src={ImageTitle} alt="title"></img>

            </div>

            <div id="desktopHeaderSubtitles">

                <h2>Collections</h2>
                <h2>Men</h2>
                <h2>Women</h2>
                <h2>About</h2>
                <h2>Contact</h2>

            </div>

            <div>

                <div id="containerHeaderEnd">

                    <img src={ImageCart} alt="cart" id="cart" onClick={showCart}></img>
                    <div id="numberOfItens"
                        style={localStorage.getItem("localCart") ? { visibility: "visible" } : { visibility: "hidden" }}>
                        {localStorage.getItem("localCart")}
                    </div>

                </div>

                <img src={ImageAvatar} alt="avatar" id="avatar"></img>

            </div>


            <div className='modal'
                style={viewModal === true ? { display: "flex" } : { display: "none" }}>

                <section id="modalContainer">

                    <img src={IconCloseBlack} onClick={hideModal} alt="closeIcon"></img>
                    <h2>Collections</h2>
                    <h2>Men</h2>
                    <h2>Women</h2>
                    <h2>About</h2>
                    <h2>Contact</h2>

                </section>

            </div>

        </Nav>

    )

}

export default Header;