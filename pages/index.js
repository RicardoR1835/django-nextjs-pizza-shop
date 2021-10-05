import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import styles from '../styles/Home.module.css'


export default function home({ pizzas }) {
  return (
    <Layout>
      <Home pizzas={pizzas} />
    </Layout>
  )
}

export const getStaticProps = async ({params}) => {
  const res = await fetch('https://ricks-pizza.herokuapp.com/pizza/')
  const pizzas = await res.json();

  return {
      props: {
          pizzas,
      }
  }
}