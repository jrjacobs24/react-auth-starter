import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogInPage } from './pages/LogInPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserInfoPage />} />
                <Route path="/login" element={<LogInPage />} />
            </Routes>
        </Router>
    );
}