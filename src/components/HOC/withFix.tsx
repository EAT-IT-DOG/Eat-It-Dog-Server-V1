import React from "react";
import FixPage from "../../pages/FixPage";

const withFix = (Component: React.ComponentType, isFixing: boolean) => {
  const FixCheck = () => {
    return isFixing ? <FixPage /> : <Component />;
  };

  return FixCheck;
};

export default withFix;
