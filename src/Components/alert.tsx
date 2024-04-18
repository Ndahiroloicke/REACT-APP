import { useState } from "react"

const Alert = () => {
  useState
  const [ind,setind] = useState(-1)
  const array = ['Jump force','Dragon ball kakarot','GTA V','FIFA 19','Tiktok']
  return (
    <>
    <ul>
      {
        array.map((item,index)=>(
          <li
          className={
            ind === index ? 'list-group-item active' : 'list-group-item'
          }
          onClick={
            ()=>{
              setind(index)
            }
          }
          >{item}</li>
        )
      )}
    </ul>
    </>
  )
}

export default Alert
