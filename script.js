function poNacteni() {
  startTime = Date.now();
  let dt = new Date();
  nazvy_dni = new Array("neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota");
  with (dt) {
    den = getDay();
  }
  mesice = new Array("ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince");
  with (dt) {
    mesic = getMonth();
  }
  let s = "Dnes je " + nazvy_dni[den] + " " + dt.getDate() + ". " + mesice[mesic] + ". " + dt.getFullYear();

  //let s = "Dnes je " + dt.getDay() + " " + dt.toLocaleDateString();

  document.getElementById("datum").innerHTML = s;
  setInterval(ukazCas, 1000);
}
function ukazCas() {
  let dt = new Date();
  //let s = dt.getHours() + ":" + dt.getMinutes() + ":" + doplnCisloZlevaNulamiNa2(dt.getSeconds());
  let s = dt.toLocaleTimeString();
  document.getElementById("cas").innerHTML = s;
}

patektrinacteho = () => {
  let mesic_13 = new Date().getMonth();
  let mesice = 12;
  let patky13 = " ";
  for (let i = 0; i < mesice; i++) {
    let datum = new Date(2020, mesic_13 + i, 13).getDay();
    if (datum == 5) {
      let den = new Date(2020, mesic_13 + i, 13).toLocaleDateString();
      patky13 = patky13 + den + ", ";
    }
  }
  if (patky13.length > 2) {
    patky13 = patky13.substr(0, patky13.length - 2)
  }
  patky13 += ".";
  document.getElementById("patky13").innerHTML = patky13;
}