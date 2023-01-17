import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Aca toca</h1>
        <button className="red">Aca fresh</button>
      </div>
    </QueryClientProvider>
  );
}

export default App;
