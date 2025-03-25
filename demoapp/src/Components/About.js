import React, {useState} from 'react'

export default function About() {
  let myStyle = {
    color: 'black',
    backgroundColor: 'white'
  }
  const [stylepara,setStyle]=useState(myStyle);
  const [btnText,setBtnText]=useState("Enable Dark Mode");
  const toogleMode=()=>
  {
    if(stylepara.backgroundColor ==='white')
    {
      setStyle({
        color:'white',
        backgroundColor:'black'
      })
      setBtnText("Enable Light Mode");
    }
    else{
      setStyle({color:'black',backgroundColor:'white'})
      setBtnText("Enable Dark Mode");
    }

  }
  return (
    <div>
      <div className="Container">
      <h1 className="my-3" style={stylepara}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={stylepara} >
    <h2 className="accordion-header" style={stylepara}>
      <button className="accordion-button" style={stylepara} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style={stylepara}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={stylepara} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={stylepara} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
   </div>
      </div>
      </div>
     <div onClick={toogleMode} className="button btn btn-primary my-2" type = "button"> {btnText}</div>
      
    </div>
  )
}
