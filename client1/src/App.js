import CreateEmployee from './components/createEmployee';
import Dashboard from './components/dashboard';
import EmployeeList from './components/employeeList';
import Login from './components/login';
import UpdateEmployee from './components/updateEmployee';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/create' element={<CreateEmployee />} />
          <Route path='/list' element={< EmployeeList/>} />
          <Route path='/update/:id' element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
