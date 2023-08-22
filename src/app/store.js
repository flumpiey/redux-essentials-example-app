import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../app/features/posts/postsSlice'
import usersReducer from '../app/features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})
