import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccount } from '../../actions/User/updateAccountAction';



class Search2 extends Component {
    constructor(props) {
        super(props);
         
    }


  onSubmitFollow(publicKey, event){
    event.preventDefault();
    let arrFollowing=[];
    for(let i = 0; i < this.props.auth.user.following.length;i++){
        arrFollowing.push(this.props.auth.user.following[i])
    }
    arrFollowing.push(publicKey);
    this.props.updateAccount({
        key: "followings",
        value: arrFollowing,
        privatekeyHash: sessionStorage.getItem('privateKeyEncrypt'),
        sequence: this.props.auth.user.sequence
    })
  }
  onSubmitUnfollow(publicKey, event){
    event.preventDefault();
    let arrFollowing=[];
        for(let i = 0; i < this.props.auth.user.following.length;i++){
            arrFollowing.push(this.props.auth.user.following[i])
        }
        for(let i = 0; i < arrFollowing.length;i++){
            if(arrFollowing[i] === publicKey)
            {
                arrFollowing.splice(i,1);
            }
        }
        this.props.updateAccount({
            key: "followings",
            value: arrFollowing,
            privatekeyHash: sessionStorage.getItem('privateKeyEncrypt'),
            sequence: this.props.auth.user.sequence
        })
}

   

    render() {
        const {users} = this.props.search2;
        let searhResult;
        console.log("data: ",users)
        if (users === null  ) {
          searhResult=  <div> </div>
        } else {
            let followButton= <button onClick={this.onSubmitFollow.bind(this,users.user.publicKey)} className="pull-right text-green">Follow</button>;
            for(let i = 0 ; i < this.props.auth.user.following.length; i++){
                if(users.user.publicKey == this.props.auth.user.following[i]){
                    followButton = <button onClick={this.onSubmitUnfollow.bind(this,users.user.publicKey)} className="pull-right text-red">Unfollow</button>
                }
            }
            console.log(users);
            searhResult=
                
                 <div className="row">
                        <br></br>
                        <br></br>
                       <div className="col-md-2">
                        <img src={"data:image/jpeg;base64," + users.user.avatar} className="avatar_users" />
                        </div>
                        <div>
                            <div>name: {users.user.name}</div>
                            <div>publickey:{users.user.publicKey} </div>
                            <div>balance:{users.user.balance} </div>
                            <div>sequence:{users.user.sequence} </div>

                        </div>
                        <div>
                            <p></p>
                        </div>
                        {followButton}
                        
                </div>
            
           
           }
           return(
            <div>
                <div className="col-md-3"></div>
                <div className="col-md-7 listfollowing">

                    <div className="friend-list">
                        <div className="row">
                            
                            {searhResult}
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        search2: state.searchReducer2,
        auth: state.authReducer
    }
}

export default connect(mapStateToProps,{updateAccount})(Search2);