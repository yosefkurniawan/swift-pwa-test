import Image from 'material-ui-image'
import classNames from 'classnames'
import useStyles from './style';

const ImgIcon = () => <img src="assets/img/noun_Image.svg" />;

const Component = ({ className = {}, src = '' }) => {
    const styles = useStyles();
    const customClass = classNames(styles.image, className)
    return <Image src={src} errorIcon={<ImgIcon />} className={customClass} />
}

export default Component