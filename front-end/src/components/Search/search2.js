import React, { Component } from 'react';
import { connect } from 'react-redux';



class Search2 extends Component {
    constructor(props) {
        super(props);
         
    }

  

   

    render() {
        const {users} = this.props.search2;
        let searhResult;
        console.log("data: ",users)
        if (users === null  ) {
          searhResult=  <div> </div>
        } else {
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

export default connect(mapStateToProps)(Search2);