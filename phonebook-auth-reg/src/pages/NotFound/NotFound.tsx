import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <h3>
        Page was not found. Go try harder june.
        <span>Redirecting..</span>
      </h3>
    </>
  );
}
