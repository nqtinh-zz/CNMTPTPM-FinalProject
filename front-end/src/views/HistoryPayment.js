import React, { Component } from 'react';
import PaymentHistory from '../components/Payment/paymentHistory';
import { Helmet } from 'react-helmet';
import MenuTimeline from '../components/Menu/menuTimeline';

class HistoryPayment extends Component {

    render() {
        return (
            <div className="container">
                <div className="timeline">
                    <MenuTimeline />
                    <div id="page-contents">
                        <Helmet>
                            <title>Payment</title>
                        </Helmet>
                        <div className="row">
                            {/*<InfoAccount />*/}
                            <div className="col-md-3">
                            </div>
                            <PaymentHistory />
                            {/* <div className="col-md-2 static">History</div> */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HistoryPayment;
