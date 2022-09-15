import React, { createRef } from "react";

export default function ModalForm({ addUser, setAddUser, setModal }) {
   const userRef = createRef();
   const phoneRef = createRef();

   const addUsers = () => {
      setAddUser(
         [
            ...addUser,
            {
               id: Date.now(),
               userName: userRef.current.value,
               userPhone: phoneRef.current.value
            }
         ]
      )

      setTimeout(setModal(null), 0);
   }



   return (
      <form>
         <div className="name">
            <label>Ім'я</label>
            <input type='text' ref={userRef} />
         </div>
         <div className="phone">
            <label>Номер телефону</label>
            <input type='tel' ref={phoneRef} />
         </div>
         <div className="button">
            <input type='button' value="save" onClick={addUsers} />
         </div>
      </form>
   );
}