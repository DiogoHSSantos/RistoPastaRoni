import { v4 as uuidv4 } from 'uuid';

import xBaconImage from '../../assets/lanche-de-carne.png';
import xSaladaImage from '../../assets/lanche-de-salada.png';
import especial from '../../assets/lanche-pao-negro.jpg';
import hotDog from '../../assets/hot-dog.jpg'

export const lanches = [
    {
        id: uuidv4(),
        nome:'X-Bacon',
        preco: 18.50,
        imagem: xBaconImage,
        descricao: 'hamburguer artezanal de 150g, bacon, cheddar e maionese especial.'
    },
    {
        id: uuidv4(),
        nome: 'X-Salada',
        preco: 14.00,
        imagem: xSaladaImage,
        descricao: 'hamburguer simples, muzarella, salada(alface e tomate)'
    },
    {
        id: uuidv4(),
        nome: 'Especial',
        preco: 20.00,
        imagem: especial,
        descricao: 'pao negro especial, hamburger artezanal de 150g., alface, cebola roxa, picles e cheddar'
    },
    {
        id: uuidv4(),
        nome: 'Hot-dog',
        preco: 14.00,
        imagem: hotDog,
        descricao: 'Pão de hot-dog, duas salsichas, batata-palha, purê de batata, picles e molho especial'
    },
]

import pizza4Queijo from '../../assets/pizza-4-queijos.jpg'
import pizzaCalabresa from '../../assets/pizza-calabresa.jpg'
import pizzaMozzarela from '../../assets/pizza-mozzarela.jpg'

export const pizzas = [
    {
        id: uuidv4(),
        nome: 'Pizza 4 queijos',
        preco: 53.00,
        imagem: pizza4Queijo,
        descricao: ''
    },
    {
        id: uuidv4(),
        nome: 'pizza de Calabresa',
        preco: 45.00,
        imagem: pizzaCalabresa,
        descricao: ''
    },
    {
        id: uuidv4(),
        nome: 'pizza de mozzarela',
        preco: 45.00,
        imagem: pizzaMozzarela,
        descricao: ''
    },
]

import porcaoFrangoImg from '../../assets/combo-de-frango.jpg';
import porcaoBatataImg from '../../assets/porcao-de-fritas.jpg';

export const porcoes = [
    {
        id: uuidv4(),
        nome: 'Frango médio',
        preco: 15.00,
        imagem: porcaoFrangoImg,
    },
    {
        id: uuidv4(),
        nome: 'Frango grande',
        preco: 30.00,
        imagem: porcaoFrangoImg,
    },
    {
        id: uuidv4(),
        nome: 'Batata média',
        preco: 12.00,
        imagem: porcaoBatataImg,
    },
    {
        id: uuidv4(),
        nome: 'Batata grande',
        preco: 24.00,
        imagem: porcaoBatataImg,
    },
]

import comboFrangoImg from '../../assets/combo-de-frango.jpg'
import comboPanquecaImg from '../../assets/combo-panqueca-com-batatas.jpg'

export const combos = [
    {
        id: uuidv4(),
        nome: 'Frango',
        imagem: comboFrangoImg,
        preco: 33.00,
        descricao: 'Arroz, Feijão, salada e uma porção de frango média'
    },
    {
        id: uuidv4(),
        nome: 'Panqueca',
        imagem: comboPanquecaImg,
        preco: 30.00,
        descricao: 'Arroz, feixão, salada e panqueca delivery'
    },
]
