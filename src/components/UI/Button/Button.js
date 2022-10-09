import React from 'react';
import styled from 'styled-components';

import './Button.css';

// the '.button' indicates that it is a method, //
// so any html tag can be used instead, //
// and inside the backticks is where we shall have our content //
const Button = styled.button``;

//const Button = (props) => {
//  return (
//        <button type={props.type} className='button' onClick={props.onClick}>
//            {props.children}
//        </button>
//    );
//};

export default Button;