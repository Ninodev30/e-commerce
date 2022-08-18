import { createGlobalStyle } from 'styled-components'
import IconClose from '../images/icon-close.svg';
import IconCloseOrange from '../images/icon-close-orange.svg';

// Global styles and media queries

const GlobalStyle = createGlobalStyle`

    * {
        padding:0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }

    body{
        display: flex;
        justify-content: center;
    }

    #root{
        max-width: 480px;
        position: relative;
        @media(min-width: 1024px){
           max-width: 100vw !important;
           position: static !important;
        }
    }

    #grayLine{
        display: none;
    }

    @media (min-width: 1024px) {
        header{
            padding:7vh 0 !important;
            #menu{
                display: none;
            }
            #desktopHeaderSubtitles{
                width:45%;
                color:hsl(220, 14%, 75%);
                display: flex !important;
                justify-content:space-evenly;
                margin-right: 25%;
                cursor: pointer;
                h2:active{
                    color:hsl(219, 9%, 45%);
                    padding: 6vh 0 5.5vh 0; 
                    border-bottom: 0.5vh solid hsl(26, 100%, 55%);
                }
            }
            #avatar{
                margin-left:2vw;
                width:3rem;
            }
        }
        #grayLine{
            display: block;
            height:0.2vh;
            width:100%;
            background-color: hsl(220, 14%, 75%);
        }
        #container{
            display: flex;
            justify-content: space-around;
            margin-top:7vh;
            #carousel{
                #imageMain{
                    height:26rem !important;
                    width:26rem !important;
                    border-radius:3%;
                    cursor: pointer;
                }
                #thumbnails{
                    display: flex !important;
                }
            }
            #sectionContainer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width:45vw;
                h3{
                    font-size: 1.2rem;
                }
                h1{
                    font-size: 2.7rem;
                    line-height: 3.3rem;
                    margin-bottom: 1rem;
                }
                .text{
                    font-size: 1.3rem;
                }
                #containerPrice{
                    height: 8rem;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-evenly !important;
                    p:nth-child(1){
                        margin:0.3rem 0;
                        span{
                            margin:0.3rem 0;
                        }
                    }
                }
                #containerForBuy{
                    flex-direction:row !important;
                    .amountContainer{
                        width:35% !important;
                    }
                    button{
                        width: 60% !important;
                        margin-top:0;
                    }
                }
            }
        }
        #modalDesktop{
            height: 100vh;
            width: 100vw;
            position: absolute;
            top:0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            background-color: rgba(0,0,0,0.75);
            .modalDesktop-container{
                width: 28rem;
                display: flex;
                flex-direction: column;
                align-items:center;
                justify-content: center;
                #closeContainer{
                    width:1.5rem;
                    height:1.5rem;
                    background: url(${IconClose}) no-repeat;
                    align-self: flex-end;
                    margin-bottom: 3vh;
                    cursor: pointer;
                    &:active{
                        background: url(${IconCloseOrange}) no-repeat;
                    }
                }
                .modal-roll{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    #containerArrowStart{
                        order: -1;
                    }
                    #containerArrowEnd{
                        order: 1;
                    }
                }
                span{
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    position: static !important;
                    margin-bottom: 15vh;
                }
            }
        }
        #containerArrowStart
        ,#containerArrowEnd{
            display: none !important;
        }
    }
    
`

export default GlobalStyle;