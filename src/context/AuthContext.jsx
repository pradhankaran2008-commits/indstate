import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('indstate_user_v1');
      return saved ? JSON.parse(saved) : {
        id: "usr-01",
        name: "Arjun Verma",
        phone: "+91 98765 43210",
        email: "arjun.verma@example.com",
        role: "Buyer", // "Buyer" | "Agent" | "Owner" | "Admin"
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        city: "Mumbai",
        state: "Maharashtra"
      };
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register' | 'otp'

  useEffect(() => {
    if (user) {
      localStorage.setItem('indstate_user_v1', JSON.stringify(user));
    } else {
      localStorage.removeItem('indstate_user_v1');
    }
  }, [user]);

  const login = (userData) => {
    setUser({
      id: `usr-${Date.now().toString().slice(-4)}`,
      name: userData.name || "Indian Homebuyer",
      phone: userData.phone || "+91 98000 12345",
      email: userData.email || "user@indstate.in",
      role: userData.role || "Buyer",
      city: userData.city || "Mumbai",
      state: userData.state || "Maharashtra",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
    });
    setIsAuthModalOpen(false);
  };

  const switchRole = (newRole) => {
    if (user) {
      setUser(prev => ({ ...prev, role: newRole }));
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        switchRole,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
