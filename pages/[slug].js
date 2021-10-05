import React from 'react';
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/dist/client/link';

export default function slug(pizza, otherPizzas) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.pizza.name}</title>
            </Head>
            <div className={styles.pizzaWrapperLeft}>
                <img src={pizza.pizza.image} alt={pizza.pizza.name} className={styles.pizzaImage} />
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>{pizza.pizza.name}</p>
                    <p className={styles.pizzaDescription}>{pizza.pizza.description}</p>
                    <p className={styles.pizzaPrice}>${pizza.pizza.price}</p>
                    <p className={styles.pizzaTopping}>{pizza.pizza.toppings.map(topping => topping).join(', ')}</p>
                </div>
                <div className={styles.otherPizzasWrapper}>
                    {pizza.otherPizzas.map(otherPizza => {
                        return(
                            <div className={styles.otherPizzas} key={otherPizza.id}>
                                <Link href={"/" + otherPizza.slug}>
                                    <a>
                                        <img src={otherPizza.image} alt={otherPizza.name}/>
                                        <p>{otherPizza.name}</p>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://ricks-pizza.herokuapp.com/pizza/')
    const pizzas = await res.json();
    const paths = pizzas.map(pizza => ({
        params: {slug: `${pizza.slug}`}
    }));
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
    const res = await fetch('https://ricks-pizza.herokuapp.com/pizza/')
    const pizzas = await res.json();
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3)
        }
    }
}