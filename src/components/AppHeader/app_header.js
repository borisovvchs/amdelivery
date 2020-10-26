import React from 'react';
import styled from 'styled-components';
import './app_header.sass';
import logo from '../../img/AmD3.jpg';
import geoIcon from '../../img/geo_icon.png';

/* Styled components */
const appHeader = styled.div`
    position: fixed;
    display: flex;
    justify-content: flex-start;
    height: 70px;
    z-index: 10;
    background-color: #fff;
`

const Logo = styled.div`
    border-right: 1px solid #e3e4e6;
    border-bottom: 1px solid #e3e4e6;
    width: 192px;
    text-align: center;
    padding-top: 10px;
`

const LogoImg = styled.img`
    width: 170px;
`

const City = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 810px;
    align-items: center;
    border-right: 1px solid #e3e4e6;
    border-bottom: 1px solid #e3e4e6;
    padding-left: 36px;
`

const CityName = styled.div`
    margin-left: 14px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;

    &:hover {
        color: #9b9b9d;
    }
`

const DeliveryTime = styled.div`
    margin-left: 544px;
    background-color: #f6f6f6;
    height: 24px;
    width: 91px;
    border-radius: 4px;
    padding-left: 8px;
    line-height: 22px;
    cursor: pointer;
`

const DeliveryTimeSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    color: #97a8be;
    font-size: 12px;

    &::after {
        content: "▽";
        font-size: 16px;
        margin-left: 18px;
    }
`

const LoginButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    border-right: 1px solid #e3e4e6;
    border-bottom: 1px solid #e3e4e6;
    text-align: center;
    cursor: pointer;
`

const LoginButtonSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    &::before {
        position: absolute;
        content: url('../../img/login_icon.png');
        left: 1037px;
        top: 21px;
    }
`

const CartIcon = styled.div`
    display: flex;
    width: 180px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const CartIconSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    &::before {
        position: absolute;
        content: url('../../img/cart_icon.png');
        left: 1204px;
        top: 21px;
    }
`
/* Styled components */


const AppHeader = () => {
    return (
        <div>
            <appHeader>
                <appHeaderLogo>
                    <img src={logo} alt="logo"/>
                </appHeaderLogo>
            </appHeader>

            <City>
                <img src={geoIcon} alt="geo_icon"/>
                <CityName> г. Крымск </CityName>
                <DeliveryTime>
                    <DeliveryTimeSpan> Сейчас </DeliveryTimeSpan>
                </DeliveryTime>
            </City>

            <LoginButton>
                <LoginButtonSpan> Войти </LoginButtonSpan>
            </LoginButton>

            <CartIcon>
                <CartIconSpan> Корзина </CartIconSpan>
            </CartIcon>
        </div>
    )
}


export default AppHeader;