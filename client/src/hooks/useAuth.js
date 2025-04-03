// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = (setIsAuthenticated) => {
  
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay un token almacenado al cargar
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('adminToken', token);
    setIsAuthenticated(true);
    navigate('/admin');
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    navigate('/admin-login');
  };

  return { login, logout };
};