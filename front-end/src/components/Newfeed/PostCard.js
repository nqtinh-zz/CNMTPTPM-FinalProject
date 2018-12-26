import React from 'react'

export default function PostCard(props) {
  return (
       <div className="media">
        <div className="media-left">
          <img src="zxc.jpg" className="media-object" />
        </div>
        <div className="media-body">
          <h4 className="media-heading">{props.time}</h4>
          <p>{props.text}</p>
        </div>
      </div>
  )
}
