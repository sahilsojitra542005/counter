import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Areas from './areas';
import UserProfile from './UserProfile';


function App() {
  const details = {
    name : "Sahil Sojitra",
    age : 19,
    location : "Surat",
    bio : "Coder of the Future"
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React 
    //     </a>
    //     <Counter />
    //     <Areas />
    //     <br></br>
    //   </header>
    // </div>
        <UserProfile  name={details.name} age={details.age} loc={details.location} bio={details.bio}/>
  );
}

export default App;
