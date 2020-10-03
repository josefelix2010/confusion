import React from 'react';

function Footer(props) {

  return(
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center m-2">
          <div className="col-auto">
            <h5>Dirección y Contactos</h5>
            <div className="row">
              <div className="col-auto m-1">
                <p className="text-left">Paso Real #2, Torre 10 / San Diego, Carabobo / Vanezuela.</p>
                <i className="fa fa-phone fa-lg"></i>: +58 424 453 6884 <br/>
                <i className="fa fa-whatsapp fa-lg"></i>: +58 416 844 9024 <br/>
                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col-auto">
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
              <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="text-left" id="linksFooter">
              <a href="#">Inicio</a>&nbsp;|&nbsp;
              <a href="#">About Us</a>&nbsp;|&nbsp;
              <a href="#">Menú</a>&nbsp;|&nbsp;
              <a href="contactus.html">Contáctanos</a>
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
