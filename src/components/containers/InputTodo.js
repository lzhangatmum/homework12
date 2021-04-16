import React from 'react';
import { connect } from 'react-redux';
import { inputTodo } from '../../actions';


// const  handleKeyUp = e => {
//         if(input.value && e.nativeEvent.keyCode === 13){
//             dispatch(inputTodo(input.value))
//         }
//         input.value =''
//     }

const InputTodo = ({ dispatch }) => {
    let input
    return (
        <input ref={node => input = node} onKeyUp={
            e =>{ 
                if (input.value && e.keyCode === 13) {
                   console.log(input.value);
                dispatch(inputTodo(input.value))
                input.value = ''}
            }

            }   />
    )
}

export default connect()(InputTodo)