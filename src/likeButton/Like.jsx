import React,{useState} from "react";
import Button from 'react-bootstrap/Button';




function Like(){
    const [text, setText] = useState('like');
    
    const changName =()=>{
         if(text === 'like'){
            setText("Dislike")
         }else{
            setText('like')
         }
    }
    
    return(
        <>
        <div className="container like mt-2" >
            <h3>Like and Dislike Tax Change through a Button </h3>
         <Button variant="outline-primary" onClick={changName} className="mt-5 ">{text}</Button></div>
        
        </>
    )
}





export default Like