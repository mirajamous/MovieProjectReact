// import {google}  from 'googleapis';
// import emailjs from '@emailjs/browser';
import { useState } from "react";
import  {Question}  from "./Question";
import "./About.css";

// let clientId ="959155559808-d7nj9hjsu292gl2g9qssncomo1avgd13.apps.googleusercontent.com";
// let clientSecret="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";

function About() {

  const [itemSelect, SetItemSelect] = useState(null);

  const toggle = (i) => {
    if (itemSelect === i) {
      return SetItemSelect(null);
    }
    SetItemSelect(i)
  }

  return (
    <div className="Mywrapper">
      {/* <div className="Mybigh1">      
       
       </div> */}
      <div className="Myaccordion"> 
     <h1> Frequently Asked Questions</h1>
        {
          Question.map((item, i) => (
            <div className="Myitem">
              <div className="Mytitle" onClick={() => { toggle(i) }}>
                <h2>{item.Question}</h2>
                <span>{itemSelect === i ? '-' : '+'}</span>
              </div>
              <div className={itemSelect === i ? 'Mycontent show' : 'Mycontent'}>{item.Answer}
              </div>

            </div>
          ))
          }

      </div>
    </div>
    /* <div className="AboutBigDiv">
    <h1> Frequently Asked Questions</h1>
    <div className="sub-div-about"> 
      <h2> Who we are ?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium 
      ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae,
       ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium
        consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel 
        laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia 
      </p>
    </div>
    <div className="sub-div-about"> 
      <h2> What is OurMovie ? </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae, ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia amet ad animi non fugit laborum ea, quas at iusto similique recusandae quaerat iure explicabo cum eius ab. Repudiandae voluptas illo unde culpa rerum possimus ipsam omnis saepe repellat.</p>
    </div>
    <div className="sub-div-about"> 
      <h2> How much does OurMovie cost?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae, ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia amet ad animi non fugit laborum ea, quas at iusto similique recusandae quaerat iure explicabo cum eius ab. Repudiandae voluptas illo unde culpa rerum possimus ipsam omnis saepe repellat.</p>
    </div>
    <div className="sub-div-about"> 
      <h2> Where can I watch?</h2>
      <p>Lorem ipsum dol  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae, ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia amet ad animi non fugit laborum ea, quas at iusto similique recusandae quaerat iure explicabo cum eius ab. Repudiandae voluptas illo unde culpa rerum possimus ipsam omnis saepe repellat
    or sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae, ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia amet ad animi non fugit laborum ea, quas at iusto similique recusandae quaerat iure explicabo cum eius ab. Repudiandae voluptas illo unde culpa rerum possimus ipsam omnis saepe repellat.</p>
    </div>
    <div className="sub-div-about"> 
      <h2> How do I cancel?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae, ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia amet ad animi non fugit laborum ea, quas at iusto similique recusandae quaerat iure explicabo cum eius ab. Repudiandae voluptas illo unde culpa rerum possimus ipsam omnis saepe repellat.</p>
    </div>
    <div className="sub-div-about"> 
      <h2> What can I watch on OurMovie?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae, ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia amet ad animi non fugit laborum ea, quas at iusto similique recusandae quaerat iure explicabo cum eius ab. Repudiandae voluptas illo unde culpa rerum possimus ipsam omnis saepe repellat.</p>
    </div>
    
    <div className="sub-div-about"> 
      <h2>Is OurMovie good for kids?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quis cum animi laudantium ad voluptas earum laborum omnis autem similique totam eos odit perspiciatis corrupti accusamus repudiandae, ipsam quaerat esse voluptatem hic amet deserunt. Tenetur placeat ad obcaecati? Necessitatibus nobis laudantium consequatur fugit quidem debitis, sequi voluptate excepturi iure rerum eos veritatis nulla tempora earum nam vel laborum voluptatum quo odio. Minus maiores commodi dolores corrupti officia excepturi dolorem voluptatum mollitia amet ad animi non fugit laborum ea, quas at iusto similique recusandae quaerat iure explicabo cum eius ab. Repudiandae voluptas illo unde culpa rerum possimus ipsam omnis saepe repellat.</p>
    </div>
    </div> */

  );
}
export default About;