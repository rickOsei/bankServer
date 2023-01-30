// select all elements to use in dom manipulation
// DOM manipulation
const formDOM = document.querySelector(".form");
const nameInput = document.querySelector(".nameInput");
const accountInput = document.querySelector(".accountInput");
const addressInput = document.querySelector(".addressInput");
const locationInput = document.querySelector(".locationInput");
const formAlert = document.querySelector(".form_alert");
const output = document.querySelector(".output");
const loadingDOM = document.querySelector(".loading");

// modal
const modal = document.querySelector(".modal");
const modalFormDOM = document.querySelector(".modal_form");
const modalNameInput = document.querySelector(".modalNameInput");
const modalAccountInput = document.querySelector(".modalAccountInput");
const modalAddressInput = document.querySelector(".modaladdressInput");
const modalLocationInput = document.querySelector(".modalLocationInput");
const modalFormAlert = document.querySelector(".modal_form_alert");
const closeBtn = document.querySelector(".closeBtn");
const modalBtn = document.querySelector(".modalBtn");
// const params = window.location.search;
// const url_id = new URLSearchParams(params).get("id");
let tempId = "";
const show = async () => {
  loadingDOM.style.display = "block";
  try {
    const {
      data: { banks },
    } = await axios.get("/bank");
    if (banks.length < 1) {
      output.innerHTML = '<h5 class="empty-list">No banks in your list</h5>';
      loadingDOM.style.display = "none";

      return;
    }
    const showbanks = banks
      .map((bank) => {
        const { name, account, address, location, _id: bankId } = bank;
        return `<div class="bank">
    <p class="name"> <span>Bank Name :</span> ${name}</p>
    <p class="number"><span>Acct. Number : </span>${account}</p>
    <p class="address"> <span>Address :</span> ${address}</p>
    <p class="location"> <span>Location :</span> ${location}</p>

    <div class="bank_icons">
     <button type="button" class="delete-btn" data-id="${bankId}">
      <i class="fas fa-trash"></i>
     </button>
     <button type="button" class="edit-btn" data-id="${bankId}">
      <i class="fas fa-edit"></i>
     </button>
    </div>
   </div>`;
      })
      .join("");
    output.innerHTML = showbanks;
  } catch (error) {
    output.innerHTML =
      "<h2 class='error_msg'>Something went wrong, please try again...</h2>";
  }
  loadingDOM.style.display = "none";
};

show();

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const accountValue = accountInput.value;
  const addressValue = addressInput.value;
  const locationValue = locationInput.value;

  try {
    await axios.post("/bank", {
      name: nameValue,
      account: accountValue,
      address: addressValue,
      location: locationValue,
    });
    show();
    nameInput.value = "";
    accountInput.value = "";
    addressInput.value = "";
    locationInput.value = "";
    formAlert.style.display = "block";
    formAlert.textContent = "Bank successfully added";
  } catch (error) {
    formAlert.style.display = "block";
    formAlert.textContent = "There was an error, please try again..";
  }
  setTimeout(() => {
    formAlert.style.display = "none";
  }, 3000);
});

output.addEventListener("click", async (e) => {
  const targetEl = e.target;
  if (targetEl.parentElement.classList.contains("delete-btn")) {
    const bankId = targetEl.parentElement.dataset.id;
    try {
      await axios.delete(`/bank/${bankId}`);
      show();
    } catch (error) {
      console.log(error);
    }
  }
});

const showBank = async (id) => {
  try {
    const {
      data: { bank },
    } = await axios.get(`/bank/${id}`);
    const { name, account, address, location, _id: bankId } = bank;
    modalNameInput.value = name;
    modalAccountInput.value = account;
    modalAddressInput.value = address;
    modalLocationInput.value = location;
    tempId = bankId;
  } catch (error) {
    console.log(error);
  }
};

output.addEventListener("click", async (e) => {
  const targetEl = e.target;
  if (targetEl.parentElement.classList.contains("edit-btn")) {
    const bankId = targetEl.parentElement.dataset.id;
    modalNameInput.value = modal.style.top = 0;
    showBank(bankId);
  }
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.top = "-100%";
  show();
});

modalBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const modalNameValue = modalNameInput.value;
    const modalAccountValue = modalAccountInput.value;
    const modalAddressValue = modalAddressInput.value;
    const modalLocationValue = modalLocationInput.value;
    console.log("start");
    const {
      data: { bank },
    } = await axios.patch(`/bank/${tempId}`, {
      name: modalNameValue,
      account: modalAccountValue,
      address: modalAddressValue,
      location: modalLocationValue,
    });

    console.log(bank);
    const { name, account, address, location } = bank;
    modalNameInput.value = name;
    modalAccountInput.value = account;
    modalAddressInput.value = address;
    modalLocationInput.value = location;
    show();
    modal.style.top = "-100%";
    console.log("finish");
  } catch (error) {
    console.log(error);
  }
});

// axios get request for all banks details
// axios post request to create bank
// axios delete request to delete bank
// axios get request for a single bank
// axios patch request to update bank
