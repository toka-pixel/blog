import Home from "./components/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import { ConfigProvider } from "antd";

function App() {
  const queryClient = new QueryClient();

  // Custom primary color
  const theme = {
    token: {
      colorPrimary: "#00b96b",
      colorBgContainer: "#f6ffed",
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <div className="text-center my-10">
          <Home />
        </div>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
