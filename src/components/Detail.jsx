import React from 'react'
import styles from './Detail.module.scss'
import Counter from './Counter';

const Detail = ({product}) => {
    let priceText = "";
    if(product.priceWithDiscount > 0){
        let off = 100 - ((product.priceWithDiscount / product.price) * 100)
        priceText = <div className={`${styles.price} , ${styles.discount}`}>
            <span>{`${product.priceWithDiscount} تومان`}</span>
            <span>{`${off.toFixed() }% تخفیف`}</span>
            <span>{`${product.price} تومان`}</span>
        </div>
    }
  return (
    <div className={`${styles.product_Panel}`}>
        <div className={`${styles.content}`}>
            <span className={`${styles.dv_product_name_panel}`}>نام: {product.name}</span><br />
            <span className={`${styles.description}`}>توضیحات: {product.description}</span><br />
            <div className={`${styles.price_box}`}>
                <div className={`${styles.price}`}>قیمت: {product.price} تومان</div>
                <div className={`${styles.discount}`} >قیمت با تخفیف: {product.priceWithDiscount} تومان 
                </div>
                <div className={`${styles.stock}`}>موجودی: {product.stock}</div>
                <div className={`${styles.counter}`}>
            <Counter />
        </div>
            </div>
        </div>
        <div className={`${styles.dv_image_box}`}>
            <img className={`${styles.product_img_panel}`} src={product.img} alt='{product.name}' />
        </div>
        
    </div>
  )
}

export default Detail