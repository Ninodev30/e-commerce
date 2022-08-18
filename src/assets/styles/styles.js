import styled from "styled-components"
import ImageArrowStart from '../images/icon-previous.svg';
import ImageArrowStartOrange from '../images/icon-previous-orange.svg';
import ImageArrowEnd from '../images/icon-next.svg';
import ImageArrowEndOrange from '../images/icon-next-orange.svg';

// MOBILE FIRST

export const Nav = styled.header`
    height:7vh;
    width: 80vw;
    display:flex;
    align-items:center;
    justify-content: space-between ;
    padding:0 5%;
    @media(min-width: 1024px){
        padding:0;
    }
    #desktopHeaderSubtitles{
        width: 60%;
        display: none;
        font-size: 0.8rem;
        margin-left: 2rem;
        h2{
            margin: 0.5rem;
        }
    }
    div{
        #menu{
            width: 1.2rem;
            margin-right:0.5rem;
        }
        .title{
            width:10rem;
            cursor: pointer;
        }
        #cart{
            cursor: pointer;
        }
    }
    div + div{
        display: flex;
        align-items:center;
        justify-content: space-between;
        #containerHeaderEnd{
            display: flex;
        }
        img{
            width:1.5rem;
            &:active{
                filter:brightness(0.2)
            }
        }
        #avatar:hover{
            border:3px solid hsl(26, 100%, 55%);
            border-radius: 50%;
        }
        
        #numberOfItens{
            height:0.7rem;
            width:0.9rem;
            background-color: hsl(26, 100%, 55%);
            color:hsl(223, 64%, 98%);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            position: relative;
            bottom:0.3vh;
            right:calc(1vh + 5px);
            font-size: 0.6rem;
        }
    }
    .modal{
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.25);
        position: absolute;
        top:0;
        left:0;
        section{
            height:100%;
            width:70%;
            background-color: white;
            img{
                width:1.5rem;
                margin:2rem;
                margin-bottom: 5rem;
                cursor: pointer;
            }
            h2{
                font-size: 2rem;
                margin:0 0 2rem 2rem;
                cursor: pointer;
            }
        }
    }
`

export const CarouselContainer = styled.div`
    #carousel{
        #imageMain{
        height: 45vh;
        width: 100%;
        }
        #thumbnails{
            height:7rem;
            width:26rem;
            display: none;
            align-items: flex-end;
            justify-content: space-between;
        }
    }
    #carouselDesktop{
        display:none;
    }
     span{
        height:3rem;
        width:3rem;
        background-color: white;
        display: flex;
        align-items:center;
        justify-content: center;
        position: absolute;
        top: calc(25px + 24vh);
        font-size: 4rem;
        border-radius: 50%;
        cursor: pointer;
        #arrowStart,
        #arrowEnd{
            width:1.2rem;
            height:1.2rem;
            background-size:contain;
        }
        #arrowStart{
            background: url(${ImageArrowStart}) no-repeat;
            &:active{
                background: url(${ImageArrowStartOrange}) no-repeat;
            }
        }
        #arrowEnd{
            background: url(${ImageArrowEnd}) no-repeat;
            &:active{
                background: url(${ImageArrowEndOrange}) no-repeat;
            }
        }
    }
    .left{
        left:0;
    }
    .right{
        right:0;
    }
`

export const ThumbContainer = styled.div`
    height: 5.5rem;
    width: 5.5rem;
    background-color: white;
    border-radius: 8%;
    border: ${props => props.border ? "3px solid hsl(26, 100%, 55%)" : "none"};
`

export const Thumbnails = styled.img`
    height:100%;
    filter: ${props => props.opacity ? "opacity(30%)" : "opacity(100%)"};
    border: ${props => props.border ? "3px solid hsl(26, 100%, 55%)" : "none"};
    border-radius:8%;
    cursor: pointer;
    &:active{
        filter:opacity(30%);
    }
`

export const SectionContainer = styled.section`
    padding:4% 5%;
    h3{
        color:hsl(26, 100%, 55%);
        font-size:0.7rem;
        text-transform:uppercase;
    }
    h1{
        color:hsl(220, 13%, 13%);
        font-size:1.8rem;
        line-height: 2.5rem;
        padding:1rem 0;
    }
    .text{
        color:hsl(219, 9%, 45%);
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        padding:4% 0;
        p:nth-child(1){
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            font-weight: bold;
            span{
                height:1.5rem;
                width:3rem;
                background-color: hsl(25, 100%, 94%);
                color:hsl(26, 100%, 55%);
                display: flex;
                align-items: center;
                justify-content:center;
                font-size: 1rem;
                margin-left: 0.8rem;
                border-radius: 5px;
            }
        }
        p:nth-child(2){
            color:hsl(220, 14%, 75%);
            font-size: 1.2rem;
            text-decoration: line-through;
        }
    }
    #containerForBuy{
        display: flex;
        flex-direction:column;
        .amountContainer{
            height: 3rem;
            width: 100%;
            background-color: hsl(223, 64%, 98%);
            padding:0 5%;
            border-radius: 10px;
            font-size:1.5rem;
        div{
            color:hsl(220, 13%, 13%);
        }
        span{
            color:hsl(26, 100%, 55%);
            cursor: pointer;
            &:active{
                opacity: 50%;
            }
        }
        }
        button{
            height: 3rem;
            width: 100%;
            background-color: hsl(26, 100%, 55%);
            color:white;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 10px;
            margin-top:0.7rem;
            cursor: pointer;
            font-size: 0.8rem;
            font-weight: bold;
            &:active{
                opacity: 50%;
            }
            img{
                width: 1.3rem;
                margin-right: 0.5rem;
            }
        }
    }

`

export const CartContainer = styled.section`
section{
    display: none; //block
    height: calc(20vh + 10vw);
    width: 90%;
    background-color: white;
    position: absolute;
    top:27%;
    left:50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0 15px 25px -10px hsl(219, 9%, 45%);;
    @media(min-width: 1024px){
        height: 30vh;
        width: 30vw;
        top: 25%;
        left: 80%;
    }
    h2{
        color:hsl(220, 13%, 13%);
        font-size: 1.2rem;
        padding:1rem;
        margin-bottom:0.5rem;
    }
    h3{
        color: hsl(219, 9%, 45%);
        font-size:1.2rem;
        position: absolute;
        transform: translate(-50% ,-50%);
        top:60%;
        left:50%;
    }
    div{
        height:20%;
        width: 80%;
        display: flex;
        align-items:center;
        justify-content: space-around;
        margin: calc(10px + 0.8vh + 0.8vw) auto;
        font-size: 1.2rem;
        font-weight: 900;
        #product{
            height: 100%;
            width: 20%;
        }
        div{
            height:90%;
            width:65%;
            color:hsl(219, 9%, 45%);
            align-items: flex-start;
            flex-direction: column;
            font-size:1rem;
            font-weight: 400;
            p{
                color:black;
                display: inline-block;
                padding-left: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
            }
        }
        #trashCan{
            height:40%;
            width:5%;
            cursor: pointer;
        }
    }
    div + div{
        background-color: hsl(26, 100%, 55%);
        color:hsl(223, 64%, 98%);
        justify-content: center;
        border-radius: 10px;
        cursor: pointer;
    }
}
`