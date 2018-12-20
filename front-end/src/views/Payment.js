import React, { Component } from 'react';
import Payment from '../components/Payment/payment';
import { Helmet } from 'react-helmet';
class PayMent extends Component {

    render() {
        return (
            <div id="page-contents">
                <Helmet>
                    <title>Payment</title>
                </Helmet>
                <div className="row">
                    {/*<InfoAccount />*/}
                     <div className="col-md-3">
                     </div>
                    <Payment />
                    {/* <div className="col-md-2 static">History</div> */}
                </div>
            </div>

        );
    }
}

export default PayMent;
