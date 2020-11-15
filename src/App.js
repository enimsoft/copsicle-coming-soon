import logo from './logo.svg';
import './App.css';
import ComingSoon from "react-coming-soon";

function App() {
  return (
    <div className="App">
     <ComingSoon
       image="https://react-coming-soon.maksv.me/default-image.jpeg"
       bgColor="#fff"
       textColor="#000"
       illustration="development"
     />
    </div>
  );
}

export default App;
