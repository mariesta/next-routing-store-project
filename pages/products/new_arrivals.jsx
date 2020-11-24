import Layout from '../../components/Layout';
import Product from '../../components/Product';
import {items} from '../../data';

export default function NewArrivals() {
  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>New Arrivals</h1>
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
