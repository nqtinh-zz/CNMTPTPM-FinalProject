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
	                    <h4 className="grey">Account</h4>
	                    {/*<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>*/}
	                    <div className="line"></div>
	                </div>
	                <div className="edit-block">
	                    <form   id="basic-info" className="form-inline">
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <label for="publickey">Balance</label>
	                                <input  className="form-control input-group-lg"     />
	                            </div>
	                            
	                        </div>
							<br></br>
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <label for="email">Sequence</label>
	                                <input className="form-control input-group-lg"     />
	                            </div>
	                        </div>
	                        <br></br>
							<div className="row">
	                            <div className="form-group col-xs-12">
	                                <label for="email">Bandwidths</label>
	                                <input  className="form-control input-group-lg"   />
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <label for="email">Transiction</label>
	                                <input  className="form-control input-group-lg"  />
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="form-group col-xs-12">
	                                <label for="email">Public Key</label>
	                                <input  className="form-control input-group-lg"    />
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


export default Account;