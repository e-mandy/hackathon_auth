import RegisterForm from './features/auth/components/RegisterForm';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/pages/HomePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<HomePage />} path="/" />
          </Route>
          <Route element={<RegisterForm />} path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
