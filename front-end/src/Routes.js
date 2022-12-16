import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute component={<UserInfoPage />} />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
}