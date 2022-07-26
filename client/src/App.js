import { Error, Landing, Register, ProtectedRoute } from "./pages";
import {
    AllJobs,
    AddJob,
    Profile,
    SharedLayout,
    Stats
} from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Stats />} />
                    <Route path="all-jobs" element={<AllJobs />} />
                    <Route path="add-job" element={<AddJob />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
