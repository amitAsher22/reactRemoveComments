const initState = {
  textNew: "",
 

}

export const reducer = (state = initState, action={} ) =>{
    switch (action.type) {
      case "SETTEXT":
      
        return{...state , textNew:action.payload}
      default:
        return {...state }
    }
}