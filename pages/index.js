import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import styles from '../styles/Home.module.css'


export default function home() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
