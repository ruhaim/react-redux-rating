import { loadAllReviews } from '../../Repos/reviewRepo';
import { createSlice } from 'redux-starter-kit';

export const reviewSlice = createSlice({
    slice: 'reviewAllLoad', // slice is optional, and could be blank ''
    initialState: {isLoading : false, data: null, error:null},
    reducers: {
      isLoading: (state, action)  => {return {...state, isLoading:true}},
      success: (state, action)  => {return {...state, isLoading:false, data:action.payload}},
      failure: (state, action) => {return {...state, isLoading:false, error:action.payload.data}}
    }
  })

export const loadAllReviewsAction = (queryData) => (dispatch, getStore) => {
    const {isLoading, success, failure} = reviewSlice.actions
    dispatch(isLoading())
    return loadAllReviews(queryData).then(({data, headers})=>{
      const totalItemCount = headers["x-total-count"];
      dispatch(success({data,totalItemCount,queryData}))
    }).catch((err)=>{
      dispatch(failure(err))
    })

} 