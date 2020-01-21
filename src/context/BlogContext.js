import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BLOG_POST':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  };
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  function addBlogPost() {
    dispatch({ type: 'ADD_BLOG_POST' });
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
