import React, { Component } from 'react';
import Header from './components/header/header'
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header header="Мой первый сайт" sidebar1="Главная" sidebar2="О нас" sidebar3="Новости" sidebar4="Контакты" link1="http://localhost:3000/Home" link2="http://localhost:3000/Abouts" link3="http://localhost:3000/News" link4="http://localhost:3000/Contacts"/>
        <Sidebar sidebar1="Главная" sidebar2="О нас" sidebar3="Новости" sidebar4="Контакты" link1="http://localhost:3000/Home" link2="http://localhost:3000/Abouts" link3="http://localhost:3000/News" link4="http://localhost:3000/Contacts"/>
        <Content content="Контент:  " link="http://wallpapers-image.ru/1920x1080/nature/wallpapers/nature-images-1920x1080-26.jpg"/>
        <Footer footer="CopyRight ©2019"/>
      </div>
    );
  }
}

export default App;
