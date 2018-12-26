import React from 'react'

export default function PostCard(props) {
  return (
    <div className="row">
    <div className="col-md-2">
      <img src={"data:image/jpeg;base64,"+props.avatar} alt="avatar" className="media-object" />
      </div>
      <div className="col-md-10">
       <div className="media">
        <div className="media-left">
        </div>
        <div className="media-body">
          <h4 className="media-heading">{props.name}</h4>
          <p>{props.text}</p>
        </div>
      </div>
      </div>
      <br/><br/>
      <hr></hr>
      </div>
  )
}
