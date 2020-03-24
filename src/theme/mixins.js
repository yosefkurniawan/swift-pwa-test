export const CreatePadding = (top = 0, right = 0, bottom = 0, left = 0) => {
  return {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left
  };
};

export const CreateMargin = (top = 0, right = 0, bottom = 0, left = 0) => {
  return {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left
  };
};

export const Centering = {
  display: "flex",
  flexDirection : 'column',
  justifyContent: "center",
  alignItems: "center"
};
