import React, { Component } from 'react';
import Footer from './footerComponent';
import Header from './headerComponent';
import Home from './homeComponent';
import AboutUs from './aboutUsComponent.js';
import Menu from './menuComponent.js';
import Contact from './contactComponent.js';
import DetallePlato from './dishDetailComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchComments, fetchDishes, fetchPromos } from '../redux/actionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    platos: state.platos,
    leaders: state.leaders,
    promos: state.promos,
    comentarios: state.comentarios
  }
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (platoId, valoracion, autor, mensaje) => dispatch(
    postComment(platoId, valoracion, autor, mensaje)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchComments: () => {dispatch(fetchComments())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
})

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render(){

    const HomePage = () => {
      return(
        <Home plato={this.props.platos.platos.filter((plato) => plato.feature)[0]}
          dishesLoading={this.props.platos.isLoading}
          dishesErrMess={this.props.platos.errMess}
          leader={this.props.leaders.filter((leader) => leader.feature)[0]}
          promo={this.props.promos.promos.filter((promo) => promo.feature)[0]}
          promosLoading={this.props.promos.isLoading}
          promosErrMess={this.props.promos.errMess}
        />
      )
    }

    const PlatoConId = ({match}) => {
      return(
        <DetallePlato plato={this.props.platos.platos.filter((plato) => plato.id === parseInt(match.params.idPlato, 10))[0]} 
          isLoading={this.props.platos.isLoading}
          errMess={this.props.platos.errMess}
          comments={this.props.comentarios.comentarios.filter((comment) => comment.platoId === parseInt(match.params.idPlato, 10))}
          commentsErrMess={this.props.comentarios.errMess}
          postComment={this.props.postComment}
        />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu platos={this.props.platos} />} />
          <Route path="/menu/:idPlato" component={PlatoConId} />
          <Route exact path="/contactus" component={ () =>  <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
          <Route exact path="/aboutus" component={() => <AboutUs lideres={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
