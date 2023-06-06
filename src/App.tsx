import { Navbar } from './components';
import { Home } from './pages';
import { LayoutContainer } from './styled-components';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  );
}

export default App;
