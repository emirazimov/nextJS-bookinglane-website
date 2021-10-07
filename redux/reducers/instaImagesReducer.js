const initial = {
  images: [],
}

export const instaImagesReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_INSTA_IMAGES': {
      // return { ...state, images: [...state.images, ...action.payload] }
    }
    default:
      return state
  }
}
