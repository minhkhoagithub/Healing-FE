import React, { Component } from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeHeader from './homeHeader'
import section from './sections/section'; 
import Footer from './footer/footer';
import { Helmet } from 'react-helmet';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'Section'
    };
  }

  changeSection = (newSection) => {
    this.setState({ currentSection: newSection });
  }
  render() {
    let sectioncur;
    if (this.state.currentSection === 'Section') {
      sectioncur = section.Section; // Sử dụng component Section
    } else if (this.state.currentSection === 'Section3') {
      sectioncur = section.Section3; // Sử dụng component Section3
    }
    return (
      <div>
        <Helmet>
        <link rel="icon" type="image/png" href="D:\CongNgheWEB\healing_fe\public\favicon_we_healing_services.ico" sizes="16x16" />
        {/* Các thuộc tính khác của thẻ <head> nếu cần */}
        </Helmet>

        <HomeHeader/>
        <section.Section/>
        <section.Section2/>
        <section.Section3/>
        <section.Section4/>
        <Footer/>
      </div>
    );
  }
}

export default MyComponent;
