import { loadAllReviews } from '../../Repos/reviewRepo';
import { createSlice } from 'redux-starter-kit';

export const reviewSlice = createSlice({
    slice: 'reviewAllLoad', // slice is optional, and could be blank ''
    initialState: {isLoading : false, data: null, error:null},
    reducers: {
      isLoading: (state, action)  => {return {...state, isLoading:true}},
      success: (state, action)  => {return {...state, isLoading:false, data:action.payload.data}},
      failure: (state, action) => {return {...state, isLoading:false, error:action.payload.data}}
    }
  })

export const loadAllReviewsAction = () => (dispatch) => {
    const {isLoading, success, failure} = reviewSlice.actions
    dispatch(isLoading())
    loadAllReviews().then((data)=>{
      dispatch(success(data))
    }).catch((err)=>{
      dispatch(failure(err))
    })

} 