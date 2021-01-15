import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

const App = () => {
  return (
    <main class="h-full flex items-center px-6 lg:px-32 text-white bg-gray-900">
      <Header />

      <Section />

      <Footer />
    </main>
  );
};

export default App;
