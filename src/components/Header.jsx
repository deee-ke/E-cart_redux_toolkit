import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  //to access the state value
  const wishlist = useSelector((state)=>state.wishlistReducer)
  /* console.log(wishlist); */
  const cart = useSelector((state)=>state.cartReducer)

  return (
    <Navbar expand="lg" className="bg-dark fixed-top w-100">
      <Container>
        <Navbar.Brand href="#home"> <i class="fa-brands fa-opencart ms-2 text-warning me-2"></i><Link to={'/'} style={{textDecoration:"none",color:'white',fontWeight:'600'}}>E-cart</Link></Navbar.Brand>
        <Navbar.Toggle className='mt-1 mb-1' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link className='align-items-center d-flex' href="#home"><i class="fa-regular fa-heart me-1 text-danger"></i><Link to={'/wishlist'} style={{textDecoration:"none",color:'white',fontWeight:'400'}} className='align-items-center head-link d-flex'>Wishlist</Link><Badge bg="" className='p-1 ms-1 mb-3 border border-danger text-danger border-1 rounded-2'>{wishlist.length}</Badge></Nav.Link>
            <Nav.Link className='align-items-center d-flex' href="#link"><i class="fa-solid fa-cart-shopping me-1 text-warning"></i><Link to={'/cart'} style={{textDecoration:"none",color:'white',fontWeight:'400'}} className='align-items-center head-link d-flex'>Cart</Link><Badge bg="" className='p-1 ms-1 mb-3 border border-warning text-warning border-1 rounded-2'>{cart.length}</Badge></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header