import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {sendSearch2, linkSearch2} from '../../actions/Search/Search2';

class Search extends Component {
    constructor(props) {
        super(props);
         
    }

  

    onHandleSubmit=(publicKey,event)=>{
        event.preventDefault();
        this.props.sendSearch2(publicKey);
        this.props.linkSearch2(this.props.history)
    }   


    render() {
        const {users} = this.props.search;
        let searhResult;
        if (users === null ) {
          searhResult=  <div> </div>
        } else {console.log(users);
            searhResult=users.map((item,index)=>{
                return(
                 <div className="row">
                <br></br>
                <br></br>
                <form onSubmit={this.onHandleSubmit.bind(this,item.publicKey)} >
                    <div className="col-md-2">
                        <img src={"data:image/jpeg;base64," + item.avatar} className="avatar_users" />
                    </div>
                    <div>
                        <div>name: {item.name}</div>
                        <div>publickey:{item.publicKey} </div>
                    </div>
                    <button>Xem trang cá nhân</button>
                </form>
            </div>)
            })
           
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
        search: state.searchReducer,
        auth: state.authReducer
    }
}

export default connect(mapStateToProps,{ sendSearch2,linkSearch2 })(withRouter(Search));