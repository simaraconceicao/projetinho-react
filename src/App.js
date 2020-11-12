import Titulo from './Titulo'
import Title from './Title'

export default function App(){
  return(    
    <>
      <Titulo texto = "esse texto é por props.texto"/>      
      <Title>esse texto é por children</Title> 
      <p>Esse texto foi direto no app</p>     
    </>
    
  )
}
