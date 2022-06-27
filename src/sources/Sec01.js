import data from './data.json'

function Sec01(){
return (
  <ul>
    {
      data.map((item,index) => {
        return (<li key={index}>{item.title}</li>) 
      })
    }
  </ul>
)

}



export default Sec01