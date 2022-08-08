import React, { useRef } from "react";
import useClickOutside from "./../hooks/useClickOutside";

export default function({ show, header, onHide, children }){
  let classes = ['alert', 'alert-success'];

  if(!show){
    classes.push('d-none');
  }

  let root = useRef();

  useClickOutside(root, function(){
    if(show){
      onHide();
    }
  });

  let content = !children ? null : <>
    {children}
    <hr/>
  </>

  return <div className={classes.join(' ')} ref={root}>
    <h2>{ header }</h2>
    <hr/>
    { content }
    <button className="btn btn-success" onClick={onHide}>Ok</button>
  </div>
}
