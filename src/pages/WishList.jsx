import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slices/newCartSlice';


function WishList() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <div className='ms-3 me-3' style={{marginTop:'120px'}}>

        <Row className='ms-3 me-3' style={{marginTop:'120px'}}>
          
          {wishlistArray?.length>0?
           wishlistArray?.map((item)=>(
           <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '100%',height:''}} className='rounded-5'>
              <Card.Img className='rounded-top-5' variant="top" src={item.thumbnail} style={{height:"200px"}}/>
                <Card.Body>
                  <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
                  <Card.Text>
                    <p>{item.description.slice(0,40)}...</p>
                    <p className='fw-bolder'>Price : ₹ {item.price}</p>
                  </Card.Text>
                  <div className='d-flex justify-content-between wishcart p-2'>
                    <Button onClick={()=>dispatch(removeFromWishlist(item.id))} className='d-flex align-items-center p-3 fs-5 bg-dark' variant=""><i class="fa-solid fa-xmark text-danger fs-4"></i></Button>
                    <Button onClick={()=>handleWishlist(item)} className='d-flex align-items-center p-3 fs-5 bg-dark' variant=""><i class="fa-solid fa-cart-plus text-warning"></i></Button>
                  </div>
                </Card.Body>
            </Card>
          </Col>
          ))
          :
          <div style={{height:"80vh"}} className='d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-black fw-semibold mb-3'>Your wishlist is empty!</h3>
            <img className='rounded-4' src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?w=740&t=st=1700996160~exp=1700996760~hmac=8045ea025d08d6ebc6ee9ba25551f1b723da74c8fd80819705733db01d937745" alt="No img" height={'300px'} />
            <button className='mt-3 rounded-3 btn '><Link className='text-decoration-none' to={'/'}>Go back to home</Link></button>
          </div>
          }

        </Row>

    </div>
  )
}

export default WishList