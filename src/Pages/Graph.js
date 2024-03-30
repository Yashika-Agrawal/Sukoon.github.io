import SideBar from "../components/SideBar";
import {chart as chartJS} from "chart.js/auto"
import {Bar,Doughnut,line,Radar} from "react-chartjs-2"
export default function Graph({excited,joyfull,happy,neutral,unhappy,stressed,angry}) {

  const data=[
     
    
    {mood:"Exited",value:excited},
    {mood:"Joyfull",value:joyfull},
    {mood:"Happy",value:happy},
    {mood:"Neutra",value:neutral},
    {mood:"Unhappy",value:unhappy},
    {mood:"Stressed",value:stressed},
    {mood:"Angry",value:angry}
   
/*
 <Radar  data={{
          labels:[],
          datasets:[{
            label:"This Month",
            data:[]
          },
        }}></Radar>

*/

  ]
  return (
    <>
      <div className="h-screen bg-purple-200 flex flex-row">
           <SideBar />

           <div className="w-1/2 flex justify-center items-center ml-40" >
        <Radar  data={{
          labels:data.map((ele)=>{
             return ele.mood
          }),
          datasets:[{
            label:"This Month",
            data:data.map((ele)=>{
              return ele.value
            })
          },
         
        ]
        }}></Radar>

       </div>
        {/* <h1>Graph</h1> */}
      </div>
    </>
  );
}
