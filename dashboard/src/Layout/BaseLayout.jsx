import React,{Suspense} from 'react';
import  Footer  from './Footer';
import Header  from './Header'
import  Aside  from './Aside';
import { Routes } from '../routes';
import { Route ,Switch} from 'react-router-dom'

const BaseLayout = () => {
    return (
        <React.Fragment>
            <Aside />
            <div id="right-panel" className="right-panel">
                <Header />
                <div className="content">
                    <div className="animated fadeIn">
                    <Suspense fallback={<div>Loading</div>}>
                        <Switch>
                        {
                            Routes.map((route, index) => {
                                return ((
                                    <Route
                                        path={route.path}
                                        key={index}
                                        component={route.component}
                                        exact={route.exact}
                                    />
                                ))
                            })
                        }
                        </Switch>
                        </Suspense>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default BaseLayout