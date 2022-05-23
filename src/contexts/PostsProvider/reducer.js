import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      return { ...state, postsArr: action.payload };
    }
  }
  return { ...state };
};
