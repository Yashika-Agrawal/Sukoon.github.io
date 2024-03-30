import React from 'react'

const DeleteJournal = ({del,setDel,entries,clicked,setEntries,setContent,setTitle}) => {
  return (
    <div className='bg-white h-full absolute ml-0  w-full'>
    <div className='bg-red rounded-xl text-white my-6 mx-12  flex-col items-center justify-center  w-1/3 bg-black'>
       <div className='h-2/3 p-3 flex justify-center'>
         <h1>Bhai Soch Samajh ke delete Kar...</h1>
       </div>
        <div className='flex justify-center' >
        <button className='bg-red-800 rounded-xl p-2 m-2 w-1/3' onClick={()=>{
            setDel(false)
            entries=entries.filter((obj)=>{
                return obj.date!=clicked;
             })
             setEntries(entries);
             // setClicked("")
             setContent("")
             setTitle("")

        }
        }>Delete</button>
        <button className='bg-green-800 rounded-xl p-2 m-2 w-1/3' onClick={()=>{
            setDel(false)}}>Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default DeleteJournal



    