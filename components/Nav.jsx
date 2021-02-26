import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Nav() {
  const router = useRouter();

  const navigate = (href) => router.push(href)

  return(
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex">
        <Link href="/products/new_arrivals">
          <a className="p-2 text-muted">New Arrivals</a>
        </Link>
        <a className="p-2 text-muted" onClick={() => navigate('/about')}>About us</a>
      </nav>
    </div>
  )
}
