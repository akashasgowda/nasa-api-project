import React,{useState} from "react";

import classes from './Input.module.css'

const Input = (props)=>{
    const [data,setData] = useState('');

    const inputChangeHandler=(event)=>{
        setData(event.target.value)
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(data);
        props.onGetInputData(data);
        setData('');
    };
    
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Search for ..(eg:Earth)" value={data} onChange={inputChangeHandler}
             className={classes.input}/>
            <button type="search" className={classes.btn}>Search</button>
        </form>
    );
};

export default Input;