import { Home, Search } from './pages'

const Routes = [
    {
        path: "/",
        index: true,
        element: <Home />
    },
    {
        path: "/search",
        index: true,
        element: <Search />
    },
];

export default Routes