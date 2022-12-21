import React, { useEffect, useState, useRef } from 'react'

function Index() {

    const [num, setNum] = useState(0)
    const [text, setText] = useState("")

    const inputRef = useRef()
    console.log(inputRef.current)

    const count = useRef(4)

    console.log(count.current)

    useEffect(() => {
        console.log("start")
        inputRef.current.focus()
        return function (){
            console.log("finish")
        }
    }, [])
    
    useEffect(()=> {
        console.log("changed");
    }, [text, num])

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleNum = (e)=> {
        setNum(e.target.value)
    }

    return (
        <div>
            <input type='text' ref={inputRef} value={text} onChange={handleChange} />
            <input type="number" value={num} onChange={handleNum}/>
        </div>
    )

}

export default Index