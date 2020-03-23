import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ImageSlide from "./ImageSlide";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import useStyles from "./style";

const Component = ({ time = 3 }) => {
  const styles = useStyles();
  const data = [
    "https://www.jd.id/news/wp-content/uploads/2019/10/JDID-Sebut-1010.jpg",
    "https://etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg",
    "https://www.lottemart.co.id/upload/2020/02/Promo-Abc-Exo.jpg"
  ];
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setImgurl(imgurl === 0 ? imgurl + 1 : imgurl === dataImg - 1 ? 0 : 0);
  //   }, time * 1000);

  //   return () => clearInterval(intervalId);
  // }, [imgurl]);

  const dotActive =
    data.length > 1
      ?  classNames(styles.dotsItem, styles.dotActive) : styles.hide
  const dotItem =
    data.length > 1
      ? styles.dotsItem
      : styles.hide

  return (
    <div className={styles.caraousel}>
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={index => setIndex(index)}
      >
        {data.map((img, key) => {
          return <ImageSlide url={img} />;
        })}
      </AutoPlaySwipeableViews>
      <div className={styles.dots}>
        {data.map((item, id) => (
          <div
            className={index === id ? dotActive : dotItem}
            key={id}
            onClick={() => setIndex(id)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Component;
