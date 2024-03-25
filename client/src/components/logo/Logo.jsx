import logoPng from '../../assets/navImages/logoImage.png';
import styles from './logo.module.css';
const Logo = () => {
    return <div className={styles.navLogo}><img src={logoPng} alt="logo" /></div>
}

export default Logo;