import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StandOut from "./pages/stand_out/standOut";
import Plus from "./pages/plus/plus";
import About from "./pages/about/about";
import Hc from "./pages/hc/hc";
import MainSide from "./pages/hc/mainSide";
import SecurityAndComplaint from "./pages/hc/securityAndComplaint";
import MainForSecurityAnxietyORCase from "./pages/hc/securityAnxietyOrCase/main";
import MainAgeVerification from "./pages/hc/ageVerification/main";
import MainForAdditionalResource from "./pages/hc/additionalResources/main";
import SecurityAnxietyORCaseTwo from "./pages/hc/securityAnxietyOrCase/two";
import SecurityAnxietyORCaseOne from "./pages/hc/securityAnxietyOrCase/one";
import SecurityAnxietyORCaseThree from "./pages/hc/securityAnxietyOrCase/three";
import SecurityAnxietyORCaseFour from "./pages/hc/securityAnxietyOrCase/four";
import AdditionalResourcesOne from "./pages/hc/additionalResources/one";
import AdditionalResourcesTwo from "./pages/hc/additionalResources/two";
import AdditionalResourcesThree from "./pages/hc/additionalResources/three";
import AdditionalResourcesFour from "./pages/hc/additionalResources/four";
import AdditionalResourcesFive from "./pages/hc/additionalResources/five";
import AdditionalResourcesSix from "./pages/hc/additionalResources/six";
import AgeVerificationsOne from "./pages/hc/ageVerification/one";
import AgeVerificationsTwo from "./pages/hc/ageVerification/two";
import Download from "./pages/download/download";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<StandOut />} />
      <Route path="/plus" element={<Plus />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

const downloadRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Download />} />)
);

const nestedRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Hc />}>
      <Route path="/" element={<MainSide />} />
      <Route path="/securityAndComplaint" element={<SecurityAndComplaint />} />
      {/* SecurityAnxietyORCase */}
      <Route
        path="/securityAndComplaint/SecurityAnxietyORCase"
        element={<MainForSecurityAnxietyORCase />}
      />
      <Route
        path="/securityAndComplaint/SecurityAnxietyORCase/One"
        element={<SecurityAnxietyORCaseOne />}
      />
      <Route
        path="/securityAndComplaint/SecurityAnxietyORCase/Two"
        element={<SecurityAnxietyORCaseTwo />}
      />
      <Route
        path="/securityAndComplaint/SecurityAnxietyORCase/Three"
        element={<SecurityAnxietyORCaseThree />}
      />
      <Route
        path="/securityAndComplaint/SecurityAnxietyORCase/Four"
        element={<SecurityAnxietyORCaseFour />}
      />
      {/* AgeVerification */}
      <Route
        path="/securityAndComplaint/AgeVerification"
        element={<MainAgeVerification />}
      />
      <Route
        path="/securityAndComplaint/AgeVerification/One"
        element={<AgeVerificationsOne />}
      />
      <Route
        path="/securityAndComplaint/AgeVerification/Two"
        element={<AgeVerificationsTwo />}
      />
      {/* AdditionalResource */}
      <Route
        path="/securityAndComplaint/AdditionalResource"
        element={<MainForAdditionalResource />}
      />
      <Route
        path="/securityAndComplaint/AdditionalResource/One"
        element={<AdditionalResourcesOne />}
      />
      <Route
        path="/securityAndComplaint/AdditionalResource/Two"
        element={<AdditionalResourcesTwo />}
      />
      <Route
        path="/securityAndComplaint/AdditionalResource/Three"
        element={<AdditionalResourcesThree />}
      />
      <Route
        path="/securityAndComplaint/AdditionalResource/Four"
        element={<AdditionalResourcesFour />}
      />
      <Route
        path="/securityAndComplaint/AdditionalResource/Five"
        element={<AdditionalResourcesFive />}
      />
      <Route
        path="/securityAndComplaint/AdditionalResource/Six"
        element={<AdditionalResourcesSix />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={downloadRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
