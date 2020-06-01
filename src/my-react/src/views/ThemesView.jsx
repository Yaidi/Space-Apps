import React from 'react';
import Header from '../components/ThemesView/HeaderComponent';
import Content from '../components/ThemesView/ContentComponent';
import Footer from '../components/ThemesView/FooterComponent';

const ThemesView = () => {
    return(
        <div className={"container"}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default ThemesView;