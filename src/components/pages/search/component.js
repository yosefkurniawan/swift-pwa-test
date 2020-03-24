import { Slide } from "@material-ui/core";
import React, { useState } from "react";
import ButtonField from "./components/ButtonField";
import Header from "../../commons/Header";
import CategorySlider from "./components/Category";
import SubCategorySlider from "./components/SubCategory";
import SearchDialog from "./components/SearchDialog";
import useStyles from "./style";

const data = [
  "Subcategory One",
  "Subcategory Two",
  "Subcategory Three",
  "Subcategory Four",
  "Subcategory Five"
];

const dataSub = [
  "Subcategory Level - One",
  "Subcategory Level - Two",
  "Subcategory Level - Three",
  "Subcategory Level - Four",
  "Subcategory Level - Five"
];

const Component = props => {
  const styles = useStyles();
  const [category, setCategory] = useState("");
  const [showCat, setShowCat] = useState(true);
  const [showSubCat, setShowSubCat] = useState(false);
  const [openSearch, setOpenSeach] = useState(false);
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
    <>
      <SearchDialog
        open={openSearch}
        setOpen={() => setOpenSeach(!openSearch)}
      />
      <Slide in={true} direction="right" timeout={1500}>
        <div className={styles.container}>
          <Header
            CenterComponent={
              <ButtonField
                placeholder="Search..."
                onClick={() => setOpenSeach(true)}
              />
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
                data={dataSub}
                open={showSubCat}
                {...props}
                category={category}
                onBack={closeSub}
              />
            )}
          </>
        </div>
      </Slide>
    </>
  );
};

export default Component;
