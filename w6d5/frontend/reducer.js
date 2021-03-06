const initialState = {
  city: "Please Select",
  jobs: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SWITCH LOCATION':
      return {
        city: action.city,
        jobs: action.jobs
      }
    default:
      return state;
  }
};



export default reducer;


window.reducer = reducer;
