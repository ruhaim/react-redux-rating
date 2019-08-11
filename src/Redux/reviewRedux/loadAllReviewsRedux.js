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

export const loadAllReviewsAction = (queryData) => async (dispatch, getStore) => {
    const {isLoading, success, failure} = reviewSlice.actions
    dispatch(isLoading())
    try{
      const {data, headers} = await loadAllReviews(queryData)
      const totalItemCount = headers["x-total-count"];
      const successPayload = {data,totalItemCount,queryData}
      dispatch(success(successPayload))
      return successPayload;
    }catch(error){
      dispatch(failure(error))
      throw new Error(error)
    }


} 