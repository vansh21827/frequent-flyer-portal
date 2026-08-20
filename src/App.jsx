import { Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Dashboard from "./pages/Dashboard/Dashboard";
import Flights from "./pages/Flights/Flights";
import Rewards from "./pages/Rewards/Rewards";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Dashboard />} />
       <Route path="/flights" element={<Flights />} />
       <Route path="/rewards" element={<Rewards />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;