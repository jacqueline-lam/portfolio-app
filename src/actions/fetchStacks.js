export const fetchStacks = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STACKS' });
    // call fetch, dispatching returned data
    fetch('https://jlam-portfolio-backend.herokuapp.com//api/v1/stacks')
      .then(resp => resp.json())
      // call dispatch + send project JSON data to your store
      // action dispatched along with a payload of the stacks JSON collection
      .then(respJSON => dispatch({ type: 'ADD_STACKS', stacks: respJSON }));
  }
}