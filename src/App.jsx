import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';

function App() {
 

  return (
    <>

    <div  className='card-div'>
      
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

    </>
  )
}

export default App
