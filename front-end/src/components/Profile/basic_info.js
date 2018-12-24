import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccount } from '../../actions/User/updateAccountAction';
import SimpleCrypto from "simple-crypto-js"; 



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
	onSubmitAvatar(e){
		e.preventDefault();
		const simpleCrypto = new SimpleCrypto(sessionStorage.keyEncrypt);
		const privateKey = simpleCrypto.decrypt(sessionStorage.privateKeyEncrypt);
		this.props.updateAccount({
			key: "picture",
			value: this.state.imagePreviewUrl.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""),
			privatekey: privateKey
		})
	
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit(e) {
		e.preventDefault();
		const simpleCrypto = new SimpleCrypto(sessionStorage.keyDecrypt);
		const privateKey = simpleCrypto.decrypt(sessionStorage.privateKeyEncrypt);
		const name = this.state.firstname + " " + this.state.lastname;
		this.props.updateAccount({
			key: "name",
			value: name,
			privatekey: privateKey,
			sequence: localStorage.getItem('sequence')
		})
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
									<input onChange={this.onChange} id="firstname" className="form-control input-group-lg" type="text" name="firstname" title="Enter first name" placeholder={this.props.info.firstName} value={this.state.firstname} />
								</div>
								<div className="form-group col-xs-6">
									<label htmlFor="lastname" className="">Last name</label>
									<input onChange={this.onChange} id="lastname" className="form-control input-group-lg" type="text" name="lastname" title="Enter last name" placeholder={this.props.info.lastName} value={this.state.lastName} />
								</div>
							</div>
							<br/>
							<br/>
							{/* <div className="row">
								<div className="form-group col-xs-12">
									<label for="email">My email</label>
									<input id="email" className="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder="My Email" value={this.props.info.email} />
								</div>
							</div>
							<div className="row">
								<p className="custom-label"><strong>Date of Birth</strong></p>
								<div className="form-group col-sm-3 col-xs-6">
									<label for="month" className="sr-only"></label>
									<select className="form-control" id="day">
										<option value="Day">Day</option>
										<option selected>{this.props.info.birthday.day}</option>
									</select>
								</div>
								<div className="form-group col-sm-3 col-xs-6">
									<label for="month" className="sr-only"></label>
									<select className="form-control" id="month">
										<option value="month">Month</option>
										<option selected>{this.props.info.birthday.month}</option>
									</select>
								</div>
								<div className="form-group col-sm-6 col-xs-12">
									<label for="year" className="sr-only"></label>
									<select className="form-control" id="year">
										<option value="year">Year</option>
										<option selected>{this.props.info.birthday.year}</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="form-group col-xs-6">
									<label for="city"> My city</label>
									<input id="city" className="form-control input-group-lg" type="text" name="city" title="Enter city" placeholder="Your city" value={this.props.info.city} />
								</div>
								<div className="form-group col-xs-6">
									<label for="country">My country</label>
									<input id="country" className="form-control input-group-lg" type="text" name="country" title="Enter country" placeholder="Your country" value={this.props.info.country} />
								</div>
							</div>
							<div className="row">
								<div className="form-group col-xs-12">
									<label for="my-info">About me</label>
									<textarea id="my-info" name="information" className="form-control" placeholder="Some texts about me" rows="4" cols="400">{this.props.info.bio}</textarea>
								</div>
							</div> */}
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
		info: state.personInfoReducer,
	}
}

export default connect(mapStateToProps, { updateAccount })(BasicInfo);
