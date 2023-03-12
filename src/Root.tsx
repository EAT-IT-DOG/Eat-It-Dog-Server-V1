import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./components/App";
import PageTemplate from "./components/Common/PageTemplate";
import ThemeProviderContainer from "./components/Common/ThemeProviderContainer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Root = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProviderContainer>
            <BrowserRouter>
              <div id="dialog" />
              <div id="modal" />
              <PageTemplate>
                <App />
              </PageTemplate>
            </BrowserRouter>
          </ThemeProviderContainer>
        </RecoilRoot>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default Root;
