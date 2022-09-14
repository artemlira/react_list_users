import React from "react";

export default function ListItem({ id, userName, userPhone }) {

   return (

      <li>{id}{userName}{userPhone}</li>
   );
}