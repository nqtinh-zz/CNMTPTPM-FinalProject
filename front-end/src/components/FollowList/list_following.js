import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewfeed, getNewfeedUser } from '../../actions/Newfeed/getNewfeed';
import { updateAccount } from '../../actions/User/updateAccountAction';
import SimpleCrypto from "simple-crypto-js"; 
class ListFollowing extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.getNewfeedUser(this.props.auth.user.following);
    }
    onSubmit(publicKey){
        const simpleCrypto = new SimpleCrypto(sessionStorage.getItem('keyDecrypt'));
        const privateKey = simpleCrypto.decrypt(sessionStorage.getItem('privateKeyEncrypt'));
        let arrFollowing=[];
        for(let i = 0; i < this.props.newfeed.profile.length;i++){
            arrFollowing.push(this.props.newfeed.profile[i].publicKey)
        }
        for(let i = 0; i < arrFollowing.length;i++){
            if(arrFollowing[i] === publicKey)
            {
                arrFollowing.splice(i,1);
            }
        }
        const data ={
            key: "followings",
			value: arrFollowing,
            privatekey: privateKey,
            sequence: this.props.auth.user.sequence
        }
        console.log(data);
        this.props.updateAccount({
			data
		})
    }
    render() {
        const loader = <div className="loader">Loading ...</div>;
        let newfeedItem ;
        if(this.props.newfeed.profile=== null){
          newfeedItem =  loader;
        }else{
         newfeedItem= this.props.newfeed.profile.map((item, index) => {
            return (
                <div className="col-md-6 col-sm-6" key={index}>
                    <div className="friend-card">
                        {/* <img src={item.cover} alt="profile-cover" className="img-responsive cover" /> */}
                        <br /> <br/> <br />
                        <div className="card-info">
                            <img src={"data:image/jpeg;base64,"+item.avatar} alt="user" className="profile-photo-lg" />
                            <div className="friend-info">
                                <button onClick={this.onSubmit.bind(this,item.publicKey)} className="pull-right text-red">Unfollow</button>
                                <h5><a href="timeline.html" className="profile-link">{item.name}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        }
        return (
            <div>
                <div className="col-md-3"></div>
                <div className="col-md-7 listfollowing">
                    <div className="friend-list">
                        <div className="row">
                           {newfeedItem}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        newfeed: state.newfeedReducer,
        }
}

export default connect(mapStateToProps,{getNewfeedUser,updateAccount})(ListFollowing);