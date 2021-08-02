const ADD_POST = 'ADD-POST';
const TYPE_POST = 'TYPE-POST';

let initialState = {
    infoData: {
        name: 'John Doe',
        birthday_date: '20.10.1990',
        city: 'Some City',
        educ: 'Education Info',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at commodi dignissimos eum fuga fugiat, nam quibusdam! Amet assumenda at ducimus ex iure molestias omnis optio tempore. Asperiores, tenetur?'
    },
    posts: [
        {
            id: 1,
            name: 'Name 1',
            text: 'Text 1'
        },
        {
            id: 2,
            name: 'Name 2',
            text: 'Text 2'
        },
        {
            id: 3,
            name: 'Name 3',
            text: 'Text 3'
        },
    ],
    newPost: '',
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postRef = state.posts;
            postRef.push({
                id: postRef.length + 1,
                name: 'Name ' + (postRef.length + 1).toString(),
                text: state.newPost
            });
            state.newPost = '';
            return state;
        case TYPE_POST:
            state.newPost = action.text;
            return state;
        default: return state;
    }
}

export let addPostAction = () => ({type: ADD_POST});
export let typePostAction = (text) => ({type: TYPE_POST, text: text});


export default profileReducer;
