import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import Profile from './components/Profile';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import AlbumCarousel from './components/AlbumCarousel';
import Authenticate from './components/Authentication';

const Routes = () => {
    return <Router>
        <Route exact path="/" render={()=> <Redirect to="/facebook-albums" />} />
        <Route path="/facebook-albums" render={(props) =>
        <Layout Params={props}>
            <Route exact path='/facebook-albums/profile' component={Authenticate(Profile)} ></Route>
            <Route exact path='/facebook-albums/albums' component={Authenticate(Albums)} ></Route>
            <Route exact path='/facebook-albums/albums/:identifier' component={Authenticate(AlbumDetails)}></Route>
            <Route exact path='/facebook-albums/albums/:identifier/slideshow' component={Authenticate(AlbumCarousel)}></Route>
        </Layout>}>
        </Route>
    </Router>
}

export default Routes;