import React from 'react'
import Card from './Card';
import './styles.css'

export default function CenteredCard(props) {
    return (
      <div className="CenteredCard">
        <Card capital="Maceio" estado="Alagoas" pais="Brasil"></Card>
        <Card capital="Bahia" estado="Salvador" pais="Brasil"></Card>
        <Card capital="Recife" estado="Recife" pais="Brasil"></Card>
      </div>
    );
}
