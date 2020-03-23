const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh"
  };

  return <div style={styles}></div>;
};

export default ImageSlide;
