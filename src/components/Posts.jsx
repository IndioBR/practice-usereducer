import { useContext, useEffect } from 'react';
import { PostsContext } from '../contexts/PostsProvider/context';
import { loadPosts } from '../contexts/PostsProvider/actions';

export const Posts = () => {
  const { postsState, postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);
  console.log(postsState);

  return (
    <div>
      {postsState.postsArr.map((p) => {
        <p key={p.id}>{p.title}</p>;
      })}
    </div>
  );
};
