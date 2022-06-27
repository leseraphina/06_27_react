import data from './data.json'

function Sec02(){
  return (
    <div>
     {data.map((item) => {
      return <p key="item.str">{
        item.str
      }</p>
     })}
    </div>
  )
}
export default Sec02