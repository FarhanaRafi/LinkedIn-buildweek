import { GET_PROFILES } from "../Actions";



const initialState = {
  profiles: [],
}


const profilesReducer = (state = initialState, action) => {

  if(action.type === GET_PROFILES){
    return {
      ...state,
      profiles: action.payload
    }
  }




  return state 
}

export default profilesReducer