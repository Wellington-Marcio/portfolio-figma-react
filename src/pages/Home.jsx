import React from 'react'
import Card from '../componets/cards/Card.jsx'
import { CardStyle } from '../Styles/GlobalStyles/Style.js'



export default function Home() {
  return (
  <div style={{ display: "flex", gap: "10px", flexFlow:"wrap"}}>
      <Card title="Projeto 001" description="Description do projeto 001" />
      <Card title="Projeto 002" description="Description do projeto 002" />
      <Card title="Projeto 003" description="Description do projeto 003" />
      <Card title="Projeto 004" description="Description do projeto 004" />
      <Card title="Projeto 005" description="Description do projeto 005" />
      <Card title="Projeto 006" description="Description do projeto 006" />
  </div>

    
    
  ) 
}
