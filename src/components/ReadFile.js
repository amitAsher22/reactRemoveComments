import React , {  useState }  from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getText} from '../redux/action'
// import {render} from 'react-dom'




function ReadFile(props) {

 const [nameFile , setnameFile] = useState()
  const [text , setusetext] = useState()

const getText = (e)=>{
  const file = e.target.files[0]
  const render = new FileReader()
   render.readAsText(file)
   render.onload = ()=>{
    setnameFile(file.name)
    setusetext(render.result);
    const newText = render.result
    // console.log("text readfile",newText);
    const textSplit = newText.split("\n");
const array = []

for (let index = 0; index < textSplit.length; index++) {
  let line2 = textSplit[index];
  let line2split = line2.split('\r') //// remove /r (every line)
  let n = line2split[0].indexOf("//")/// give numbers lines when see this (//)
  let n2 = line2split[0].indexOf("/*")/// give numbers lines when see this (/*)
  let n3 = line2split[0].indexOf("*/")/// give numbers lines when see this (*/)
  


if(n < 0 && n2 < 0 && n3 < 0 ){
  const newSentence = line2split[0];//// without comment
  array.push(newSentence.trim())
}

}
// setusetext(array.join())
props.getText(array.join())
// console.log(array.join());
   }
  
  
}
  
// const withoutComments = ()=>{
// const textSplit = text.split("\n");
// const array = []

// for (let index = 0; index < textSplit.length; index++) {
//   let line2 = textSplit[index];
//   let line2split = line2.split('\r') //// remove /r (every line)
//   let n = line2split[0].indexOf("//")/// give numbers lines when see this (//)
//   let n2 = line2split[0].indexOf("/*")/// give numbers lines when see this (/*)
//   let n3 = line2split[0].indexOf("*/")/// give numbers lines when see this (*/)
  


// if(n < 0 && n2 < 0 && n3 < 0 ){
//   const newSentence = line2split[0];//// without comment
//   array.push(newSentence.trim())
// }

// }
// props.getText(array.join())
// console.log(array.join());
// }

  return (
  <>
    <h1>read file </h1>
    <div>
     <input type="file" onChange={getText}/>
    </div>
   <h3>the name of file is :</h3><span> {nameFile}</span>
   <h2>the content is :</h2> <p>{text}</p>
 
   
   <Link to="/output">
   <button >move to output - second page</button>
   </Link>
   

   
    
  </>
    );
}


const mapStateToProps = (state) => {
  // console.log("state init",state);
  return {
   
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     getText : (data)=> {dispatch(getText(data))}
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(ReadFile)