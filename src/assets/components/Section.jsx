import React, { useState } from 'react';
import { SectionContainer } from '../styles/styles';
import { CartContainer } from "../styles/styles";
import ImageCartWhite from '../images/icon-cart-white.svg';
import ImageProduct from '../images/image-product-1.jpg';
import ImageTrashCan from '../images/icon-delete.svg';

const Section = () => {

    const [numberItens, setNumberItens] = useState(1);
    const [changeLocalStorage, setChangeLocalStorage] = useState();
    const [valueOfSneaker, setValueOfSneaker] = useState(localStorage.getItem("localCart"));

    const saveCart = () => {
        localStorage.setItem("localCart", JSON.stringify(numberItens));
        document.getElementById("numberOfItens").innerHTML = localStorage.getItem("localCart");
        document.getElementById("numberOfItens").style.visibility = "visible";
        setChangeLocalStorage(true);
        setValueOfSneaker(localStorage.getItem("localCart"));
    }

    const deleteToCart = () => {
        localStorage.removeItem("localCart");
        document.getElementById("numberOfItens").style.visibility = "hidden";
        setChangeLocalStorage(false);
        setValueOfSneaker(localStorage.getItem("localCart"));
    }

    const sectionHTML = () => {
        return (
            <section id="buyContainer">
                <h2>Cart</h2>
                <hr></hr>

                <div>
                    <img src={ImageProduct} id="product" alt="imageProduct"></img>
                    <div>
                        Autumn Limited Edition...
                        <span>
                            $125.00 x {valueOfSneaker}
                            <p>${125 * valueOfSneaker}.00</p>
                        </span>
                    </div>
                    <img src={ImageTrashCan} id="trashCan" alt="imageTrashCan" onClick={deleteToCart}></img>
                </div>

                <div>Checkout</div>
            </section>
        )
    }

    return (
        <React.Fragment>
            <SectionContainer id="sectionContainer">
                <h3>sneaker company</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className='text'>
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>

                <div id="containerPrice">
                    <p>
                        ${numberItens * 125}.00
                        <span>50%</span>
                    </p>
                    <p>${numberItens * 250}.00</p>
                </div>

                <div id="containerForBuy">
                    <div className='amountContainer'>
                        <span onClick={() => {if (numberItens > 0) setNumberItens(numberItens - 1);}}>-</span>
                        <div id='numberProductsForBuy'>{numberItens}</div>
                        <span onClick={() => {setNumberItens(numberItens + 1);}}>+</span>
                    </div>

                    <button onClick={saveCart}>
                        <img src={ImageCartWhite} alt="cart"/>
                        Add to card
                    </button>
                </div>
            </SectionContainer>

            <CartContainer>
                {changeLocalStorage ? (sectionHTML()) : (localStorage.getItem("localCart") ? (sectionHTML()) : 
                        (
                            <section id="buyContainer">
                                <h2>Cart</h2>
                                <hr></hr>
                                <h3>Your cart is empty.</h3>
                            </section>
                        )
                    )
                }
            </CartContainer>
        </React.Fragment>
    )

}

export default Section;