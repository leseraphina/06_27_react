import React from "react";
import './pages.css'
import Sec01 from '../sources/Sec01'
import Sec02 from '../sources/Sec02'

function Sample01(){
  return (
    <>
    <article id="sample01">
      <h1> Sample01페이지 입니다.</h1>
      <p> Welcome Sample01</p>
      <Sec01 />
      <Sec02 />
    </article>
    </>
  )
}

export default Sample01