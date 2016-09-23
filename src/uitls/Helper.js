import axios from 'axios';


function searchGit (add) {
  let address = `https://api.github.com/users/${add}`;
  return axios.get(address)
    .then( (res) => (
      { getDate:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
function getJson() {
   let address = `https://raw.githubusercontent.com/zhou1112/data/master/9-20.json`;
   return axios.get(address)
     .then( (res) => (
       { getJson:res.data }
     ))
     .catch(function (error) {
       alert(error);
     });
 }

 function getMd(add) {
    let addless = `https://raw.githubusercontent.com/zhou1112/data/master/blog/${add}.md`;
    return axios.get(addless)
      .then( (res) => (
        { getMd:res.data }
      ))
      .catch(function (error) {
        alert(error);
      });
  }

 export {searchGit,getJson,getMd };
