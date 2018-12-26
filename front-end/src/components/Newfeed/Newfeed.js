import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getNewfeed, getNewfeedUser } from '../../actions/Newfeed/getNewfeed';
import { getCurrentUser } from '../../actions/User/authAction';
import PostCard from './PostCard';
import InfiniteScroll from 'react-infinite-scroller';
import SimpleCrypto from "simple-crypto-js";
import {sendComment} from '../../actions/Comment/sendComment';
import { withRouter } from 'react-router-dom'

class Newfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      hasMoreItems: true,
      curPage: 1,
      firstVar: 0,
      lastVar: 10,
      comment:'',
    }
    this.loadItems = this.loadItems.bind(this);
  }
  loadItems() {
    if (this.props.newfeed.post) {
      let res = [];
      for (let i = this.state.firstVar; i < this.state.lastVar; i++) {
        res.push(this.props.newfeed.post[i]);
      }
      let postList = this.state.postList;
      res.map(item => {
        postList.push(item)
      });
      if (this.state.postList.length < this.props.newfeed.post.length) {
        const curPage = this.state.curPage + 1;
        this.setState({ postList, curPage, firstVar: this.state.firstVar + 10, lastVar: this.state.lastVar + 10 });
      } else {
        this.setState({ hasMoreItems: false });
      }
    }
  }
  onSubmitComment= (hash,event)=>{
    console.log(sessionStorage.getItem('privateKeyEncrypt')+"abc")
    event.preventDefault();
    this.props.sendComment({
        type: 1,
        text: this.state.comment,
        hash,
        privatekeyHash: sessionStorage.getItem('privateKeyEncrypt'),
        sequence: this.props.auth.user.sequence
    });
    this.setState({comment:''})
    

}
onCommentChange= (event,test)=>{
       
  this.setState({
      comment: event,
    
      
  })
}
  componentDidMount() {
    this.props.getNewfeed(this.props.auth.user.following);
    this.props.getNewfeedUser(this.props.auth.user.following);
    console.log(this.props.auth.user.following)
    // this.props.getOwnerPost(localStorage.getItem('publicKey'));
    // this.props.getCurrentUser();
  }
  render() {
    const loader = <div className="loader">Loading ...</div>;
    let newfeedItem ;
    if(this.props.newfeed.profile=== null){
      newfeedItem =  loader;
    }else{
     newfeedItem= this.state.postList.map((item, i) => {
        for(let i = 0; i < this.props.newfeed.profile.length;i++){
          if(item.publicKey === this.props.newfeed.profile[i].publicKey){
            return (<div><PostCard key={i} text={item.text} time={item.time} 
              name={this.props.newfeed.profile[i].name} 
              avatar={this.props.newfeed.profile[i].avatar} />
              <form onSubmit={this.onSubmitComment.bind(this,item.hash)}>
              <div className="post-comment">
                  <img src={"data:image/jpeg;base64," + this.props.auth.user.avatar} alt="" className="profile-photo-sm" />
                  <input type="text"   className="form-control" placeholder="Post a comment" id={item.publicKey} name={item.publicKey} onChange={e => this.onCommentChange(e.target.value,e.target.name)}  ></input>
              </div>
              <button type="submit"  className="btn btn-primary pull-right">Comment</button>
          </form> </div>)
          } 
        }
      })
    }

    return (
      <div>
        <br></br>
        <br></br>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={this.state.hasMoreItems}
          loader={loader}>
          <div className="App-main">
              {newfeedItem}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    newfeed: state.newfeedReducer,
  }
}

export default connect(mapStateToProps, { getNewfeed, getCurrentUser, getNewfeedUser,sendComment })(Newfeed);