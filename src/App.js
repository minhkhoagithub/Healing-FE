import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import { publicRoutes } from "./ultils/router.js";
import {DefaultLayout} from "./pages/layout"
import { Fragment } from "react";
import Info from'./components/info/info.js';
import Result from "./pages/chandoan_page/result.js";
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if(route.layout) {
                                Layout = route.layout;
                            } else if(route.layout === null ) {
                                Layout = Fragment;
                            }
                            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
                        })
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;