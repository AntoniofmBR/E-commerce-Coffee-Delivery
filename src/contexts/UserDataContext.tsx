// UserDataContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type UserDataContextType = {
  CEP: string;
  setCEP: React.Dispatch<React.SetStateAction<string>>;
  Road: string;
  setRoad: React.Dispatch<React.SetStateAction<string>>;
  Number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  Complement?: string;
  setComplement?: React.Dispatch<React.SetStateAction<string>>;
  Neighborhood: string;
  setNeighborhood: React.Dispatch<React.SetStateAction<string>>;
  City: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  UF: string;
  setUF: React.Dispatch<React.SetStateAction<string>>;
  formOfPayment: string;
  setFormOfPayment: React.Dispatch<React.SetStateAction<string>>;
};

interface UserDataContextProviderProps {
  children: ReactNode;
}

export const UserDataContext = createContext({} as UserDataContextType);

export const UserDataContextProvider: React.FC<UserDataContextProviderProps> = ({ children }) => {
  const [CEP, setCEP] = useState('');
  const [Road, setRoad] = useState('');
  const [Number, setNumber] = useState('');
  const [Complement, setComplement] = useState('');
  const [Neighborhood, setNeighborhood] = useState('');
  const [City, setCity] = useState('');
  const [UF, setUF] = useState('');
  const [formOfPayment, setFormOfPayment] = useState('');

  return (
    <UserDataContext.Provider
      value={{
        CEP,
        setCEP,
        Road,
        setRoad,
        Number,
        setNumber,
        Complement,
        setComplement,
        Neighborhood,
        setNeighborhood,
        City,
        setCity,
        UF,
        setUF,
        formOfPayment,
        setFormOfPayment,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};