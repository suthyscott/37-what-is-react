import './App.css';
import ListItem from './ListItem';

const App = () => {
  // JSX ==> JS + HTML in the same file

  return (
    <div className="App">
      This is app.js
      <ListItem item='Buy eggs' priority='5'/>
      <ListItem item='Buy bread'/>
      <ListItem item='Buy milk'/>
      <ListItem item='Buy flour'/>
      <ListItem item='Buy chocolate chips'/>
    </div>
  );
}

export default App;
