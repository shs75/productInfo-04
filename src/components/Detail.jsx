import React from 'react'
import styles from './Detail.module.scss'

const Detail = ({data, getProductById}) => {
    const clickHandler = ()=>{
        getProductById(data.id)
    }
  return (
    <div onClick={clickHandler} className={styles.dv_product_button}>
        <span className={styles.dv_product_name}>{data.name}</span>
        <img className={styles.dv_product_image} src={data.img} alt='{data.name}' />
    </div>
  )
}

export default Detail