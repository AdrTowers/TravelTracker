//Form Data
var formData = document.getElementById("destination_details_form");
formData.addEventListener("submit", (e) => {
  e.preventDefault();

  //  Input Values
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var photo = document.getElementById("photo").value;
  var description = document.getElementById("description").value;

  cardInfo(name, location, photo, description);
});

//Creating Card
function cardInfo(name, loc, photo, desc) {
  console.log(name, loc, photo, desc);

  //Photo
  var stockImg =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

  //Card
  var card = document.createElement("div");
  card.setAttribute("class", "card");
  document.getElementById("destinations_container").appendChild(card);

  //Photo
  var tripPhoto = document.createElement("img");
  tripPhoto.setAttribute("class", "card-img-top");
  tripPhoto.setAttribute("src", stockImg);
  card.appendChild(tripPhoto);

  //Card Body
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  card.appendChild(cardBody);

  //Trip Name / title
  var tripName = document.createElement("h5");
  tripName.setAttribute("class", "card-title");
  tripName.innerHTML = name;
  cardBody.appendChild(tripName);

  //Location / subtitle
  var tripLoc = document.createElement("h6");
  tripLoc.setAttribute("class", "card-subtitle text-muted");
  tripLoc.innerHTML = loc;
  cardBody.appendChild(tripLoc);

  //Description / text
  var tripDesc = document.createElement("p");
  tripDesc.setAttribute("class", "card-text");
  tripDesc.innerHTML = desc;
  cardBody.appendChild(tripDesc);

  //Button container
  var btnCont = document.createElement("div");
  btnCont.setAttribute("class", "btn-container");
  card.appendChild(btnCont);

  //Edit Button
  var editButton = document.createElement("button");
  editButton.setAttribute("class", "btn btn-secondary");
  editButton.innerHTML = "Edit";
  btnCont.appendChild(editButton);

  //Delete Button
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn btn-danger btn-sm");
  deleteButton.innerHTML = "Delete";
  btnCont.appendChild(deleteButton);
}

//Photo
var stockImg =
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

//Card
var card = document.createElement("div");
card.setAttribute("class", "card");
document.getElementById("destinations_container").appendChild(card);

//Photo
var tripPhoto = document.createElement("img");
tripPhoto.setAttribute("class", "card-img-top");
tripPhoto.setAttribute("src", stockImg);
card.appendChild(tripPhoto);

//Card Body
var cardBody = document.createElement("div");
cardBody.setAttribute("class", "card-body");
card.appendChild(cardBody);

//Trip Name / title
var tripName = document.createElement("h5");
tripName.setAttribute("class", "card-title");
tripName.innerHTML = "Seattle";
cardBody.appendChild(tripName);

//Location / subtitle
var tripLoc = document.createElement("h6");
tripLoc.setAttribute("class", "card-subtitle text-muted");
tripLoc.innerHTML = "WA";
cardBody.appendChild(tripLoc);

//Description / text
var tripDesc = document.createElement("p");
tripDesc.setAttribute("class", "card-text");
tripDesc.innerHTML = "Big City";
cardBody.appendChild(tripDesc);

//Button container
var btnCont = document.createElement("div");
btnCont.setAttribute("class", "btn-container");
card.appendChild(btnCont);

//Edit Button
var editButton = document.createElement("button");
editButton.setAttribute("class", "btn btn-secondary");
editButton.innerHTML = "Edit";
btnCont.appendChild(editButton);

//Delete Button
var deleteButton = document.createElement("button");
deleteButton.setAttribute("class", "btn btn-danger btn-sm");
deleteButton.innerHTML = "Delete";
btnCont.appendChild(deleteButton);
