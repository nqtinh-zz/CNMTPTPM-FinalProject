const initialState = {
    followingNumber : 5,
    followingList : [
        {
            name: "James Carter",
            carrer:"CEO at IT Farm",
            friendOrNot: false,
        },
        {
            name: "Anna Young",
            carrer:"Musician",
            friendOrNot: false,
        },
        {
            name: "Julia Cox",
            carrer:"Art Designer",
            friendOrNot: true,
        },
        {
            name: "John Dee",
            carrer:"Traveller",
            friendOrNot: true,
        },
        {
            name: "Jamie Lannister",
            carrer:"Developer",
            friendOrNot: true,
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