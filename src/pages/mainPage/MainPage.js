import React from 'react';
import Header from "./Header";
import MainMenu from "./MainMenu";
import Novelties from "./Novelties";
import Menu from "./Menu";
import Сhoice from "./Сhoice";
import Reviews from "./Reviews";
import Footer from "./Footer";

const MainPage = () => {
    return (
        <>
            <Header/>
            <MainMenu/>
            <Novelties/>
            <Menu/>
            <Сhoice/>
            <Reviews/>
            <Footer/>
        </>
    );
};

export default MainPage;