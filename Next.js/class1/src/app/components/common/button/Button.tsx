"use client"
import React from 'react'

const Button = ({title,theme, newClasses}:{title:string,theme:"dark"|"light",newClasses:string}) => {
    let className
    if(theme === "dark"){
        className = "border px-12 py-1 rounded-lg border-black m-4"
    }else if(theme ==="light") {
        className = "border px-12 py-1 rounded-lg text-white bg-black m-4"
    }


    return (
        <button className={newClasses +" "+ className} onClick={()=>{
            alert("Hello World")
        }}>{newClasses + className}</button>
    )
}

export default Button


    // const data = {
    //     name:"Abu Hurairah",
    //     age:21,
    //     gender:"male"
    // }

    // const {name} = data
    // console.log("🚀 ~ Button ~ name:", name)
// button