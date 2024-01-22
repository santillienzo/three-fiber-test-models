
import { Route, Routes } from 'react-router-dom';
import Home from '../components/views/Home/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
