import React from 'react';

// import { Container } from './styles';

interface CardTypes {
  title: string
}

export const Card: React.FC<CardTypes> = ({ title }) => {
  return (
    <div>
      { title }
    </div>
  )
}
