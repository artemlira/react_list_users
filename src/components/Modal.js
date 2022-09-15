import React from "react";
import ModalForm from "./ModalForm";

export default function Modal({ modal, setModal, addUser, setAddUser }) {
   if (modal == null) {
      return null;
   }
   return (
      <div className="modal">
         <div className="modal__title">
            <h3>Новий користувач</h3>
            <p className="close" onClick={() => { setModal(null) }}>X</p>
         </div>
         <ModalForm addUser={addUser} setAddUser={setAddUser} setModal={setModal} />

      </div>
   );
}