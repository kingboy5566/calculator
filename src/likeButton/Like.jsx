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
        <div className="container" >
            <h3>Like and Dislike Tax Change through a Button</h3>
         <Button variant="outline-primary" onClick={changName}>{text}</Button></div>
        
        </>
    )
}





export default Like