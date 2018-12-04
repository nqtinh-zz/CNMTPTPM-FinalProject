const initialState ={
    name: "Hien Minh",
    carrer:"Creative Director",
    tweetsNum :3,
    posts:[
        {
            id:"post1",
            name: "Hien Minh",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: '15 mins ago',
            like: 13,
            dislike: 3,
            comments:[
                {
                    name:"Quang Tinh",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    name:"Tien Trien",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                }
            ]
        },
        {
            id:"post2",
            name:"Duong Loan",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: 'Yesterday',
            like: 17,
            dislike: 2,
            comments:[
                {
                    name:"Chi Trung",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        },
        {
            id:"post3",
            name:"Minh Nhat",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: '2 days ago',
            like: 5,
            dislike: 0,
            comments:[
                {
                    name:"Chi Trung",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
