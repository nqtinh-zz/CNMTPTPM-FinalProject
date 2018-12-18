import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendPayment} from '../../actions/Payment/sendPaymentAction';
class Payment extends Component {

	constructor(props) {
        super(props);
        this.state = {
			publickey:'',
			amount:0,
			privatekey:'',
        }
	}
	
	onHandleChange=(event)=> {
		var target=event.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]:value
		});
    }

    onHandleSubmit=(event)=>{
        event.preventDefault();
		console.log(this.state);
		this.props.sendPayment(this.state);
	}
	
  render() {
    return (
      <div>
      	
      	<div className="col-md-7 basicinfo" >
                     
	            <div className="edit-profile-container">
	                <div className="block-title">
	                	<br></br>
	                    <h4 className="grey"><i className="icon ion-android-checkmark-circle"></i>Payment</h4>
	                    {/*<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>*/}
	                    <div className="line"></div>
	                </div>
	                <div className="edit-block">
	                    <form onSubmit={this.onHandleSubmit}  id="basic-info" className="form-inline">
	                        <div className="row">
	                            <div className="form-group col-xs-10">
	                                <label for="publickey">Public Key</label>
	                                <input onChange={this.onHandleChange} id="publickey" className="form-control input-group-lg" type="text" name="publickey" title="Enter public key" placeholder='Gxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'  />
	                            </div>
	                            
	                        </div>
							<br></br>
	                        <div className="row">
	                            <div className="form-group col-xs-10">
	                                <label for="email">Amount</label>
	                                <input onChange={this.onHandleChange} id="amount" className="form-control input-group-lg" type="number" name="amount" title="Enter amount" placeholder="1000"  />
	                            </div>
	                        </div>
	                        <br></br>
							<div className="row">
	                            <div className="form-group col-xs-10">
	                                <label for="email">Private Key</label>
	                                <input onChange={this.onHandleChange} id="privatekey" className="form-control input-group-lg" type="password" name="privatekey" title="Enter private key" placeholder="Sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  />
	                            </div>
	                        </div>
	                        <br></br>
	                        <br></br>
							
	                        <button type="submit" className="btn btn-primary">Payment</button>
	                    </form>
	                </div>
	            </div>
	        </div>


      </div>
    );
  }
}

function mapStateToProps(state){
	return{
		info: state.personInfoReducer,
	}
}

export default connect(mapStateToProps,{sendPayment})(Payment);
