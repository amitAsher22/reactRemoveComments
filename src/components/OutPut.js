import React from "react";
import { connect } from "react-redux";

function OutPut(props) {
  return (
  <>
    <h1>OutPut</h1>
    <p>{props.outPutText}</p>
  </>
    );
}

const mapStateToProps = (state) => {

  return {
    outPutText : state.textNew
  }
}





export default connect(mapStateToProps, null)(OutPut)