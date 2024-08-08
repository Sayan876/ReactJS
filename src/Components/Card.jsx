import crd from "../card.module.css"

import pics from "../images/xml.jpg"
const Card =()=>{

    return(
        <div id={crd.cr}>
             <main id={crd.crr}>
                <div id={crd.propic}>
                   <img src={pics} alt="" />
                   <br />
                   <h4>Nina Hamilton</h4>
                </div>
                <div id={crd.desg}>
                     <p>Software Engineer</p>
                     <br />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni eaque aut aliquam non accusamus ea totam aliquid ex id necessitatibus ab est earum, perspiciatis quis velit! Laudantium, voluptatum debitis.</p>
                </div>

                <div id={crd.but}>
                    <button  id={crd.btn1}>Add friend</button>
                    <button id={crd.btn2}>Follow</button>
                </div>

             </main>
        </div>
    )
}

export default Card