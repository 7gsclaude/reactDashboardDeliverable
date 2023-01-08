import Header from './components/Header'
import './App.css';
import Nav from './components/Nav'
import Squares from './components/sqauares';
import Visitors from './components/websiteVisitors';


function App()
{
  return (
        <>
      <Header/>
     <div class="wrapper" >
        <Nav />
        
          <Squares />
      
          <Visitors /> 
         </div>
       
        </>
  );
}

export default App;
