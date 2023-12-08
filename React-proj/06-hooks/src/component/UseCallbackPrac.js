import {useState, useCallback} from "react"

export default function UseCallbackPrac () {
    const [items, setItems] = useState (["item1","item2","item3"])
    const [editing, setEditing] = useState (null)
    const [editText, setEditText] = useState ("")

    const handleEdit = useCallback ((item)=> {
        setEditText(item);
        setEditing(item)
    }, []) 

    const handleSave = useCallback ((itemToSave)=> {
        setItems(items.map((item) =>(item === editing ? itemToSave : item)))
        setEditing(null)
    }, [items, editing]
    )

    const handleDelete = useCallback ((itemToDelete)=> {
        setItems(items.filter((item)=>item !== itemToDelete))
    }, [items])

    return(
        
        <ul>
            {items.map((item)=> (<li key={item}>{editing === item ? (
                <input 
                type="text"
                value={editText}
                onChange={(e)=> setEditText(e.target.value)}
                />) : (item)}
                {editing === item ? (<button onClick={()=> handleSave(editText)}>Save</button>
                ):(
                <>
                    <button onClick={()=> handleEdit(item)}>Edit</button>
                    <button onClick={()=> handleDelete(item)}>Delete</button>
                </>
                )}
                </li>
            ))}
        </ul>
    );
}