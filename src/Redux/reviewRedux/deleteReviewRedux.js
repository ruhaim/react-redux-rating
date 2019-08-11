import { deleteReview } from '../../Repos/reviewRepo';
import { createSlice } from 'redux-starter-kit';

export const reviewSlice = createSlice({
    slice: 'reviewDelete', // slice is optional, and could be blank ''
    initialState: {isLoading : false, data: {}, error:{}},
    reducers: {
      isLoading: (state, action)  => {return {...state, isLoading:true}},
      success: (state, action)  => {return {...state, isLoading:false, data:action.payload.data}},
      failure: (state, action) => {return {...state, isLoading:false, error:action.payload.data}}
    }
  })

export const deleteReviewAction = (reviewId) => (dispatch) => {
    dispatch(reviewSlice.actions.isLoading())
    deleteReview(reviewId)

} 