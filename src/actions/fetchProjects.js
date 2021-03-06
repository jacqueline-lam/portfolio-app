// Action Creator creates an action object
// action obj will be dispatched to reducer ->
// then return new ver. of our state based on sent action

export const fetchProjects = () => {
  // Thunk allows us to return fn + fn receives store's dispatch as its arg
  return (dispatch) => {
    // action dispatched before sending a remote request to API
    dispatch({ type: 'LOADING_PROJECTS' });
    fetch('https://jlam-portfolio-backend.herokuapp.com/api/v1/projects')
      // we won't do anything with this data until we get resp back
      // fetch returns Promise - data becomes available when promise resolves
      // .then() method to run once our Promise has been fulfilled - parse response data into JSON
      .then(resp => resp.json())
      // execute asynchronous code, once resolved, we can use dispatch to update our store
      // action dispatched along with a payload of the projects JSON collection
      .then(respJSON => dispatch({ type: 'ADD_PROJECTS', projects: respJSON }));
  }
}
//