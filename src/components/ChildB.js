import { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('ChildB Data')

  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(childBData)
        }}
      >
        送資料回ChildA
      </button>
    </>
  )
}

export default ChildB