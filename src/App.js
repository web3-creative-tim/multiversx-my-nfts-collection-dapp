import React from "react";
import { DappProvider } from "@multiversx/sdk-dapp/wrappers";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import routes from "./routes";
import { environment } from "./config";
import "@ct-web3/multivers-ui/dist/css/multivers-ui.min.css";

const App = () => {
  return (
    <Router basename="/multiversx-my-nfts-collection-dapp/">
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: "customConfig", apiTimeout: 6000 }}
      >
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                key={"route-key-" + index}
                element={React.createElement(route.component)}
              />
            ))}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </DappProvider>
    </Router>
  );
};

export default App;
