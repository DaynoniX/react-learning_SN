const ADD_MESSAGE = 'ADD_MESSAGE';
const TYPE_MESSAGE = 'TYPE_MESSAGE';

let initialState = {
    dialogsList: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Karl'},
        {id: 3, name: 'Gustav'},
        {id: 4, name: 'Rogue'},
        {id: 5, name: 'Maks'},
        {id: 6, name: 'Roger'},
    ],
    messages: [
        {
            id: 1,
            text: 'lorem',
            img: 'avtar.png',
            type: true
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium aspernatur commodi dignissimos distinctio dolorum ducimus ea eos fugit magni maxime nemo nesciunt optio perspiciatis praesentium repellat veritatis voluptate voluptatem?',
            img: 'avtar.png',
            type: false
        },
    ],
    newMessage: '',
};

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
           let createdMessage = {
                id: state.messages.length+1,
                text: state.newMessage,
                img: 'avtar.png',
                type: true
            };
            return {
                ...state,
                messages: [...state.messages, createdMessage],
                newMessage: ''
            };
        case TYPE_MESSAGE:
            return {
                ...state,
                newMessage: action.text
            };
        default: return state;
    }
}

export let addMessageAction = () => ({type: ADD_MESSAGE});
export let typeMessageAction = (text) => ({type: TYPE_MESSAGE, text: text});

export default dialogsReducer;
