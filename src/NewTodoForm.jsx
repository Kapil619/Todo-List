import { useState } from "react"

export function NewTodoForm({onSubmit}) {

  const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
     if (newItem === "")return

     onSubmit(newItem)
   
      setNewItem("")
    }
    
    return (
        <form  onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <label className="label-font" htmlFor="item" >New Todo Item</label>
    <input size="30" className="input-field" placeholder="Enter Todo Item" value={newItem} onChange={e =>setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn" >Add</button>
  </form>
    )
}