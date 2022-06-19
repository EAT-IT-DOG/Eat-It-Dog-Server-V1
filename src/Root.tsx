import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./components/app";
import PageTemplate from "./components/common/pageTemplate";
import ThemeProviderContainer from "./components/common/themeProviderContainer";

const queryClient = new QueryClient();

const Root = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProviderContainer>
            <BrowserRouter>
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
