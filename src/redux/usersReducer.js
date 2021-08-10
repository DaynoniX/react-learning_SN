const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const LOAD_MORE = 'LOAD_MORE';

let initialState = {
        users: [
            {
                id: 1,
                userName: 'Some Name',
                followStatus: true,
                avatar: 'avtar.png',
                textStatus: 'Lorem sddafasfsfas sedfadfdsfaas sdfas',
                location: {
                    cityName: 'CityName',
                    countryName: 'CountryName'
                }
            },
            {
                id: 2,
                userName: 'Some Name 2',
                followStatus: false,
                avatar: 'avtar.png',
                textStatus: 'Lorem sddafasfsfas sedfadfdsfaas sdfas',
                location: {
                    cityName: 'CityName 2',
                    countryName: 'CountryName 2'
                }
            },
        ]
    }
;


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        user.followStatus = !user.followStatus;
                    }
                    return user;
                })
            };
            break;
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        user.followStatus = !user.followStatus;
                    }
                    return user;
                })
            };
            break;
        default:
            return state;
    }
}

export let followAC = (userID) => ({type: FOLLOW, userID: userID});
export let unfollowAC = (userID) => ({type: UNFOLLOW, userID: userID});
export let loadMoreAC = () => ({type: LOAD_MORE});

export default usersReducer;
