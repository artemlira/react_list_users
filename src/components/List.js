import React from "react";

export default function List({ addUser }) {
   return (
      <>
         <ul>
            <li>{addUser}</li>
         </ul>
      </>
   );
}