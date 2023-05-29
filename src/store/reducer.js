const initialState = {
    images: []
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ARTS_LOADED':
            return {
                images: action.payload
            }
        default:
            return state
    }
}

export default reducer