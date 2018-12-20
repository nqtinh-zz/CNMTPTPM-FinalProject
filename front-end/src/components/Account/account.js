import React, { Component } from 'react';
import {connect} from 'react-redux';

class Account extends Component {


	
  render() {
    return (
      <div>
      	
      	<div className="col-md-7 basicinfo" >
                     
	          <div className="edit-profile-container">
	                <div className="block-title">
	                	<br></br>
	                    <h4 className="grey">Account Information</h4>
	                    {/*<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>*/}
	                    <div className="line"></div>
	                </div>
	                <div className="edit-block">
	                    <form   id="basic-info" className="form-inline">
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <p>Balance : {this.props.auth.user.balance} </p>
	                            </div>
	                            
	                        </div>
							<br></br>
							<div className="row">
	                            <div className="form-group col-xs-12">
	                                <p>Name : {this.props.auth.user.name} </p>
	                            </div>
	                            
	                        </div>
							<br></br>
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <p>Sequence : {this.props.auth.user.sequence} </p>
	                            </div>
	                        </div>
	                        <br></br>
							<div className="row">
	                            <div className="form-group col-xs-12">
	                                <p>Bandwidth :  {this.props.auth.user.bandwidth}</p>
	                            </div>
	                        </div>
							<br></br>
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <p>Transactions : {this.props.auth.user.transactions} </p>
	                            </div>
	                        </div>
							<br></br>
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <p>Public Key : {this.props.auth.user.publicKey}</p>
	                            </div>
	                        </div>
	                        <br></br>
	                        <br></br>
							
	                        
	                    </form>
	                </div>
	            </div>

	    </div>


      </div>
    );
  }
}

const mapStateToProps =(state)=>({
	auth: state.authReducer
})

export default connect(mapStateToProps)(Account);