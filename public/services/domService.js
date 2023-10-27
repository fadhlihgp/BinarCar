let cars = [];
let dataStorage = localStorage.getItem("CARS");
if (dataStorage) {
  let listCars = JSON.parse(dataStorage);
  listCars.map((e) => {
    cars.push(e);
  });
} else {
  console.log("Data tidak ditemukan di localStorage.");
}

const btnSearch = document.getElementById("cariMobil");
const resultContainer = document.getElementsByClassName("resultContainer")[0];

function validInputs() {
  const type = document.getElementById("typeSelect");
  const tanggal = document.getElementById("tanggal");
  const waktuJemput = document.getElementById("waktuJemput");

  let typeValue = type.value;
  let tanggalValue = tanggal.value;
  let waktuJemputValue = waktuJemput.value;

  if (typeValue !== "" && tanggalValue !== "" && waktuJemputValue !== "") {
    btnSearch.removeAttribute("disabled");
  } else {
    btnSearch.setAttribute("disabled", true);
  }
}

function filtered(selectedDateTime, capacityInput) {
  return cars.filter((e) => {
    return new Date(e.availableAt) > selectedDateTime && e.capacity > capacityInput;
  });
}

function callRender() {
  const typeValue = document.getElementById("typeSelect").value;
  const tanggalValue = document.getElementById("tanggal").value;
  const waktuJemputValue = document.getElementById("waktuJemput").value;
  const capacityValue = document.getElementById("jumlahPenumpang").value ?? 0;

  const selectedDateTime = new Date(`${tanggalValue}T${waktuJemputValue}`);

  car.render(filtered(selectedDateTime, capacityValue), resultContainer)
}

const car = new Car();

btnSearch.addEventListener("click", callRender);
