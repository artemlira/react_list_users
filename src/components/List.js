import React from "react";
import ListItem from "./ListItem";

export default function List({ addUser }) {
   console.log(addUser);

   return (
      <table border=''>
         <thead>
            <tr>
               <th>Ідентифікатор</th>
               <th>Ім'я користувача</th>
               <th>Номер телефону</th>
            </tr>
         </thead>
         <tbody>
            {addUser.map(item => <ListItem key={item.id} id={item.id} userName={item.userName} userPhone={item.userPhone} />)}
         </tbody>
      </table>
   );
}