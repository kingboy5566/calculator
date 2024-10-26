import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
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
        < Container className="container like  " >
            <h3>Like and Dislike Tax Change through a Button </h3>
         <Button variant="info" onClick={changName} className=" ">{text}</Button>
         </ Container>
        
        </>
    )
}





export default Like