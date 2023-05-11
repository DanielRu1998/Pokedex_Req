import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Navigation = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'details',
            element: <Details />
        }
    ]);

    return <RouterProvider router={router} />
};

export default Navigation;
