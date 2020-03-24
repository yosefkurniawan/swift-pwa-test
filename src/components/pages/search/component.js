import React, { useState } from "react";
import useStyles from "./style";
import Header from "../../commons/Header";
import TextField from "../../commons/Forms/TextField";
import Typography from "../../commons/Typography";
import Button from "../../commons/Button";
import { Slide, IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import CategorySlider from "./components/Category";
import SubCategorySlider from "./components/SubCategory";

const data = [
  "Subcategory One",
  "Subcategory Two",
  "Subcategory Three",
  "Subcategory Four",
  "Subcategory Five"
];

const Component = props => {
  const styles = useStyles();
  const [category, setCategory] = useState("");
  const [showCat, setShowCat] = useState(true);
  const [showSubCat, setShowSubCat] = useState(false);
  const openSub = cat => {
    setCategory(cat);
    setShowSubCat(true);
    setShowCat(false);
  };

  const closeSub = () => {
    setCategory("");
    setShowSubCat(false);
    setShowCat(true);
  };

  return (
    <Slide in={true} direction="right" timeout={2000}>
      <div className={styles.container}>
        <Header
          CenterComponent={
            <TextField placeholder="Search..." disabled={true} />
          }
        />
        <>
          {category === "" ? (
            <CategorySlider
              data={data}
              open={showCat}
              {...props}
              onClick={openSub}
            />
          ) : (
            <SubCategorySlider
              data={data}
              open={showSubCat}
              {...props}
              category={category}
              onBack={closeSub}
            />
          )}
        </>
      </div>
    </Slide>
  );
};

export default Component;
