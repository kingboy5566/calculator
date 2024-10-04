
import Card from '../card/Card';
import Calculator from './calcultaor/Calcultor';



function App() {
 

  return (
    <>

    <div style={{
      width:"80%",
      height : "500px",
      margin :"0px 100px",
      flexWrap:"wrap",
    
    }}>
     <Card
   
   text = "Instant Server Start"
   p= "On demand file serving over native ESM, no bundling required!"
   color ="red"
   />

<Card
   text = "Lightning Fast HMR"
   p = "Hot Module Replacement (HMR) that stays fast regardless of app size."
   
   />

<Card
   text = "Rich Features"
   p ="Out-of-the-box support for TypeScript, JSX, CSS and more."
   
   /> 

<Card
   text = "Optimized Build"
   p = "Pre-configured Rollup build with multi-page and library mode support."
  
   />
   
<Card
   text = "Universal Plugins"
   p = "Rollup-superset plugin interface shared between dev and build."
  
   />
<Card
   text = "Fully Typed APIs"
   p ="Flexible programmatic APIs with full TypeScript typing." /> 

</div> 
<Calculator/>
    </>
  )
}

export default App
