"use client"

import React from "react";
import { ThemeProvider } from "@/frontend/context/theme/themeContext";
import LayoutWrapper from "@/frontend/component/layout/Layout";
import ReactQueryProvider from "./reactQuery/ReactQueryProvider";

interface AllProviderProps {
  children: React.ReactNode
};

const AllProvider = ({ children }: AllProviderProps) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </ThemeProvider>
    </ReactQueryProvider>
  )
};

export default AllProvider
