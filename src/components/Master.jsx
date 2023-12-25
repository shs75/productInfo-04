import React from 'react'
import styles from './Master.module.scss'

const Master = ({data, getProductById}) => {
    const clickHandler = ()=>{
        getProductById(data.id)
    }
  return (
    <div onClick={clickHandler} className={`${styles.button}`}>
        <span className={`${styles.span_name}`}>{data.name}</span>
        <img className={`${styles.product_image}`} src={data.img} alt='{data.name}' />
        {/* <span>{data.images[0]}</span> */}
    </div>
  )
}

export default Master