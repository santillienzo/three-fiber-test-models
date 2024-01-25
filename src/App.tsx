import Experience from "./components/three.js/Experience";

const models= [
    
  {
    nombre3D: "PizzaRuculaAlpha.glb",
    archivo: "PizzaRuculaAlpha.glb",
    precarga: "/PizzaRuculaAlpha.glb",
    geometria: "PizzaRucula",
    material: "pizza",
  },
  {
    nombre3D: "PizzaRuculaAlpha.glb",
    archivo: "PizzaRuculaAlpha.glb",
    precarga: "/PizzaRuculaAlpha.glb",
    geometria: "PizzaRucula",
    material: "pizza",
  },
 

]

const App = () => {

  return (
    <main className="main">

      <Experience models={models}/> 
      
      
    
    </main>
    
  )
}

export default App
