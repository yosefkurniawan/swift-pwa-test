import Link from "next/link";
import useStyles from './style'

const ImageSlide = ({ src = '', link = '#' }) => {
  const styles = useStyles();
  const bgImg = {
    backgroundImage: `url(${src})`,
  };
  return (
    <Link href={link}>
      <div style={bgImg} className={styles.imageSlider}></div>
    </Link>
  );
};

export default ImageSlide;
