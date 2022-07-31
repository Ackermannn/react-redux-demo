
const initState = {
    count: 0
}
exports.reducer = (state = initState, action) => {
    console.log("reducer action: ", action);
   
    switch (action.type) {
        case 'add_action':
            
            return {
                count: state.count + 1
            }

        default:
            break;
    }
    return state
}