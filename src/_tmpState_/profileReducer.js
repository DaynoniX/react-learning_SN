const ADD_POST = 'ADD-POST';
const TYPE_POST = 'TYPE-POST';

let profileReducer = (state, action) => {
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
