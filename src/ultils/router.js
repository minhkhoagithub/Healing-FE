import ChanDoan from "../pages/chandoan_page";
import Home from "../pages/home/index.js";
import Symptoms from "../pages/chandoan_page/symptoms.js";
import Result from "../pages/chandoan_page/result.js";

const publicRoutes = [
    {   path: "/", 
        component: Home,
        layout: null
    },

    {   path: "/chan-doan",
        component: ChanDoan
    },
    {   path: "/trieu-chung",
        component: Symptoms
    },
    {   path: "/ket-qua",
        component: Result
    }
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes };