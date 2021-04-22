import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname:'',
        phone: '',
        email: '',
        message: '',
    });

    const inputEvent = (e) =>{
        const {name , value} = e.target;
        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
        }
        });
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname}`);
    }
    return(
        <>
         <div className="mb-5">
             <h1 className="text-center font-weight-bold">Contact us</h1>
         </div>
         <div className="container contact_div">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
                 <form onSubmit={formSubmit}>
                 <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Type your full name" required/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Enter Phone</label>
    <input type="tel" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Type your number" required />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" required />
  </div>
  {/* <div class="form-group">
    <label for="exampleFormControlSelect1">Number select</label>
    <select class="form-control" id="exampleFormControlSelect1" name="number" value={data.select} onChange={inputEvent} >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  {/* <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent}></textarea>
  </div>
   {/* <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div> */}
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
</form>
                 </div>
             </div>
         </div>
        </>
    );

}

export default Contact;