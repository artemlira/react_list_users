import React from "react";

export default function ListItem({ id, userName, userPhone }) {
   if (!userName && !userPhone) {
      return null
   }

   return (
      <tr>
         <td>{id}</td>
         <td>{userName}</td>
         <td>{userPhone}</td>
      </tr>
   );
}