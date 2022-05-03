import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [
        // localStorage.getItem('data')
    ],
  },
  reducers: {
    add_data: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newdata = action.payload
      console.log(newdata,'this is new data in store')
      state.data.push(newdata)
    //   localStorage.setItem('newdata',newdata)
    },
    delete_data: (state,action) => {
        const {key} = action.payload
        console.log(key)
        alert('deleteing data',action.payload)
      state.data.splice(key,1)
      console.log('after delete',state.data)
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { add_data, delete_data } = dataSlice.actions

export default dataSlice.reducer