export const ADD_PHOTOS = 'ADD_PHOTOS';
export const ADD_USERS = 'ADD_USERS';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_COMMENTS = 'ADD_COMMENTS';

export const addPhotos = data => dispatch => {
  dispatch({
    type: ADD_PHOTOS,
    payload: data,
  });
};

export const addUsers = data => dispatch => {
  dispatch({
    type: ADD_USERS,
    payload: data,
  });
};

export const addPosts = data => dispatch => {
  dispatch({
    type: ADD_POSTS,
    payload: data,
  });
};

export const addComments = data => dispatch => {
  console.log('redux comments ::::' + JSON.stringify(data));
  dispatch({
    type: ADD_COMMENTS,
    payload: data,
  });
};
