import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './cards.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Card btn="Learn React"/>
    <Card btn="Learn Tailwind CSS"/>
    <Card btn="Learn Backend"/>
    <Card btn="Learn TypeScript"/>
    <Card btn="Learn Applied AI"/>
    <Card btn="Learn Next.js"/>
  </>
);
