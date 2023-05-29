const initialState = {
    images: [],
    loading: true,
    doesShowOnlyLiked: false,
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ARTS_LOADED':
            return {
                ...state,
                images: action.payload,
                loading: false
            }
        case 'ON_FILTER_CHANGE':
            return {
                ...state,
                doesShowOnlyLiked: !state.doesShowOnlyLiked
            }
        case 'ON_ART_LIKE':
            const index = state.images.findIndex((art) => art.id === action.id)
            const item = state.images[index]
            const newItem = {
                ...item,
                isLiked: !item.isLiked
            }
            return {
                ...state,
                images: [
                    ...state.images.slice(0, index),
                    newItem,
                    ...state.images.slice(index + 1)
                ]
            }
        case 'ON_ART_DELETE':
            const index2 = state.images.findIndex((art) => art.id === action.id)
            return {
                ...state,
                images: [
                    ...state.images.slice(0, index2),
                    ...state.images.slice(index2 + 1)
                ]
            }
        default:
            return state
    }
}

export default reducer