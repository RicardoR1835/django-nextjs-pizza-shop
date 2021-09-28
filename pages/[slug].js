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
            {console.log(pizza.pizza)}
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
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price: 11.00
        },
        {
            id: '2',
            name: 'Pepperoni Pizza',
            slug: 'pep-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price: 15.00
        },
        {
            id: '3',
            name: 'Meat Fest',
            slug: 'meat-fest',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'meats'],
            image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            price: 18.00
        },
        {
            id: '4',
            name: 'Swag Pizza',
            slug: 'swag-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'moon cheese'],
            image: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            price: 20.00
        },
        {
            id: '5',
            name: 'Gold Pizza',
            slug: 'gold-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'gold flakes'],
            image: 'https://images.unsplash.com/photo-1542438927-433fdaaec56a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=636&q=80',
            price: 211.00
        },
        {
            id: '6',
            name: 'Sausage Pizza',
            slug: 'sausage-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'sausage'],
            image: 'https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
            price: 15.00
        }
    ]

    const paths = pizzas.map(pizza => ({
        params: {slug: `${pizza.slug}`}
    }));
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price: 11.00
        },
        {
            id: '2',
            name: 'Pepperoni Pizza',
            slug: 'pep-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price: 15.00
        },
        {
            id: '3',
            name: 'Meat Fest',
            slug: 'meat-fest',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'meats'],
            image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            price: 18.00
        },
        {
            id: '4',
            name: 'Swag Pizza',
            slug: 'swag-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'moon cheese'],
            image: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            price: 20.00
        },
        {
            id: '5',
            name: 'Gold Pizza',
            slug: 'gold-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'gold flakes'],
            image: 'https://images.unsplash.com/photo-1542438927-433fdaaec56a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=636&q=80',
            price: 211.00
        },
        {
            id: '6',
            name: 'Sausage Pizza',
            slug: 'sausage-pizza',
            description: 'Super duper delicious pizza everyone',
            toppings: ['mozzarella cheese', 'sausage'],
            image: 'https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
            price: 15.00
        }
    ]
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3)
        }
    }
}