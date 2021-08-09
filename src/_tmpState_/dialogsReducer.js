const ADD_MESSAGE = 'ADD_MESSAGE';
const TYPE_MESSAGE = 'TYPE_MESSAGE';

let dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messages = state.messages;
            messages.push({
                id: messages.length+1,
                text: state.newMessage,
                img: 'avtar.png',
                type: true
            });
            state.newMessage = '';
            return state;
        case TYPE_MESSAGE:
            state.newMessage = action.text;
            return state;
        default: return state;
    }
}

export let addMessageAction = () => ({type: ADD_MESSAGE});
export let typeMessageAction = (text) => ({type: TYPE_MESSAGE, text: text});

export default dialogsReducer;
