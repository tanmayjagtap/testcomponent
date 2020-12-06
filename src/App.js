import './App.css';
import FirstComp from './Components/FirstComp/FirstComp.js';
import Parallax from './Components/ParallaxScrolling/ParallaxScrollling';
const App = () => {
  return (
    <div>
      <FirstComp/>
      {/* <----------------Add Components here ------------> */}
      <Parallax/>
    </div>
  );
}  

export default App;
