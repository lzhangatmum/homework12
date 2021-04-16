const myinputs = (state = [], action) => {

    switch (action.type) {
        case 'INPUT_ITEM': {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ]
        }
        case 'TOGGLE_TODO':
            return state.map(item => (item.id == action.id) ?
                { ...item, text: "" } : item)

        default: return state
    }

}


export default myinputs