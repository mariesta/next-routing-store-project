import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout(props) {
  return(
    <div>
      <div className="container">
        <Header/>
        <Nav/>
          {props.children}
      </div>
      <Footer/>
    </div>

  )
}
