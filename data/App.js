import personas from './persona.json';
const App = () => {
  return (
    <div className="App">
      <p>El amor</p>
      {
        personas.map(persona => (
          <div className="box"> <p>nombre: {persona.nombre}</p>
            <p> edad:{persona.edad}</p>
            <hr></hr>
          </div>

        ))
      }
    </div>
  );
}

export default App;
