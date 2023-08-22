import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../app/features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
