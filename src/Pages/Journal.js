import { useEffect, useState } from "react";
import Editor from "../components/Editor";
import SideBar from "../components/SideBar";
import "../App.css";
import DeleteJournal from "../components/DeleteJournal";
import { Await } from "react-router-dom";


const config = {
  buttons: [
    "bold",
    "italic",
    "underline",
    "|",
    "ul",
    "ol",
    "eraser",
    "|",
    "fontsize",
    "brush",
    "|",
    "image",
    "table",

    "link",
    "|",
    "align",
    "|",
    "undo",
    "redo",
    "|",

    "fullsize",
  ],
};
export default function Journal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);
  const [displayEntries,setDisplayEntries]=useState([]);
  let [clicked,setClicked]=useState("")
  


  function handleAddEntry(content) {
    // console.log("cont",content)
    // let str=content;
    let date1=new Date();
    const newEntry = {
      
      // id :  Time(),
      title: title,
      
      cont: content,
      date: date1,
      upDate:date1,
    };
    console.log("id",newEntry.date)
    setEntries([...entries, newEntry]);
    setTitle("");
    setContent("");
  }
  return (
    <>
      <div className="h-screen bg-purple-200 flex flex-row overflow-hidden">
        <SideBar />
        <SearchJournal entries={entries} setContent={setContent} content={content} title={title} setTitle={setTitle} setClicked={setClicked} clicked={clicked} displayEntries={displayEntries} setDisplayEntries={setDisplayEntries}/>
         <Workspace
         entries={entries}
         setDisplayEntries={setDisplayEntries}
        setEntries={setEntries}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          setClicked={setClicked}
          clicked={clicked}
          onAddEntry={(content)=>handleAddEntry(content) }
        /> 
      </div>
    </>
  );
}
function SearchJournal({ entries,setContent,content,title,setTitle ,setClicked,clicked,displayEntries,setDisplayEntries}) {
  let [querry,setQuerry]=useState("");

  let handleSearch=()=>{
    let newArr=entries.filter((ele)=>{
       return ele.title.toLowerCase().includes(querry.toLowerCase())
     })
     setDisplayEntries(newArr)
    //  setQuerry("")
   }

   let handleSearch2=(e)=>{
    let newArr=entries.filter((ele)=>{
       return ele.title.toLowerCase().includes(e.toLowerCase())
     })
     setDisplayEntries(newArr)
    //  setQuerry("")
   }
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="bg-white h-screen w-1/4 flex flex-col border-r-2 ">
      <div className=" justify-center bg-gray-100 py-5 text-center ">
        <input

        
          type="text"
          className="rounded-xl py-2 px-3 w-4/5 border-2 border-gray-300"
          placeholder="Search your Journal"
          value={querry}
          onChange={async(e)=>{
             await setQuerry(e.target.value)
              // console.log("jnin",querry)
             
              handleSearch2(e.target.value)
              // handleSearch()
             

          }}
          onKeyPress={(e)=>{
          
           
          
        }}

        />
        <button className= "bg-purple-400 rounded-xl mt-2 p-1" onClick={()=>{
          handleSearch();
          setQuerry("");

        }}>Search</button>
      </div>
      {displayEntries.map((entry,idx) => (
        
        <div  onClick={()=>{

          if(clicked==entry.date){
            setClicked("");
            setContent("")
          setTitle("")

          }
          else{
            setClicked(entry.date)
            console.log("set",setContent)
          setContent(entry.cont)
          setTitle(entry.title)
          console.log("setcon",content)
          }

           
          // console.log(entry.cont)
          
         
        }}
          key={entry.date.getTime()}
          className="mb-1 border-b-2 border-b-violet-400 flex justify-center bg-violet-300 text-center   cursor-pointer"
       style={{backgroundColor:clicked==entry.date?"red":""}} >
          <div className=" w-1/3 py-5  border-r-2 border-r-violet-400 text-lg">
            <p>{`${entry.date.getDate()} ${months[entry.date.getMonth()]}`} </p>
          </div>
          <div className=" w-2/3 py-5  border-l-violet-400  text-lg flex-col ">
           <div className="h-5/6">
            {entry.title}
            </div>
            <div>
            <p className="text-xs " style={{fontSize:"8px"}}>{`upd: ${entry.upDate.getHours()}:${entry.upDate.getMinutes()},${entry.upDate.getDate()} ${months[entry.upDate.getMonth()]}`} </p>
            </div>
          </div>
          
        </div>
       
        
      ))}

      {/* <div className=" border-b-2 border-b-violet-400 flex justify-center bg-violet-300 text-center   cursor-pointer">
        <div className=" w-1/3 py-5  border-r-2 border-r-violet-400 ">Date</div>
        <div className=" w-2/3 py-5  border-l-violet-400">Entry</div>
      </div> */}
    </div>
  );
}
function Workspace({ title, setTitle, onAddEntry,content,setContent ,entries,setEntries,clicked,setClicked,displayEntries,setDisplayEntries}) {
  // const [content, setContent] = useState("");
 

  useEffect(()=>{
   setDisplayEntries(entries)
  },[entries])
 let [del,setDel]=useState(false);
  function handleTitle(e) {
    console.log(title);
    setTitle(e.target.value);
  }
  function handleClick() {
    // console.log("cont",content)
    setTitle(title);
    // setContent(content);
    onAddEntry(content);
    setTitle("");
    setContent("");
  }
  return (
    <>
    
    <div className="bg-white h-screen w-3/4 flex flex-col border-r-2 overflow-hidden">
   {
     del && <DeleteJournal del={del}setDel={setDel} entries={entries} setEntries={setEntries} clicked={clicked} setContent={setContent} setTitle={setTitle}></DeleteJournal>
   }
      <div className=" text-2xl items-center space-x-8 justify-end flex flex-row border-b-2  bg-gray-100  text-center ">
        <div onClick={()=>{
          let date=new Date();
          entries=entries.map((obj)=>{
            if(obj.date==clicked){
              obj.upDate=date;
              obj.title=title;
              obj.cont=content;
              setContent("")
               setTitle("")

            }
            return obj
         })
         setEntries(entries);
         setClicked("")
         
        }} className="cursor-pointer" title="EDIT">
          ✏️
        </div>
        <div onClick={()=>{
          if(clicked){setDel(true)}}} className="cursor-pointer" title="Delete">
          🗑️
        </div>
        <div
          className=" cursor-pointer rounded-l-lg bg-purple-500 p-5 px-6 text-white font-bold"
          title="NEW"
          onClick={()=>{
            setClicked("");
            handleClick()}}
        >
          +
        </div>
      </div>
      <div className=" justify-center bg-gray-100 py-3 text-center px-2">
        <input
          type="text"
          className="rounded-xl py-2 px-3 w-full border-2 border-gray-300 text-2xl"
          placeholder="Enter your Title..."
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className=" h-screen ">
        <Editor setContent={ setContent}content={content} config={config} />
      </div>
    </div></>
  );
}
