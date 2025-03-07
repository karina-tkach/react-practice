export const filterPosts = (posts, searchQuery) => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
 
  export const sortPosts = (posts, sortOrder) => {
    return [...posts].sort((a, b) => {
      if (sortOrder === "most-recent") return new Date(b.date) - new Date(a.date);
      if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date);
      return a.title.localeCompare(b.title);
    });
  };
  
  export const paginatePosts = (posts, currentPage, postsPerPage) => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return {
      currentPosts: posts.slice(indexOfFirstPost, indexOfLastPost),
      totalPages: Math.ceil(posts.length / postsPerPage),
    };
  };
  