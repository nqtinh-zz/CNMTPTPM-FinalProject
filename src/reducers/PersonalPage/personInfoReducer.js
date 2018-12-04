const initialState ={
    user_id:"hm",
    firstName: "Hien",
    lastName:"Minh",
    email:"razor.venon@gmail.com",
    avatar:"images/ava.jpg",
    cover:"https://i.ytimg.com/vi/8qLL2Gx3I_k/maxresdefault.jpg",
    birthday:{
        day:19,
        month: 12,
        year: 2000,
    },
    city:"Ho Chi Minh",
    country: "Viet Nam",
    bio: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    
}




export const personInfoReducer = (state = initialState, action)=>
{
    switch(action.type){
        default : return state;
    }
}
