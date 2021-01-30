import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

  return(
    <div className="footer mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="text-left" id="linksFooter">
              <Link to="/home">Inicio</Link>&nbsp;|&nbsp;
              <Link to="/aboutus">About Us</Link>&nbsp;|&nbsp;
              <Link to="/menu">Menú</Link>&nbsp;|&nbsp;
              <Link to="/contactus">Contáctanos</Link>
            </p>
          </div>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col-auto">
            <p>© Copyright 2020 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Footer;
