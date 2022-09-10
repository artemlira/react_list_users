import React, { createRef } from "react";

export default function ModalForm({ addUser, setAddUser }) {
   const userRef = createRef();
   const phoneRef = createRef();



   return (
      <form>
         <label>Name</label>
         <input type='text' ref={userRef} />
         <label>Phone</label>
         <input type='tel' ref={phoneRef} />
         <input type='submit' name="save" />
      </form>
   );
}