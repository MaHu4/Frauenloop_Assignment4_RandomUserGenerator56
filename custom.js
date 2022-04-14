
async function callApi(){
    const response = await fetch('https://randomuser.me/api/?results=56'); 
    const users = await response.json();
    const userList = users.results;
    //console.log(userList); 

     /* Explanations (from w3school):
        - async makes a function return a Promise;
        - await makes a function wait for a Promise and can only be used inside an async function. 
        - JSON stands for JavaScript Object Notation; it is a text format for storing and transporting data
        */ 


  // with for loop method
  for (let i = 0; i < userList.length; i++) {

    /* Explanations:
      - "i" describes that the first person schould be fetched from the Random User API;
      - ".length" means that it searches the entire list and doesn’t stop;
      - "i++" means that loop goes one further result in the array, in this case the next name;
      */ 

  let div = document.querySelector('div');

    /* Explanations:
      - querySelector search in the html-file and grab what’s in the ( );  (older version is getElementbyID)
      */

  //creating tags inside div
  let img = document.createElement('img');
  let person = document.createElement('div');
  let name = document.createElement('h4');
  let nat = document.createElement('span');
  let br = document.createElement('br');
  let insta = document.createElement('a');
  let fb = document.createElement('a');
  let twitter = document.createElement('a');

    /* Explanations (from w3school):
      - he createElement() method creates an element node. The type of the element is specified in the ()
       */
  
  //adding image
  let image = userList[i].picture.large; //"picture" and "large" are smae wording like in API Random User Data shown in cosole.log()
  img.setAttribute('src', image);

  /* Explanations (from w3school):
   -The setAttribute() method sets a new value to an attribute. If the attribute does not exist, it is created first.
    */


  //adding name
  let firstName = userList[i].name.first;
  let lastName = userList[i].name.last;
  let fullName = firstName + ' ' + lastName;
  name.innerHTML = fullName;

  /* Explanations
    - [i] shows index number —> array has [ ] brakets
    - with innerHTML (or inner.TEXT) the information appears on website;
    */

  //adding nationality
  let nationality = userList[i].nat.toLowerCase(); //.toLowerCase because it is lower case in the data to fetch the flag; 
  nat.classList.add('flag-icon', 'flag-icon-'+nationality);

  //adding gender
  let gender = userList[i].gender

  if(gender == 'female') {
    insta.classList.add('female');
    fb.classList.add('female');
    twitter.classList.add('female');
  } else {
    insta.classList.add('male');
    fb.classList.add('male');
    twitter.classList.add('male');
  }

  //SNS logo <a>
  insta.setAttribute('href', '#');
  fb.setAttribute('href', '#');
  twitter.setAttribute('href', '#');
  insta.innerHTML = '<i class="fa-brands fa-instagram"></i>';
  fb.innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
  twitter.innerHTML = '<i class="fa-brands fa-twitter"></i>';

   /* Explanations
    - 'href' is needed to link it to the <a>-attribute in the Html-file
*/
  //append
  person.append(img, name, nat, br, insta, fb, twitter); // variables were defined above
  div.appendChild(person);


  //console.log(fullName);
  }
}

callApi();