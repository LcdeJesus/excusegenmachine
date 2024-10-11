import "bootstrap";
import "./styles.css";

window.onload = function() {
  let first = "A ";

  let noun = [
    "jogger ",
    "racoon ",
    "dog ",
    "merchant ",
    "driver ",
    "comedian ",
    "pinecone "
  ];
  let action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  let possetion = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "shirt ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich "
  ];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in front of the office",
    "near the mall",
    "near the toilet",
    "at the bus station"
  ];

  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    first + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];
};
