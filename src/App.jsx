import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Introduction />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
