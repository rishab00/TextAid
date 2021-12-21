import React, {useState} from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const[btntext, setBtnText] = useState("Enable Dark Mode")
  const toggleStyle = () => {
    if(myStyle.color === 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid white'
      })
      setBtnText("Enable Dark Mode")
    }
    else{
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Enable Light Mode")
    }
  }
    return (
        <div classNameName="container" style={myStyle}>
          <h2>About Us </h2>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <strong> Analyse your Text </strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Text Utils gives you a way to analyze your text quickly and effeciently. Be it word count, character count or the average time required to read the text.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Free to use</strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  TextUtils is a free text related set of tools to count the number of words, characters and provides instant statistics for the text. 
                </div>
              </div>
            </div>
            <div className="accordion-item" style={myStyle}>
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Browser Compatible</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  This word counter works in any web browers and works seemlesly in different screen sizes.
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
