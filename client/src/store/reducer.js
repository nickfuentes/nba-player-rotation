const initialState = {
  player: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_PLAYER") {
    return {
      ...state,
      player: state.player + 1
    }
  }
  return state
}

export default reducer
