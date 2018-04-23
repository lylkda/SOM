import React from "react";
import "./Input.css";

export const DropDownList = props => (
  <div className="comp-input form-group">
    <label className='text-white'>{props.label}</label>
    <select className="form-control" {...(props.inputProps)} >
      {
        props.values.map(value => { return <option value={value.value}>{value.label}</option> })
      }
    </select>
  </div>
);
