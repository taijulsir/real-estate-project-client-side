const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root/Root");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    
    }
])
export default router;