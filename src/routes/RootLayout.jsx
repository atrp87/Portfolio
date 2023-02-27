import { Outlet, useLocation } from 'react-router-dom';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';
import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [skipSplash, setSkipSplash] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

  }, [location])

  const handleCurLocClick = () => {
    setSkipSplash(true);
  }

  return (
    <>
      {isLoading === false || skipSplash === true ? (
        <>
          <Header handleCurLocClick={handleCurLocClick} />
          <Outlet />
          <Footer />
        </>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}