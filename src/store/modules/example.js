export default {
  actions: {
    fetchPosts(ctx, limit) {
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then((res) => res.json())
        .then((json) => ctx.commit("updatePosts", json));
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    postsCount(state) {
      return state.posts.length;
    },
  },
};
