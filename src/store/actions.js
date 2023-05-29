const artsLoaded = (newArts) => {
    return {
        type: 'ARTS_LOADED',
        payload: newArts
    }
}

export {
    artsLoaded
}