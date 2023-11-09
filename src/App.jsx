import LoginScreen  from './pages/NonAuthenticated/LoginScreen'
import RegisterScreen from './pages/NonAuthenticated/RegisterScreen'
import HomeScreen from './pages/Authenticated/HomeScreen'
import AuthParent from './pages/Authenticated/AuthParent'
import NonAuthParent from './pages/NonAuthenticated/NonAuthParent'
import { Routes, Route } from "react-router-dom";
import { store } from './store';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
    <Provider store={store}>  
     <Routes>
      <Route path="/" element={<NonAuthParent />}>
        <Route path="Login" element={<LoginScreen />} /> 
      </Route>

      <Route path="Register" element={<RegisterScreen />} />

      <Route path="/" element={<AuthParent />}>
        <Route path="/Home" element={<HomeScreen/>} />
      </Route>
    </Routes>
    </Provider>
    </>
  )
}

export default App
