import { Container } from '@mui/material';
import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer'
function Layout({ children }) {
  return ( 
    <Fragment>
     <Container>
       <Header/>
       {children}
       
     </Container>
    <Footer/>

    </Fragment>
  );
}

export default Layout;