import './App.css';
import AddData from './components/AddData/AddData';
import DeleteData from './components/DeleteData/DeleteData';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
function App() {
  return (
    <div className="App">
          <Header/>
          <UserList />
          <AddData/>
          <DeleteData/>
    </div>
  );
}

export default App;
