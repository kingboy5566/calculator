
function Button(props){
    return (
    <button
    style={{
        border :"1px solid black",
        borderRadius: "50px",
        width :"40px",
        height :"40px",
        margin : "10px",
        textAlign :'center',
        backgroundColor : "gray",
        color : "black",
        fontSize:"15px"
       
    }}
    onClick={props.action}>
         {props.action }
         {props.text}
        
         
    
  </button>


    )
}
export default Button;