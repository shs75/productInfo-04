import React from 'react'
import styles from './Master.module.scss'

const Master = ({product}) => {
    let priceText = "";
    if(product.priceWithDiscount > 0){
        let off = 100 - ((product.priceWithDiscount / product.price) * 100)
        priceText = <div className={`${styles.dv_product_price} , ${styles.dv_product_discount}`}>
            <span>{`${product.priceWithDiscount} تومان`}</span>
            <span>{`${off.toFixed() }% تخفیف`}</span>
            <span>{`${product.price} تومان`}</span>
        </div>
    }
  return (
    <div className={styles.dv_product_Panel}>
        <div className={styles.dv_content_box}>
            <span className={styles.dv_product_name_panel}>نام: {product.name}</span><br />
            <span className={styles.dv_product_description}>توضیحات: {product.description}</span><br />
            <div className={styles.dv_product_stock}>موجودی: {product.stock}</div>
            <div className={styles.price_box}>
                <div className={styles.dv_product_price}>قیمت: {product.price} تومان</div>
                <div className={styles.dv_product_discount} >
                    
                     قیمت: {product.priceWithDiscount} تومان 
                </div>
            </div>
        </div>
        <div className={styles.dv_image_box}>
            <img className={styles.dv_product_image_panel} src={product.img} alt='{product.name}' />
        </div>
    </div>
  )
}

export default Master