import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logoPng from '../../assets/navImages/logoTwo.png';
const Login = ({ loginToggleHandler }) => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginPopup}>
                <div className={styles.sideInformation}>
                    <div className={styles.sideLogo}><img src={logoPng} alt="NoteStack" /></div>
                    <p>Get ahead in your studies with NoteStack, offering a diverse range of downloadable PDF notes for students.</p>
                    <div className={styles.socialIcons}>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /> </a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href="#"><FontAwesomeIcon icon={faXTwitter} /> </a>
                    </div>
                </div>
                <div>
                    <h2>Sign in Yourself</h2>
                    <form action="" className={styles.loginForm}>
                        <input type="email" placeholder='example@gmail.com' />
                        <input type="password" placeholder='Password' />
                        <button type="submit">Login</button>
                    </form>
                    <div className={styles.redirectToRegister}>
                        <p>Don't have account</p>
                        <Link to='/register' onClick={() => loginToggleHandler(false)}>Register here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;