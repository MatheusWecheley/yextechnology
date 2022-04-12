import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from '../components/pages/homepage'
import HomePage from '../components/pages/homepage'
import { AuthProvider, AuthContext } from '../components/contexts/auth'
import React, { useContext } from 'react'
import Register from '../components/register/register'

const AppRoutes = () => {
    
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Loading..</div>
        }

        if(!authenticated) {
            return <Navigate to='/login'/>
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<Main />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/' element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </Router>
        
    )
}

export default AppRoutes;