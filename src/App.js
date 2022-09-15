import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Modal from "./components/Modal";



function App() {
   const [modal, setModal] = useState(null);
   const [addUser, setAddUser] = useState([]);

   useEffect(() => {
      const data = JSON.parse(localStorage.getItem('users')) || [];
      setAddUser(data);
   }, []);

   useEffect(() => {
      if (addUser.length > 0) {
         localStorage.setItem('users', JSON.stringify(addUser));
      }
   }, [addUser])



   return (
      <div className="wrapper">
         <div className="container">
            <h2 className="title">Список користувачів</h2>
            <Form modal={modal} setModal={setModal} />
         </div>
         <List addUser={addUser} />
         <Modal
            modal={modal}
            setModal={setModal}
            addUser={addUser}
            setAddUser={setAddUser} />
      </div>
   );
}

export default App;
