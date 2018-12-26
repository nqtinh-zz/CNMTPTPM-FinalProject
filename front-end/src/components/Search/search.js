import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);

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

                <div className="col-md-2">
                    <img src={"data:image/jpeg;base64," + item.avatar} className="avatar_users" />
                </div>
                <div>
                    <div>name: {item.name}</div>
                    <div>publickey:{item.publicKey} </div>
                </div>
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
        search: state.searchReducer
    }
}

export default connect(mapStateToProps)(Search);