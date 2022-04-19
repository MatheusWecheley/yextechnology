import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../components/pages/login/login'
import HomePage from '../components/pages/home/homepage'
import { AuthProvider, AuthContext } from '../components/contexts/auth'
import React, { useContext } from 'react'
import RegisterPage from '../components/pages/register/register'
import Admin from '../components/admin/admin'

const AppRoutes = () => {
    
    // const Private = ({children}) => {
    //     const { authenticated, loading } = useContext(AuthContext);

    //     if(loading) {
    //         return <div className="loading">Loading..</div>
    //     }

    //     if(!authenticated) {
    //         return <Navigate to='/login'/>
    //     }

    //     return children;
    // }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/users/admin' element={<Admin />} />
                    <Route exact path='/register' element={<RegisterPage />} />
                    <Route exact path='/' element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </Router>
        
    )
}

export default AppRoutes;