import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


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



    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        this._fireObserver(this._state);
    },
    subscribe(observer) {
        this._fireObserver = observer;
    },
    getState() {
        return this._state;
    }
}



export default store;



