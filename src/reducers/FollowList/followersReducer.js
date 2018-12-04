const initialState = {
    followersNumber : 3,
    followersList : [
        {
            name: "Sophia Lee",
            carrer:"Student at Harvard",
            friendOrNot: true,
            avatar:"http://support.overwolf.com/wp-content/uploads/2016/07/avatar-300x300.png",
            cover:"https://4.bp.blogspot.com/-B0fG_8swDak/Wa95uQ2imlI/AAAAAAAAAZY/xB-50xkECvw-F5dkhgX4DvDb4YvYwI4dACLcBGAs/s1600/cover-workshop-after-effect-phongluong-1030x360.jpg",
        },
        {
            name: "John Dee",
            carrer:"Traveller",
            friendOrNot: true,
            avatar:"https://avatarfiles.alphacoders.com/792/79295.jpg",
            cover:"http://danceabilityinc.com/wp-content/uploads/2018/09/halloween-1030x360.jpg",
        },
        {
            name: "Julia Cox",
            carrer:"Art Designer",
            friendOrNot: false,
            avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/8f024bc0-1def-4a70-86c6-69360a2280b9-profile_image-300x300.png",
            cover:"https://www.scarsdalevets.com/wp-content/uploads/2017/03/Gastrope-Equine-Cover-Photo-1-1030x360.jpg",
        }
    ]
};

export const followersReducer = (state = initialState, action)=>
{
    switch(action.type){
        default : return state;
    }
}