import './App.css';
import FirstComp from './Components/FirstComp/FirstComp.js';
import Parallax from './Components/ParallaxScrolling/ParallaxScrollling';
import Card from './Components/Card/Card';
const App = () => {
  return (
    <div>
      <FirstComp/>
      {/* <----------------Add Components here ------------> */}
      <Parallax/>
      <Card/>
    </div>
  );
}  

export default App;
