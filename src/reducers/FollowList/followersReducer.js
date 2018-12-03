const initialState = {
    followersNumber : 3,
    followersList : [
        {
            name: "Sophia Lee",
            carrer:"Student at Harvard",
            friendOrNot: true,
        },
        {
            name: "John Dee",
            carrer:"Traveller",
            friendOrNot: true,
        },
        {
            name: "Julia Cox",
            carrer:"Art Designer",
            friendOrNot: false,
        }
    ]
};

export const followersReducer = (state = initialState, action)=>
{
    switch(action.type){
        default : return state;
    }
}