import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price: 11.00
        },
        {
            id: '2',
            name: 'Pepperoni Pizza',
            slug: 'pep-pizza',
            toppings: ['mozzarella cheese', 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price: 15.00
        },
        {
            id: '3',
            name: 'Meat Fest',
            slug: 'meat-fest',
            toppings: ['mozzarella cheese', 'meats'],
            image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            price: 18.00
        },
        {
            id: '4',
            name: 'Swag Pizza',
            slug: 'swag-pizza',
            toppings: ['mozzarella cheese', 'moon cheese'],
            image: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            price: 20.00
        },
        {
            id: '5',
            name: 'Gold Pizza',
            slug: 'gold-pizza',
            toppings: ['mozzarella cheese', 'gold flakes'],
            image: 'https://images.unsplash.com/photo-1542438927-433fdaaec56a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=636&q=80',
            price: 211.00
        },
        {
            id: '6',
            name: 'Sausage Pizza',
            slug: 'sausage-pizza',
            toppings: ['mozzarella cheese', 'sausage'],
            image: 'https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
            price: 15.00
        }
    ]

    const [ keyword, setKeyword ] = useState('')

    const filteredPizzas = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase().includes(keyword)  ||  pizza.toppings.includes(keyword)
    )

    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }
    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza or toppings.." className={styles.searchBar} onChange={onInputChange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ? 
                (
                    <div className={styles.nopeContainer}>There is no pizza or topping with that</div>
                )
                :
                filteredPizzas.map(pizza => {
                    return(
                        <div className={styles.pizzaItem} key={pizza.id}>
                            <Link href={`/${pizza.slug}`}>
                                <a className={styles.pizzaImageBox}>
                                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} /></a> 
                                
                            </Link>
                            <div className={styles.pizzaText}>
                                <p className={styles.pizzaHeader}>{pizza.name}</p>
                                <p className={styles.pizzaToppings}>
                                    {pizza.toppings.map(topping => topping).join(', ')}
                                </p>
                                <p className={styles.pizzaPrice}>${pizza.price}</p>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}
