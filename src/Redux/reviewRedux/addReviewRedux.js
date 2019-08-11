import { addReview } from '../../Repos/reviewRepo';
import { loadAllReviewsAction } from './loadAllReviewsRedux';
import { createSlice } from 'redux-starter-kit';

export const reviewSlice = createSlice({
    slice: 'reviewAdd', // slice is optional, and could be blank ''
    initialState: {isLoading : false, data: {}, error:{}},
    reducers: {
      isLoading: (state, action)  => {return {...state, isLoading:true}},
      success: (state, action)  => {return {...state, isLoading:false, data:action.payload}},
      failure: (state, action) => {return {...state, isLoading:false, error:action.payload.data}}
    }
  })

export const addReviewAction = (review) => (dispatch, getStore) => {
    const {isLoading,success, failure} = reviewSlice.actions;
    dispatch(isLoading())
    addReview(review).then(({data})=>{
        dispatch(success(data))
        const prevQueyData = getStore().reviewAllLoad.data.queryData;
        debugger
        loadAllReviewsAction(prevQueyData)
    }).catch((error)=>{
      dispatch(failure(error))
    })

} 
