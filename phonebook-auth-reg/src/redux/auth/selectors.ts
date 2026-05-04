const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectName = state => state.auth.user.name;

export { selectIsLoggedIn, selectIsRefreshing, selectName };
