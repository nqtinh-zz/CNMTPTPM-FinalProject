import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccount } from '../../actions/User/updateAccountAction';
import SimpleCrypto from "simple-crypto-js"; 
import { getCurrentUser } from '../../actions/User/authAction';
import { withRouter } from 'react-router-dom';


class BasicInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			imagePreviewUrl: '',
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmitAvatar = this.onSubmitAvatar.bind(this);
	}
	componentDidMount(){
		this.props.getCurrentUser();
	}
	onSubmitAvatar(e){
		e.preventDefault();
		const simpleCrypto = new SimpleCrypto(sessionStorage.getItem('keyDecrypt'));
		const privateKey = simpleCrypto.decrypt(sessionStorage.getItem('privateKeyEncrypt'));
		this.props.updateAccount({
			key: "picture",
			value: this.state.imagePreviewUrl.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""),
			privatekeyHash: sessionStorage.getItem('privateKeyEncrypt'),
			sequence: this.props.auth.user.sequence
		})
		this.setState({imagePreviewUrl:''})
	
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit(e) {
		e.preventDefault();
		const name = this.state.firstname + " " + this.state.lastname;
		this.props.updateAccount({
			key: "name",
			value: name,
			privatekeyHash: sessionStorage.getItem('privateKeyEncrypt'),
			sequence: this.props.auth.user.sequence
		})
		this.setState({firstname:'',lastName:''})
		//console.log(name);
	}
	fileChangedHandler = (e) => {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		}

		reader.readAsDataURL(file)

		}
	render() {
		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} alt="alt"/>);
		} else {
			$imagePreview = (<div>Please select an Image for Preview</div>);
		}
		//console.log('hình ' + imagePreviewUrl);
		return (

			<div className="col-md-7 basicinfo" >

				<div className="edit-profile-container">
					<div className="block-title">
						<h4 className="grey"><i className="icon ion-android-checkmark-circle"></i>Edit basic information</h4>
						{/*<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>*/}
						<div className="line"></div>
					</div>
					<form onSubmit={this.onSubmitAvatar}>
						<input type="file" onChange={this.fileChangedHandler} />
						<div className="imagePreviewStyle"  >{$imagePreview}</div>
						<button className="btn btn-primary">Save Changes</button>
					</form>
					<br/>
					<br/>
					<div className="edit-block">
						<form name="basic-info" id="basic-info" className="form-inline" onSubmit={this.onSubmit}>
							<div className="row">
								<div className="form-group col-xs-6">
									<label htmlFor="firstname">First name</label>
									<input onChange={this.onChange} id="firstname" className="form-control input-group-lg" type="text" name="firstname" title="Enter first name"  value={this.state.firstname} />
								</div>
								<div className="form-group col-xs-6">
									<label htmlFor="lastname" className="">Last name</label>
									<input onChange={this.onChange} id="lastname" className="form-control input-group-lg" type="text" name="lastname" title="Enter last name"  value={this.state.lastName} />
								</div>
							</div>
							<br/>
							<br/>
							<button className="btn btn-primary">Save Changes</button>
						</form>
					</div>
				</div>
			</div>

		)
	}

}





function mapStateToProps(state) {
	return {
		auth: state.authReducer
	}
}

export default connect(mapStateToProps, { updateAccount,getCurrentUser })(withRouter(BasicInfo));
