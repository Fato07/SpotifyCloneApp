export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
        //'BQB9zzzfZ7Lpx3i2Re5RebfjWXF1v6UpDo8ZCJMTokVNhpY_Wm6R212vqkcqaEtemDJvinqTSoP18oJ079sbEdebFuzin1Z62dSA03xgm2Lxargli690vuWDqTJD3mDqSutcbZhkqYPASiNNT4UpLExscG5vnPLxrF6LQswXIKuSHZ6XfHXO',
};

//Listen to Actions
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;