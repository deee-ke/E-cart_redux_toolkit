import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/newCartSlice';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  /* console.log(cartArray); */
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  
  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCart = ()=>{
    alert('Thankyou for placing your order')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
        {cartArray?.length>0?
      <div className='row ms-3 me-3' style={{marginTop:'120px'}}>
        <div className='col-lg-6'>
          <h3 className='text-black fw-semibold text-center mb-4'>Items in your cart</h3>
            {cartArray?.map((item)=>(
            <div className='row'>
              <div className='col-12'>
              <div className=' m-4 ' >   
              <div class="card mb-3 rounded-4" >
                <div class="row g-0">
                  <div class="col-md-4">
                  <Card.Img className='rounded-4' variant="top" src={item.thumbnail} alt='No img' height={200}/>
                  </div>
                  <div class="col-md-8 align-items-center d-flex">
                    <div class="card-body align-items-center d-flex flex-column p-3">
                      <h5 class="card-title">{item.title.slice(0,10)}...</h5>
                      <p className='fw-bolder'>Price : ₹ {item.price}</p>
                      <Button onClick={()=>dispatch(removeFromCart(item.id))} className='mt-4 align-items-center text-center ps-3 pe-3 p-2 bg-dark rounded-4 w-100' variant="">Remove item</Button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        <div className="col-lg-6 text-center d-flex  justify-content-center flex-column">
              <div className="border shadow p-5 rounded-4">
                <h2 className='text-primary'>Cart Summary</h2>
                <h4>Total numbers of products: <span className='text-black fw-semibold fs-2'>{cartArray.length}</span></h4>
                <h4>Total price : <span className='text-black fw-semibold fs-2 border border-primary border-2 rounded text-center ps-3 pe-3 bg-warning'>₹ {total}</span></h4>
                <button onClick={handleCart} className='btn btn-success w-100'>Checkout</button>
              </div>
        </div>
      </div>
        :
        <div style={{height:"80vh"}} className='d-flex flex-column justify-content-center align-items-center'>
          <h3 className='text-black fw-semibold mb-3'>Your cart is empty!</h3>
          <img className='rounded-4' src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?w=740&t=st=1700996160~exp=1700996760~hmac=8045ea025d08d6ebc6ee9ba25551f1b723da74c8fd80819705733db01d937745" alt="No img" height={'300px'} />
          <button className='mt-3 rounded-3 btn '><Link className='text-decoration-none' to={'/'}>Go back to home</Link></button>
        </div>}
    </>
  )
}

export default Cart
/* <Card className='rounded-4 d-flex'>
          <div >
            <Card.Img className='rounded-top-4' variant="top" src={item.thumbnail} alt='No img' height={200}/>
          </div>
          <div>
            <Card.Body className=' d-flex flex-column text-center'>
              <Card.Title>{item.title.slice(0,10)}...</Card.Title>
              <Card.Text>
                <p className='fw-bolder'>Price : ₹ {item.price}</p>
              </Card.Text>
              <Button onClick={()=>dispatch(removeFromCart(item.id))} className='align-items-center text-center p-3 bg-dark rounded-4 ' variant="">Remove item</Button>
            </Card.Body>
          </div>
        </Card> */