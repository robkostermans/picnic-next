// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const PicnicClient = require("picnic-api");
const picnicClient = new PicnicClient();

const doPicnic = async () => {
  await picnicClient.login(process.env.USERNAME, process.env.PASSWORD);
  return await picnicClient.getUserDetails();

  //let searchResults = await picnicClient.search("Affligem blond");
  //console.log("User", login);
  //console.log("User", myvar);
  //console.log("searchresults", searchResults[0].items);

  //await picnicClient.addProductToShoppingCart(11389996, 1);
};

export default async function handler(req, res) {
  let userDetails = await doPicnic();
  res.status(200).json(userDetails.firstname);
}
