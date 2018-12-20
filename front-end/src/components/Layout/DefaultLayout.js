import React, { Component, Suspense } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

import { Route,Redirect } from 'react-router-dom';
import routes from '../../routes';
import MenuTimeline from '../Menu/menuTimeline'
class DefaultLayout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <MenuTimeline />
                        <Suspense fallback={this.loading()}>
                                {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                            <route.component {...props} />
                                        )} />
                                    ) : (null);
                                })}
                                <Redirect from="/" to="/tweets" />
                        </Suspense>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default DefaultLayout;