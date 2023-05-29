const artsLoaded = (newArts) => {
    return {
        type: 'ARTS_LOADED',
        payload: newArts
    }
}

const filterChanged = () => {
    return {
        type: 'ON_FILTER_CHANGE'
    }
}

const anArtLiked = (pickedArtId) => {
    return {
        type: 'ON_ART_LIKE',
        id: pickedArtId
    }
}

const anArtDeleted = (deletedArtId) => {
    return {
        type: 'ON_ART_DELETE',
        id: deletedArtId
    }
}

export {
    artsLoaded,
    filterChanged,
    anArtLiked,
    anArtDeleted
}