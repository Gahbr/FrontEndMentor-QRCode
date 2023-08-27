import './App.css';
import QRCode from './components/QRCode';
import TextContainer from './components/TextContainer';

function App() {
  return (
    <>
      <main className="main">
        <QRCode src={'../src/assets/images/image-qr-code.png'} />
        <TextContainer />
      </main>
    </>
  );
}
export default App;
