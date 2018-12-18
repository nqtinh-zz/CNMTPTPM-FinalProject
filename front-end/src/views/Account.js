import React, { Component } from 'react';
import Account from '../components/Account/account';
import { Helmet } from 'react-helmet';
import InfoAccount from '../components/Profile/info_account';
class PayMent extends Component {

    render() {
        return (
            <div id="page-contents">
                <Helmet>
                    <title>Payment</title>
                </Helmet>
                <div className="row">
                    
                     <div className="col-md-3">
                     </div>
                    <Account />
                    {/* <div className="col-md-2 static">History</div> */}
                </div>
            </div>

        );
    }
}

export default PayMent;
