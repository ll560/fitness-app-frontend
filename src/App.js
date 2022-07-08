import Nav from '../src/components/Nav/Nav'
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
  <div className="mb-2">
    <Button type="button" className="btn btn-primary">
      Large button
    </Button>
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </div>
  <div>
    <Button variant="primary" size="sm">
      Small button
    </Button>{' '}
    <Button variant="secondary" size="sm">
      Small button
    </Button>
  </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  
    </div>
  );
}

export default App;
