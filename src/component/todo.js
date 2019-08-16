import React from 'react'


const TodoItems = (props) =>{
    const {items, deleteItem} = props;
    const ListItems = items.map((item,idx)=>{
        return (
                         
                    <tr>
                        <td>{idx +1+'. '}</td>
                        <td><span className='name'>{item.name}</span></td>
                        <td><input type="button" className="btn btn-danger" value="DELETE" onClick={()=>deleteItem(item.id)}/></td>
                    </tr>
        )
    })

   
    

        return(
            <div className='ListItems'>
                <div>
                    {/* <span className='name title'>Nama</span>
                    <span className='action title'>Button</span> */}
                </div>
                {ListItems}
            </div>
        )
    }


export default TodoItems ;