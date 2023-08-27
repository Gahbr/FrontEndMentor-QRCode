import './App.css';
import QRCode from './components/QRCode';
import TextContainer from './components/TextContainer';

function App() {
  return (
    <>
      <main className="main">
        <QRCode src={import.meta.env.VITE_QRCODE} />
        <TextContainer />
      </main>
    </>
  );
}
export default App;
