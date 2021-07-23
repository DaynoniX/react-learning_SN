const ADD_POST = 'ADD-POST';
const TYPE_POST = 'TYPE-POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const TYPE_MESSAGE = 'TYPE_MESSAGE';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        layout: {}

    },
    _fireObserver() {
        console.log('Observer setted up');
    },

    _addPost() {
        let postRef = this._state.profilePage.posts;
        postRef.push({
            id: postRef.length + 1,
            name: 'Name ' + (postRef.length + 1).toString(),
            text: this._state.profilePage.newPost
        });
        this._state.profilePage.newPost = '';
        this._fireObserver(this._state);
    },
    _addMessage(){
        let messages = this._state.dialogsPage.messages;
        messages.push({
            id: messages.length+1,
            text: this._state.dialogsPage.newMessage,
            img: 'avtar.png',
            type: true
        });
        this._state.dialogsPage.newMessage = '';
        this._fireObserver(this._state);
    },
    _typePost(text) {
        this._state.profilePage.newPost = text;
        this._fireObserver(this._state);
    },
    _typeMessage(text) {
        this._state.dialogsPage.newMessage = text;
        this._fireObserver(this._state);
    },
    dispatch(action) {
        switch (true) {
            case action.type === ADD_POST:
                this._addPost();
                break;
            case action.type === TYPE_POST:
                this._typePost(action.text);
                break;
            case action.type === TYPE_MESSAGE:
                this._typeMessage(action.text);
                break;
            case action.type === ADD_MESSAGE:
                this._addMessage();
                break;
            default:
                console.log('Action undefined');
        }
    },
    subscribe(observer) {
        this._fireObserver = observer;
    },
    getState() {
        return this._state;
    }
}

export let addPostAction = () => ({type: ADD_POST});
export let addMessageAction = () => ({type: ADD_MESSAGE});
export let typePostAction = (text) => ({type: TYPE_POST, text: text});
export let typeMessageAction = (text) => ({type: TYPE_MESSAGE, text: text});

export default store;



