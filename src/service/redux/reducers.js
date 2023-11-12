import {ADD_PHOTOS} from './actions';
import {ADD_USERS} from './actions';
import {ADD_POSTS} from './actions';
import {ADD_COMMENTS} from './actions';

const initialState = {
  photos: [],
  users: [],
  posts: [],
  Comments: [],
};

function myReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_PHOTOS:
      return {...state, photos: action.payload};

    case ADD_USERS:
      return {...state, users: action.payload};

    case ADD_POSTS:
      return {...state, posts: action.payload};

    case ADD_COMMENTS:
      return {...state, comments: action.payload};

    default:
      return state;
  }
}

export default myReducers;
