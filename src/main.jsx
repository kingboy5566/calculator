import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import Calculator from './calcultaor/Calcultor.jsx';
import Like from './likeButton/Like.jsx';
import TextEditor from './textEditor/TextEditor.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
   <Calculator  />
   <Like/>
<TextEditor/>
  </StrictMode>
)
