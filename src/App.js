import './App.css';
import FilterByAge from './components/filterbyage';
import FilterByLetter from './components/filterbystartletter';
import HOF from './components/HigherOrderComponent';
import TotalExperience from './components/totalexperience';
import UserType from './components/UserType';

function App() {
  return (
    <div className="App">
      <HOF />
      <UserType />
      <FilterByLetter />
      <FilterByAge />
      <TotalExperience />
    </div>
  );
}

export default App;
