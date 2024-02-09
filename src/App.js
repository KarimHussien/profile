import './App.css';
import Resume from './resume';

function AllComponents({ children }) {
  return (
    <div className="AllComponents">
      {children}
    </div>
  );
}


function App() {
  return (
    <AllComponents>
      <Resume />
    </AllComponents>
  );
}

export default App;