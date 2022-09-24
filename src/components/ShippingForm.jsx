import React,{ useState} from "react";
import '../App.css'


function ShippingForm(props) {
  
  
  const [itemTitle,setTitle]= useState('');
  const [itemweight,setweight]= useState();
  const [itemcolour,setColour]= useState();
  const [itemplace,setPlace]= useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      itemTitle:itemTitle, 
      itemweight:itemweight,
      itemcolour:itemcolour,
      itemplace: itemplace
      
    };
    props.addToListCallback(data)
  }
  return (
    <div><h1>ShippingForm</h1>
    
    <form onSubmit={handleSubmit}>
        
      <input type="text" value={itemTitle} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/><br></br><br></br>
      <input type="text" value={itemweight} placeholder="weight" onChange={(e) => setweight(e.target.value)}/><br></br><br></br>
      <label>colour</label><br></br>
      <input type="color" value={itemcolour} placeholder="Colour" onChange={(e) => setColour(e.target.value)}/><br></br><br></br>
      <input type="text" value={itemplace} placeholder="Place" onChange={(e) => setPlace(e.target.value)}/><br></br><br></br>
      
      <button type="submit" style={{ color: "yellow", backgroundColor:"green"}}>Submit</button>

  </form>
  </div>
    

  )
}
export default ShippingForm