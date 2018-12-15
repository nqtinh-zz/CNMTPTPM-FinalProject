const initialState ={
    user_id:"hm",
    name: "Hien Minh",
    carrer:"Creative Director",
    tweetsNum :3,
    posts:[
        {
            id:"post1",
            name: "Hien Minh",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: '15 mins ago',
            avatar:"https://www.investigators.net.au/wp-content/uploads/2016/10/avatar-300x300.png",
            cover:"http://www.mercuryseven.nl/wp-content/uploads/2013/04/Smart2Cover-Inboedelverzekering-Mock-up-card-los_20180907-1030x360.png",
            like: 13,
            dislike: 3,
            comments:[
                {
                    name:"Quang Tinh",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/8f024bc0-1def-4a70-86c6-69360a2280b9-profile_image-300x300.png",
                },
                {
                    name:"Tien Trien",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    avatar:"https://avatarfiles.alphacoders.com/792/79295.jpg",
                }
            ]
        },
        {
            id:"post2",
            name:"Duong Loan",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: 'Yesterday',
            avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/8f024bc0-1def-4a70-86c6-69360a2280b9-profile_image-300x300.png",
            cover:"https://www.scarsdalevets.com/wp-content/uploads/2017/03/Gastrope-Equine-Cover-Photo-1-1030x360.jpg",
            like: 17,
            dislike: 2,
            comments:[
                {
                    name:"Chi Trung",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    avatar:"https://www.investigators.net.au/wp-content/uploads/2016/10/avatar-300x300.png",
            
                },
            ]
        },
        {
            id:"post3",
            name:"Minh Nhat",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: '2 days ago',
            avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/8f024bc0-1def-4a70-86c6-69360a2280b9-profile_image-300x300.png",
            like: 5,
            cover:"https://www.scarsdalevets.com/wp-content/uploads/2017/03/Gastrope-Equine-Cover-Photo-1-1030x360.jpg",
            dislike: 0,
            comments:[
                {
                    name:"Chi Trung",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    avatar:"https://www.investigators.net.au/wp-content/uploads/2016/10/avatar-300x300.png",
                },
            ]
        }
    ]
}




export const personalReducer = (state = initialState, action)=>
{
    switch(action.type){
        default : return state;
    }
}
