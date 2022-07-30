// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADjNtHhcfBAhn64BKIP8x4T6uqZyk7ISk",
    authDomain: "firestore-cdf82.firebaseapp.com",
    databaseURL: "https://firestore-cdf82-default-rtdb.firebaseio.com",
    projectId: "firestore-cdf82",
    storageBucket: "firestore-cdf82.appspot.com",
    messagingSenderId: "347902797715",
    appId: "1:347902797715:web:6d31c0c8cae973f9582a66",
};

// Initialize Firebase
var service = firebase.initializeApp(firebaseConfig);

//URL API axios
const url = "https://appfisio-api.herokuapp.com/api/pacientes";
const urlHistoric = "https://appfisio-api.herokuapp.com/api/historico/pacientes/";
const urlEvolution = "https://appfisio-api.herokuapp.com/api/evolucoes/pacientes/";

// Declarando Variaveis
const db = firebase.firestore();
const form = document.getElementById("forms");
const btnForm = document.getElementById("btn-form");
const deletar = document.querySelectorAll("btn-del");

const contentPacientes = document.getElementById("contentPacientes");

console.log(contentPacientes)

const histoc = document.getElementById("elementHistoric")
console.log(histoc)

// const historicBody = document.getElementById("bodyHistoric")
//         console.log(historicBody)

const gamB = document.getElementById('gambi');
console.log(gamB);

