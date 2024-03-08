import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState({});
  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagDataServiceCall();

      setEnabled(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  console.log({ children });
  return <FeatureFlagsContext.Provider value={{ loading, enabled }}>{children}</FeatureFlagsContext.Provider>;
}
