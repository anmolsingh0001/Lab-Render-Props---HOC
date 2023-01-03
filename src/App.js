// import logo from './logo.svg';
import './App.css';
// import Child from './components/Child';
// import Child2 from './components/Child2';
import Parentrender from './components/Parentrender';
import Childrend from './components/Childrender';
import Child2rend from './components/Child2render';

function App() {
  return (
    <div className="App">
      {/* <Child/>
      <Child2/> */}
      <Parentrender render={(count,functio)=>(
        <Childrend count={count} increment={functio} />
      )} 
      />
      <Parentrender render={(count,functio)=>(
        <Child2rend count={count} increment={functio} />
      )} 
      />
    </div>
  );
}

export default App;
