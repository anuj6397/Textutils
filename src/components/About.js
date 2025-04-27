import React, { useState } from 'react'
import { useFormState } from 'react-dom'

export default function About() {


  const [myStyle, setmyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',

  })
  const [btnText, setBtnText] = useState("enable light mode")


  const mode = () => {
    if (myStyle.color === 'white') {
      setmyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white',

      })
      setBtnText("enable light mode")

    }
    else {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black',

      })
      setBtnText("enable dark mode")
    }

  }



  return (
    <div className="container" style={myStyle}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             Purpose Of This Project 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Text Transformer - Project Overview</strong> This project is a simple and powerful Text Utility Tool designed to manipulate text easily.
              Users can convert their text to uppercase or lowercase with just one click.
              It also allows users to copy the modified text instantly and clear it whenever needed.
              The project focuses on providing a fast, user-friendly, and responsive experience.
              It is perfect for anyone who wants quick text formatting without any hassle.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
