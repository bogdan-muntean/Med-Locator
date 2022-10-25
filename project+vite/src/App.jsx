import './style/style.css'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'

function App(){
  return(
    <div className='app'>
      <Navbar/>
      <SearchBar/>
    </div>
  )
 
  // Container 
  //   Bara de cautare 
  //   Optiune sa selectezi orasul si specializarea
  // Container pentru rezultate
  //   Detaliile medicului 
  //   Date de contact 
  //   Optine sa te programezi prin site, se deschide calendar unde poate selecta ziua si ora 
  //   Optiune de trimitere mail instant cu un form
  
}

export default App


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }
