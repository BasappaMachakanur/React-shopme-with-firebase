import React from "react";
import {Link} from "react-router-dom"
import "../ProductComponents/Components.css"
import { useLocation } from "react-router-dom";
function Mobiles(){
  let data=useLocation()
  console.log(data)
    return ( 
      <section className="mobile-container">
          <div>
         <Link>
             <img src="data:image/jpeg;base64,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" alt="" />
              <h3>price:100000</h3>
              <p>Iphone 14 500gb</p>
              <button>AddToCart</button>
         </Link>
        </div>
        <div>
         <Link>
             <img src="data:image/jpeg;base64,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" alt="" />
              <h3>price:10000</h3>
              <p>Infinix 14 1TB</p>
              <button>AddToCart</button>
         </Link>
        </div>
        <div>
         <Link>
             <img src="data:image/jpeg;base64,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" alt="" />
              <h3>price:20000</h3>
              <p>samsung 9 128GB</p>
              <button>AddToCart</button>
         </Link>
        </div>
        <div>
         <Link>
              <img src="data:image/jpeg;base64,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" alt="images" />
              <h3>price:10000</h3>
              <p>Iphone 14 1TB</p>
              <button>AddToCart</button>
         </Link>
        </div>
      </section>
        
    )
}

export default Mobiles