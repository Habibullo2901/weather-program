const initialState = {
    city: "Tashkent"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CITY":
            return action.city
        default:
            return state
    }
}

export { reducer }