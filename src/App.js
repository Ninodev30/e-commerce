import React from 'react';
import Header from './assets/components/Header';
import Carousel from './assets/components/Carousel';
import Section from './assets/components/Section';

function App() {

  return (

    <div>

      <Header></Header>

      <div id="grayLine"></div>
      <div id="container">
        <Carousel></Carousel>
        <Section></Section>
      </div>

    </div>

  )

}

export default App;