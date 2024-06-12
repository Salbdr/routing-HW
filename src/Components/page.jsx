import { Link } from "react-router-dom";
import "./page.css"

export default function Page(props) {
  return (
    <>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          background:
            `url(' ${props.image}') no-repeat` 
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md" style={{background:"#0005", color:"white"}}>
            <h1 className="text-5xl font-bold">{props.title}</h1>
            <p className="py-6">
              {props.description}
            </p>
          </div>
        </div>
        <div className="btns" >
        <Link to = "/">
        <div className="card bg-base-100 shadow-xl" >
            <div className="card-body">
              <h2 className="card-title">Riyadh</h2>
            </div>
          </div>
        </Link>
        <Link to = "/abu-dhabi">
        <div className="card bg-base-100 shadow-xl" >
            <div className="card-body">
              <h2 className="card-title">AbuDhabi</h2>
            </div>
          </div>
        </Link>
        <Link to = "/cairo">
        <div className="card bg-base-100 shadow-xl" >
            <div className="card-body">
              <h2 className="card-title">Cairo</h2>
            </div>
          </div>
        </Link>
        <Link to = "/london">
        <div className="card bg-base-100 shadow-xl" >
            <div className="card-body">
              <h2 className="card-title">London</h2>
            </div>
          </div>
        </Link>
        <Link to = "/paris">
        <div className="card bg-base-100 shadow-xl" >
            <div className="card-body">
              <h2 className="card-title">Paris</h2>
            </div>
          </div>
        </Link>
      
  
        </div>
      </div>
    </>
  );
}

