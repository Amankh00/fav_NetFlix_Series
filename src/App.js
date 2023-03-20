
 import Tdata from "./Tdata";
 import ncard from "./ncard";


function App()
{
 return(

 <>
   <h1 className="Heading">List of Top <span>NETFLIX</span> Series</h1>
   {Tdata.map(ncard)}
 </>
 
  )
}
 
 export {App};