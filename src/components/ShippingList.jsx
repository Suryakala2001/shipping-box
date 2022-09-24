import React from 'react'
import {useState} from "react";
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items,setItems]=useState([]);

    const addToList = (item) =>{
        console.log(item);
        const itemsCopy = [...items];
        itemsCopy.push(item)
        setItems(itemsCopy);
    };
  return (
    <div> <ShippingForm addToListCallback=
    {(value) => addToList(value)} />
  <table>
    <thead>
        <th>Title</th>
        <th>Weight</th>
        <th>Color</th>
        <th>Place</th>
    </thead>
    <tbody>
        {
            items.map((item) => {
                return (
                    <tr key={item.name}>
                    <td>{item.itemTitle}</td>
                    <td>{item.itemweight}</td>
                    <td>
                        <div style={{
                            backgroundColor: item.itemcolour,
                             width: '60px' ,
                             height:'30px'
                            
                        }}>
                        </div>
                    </td>
                    <td>{item.itemplace}</td>

                    </tr>
                );
            })
        }
    </tbody>
  </table>
    </div>
  )
}

export default ShippingList