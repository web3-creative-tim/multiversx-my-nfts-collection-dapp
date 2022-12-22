import React from "react";
import { DappProvider } from "@elrondnetwork/dapp-core";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import routes from "./routes";
import { environment } from "./config";

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
                element={<route.component />}
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
