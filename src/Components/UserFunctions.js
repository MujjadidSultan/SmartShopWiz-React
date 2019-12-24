import axios from 'axios';

export const getMyToken = () =>{
  return localStorage.getItem("usertoken");
}

/* ###################################################### */
/* USERS */
/* ###################################################### */

export const login = user => {
  return axios
    .post('/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log('Log in success')
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      headers: { Authorization: ` ${getMyToken()}` },
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const update = updateUser => {
  return axios
    .post('/users/update', {
      headers: { Authorization: ` ${getMyToken()}` },
      first_name: updateUser.first_name,
      last_name: updateUser.last_name,
      email: updateUser.email,
      phonenumber: updateUser.phonenumber,
      age: updateUser.age,
      gender: updateUser.gender,
      houseno: updateUser.houseno,
      streetno: updateUser.streetno,
      area: updateUser.area,
      city: updateUser.city,
      cnic: updateUser.cnic
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const changepassword = changepasswordUser => {
  return axios
    .post('users/changepassword', {
      headers: { Authorization: ` ${getMyToken()}` },
      email: changepasswordUser.email,
      password: changepasswordUser.password,
      newpassword: changepasswordUser.newpassword,
      newconfirmpassword: changepasswordUser.newconfirmpassword      
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const addemployee = newUser => {
  return axios
    .post('/users/addemployee', {
      headers: { Authorization: ` ${getMyToken()}` },
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      employeeID: newUser.employeeID,
      password: newUser.password,
      confirmpassword: newUser.confirmpassword,
      phonenumber: newUser.phonenumber,
      age: newUser.age,
      gender: newUser.gender,
      houseno: newUser.houseno,
      streetno: newUser.streetno,
      area: newUser.area,
      city: newUser.city,
      role: newUser.role,
      cnic: newUser.cnic,
      status: newUser.status
    })

   .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateemployee = updateUser => {
  return axios
    .post('/users/updateemployee', {
      headers: { Authorization: ` ${getMyToken()}` },
      first_name: updateUser.first_name,
      last_name: updateUser.last_name,
      email: updateUser.email,
      phonenumber: updateUser.phonenumber,
      age: updateUser.age,
      gender: updateUser.gender,
      houseno: updateUser.houseno,
      streetno: updateUser.streetno,
      area: updateUser.area,
      city: updateUser.city,
      cnic: updateUser.cnic
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getemployeebyemail = employee => {
  const email1 = localStorage.upemail
  console.log(email1)
  return axios
    .get('/users/getemployee/'+email1, {
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const employee_list = emp_list => {
  return axios
    .get('/users/viewemployeelist', {
      headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteemployee = deleteUser => {
  return axios
    .post('/users/deleteemployee', {
      email: deleteUser.email,
      status: deleteUser.status
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const customer_list = cust_list => {
  return axios
    .get('/users/viewcustomerlist', {
      headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const logout = user => {
  return axios
    .get('/logout', {
      headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log('Log out success')
      localStorage.removeItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* FORGOT PASSWORD */
/* ###################################################### */

export const sendemail = sendemail => {
  return axios
    .post('/users/sendemail', {
      email: sendemail.email
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const verifyCode = verifyCode => {
  return axios
    .post('/users/verifyCode', {
      email: verifyCode.email,
      verifycode: verifyCode.verifycode
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updatepassword = updatepassword => {
  return axios
    .post('/users/updatepassword', {
      email: updatepassword.email,
      newpassword: updatepassword.newpassword
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* SUPPLIERS */
/* ###################################################### */

export const addsupplier = newSup => {
  //console.log(newSup.product_id)
  return axios
    .post('/suppliers/addsupplier', {
      headers: { Authorization: ` ${getMyToken()}` },
      supplier_name: newSup.supplier_name,
      supplier_quantity: newSup.supplier_quantity,
      product_name: newSup.product_name
    })

   .then(response => {
      console.log(response)
      return response.dat
    })
    .catch(err => {
      console.log(err)
    })
}

export const supplier_list = sup_list => {
  return axios
    .get('/suppliers/getallsupplier', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const deletesupplier = deleteSup => {
  return axios
    .post('/suppliers/deletesupplier', {
      supplier_id: deleteSup.supplier_id,
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updatesupplier = updateSup => {
  return axios
    .post('/suppliers/updatesupplier', {
      headers: { Authorization: ` ${getMyToken()}` },
      supplier_name: updateSup.supplier_name,
      supplier_quantity: updateSup.supplier_quantity,
      product_id: updateSup.product_id,
      supplier_id: updateSup.supplier_id 
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getsupplierbyid = supplier => {
  const id1 = localStorage.upid
  console.log(id1)
  return axios
    .get('/suppliers/getsupplier/'+id1, {
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* PRODUCTS */
/* ###################################################### */

export const addproduct = newProd => {
  console.log(newProd.product_image);
  let imageFormObj = new FormData();
  imageFormObj.append("product_image",newProd.product_image);
  imageFormObj.append("product_id",newProd.product_id);
  imageFormObj.append("product_name",newProd.product_name);
  imageFormObj.append("price",newProd.price);
  imageFormObj.append("description",newProd.product_des);
  imageFormObj.append("status",newProd.status);
  imageFormObj.append("category_id",newProd.category_id);
  imageFormObj.append("subcategory_id",newProd.subcategory_id);
  imageFormObj.append("quantity",newProd.quantity);

  return axios({
    method: 'POST',
    url: '/products/addproduct',
    data: imageFormObj,
    config :{
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (err) {
        //handle error
        console.log(err);
        let data = undefined
        return data;
    });
  /*return axios
    .post('/products/addproduct', {
      product_name: newProd.product_name,
      product_image: newProd.product_image,
      price: newProd.price,
      description: newProd.product_des,
      status: newProd.status,
      category_id: newProd.product_cat,
      quantity: newProd.product_quantity
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })*/
}

export const product_list = prod_list => {
  return axios
    .get('/products/getallproduct', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteproduct = deleteProd => {
  return axios
    .post('/products/deleteproduct', {
      product_id: deleteProd.product_id,
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateproduct = updateProd => {
  return axios
    .post('/products/updateproduct', {
      headers: { Authorization: ` ${getMyToken()}` },
      product_name: updateProd.product_name,
      price: updateProd.price,
      description: updateProd.description,
      status: updateProd.status,
      category_id: updateProd.category_id,
      subcategory_id: updateProd.subcategory_id,
      manufacture_date:updateProd.manufacture_date,
      expiring_date:updateProd.expiration_date,
      product_id:updateProd.product_id,  
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getproductbyid = product => {
  const id1 = localStorage.upid
  console.log(id1)
  return axios
    .get('/products/getproduct/'+id1, {
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateproductstatus = updateStatus => { 
  return axios
  .post('/products/updatestatusproduct', {
    headers: { Authorization: ` ${getMyToken()}` },
    product_id: updateStatus.product_id,
    status: updateStatus.status
  })
  .then(response => {
    console.log(response)
    return response.data
  })
  .catch(err => {
    console.log(err)
  })

}

export const getoneproduct = data => {
  return axios
    .get('/products/getproduct/'+data, {
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


/* ###################################################### */
/* CATEGORIES */
/* ###################################################### */

/*export const addcategory = newCat => {
  return axios
    .post('/categories/addcategory', {
      headers: { Authorization: ` ${getMyToken()}` },
      category_id: newCat.category_id,
      category_image: newCat.category_image,
      category_name: newCat.category_name,
      description: newCat.description
    })

   .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}*/

export const addcategory = newCat => {
  console.log(newCat.category_image);
  console.log(newCat.category_name);
  let imageFormObj = new FormData();
  imageFormObj.append("category_image",newCat.category_image);
  imageFormObj.append("category_id",newCat.category_id);
  imageFormObj.append("category_name",newCat.category_name);
  imageFormObj.append("description",newCat.description);

  for (var key of imageFormObj.entries()) {
    console.log(key[0] + ', ' + key[1]);
}

  return axios({
    method: 'POST',
    url: '/categories/addcategory',
    data: imageFormObj,
    config :{
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }

export const category_list = cat_list => {
  return axios
    .get('/categories/getallcategory', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const deletecategory = deleteCat => {
  return axios
    .post('/categories/deletecategory', {
      category_id: deleteCat.category_id,
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updatecategory = updateCat => {
  return axios
    .post('/categories/updatecategory', {
      headers: { Authorization: ` ${getMyToken()}` },
      category_name: updateCat.category_name,
      description: updateCat.description,
      category_id: updateCat.category_id
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getcategorybyid = category => {
  const id2 = localStorage.upid
  console.log(category.category_id)
  return axios
    .get('/categories/getcategory/'+category.category_id, {
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* SUB CATEGORIES */
/* ###################################################### */

export const addsubcategory = newSubCat => {
  return axios
    .post('/subcategories/addsubcategory', {
      headers: { Authorization: ` ${getMyToken()}` },
      subcategory_id: newSubCat.subcategory_id,
      category_id: newSubCat.category_id,
      category_name: newSubCat.category_name,
      subcategory_name: newSubCat.subcategory_name,
      description: newSubCat.description
    })

   .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const subcategory_list = subcat_list => {
  return axios
    .get('/subcategories/getallsubcategory', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const deletesubcategory = deleteSub => {
  return axios
    .post('/subcategories/deletesubcategory', {
      subcategory_id: deleteSub.subcategory_id,
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updatesubcategory = updateSub => {
  return axios
    .post('/subcategories/updatesubcategory', {
      headers: { Authorization: ` ${getMyToken()}` },
      subcategory_name: updateSub.subcategory_name,
      description: updateSub.description,
      subcategory_id: updateSub.subcategory_id
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getsubcategorybyid = subcategory => {
  const id2 = localStorage.upid
  console.log(subcategory.subcategory_id)
  return axios
    .get('/subcategories/getsubcategory/'+subcategory.subcategory_id, {
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* REVIEWS */
/* ###################################################### */

export const reviews_list = rev_list => {
  return axios
    .get('/reviews/getallreview', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* COMPLAINTS/TICKETS */
/* ###################################################### */

export const complaints_list = comp_list => {
  return axios
    .get('/tickets/getallticket', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* COMPLAINT/TICKETS CATEGORIES */
/* ###################################################### */

export const complaintcategory_list = comcat_list => {
  return axios
    .get('/complaintcategorys/getallcomplaintcategory', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const addcomplaintcategory = newComcat => {
  return axios
    .post('/complaintcategorys/addcomplaintcategory', {
      headers: { Authorization: ` ${getMyToken()}` },
      complaint_id: newComcat.complaint_id,
      complaint_name: newComcat.complaint_name
    })

   .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const deletecomplaintcategory = deleteComcat => {
  return axios
    .post('/complaintcategorys/deletecomplaintcategory', {
      complaint_id: deleteComcat.complaint_id,
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updatecomplaintcategory = updateComcat => {
  return axios
    .post('/complaintcategorys/updatecomplaintcategory', {
      headers: { Authorization: ` ${getMyToken()}` },
      complaint_id: updateComcat.complaint_id,
      complaint_name: updateComcat.complaint_name
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getcomplaintcategorybyid = complaintcategory => {
  console.log(complaintcategory.complaint_id)
  return axios
    .get('/complaintcategorys/getcomplaintcategory/'+complaintcategory.complaint_id, {
      headers: { Authorization: ` ${getMyToken()}` },
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* #######################################################################
   COMPLAINT/TICKET RESPONSE 
   ####################################################################### */

export const addcomplaintresponse = newComResp => {
  return axios
    .post('/ticketsresponses/addticketsresponse', {
      headers: { Authorization: ` ${getMyToken()}` },
      ticket_id: newComResp.ticket_id,
      message: newComResp.message
    })

   .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getcomplaintresponse = (complaint_id) => {
  console.log(complaint_id)
  return axios
    .get('/ticketsresponses/getticketsresponse/'+complaint_id, {
      headers: { Authorization: ` ${getMyToken()}` },
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getoneresponse = (complaint_id) => {
  console.log(complaint_id)
  return axios
    .get('/tickets/getticket/'+complaint_id, {
      headers: { Authorization: ` ${getMyToken()}` },
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const ticketstatusupdate = (ticket_id) => {
  return axios 
  .post('/tickets/receiveticket', {
    headers: { Authorization: ` ${getMyToken()}` },
    ticket_id: ticket_id
  })
  .then(response => {
    console.log(response.data)
    return response.data
  })
  .catch(err => {
    console.log(err)
  })

}

export const changeticketstatus = closeticket => {
  console.log(closeticket.ticket_id)
  return axios
    .get('/tickets/closeticket/'+closeticket.ticket_id, {
      headers: { Authorization: ` ${getMyToken()}` },
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* RESERVED PRODUCTS */
/* ###################################################### */

export const reservedproducts_list = rp_list => {
  return axios
    .get('/reservedproducts/getallreservedproduct', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const changereservationstatus = cancel => {
  console.log(cancel.reservation_id)
  return axios
    .post('/reservedproducts/cancelreservation', {
      headers: { Authorization: ` ${getMyToken()}` },
      reservation_id : cancel.reservation_id
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* SALES (CARTS) */
/* ###################################################### */

export const sales_list = () => {
  return axios
    .get('/carts/getallcartsforemployee', {
       headers: { Authorization: ` ${getMyToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getalldetailsofacart = cart => {
  console.log(cart)
  return axios
    .get('/carts/getalldetailofcartforemployee/'+cart, {
      headers: { Authorization: ` ${getMyToken()}` },
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* BILL */
/* ###################################################### */

export const addcart = newCart => {
  return axios
    .post('/carts/addcart', {
      headers: { Authorization: ` ${getMyToken()}` },
      total_bill: newCart.total_bill,
      products: newCart.products
    })

   .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/* ###################################################### */
/* INVOICE */
/* ###################################################### */

export const addinvoice = newInv => {
  return axios
    .post('/invoices/addinvoice', {
      headers: { Authorization: ` ${getMyToken()}` },
      invoice_id: newInv.invoice_id,
      cart_id: newInv.cart_id,
      bill: newInv.bill,
      given_cash: newInv.given_cash,
      reserved_cash: newInv.reserved_cash
    })

   .then(response => {
      console.log(response)
      return response.dat
    })
    .catch(err => {
      console.log(err)
    })
}