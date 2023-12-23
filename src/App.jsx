import { useState } from 'react'
import Detail from './components/Detail'
import styles from './App.module.scss'
import Master from './components/Master'

function App() {
  const [products, setProducts] = useState([
    {id:1, name:'Apple Ultra 2 Titanium Case Trail Loop 49mm Smart Watch', price:402000000 ,priceWithDiscount:39396000, description:"ساعت هوشمند اپل مدل Ultra 2 Titanium Case Trail Loop 49mm" , img: "https://dkstatics-public.digikala.com/digikala-products/1cd66e6fda5472ae2aa2c3153fad2872d328e2cd_1696071107.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", stock:10, incredibleOffers:true,dailySuggest: true},
    {id:2, name:'Apple Series 9 Aluminum 45mm M/L Smart Watch', price:193000000 ,priceWithDiscount:165000000, description:"ساعت هوشمند اپل مدل Series 9 Aluminum 45mm M/L" , img: "https://dkstatics-public.digikala.com/digikala-products/4cceca7c016ad782aae57aa8fc8c63a7bc6e1fec_1696058704.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", stock:2, incredibleOffers:false,dailySuggest: true},
    {id:3, name:'Apple Watch SE 2023 44mm Aluminum Case', price:13120000 ,priceWithDiscount:13020000, description:"ساعت هوشمند اپل مدل SE 2023 Aluminum Case 44mm" , img: "https://dkstatics-public.digikala.com/digikala-products/cf2f3cffef40a01b8cdff5114faecb6499ed0c64_1696676539.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", stock:6, incredibleOffers:true,dailySuggest: false}

  ])
  const [product, setMyProduct] = useState(products[0]);
  const getProductById = (id) =>{
    products.map((product) =>{
      if(product.id === id){
        setMyProduct(product);
      }
    })
  } 
  return(
    <div className={styles.dv_main_content}>
      <div className={styles.dv_buttons}>
        {
          products.map((product)=>{
            return <Detail key={product.id} data={product} getProductById={getProductById}/>
          })
        }
      </div>
      <div className={styles.dv_pannels}><Master product={product} /></div>
    </div>
  )
}

export default App
