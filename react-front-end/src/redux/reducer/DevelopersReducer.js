// DevelopersReducer.js
const initialState = {
    developers: [],
  };
  
  const developersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DEVELOPERS':
        return { ...state, developers: action.payload };
      case 'ADD_DEVELOPER':
        return { ...state, developers: [...state.developers, action.payload] };
      case 'DELETE_DEVELOPER':
        const updatedDevelopers = state.developers.filter((dev) => dev.id !== action.payload);
        return { ...state, developers: updatedDevelopers };
      default:
        return state;
    }
  };
  
  export default developersReducer;
  