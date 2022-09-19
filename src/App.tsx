import { HashRouter, Routes, Route } from "react-router-dom";
import AddTrip from "./pages/AddTrip";

import SaveTrip from "./pages/SaveTrip";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<AddTrip />} />
      <Route path="/saveTripe" element={<SaveTrip />} />
    </Routes>
  </HashRouter>
);

export default App;
