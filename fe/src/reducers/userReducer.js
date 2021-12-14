let initialState = {
  user: "",
  isLogin: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        user: action.payload,
        isLogin: true,
      };
    case "DELETE_USER":
      return {
        user: "",
        isLogin: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
