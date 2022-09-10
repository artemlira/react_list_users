import React, { useState } from "react";
import Form from "./components/Form";
// import List from "./components/List";
import Modal from "./components/Modal";



function App() {
   const [modal, setModal] = useState(null);

   const [addUser, setAddUser] = useState([]);



   return (
      <>
         <h2>Список користувачів</h2>
         <Form modal={modal} setModal={setModal} />
         {/* <List addUser={addUser} /> */}
         <Modal modal={modal} setModal={setModal} addUser={addUser} setAddUser={setAddUser} />
      </>
   );
}

export default App;
