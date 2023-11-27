import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/newCartSlice';




function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  //to call a function that add value to state
  const dispatch = useDispatch()
  return (
    <Row className='ms-3 me-3' style={{marginTop:'120px'}}>
      {data?.length>0?
      data?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '100%',height:''}} className='rounded-5'>
          <Card.Img className='rounded-top-5' variant="top" src={item.thumbnail} style={{height:"200px"}}/>
            <Card.Body>
              <Card.Title className='fw-bolder'>{item.title.slice(0,10)}...</Card.Title>
              <Card.Text>
                <p>{item.description.slice(0,40)}...</p>
                <p className='fw-bolder'>Price : ₹ {item.price}</p>
              </Card.Text>
              <div className='d-flex justify-content-between wishcart p-2'>
                <Button onClick={()=>dispatch(addToWishlist(item))} className='d-flex align-items-center p-3 fs-5 bg-dark' variant="danger"><i class="fa-regular fa-heart text-danger"></i></Button>
                <Button onClick={()=>dispatch(addToCart(item))} className='d-flex align-items-center p-3 fs-5 bg-dark' variant="danger"><i class="fa-solid fa-cart-plus text-warning"></i></Button>
              </div>
            </Card.Body>
        </Card>
      </Col>))
      :
      <p>Nothing to display!</p>
      }
    </Row>
  )
}

export default Home