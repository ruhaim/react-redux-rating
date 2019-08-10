import { createActions } from 'reduxsauce';
import { deleteReview } from '../../Repos/reviewRepo';
import { createSlice } from 'redux-starter-kit';

const { Types, Creators } = createActions({
    success: ['data'],
    failure: ['error'],
    isLoading: null,
    custom:(a,b)=>(dispatch)=>{
        console.log(a)
    }
  },
   {prefix : "DELETE_REVIEW"}) 



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