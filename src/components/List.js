import React from "react";
import ListItem from "./ListItem";

export default function List({ addUser }) {

   return (
      <>
         <ul>
            {addUser.map(item => <ListItem key={item.id} id={item.id} userName={item.userName} userPhone={item.userPhone} />)}
         </ul>
      </>
   );
}