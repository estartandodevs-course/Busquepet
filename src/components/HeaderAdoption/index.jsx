import { useHistory } from "react-router-dom";
import "./Style.scss";

 const HeaderAdoption = ({ titleName, imageOne, imageTwo, identification }) => {
   const { goBack } = useHistory();

   function comeBack() {
     goBack("/feed");
   }

   return (
     <>
       <header className={identification}>
         <div className="arrow-back">
           <img onClick={comeBack} src={imageOne} alt="seta volta" />
         </div>
         <div className="title-headeradoption">
           <h1>{titleName}</h1>
         </div>
         {imageTwo && <img src={imageTwo} alt="icon" />}
       </header>
     </>
   );
 };

 export default HeaderAdoption;