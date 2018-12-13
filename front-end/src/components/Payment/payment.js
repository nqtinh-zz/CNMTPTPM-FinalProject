import React, { Component } from 'react';
import {connect} from 'react-redux';

class Payment extends Component {

	constructor(props) {
        super(props);
        this.state = {
			address:'',
			amount:''
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
	}
	
  render() {
    return (
      <div>
      	
      	<div className="col-md-7 basicinfo" >
                     
	            <div className="edit-profile-container">
	                <div className="block-title">
	                    <h4 className="grey"><i className="icon ion-android-checkmark-circle"></i>Payment</h4>
	                    {/*<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>*/}
	                    <div className="line"></div>
	                </div>
	                <div className="edit-block">
	                    <form onSubmit={this.onHandleSubmit}  id="basic-info" className="form-inline">
	                        <div className="row">
	                            <div className="form-group col-xs-10">
	                                <label for="firstname">Address</label>
	                                <input onChange={this.onHandleChange} id="firstname" className="form-control input-group-lg" type="text" name="address" title="Enter address" placeholder='Gxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'  />
	                            </div>
	                            
	                        </div>
							<br></br>
	                        <div className="row">
	                            <div className="form-group col-xs-10">
	                                <label for="email">Amount</label>
	                                <input onChange={this.onHandleChange} id="email" className="form-control input-group-lg" type="number" name="amount" title="Enter amount" placeholder="1000"  />
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

export default connect(mapStateToProps)(Payment);
