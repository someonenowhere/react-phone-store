import React from 'react'

export default function CartItem({ item, value }) {
  const { id, price, img, title, total, count } = item
  const { increment, decrement, removeItem } = value
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} className="img-fluid" style={{ width: "3rem", height: "3rem" }} alt="product" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        &#8377; {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className="">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              <i className="fas fa-minus"></i>
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
             <i className="fas fa-plus"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : {total}</strong>
      </div>
    </div>
  )
}
