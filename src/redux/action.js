
export const getText = (data) =>{ 
  console.log("action redux" ,  data);
  return{
    type:"SETTEXT",
    payload:data

  }
}