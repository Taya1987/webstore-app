import { useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup/Popup";

function Home() {
  

  const [helpPopup, setHelpPopup] = useState(false); // New state variable for info popup

  //creating visibility for popup- only open when clicked
  const togglePopup = () => {
    setHelpPopup(!helpPopup);
  };

  return (
    <div className={styles.home__page}>
      <div className={styles.help_icon}>
        <div className={styles.help_icon}>
          <FontAwesomeIcon icon={faQuestionCircle} onClick={togglePopup} />
        </div>
        {helpPopup && (
          //popup component
          <Popup
            className={styles.popup_content}
            content={
              <>
                <h3>Let's talk shipping!</h3>
                <p>
                  For one month only we will be offering shipping for free!!..
                  no matter the option you choose. But just so you know, we have
                  a standard and express shipment option. Standard gets your
                  parcel to you in 5-7 working days and express in a speedy 3
                  working days.. we are considering an overnight option in the
                  near future so keep an eye out. Happy planting!!
                </p>
              </>
            }
            //close popup
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}
export default Home;
