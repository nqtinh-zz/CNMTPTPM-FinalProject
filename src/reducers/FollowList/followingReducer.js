const initialState = {
    followingNumber : 5,
    followingList : [
        {
            name: "James Carter",
            carrer:"CEO at IT Farm",
            friendOrNot: false,
            avatar:"http://support.overwolf.com/wp-content/uploads/2016/07/avatar-300x300.png",
            cover:"https://4.bp.blogspot.com/-B0fG_8swDak/Wa95uQ2imlI/AAAAAAAAAZY/xB-50xkECvw-F5dkhgX4DvDb4YvYwI4dACLcBGAs/s1600/cover-workshop-after-effect-phongluong-1030x360.jpg",
        },
        {
            name: "Anna Young",
            carrer:"Musician",
            friendOrNot: false,
            avatar:"https://avatarfiles.alphacoders.com/792/79295.jpg",
            cover:"http://danceabilityinc.com/wp-content/uploads/2018/09/halloween-1030x360.jpg",
        },
        {
            name: "Julia Cox",
            carrer:"Art Designer",
            friendOrNot: true,
            avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/f3528299-161a-4867-b07b-402ba59f1ca5-profile_image-300x300.png",
            cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP4YI480Bj1b8rdOHloWkLH9-eKpoR0V3tOf5QtuprA5dyTs7Cg",
        },
        {
            name: "John Dee",
            carrer:"Traveller",
            friendOrNot: true,
            avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/8f024bc0-1def-4a70-86c6-69360a2280b9-profile_image-300x300.png",
            cover:"https://www.scarsdalevets.com/wp-content/uploads/2017/03/Gastrope-Equine-Cover-Photo-1-1030x360.jpg",
        },
        {
            name: "Jamie Lannister",
            carrer:"Developer",
            friendOrNot: true,
            avatar:"https://www.investigators.net.au/wp-content/uploads/2016/10/avatar-300x300.png",
            cover:"http://www.mercuryseven.nl/wp-content/uploads/2013/04/Smart2Cover-Inboedelverzekering-Mock-up-card-los_20180907-1030x360.png",
        }
    ]
};

 const followingReducer = (state = initialState, action)=>
{
    switch(action.type){
        default : return state;
    }
}
export default followingReducer;