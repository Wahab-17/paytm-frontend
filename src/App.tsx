
import { Toaster as Sonner } from "@/components/ui/sonner"; // ✅ just use Sonner, no need for two
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";
import Transactions from "./pages/Transaction";
import { BalanceProvider } from "./context/BalanceContext";
import { AuthProvider } from "./context/AuthContext"; // ✅

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner position="top-right" richColors /> {/* ✅ show toast top-right */}
      <BrowserRouter>
      <AuthProvider>
        <BalanceProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<Send />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </BalanceProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
