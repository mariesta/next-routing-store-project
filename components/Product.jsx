export default function Product({product}) {
  return(
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary">{product.category}</strong>
        <h3 className="mb-0 pb-2">{product.title}</h3>
        <p className="card-text mb-auto">{product.description}</p>
        <a href="#" className="stretched-link">See details</a>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img height="250" src={product.img} />
      </div>
    </div>
  )
}
