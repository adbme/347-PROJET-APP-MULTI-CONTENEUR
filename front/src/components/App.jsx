import '../styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import AddStudent from './addStudent';
import DashboardStudent from './dashboardStudent';







function App() {
  return (
    <BrowserRouter>
    <Header />
    
    
    <Routes>
   <Route path="/" element={<DashboardStudent />} />
   <Route path="/addStudent" element={<AddStudent />} />

</Routes>

      </BrowserRouter>
  );
}

export default App;
