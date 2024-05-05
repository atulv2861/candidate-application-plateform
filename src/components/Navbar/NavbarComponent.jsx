import Styles from "../Navbar/NavbarComponent.module.css";

function NavbarComponent() {

    const handleGetJobs=()=>{

    }
    
    return (
      <>
     <div className={Styles.Navbar}>
            <div className={Styles.Heading} >
                <div onClick={e => handleGetJobs()}><h1>Weekday</h1></div>                
            </div>
       </div>     
      </>
    );
  }
  
  export default NavbarComponent;
  