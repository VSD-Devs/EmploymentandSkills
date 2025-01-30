import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CareerQuiz from './components/CareerQuiz';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import YoungPeople from './components/YoungPeople';
import Navigation from './components/Navigation';
import CareerQuizPage from './pages/CareerQuizPage';
import EmployerPage from './components/EmployerPage';
import BusinessPage from './components/BusinessPage';
import AdultSkills from './components/AdultSkills';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => (
  <>
    <Hero />
    <CareerQuiz />
    <LatestNews />
    <Footer />
  </>
);

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/young-people" element={<MainLayout><YoungPeople /></MainLayout>} />
          <Route path="/career-quiz" element={<MainLayout><CareerQuizPage /></MainLayout>} />
          <Route path="/businesses" element={<MainLayout><BusinessPage /></MainLayout>} />
          <Route path="/adult-skills" element={<MainLayout><AdultSkills /></MainLayout>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;