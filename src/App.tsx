import './App.css';
import Countries from './components/Countries';
import FavCountriesProvider from './contexts/favCountries';

function App() {
  return (
    <FavCountriesProvider  >
      <div className="App">
        <Countries />
      </div>
    </FavCountriesProvider>

  );
}

export default App;
