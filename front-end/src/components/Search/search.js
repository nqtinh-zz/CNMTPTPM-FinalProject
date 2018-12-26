import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {users} = this.props.search;
        console.log(users)
        let searhResult;
        if (users === null ) {
          searhResult=  <div> </div>
        } else {console.log(users);
            searhResult=<p>name: {users.name}</p>
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