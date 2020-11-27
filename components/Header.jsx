import { withRouter } from 'next/router'

function Header({router}) {
  const navigateHome = () => router.push("/")

  return(
    <header className="store-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-12 text-center">
          <a className="store-header-logo text-dark" onClick={navigateHome}>My Store</a>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header)
