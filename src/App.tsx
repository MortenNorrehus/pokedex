import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./output.css";
import { Slider } from "./components/Slider";
import "swiper/css";
import logo from "/images/logo.png";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[1400px] w-full m-auto absolute right-0 left-0 flex justify-end top-0 z-10 pt-10">
        <div className="w-40">
          <img src={logo} />
        </div>
      </div>
      <Slider />
    </QueryClientProvider>
  );
}

export default App;
