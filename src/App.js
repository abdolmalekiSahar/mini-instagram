import React from 'react';
import './App.scss';
import { SigninPage,SignupPage,ProfilePage,EditProfilePage,NewPostPage,PostPage,OthersProfilePage,EditPostPage} from './_pages';
import { BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import {PrivateRoute} from './_routes/privateRoute';
import {history} from './_helpers/history';
import {connect} from 'react-redux';

function App ({user}){
    return <Router history={history}>
      <Switch>
      <Route path='/signin' exact component = {SigninPage}/>
      <Route path='/signup' exact component={SignupPage}/>
      {/* <PrivateRoute path='/' isAthenticated = {!!user} exact component = {ProfilePage}/> */}
      <Route path='/profile' exact component = {ProfilePage}/>
      <Route path='/editprofile' exact component = {EditProfilePage}/>
      <Route path='/newpost' exact component = {NewPostPage}/>
      <Route path='/post' exact component = {PostPage}/>
      <Route path='/othersprofile' exact component = {OthersProfilePage}/>
      <Route path='/editpost' exact component = {EditPostPage}/>
      </Switch>
    </Router>
  }

const mapStateToProps = state =>{
  const {user} = state.authentication;
  return { user };
}

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;