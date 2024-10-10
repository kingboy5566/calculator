

function Card(props){
    return(
        < >

       
      <div  style={{
        width :"300px",
        height:"200px",
        margin:"10px",
        flexWrap :"wrap",
        borderRadius:"4px",
        backgroundColor:"#e2e2e3",
        coloe:"#dddde3",
        float :'right',
        display: "flex",
        justifyContent:"space-between",}}>
       <h3 style={{paddingLeft:"10px",}}>{props.text}</h3> <br />
       <p style={{paddingLeft:"10px",}}>{props.p }</p>
       {props.img}
      
      </div>
      </>
    )
    }
    
    export default Card;