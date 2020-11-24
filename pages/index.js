import styles from '../styles/Home.module.css'

import Layout from '../components/Layout';
import Product from '../components/Product';
import {items} from '../data';

export default function Home() {
  return (
    <Layout>
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Welcome to My Store</h1>
          <p className="lead my-3">This project demonstrate routing in Next.js. We will be covering static, dynamic and shallow routing.</p>
        </div>
      </div>
      <div className="row mb-2">
        {
          items.map((item, i) => {
            return(
              <div
                className="col-md-6"
                key={`product-${item.id}`}>
                <Product product={item} />
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}
