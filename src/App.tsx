import React from 'react';

import Header from './components/Header';
import FirstAndSecond from './components/FirstAndSecond';

import GlobalStyles from './styles/global';
import { Main, Section, Sticky } from './styles';
import Footer from './components/Footer';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0})
  }, [])

  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{ height: '1310vh' }}>
        <Section style={{ height: '82%'}}>
          <FirstAndSecond />
        </Section>
        <Section style={{ height: '6%'}}>
          <Third />
        </Section>
        <Section style={{ height: '6%'}}>
          <Fourth />
        </Section>
        <Section style={{ height: '6%'}}>
          <Fifth />
        </Section>
      </Main>
      

      <Footer /> 
      
    </>  
  );
  
}
var y = window.scrollY
      console.log(y);

export default App;
