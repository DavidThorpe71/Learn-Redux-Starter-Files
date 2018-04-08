// a reducer takes in two things
// 1. the action(info about what happened)
// 2. copy of current state

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            console.log('Removing a comment');
            // Return state without the deleted comment
            return [
                // from the start to the one one we want to delete
                ...state.slice(0, action.index),
                // after the deleted one, to the end
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;