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
         <label>Name</label>
         <input type='text' ref={userRef} />
         <label>Phone</label>
         <input type='tel' ref={phoneRef} />
         <input type='button' value="save" onClick={addUsers} />
      </form>
   );
}