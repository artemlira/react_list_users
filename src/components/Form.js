import React from "react";

export default function Form({ setModal }) {
   return (
      <>
         <div className="form__title" onClick={() => { setModal(true) }}>
            <h3>додати користувача</h3>
            <div className="form__btn">+</div>
         </div>
      </>
   );
}