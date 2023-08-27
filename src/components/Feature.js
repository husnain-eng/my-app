import React  from "react";
import './Feature.css';
import assign1 from './assign1.png'
import { Link} from 'react-router-dom';
export default function Feature() {
   
  return (
    <>
      <section id="featured">
        <div className="container text-center mt-3 py-3">
          <h3>PERFORM YOUR TASKS</h3>
          <hr/>
          <p>You can submit your assingnments, check your Mid Final resukts from Below</p>
        </div>
        <div className="row mx-auto container-fluid">
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img className="img-fluid mb-3" src={assign1} alt="" />
            <h5 className="p-name">Submit your Assignment</h5>
            <Link to="/submit" className="submit-button">Submit Now</Link>
          </div>

          {/* sessional marks section  */}
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img className="img-fluid mb-3" src={assign1} alt="" />
            <h5 className="p-name">Sessional Result</h5>
             <Link to="/checknow" className="submit-button" >Check Now</Link>
          </div>

          {/* mid marks results */}
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img className="img-fluid mb-3" src={assign1} alt="" />
            <h5 className="p-name">Mid Result</h5>
             <Link to="/checkMid" className="submit-button">Check Now</Link>
          </div>

          {/* final marks result  */}
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img className="img-fluid mb-3" src={assign1} alt="" />
            <h5 className="p-name">Final Result</h5>
             <Link to="/checkFinal" className="submit-button">Check Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
