const personas = [
  {
    "nombre": "juan",
    "edad": 39
  },
  {
    "nombre": "Laura",
    "edad": 89
  }
]
const App = () => {
  return (
    <div className="App">
      <p>
        El amor
      </p>
      {
        personas.map(persona => (
        <div> <p>nombre: {persona.nombre}</p>
        <p> edad:{persona.edad}</p> 
        <hr></hr>
        </div>
        
        ))
      }
    </div>
  );
}

export default App;
