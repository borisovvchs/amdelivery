import React from 'react';
import StartPage from './components/startPage';
import AppHeader from './components/AppHeader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './components/Cart';
import './App.sass';
import RestaurantInfo from './components/RestaurantInfo';
import MenuList from './components/MenuList';
import ModalAddingToCart from './components/modalAddingToCart';
import {getDataFromServer} from './actions/itemActions.js';
import data from './data.js';

const App = ({loadingDataIsOver, citySelected, getDataFromServer, idItemForAdding}) => {
  getDataFromServer(data);
  const modalWithItem = (idItemForAdding !== null) ? <ModalAddingToCart/> : null;
  const renderedItem = (citySelected === true && loadingDataIsOver === true) ? (
  <>
    <AppHeader/>
    <Cart/>
    <RestaurantInfo/>
    <MenuList/>
    {modalWithItem}
  </>
  
  ) : <StartPage/>;

  return (
    <>
      {renderedItem}
    </>
  );
}

App.propTypes = {
    loadingDataIsOver: PropTypes.bool.isRequired,
    citySelected: PropTypes.bool.isRequired,
    getDataFromServer: PropTypes.func.isRequired,
    idItemForAdding: PropTypes.string
}


const mapStateToProps = ( {loadingDataIsOver, citySelected, idItemForAdding} ) => {
      return {
        loadingDataIsOver,
        citySelected,
        idItemForAdding
      }
}



export default connect(mapStateToProps, {getDataFromServer})(App);
