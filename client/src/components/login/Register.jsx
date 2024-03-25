import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import logoPng from '../../assets/navImages/logoTwo.png';
const Register = ({ loginToggleHandler }) => {
    return (
        <div className={styles.registerPage}>
            <div className={styles.registerPopup}>
                <div className={styles.sideInformation}>
                    <div className={styles.sideLogo}><img src={logoPng} alt="NoteStack" /></div>
                    <p>Get ahead in your studies with NoteStack, offering a diverse range of downloadable PDF notes for students.</p>
                    <div className={styles.socialIcons}>
                        <a href=""><FontAwesomeIcon icon={faFacebookF} /> </a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href=""><FontAwesomeIcon icon={faXTwitter} /> </a>
                    </div>
                </div>
                <div>
                    <h2>Register Yourself</h2>
                    <form action="" className={styles.registerationForm}>
                        <input type="text" placeholder='Mark Peter'/>
                        <input type="email" placeholder='example@gmail.com'/>
                        <input type="tel" placeholder='8192xxxxxx'/>
                        <input type="password" placeholder='Password'/>
                        <button type="submit">Register</button>
                    </form>
                    <div className={styles.redirectToLogin}>
                        <p>Already registered</p>
                        <Link to='/login' onClick={()=>loginToggleHandler(true)} >Login here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;