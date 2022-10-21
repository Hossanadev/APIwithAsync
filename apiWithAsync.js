/*
    This is a dummy API fetching.
*/

const hossanadev = async (theURL) => {
  try {
    const hdev01 = await fetch(theURL);
    const hdev02 = await hdev01.json();
    console.log(hdev02);
  } catch (errMsg) {
    return console.log(errMsg);
  }
};
hossanadev("https://dummyjson.com/products/");

/*
    With the data stored in variable "hdev02", you can use
    the filter or map method to manipulate the data being fetched
*/
