// ** productObj === errorsObj(TITLE, DESCRIPTION, IMAGEURL, PRICE)
export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  //** returns an object
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ ""]+$/.test(product.imageURL);

  // title
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product Title must be between 10 and 80 characters!";
  }

  // description
  if (
    !product.description.trim() ||
    product.description.length < 120 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product description must be between 120 and 900 characters!";
  }

//   imageURL
if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL= "Valid image URL is required";
}

if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price= "Valid price is required";
}

  return errors;
};
