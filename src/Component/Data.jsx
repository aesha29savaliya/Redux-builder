import { useEffect, useState } from 'react';
import {
     useDispatch,
     useSelector
}
     from 'react-redux';

import {
     DELETE_PRODUCT_PROGRESS,
     GET_PRODUCT_PROGRESS,
     POST_PRODUCT_PROGRESS,
     UPDATE_PRODUCT_PROGRESS,
}
     from '../Redux-saga/Product/action/action';



const Data = () => {

     const dispatch = useDispatch();

     const [fdata, setFdata] = useState({
          name: "",
          email: "",
     });

     const data = useSelector(
          (state) =>
               state.productReducer
     );
     console.log(data.product);




     // POST FUNCTION HANDLE

     const change = (e) => {
          setFdata({ ...fdata, [e.target.name]: e.target.value });
     };

     const submitData = () => {
          dispatch({
               type: POST_PRODUCT_PROGRESS,
               payload: fdata,
          });

          setFdata({
               name: "",
               email: "",
          });
     };
     // DELETE FUNCTION HANDLE

     const deleteData = (id) => {
          console.log(id);
          dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: id })
     }



     // UPDATE FUNCTION HANDLE

     const [show, setShow] = useState({})

     const updateData = (value) => {
          setShow(value)
     }
     const editData = () => {
          dispatch({ type: UPDATE_PRODUCT_PROGRESS, payload: show })
     }

     const changeUpdate = (e) => {
          setShow({ ...show, [e.target.name]: e.target.value });
     }
     // GET FUNCTION HANDLE

     useEffect(() => {
          dispatch({ type: GET_PRODUCT_PROGRESS })
     }, [dispatch]);
     return (
          <div>
               <div>
                    <div>
                         <input type="text" name="name" onChange={change} value={fdata.name} />
                    </div>
                    <div>
                         <input type="text" name="email" onChange={change} value={fdata.email} />
                    </div>
                    <div>
                         <button onClick={submitData}>Submit</button>
                    </div>
               </div>
               <div>
                    <h3>update data</h3>
                    <div>
                         <input type="text" name="name" onChange={changeUpdate} value={show.name} />
                    </div>
                    <div>
                         <input type="text" name="email" onChange={changeUpdate} value={show.email} />
                    </div>
                    <div>
                         <button onClick={editData}>Edit</button>
                    </div>
               </div>

               {data.product.map((e, index) => {
                    return (
                         <div key={index}>
                              <h5>{e.name}</h5>
                              <p>{e.email}</p>
                              <button onClick={() => deleteData(e.id)} >Delete</button
                              >&nbsp;&nbsp;&nbsp;&nbsp;
                              <button onClick={() => updateData(e)} >Update</button>
                         </div>
                    );
               })}

          </div>
     );
};

export default Data
