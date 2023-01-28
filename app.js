//selects all the elemets which contain box class
const box = document.querySelectorAll(".box");

//inserting card element throught iteration instead of manually writing elements
box.forEach((item) => {
  for (let i = 0; i < 8; i++) {
    let div = document.createElement("div");
    div.classList.add("card");

    // card element
    div.innerHTML = `
        <div class="names">
            <div>
                <img src="./img/client.jpg" alt="client-photo" />
                <h5>Client Name</h5>
                </div>
                <div>
                <img src="./img/employee.jpg" alt="employee-photo" />
                <h5>Sadik Istiak</h5>
            </div>
        </div>

        <div class="description">
            <div>
                <img src="./img/stack-icon.png" alt="stack-icon" />
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div>
                <img src="./img/report-icon.png" alt="" />
                <p>1/2</p>
            </div>
        </div>

        <div class="info">
            <img src="./img/others-1.jpg" alt="people-photo" />
            <img src="./img/others-2.jpg" alt="people-photo" />
            <div>
                <p>12+</p>
            </div>
            <div>
                <img src="./img/chat.png" alt="messaging-icon" />
                <p>15</p>
            </div>
            <div>
                <img src="./img/attachment-icon.png" alt="attachment-icon" />
                <p>25</p>
            </div>
            <div>
                <img src="./img/calendar-icon.png" alt="calender-icon" />
                <p>30-12-2022</p>
            </div>
        </div>
  `;
    item.appendChild(div);
  }
});

//selects the wrapper class
const wrapper = document.querySelector(".wrapper");

//selects the attachment icon
const attachment_icon =
  wrapper.children[0].children[1].children[2].children[4].firstElementChild;
attachment_icon.classList.add("clickable");

//selects attached item quantity
const value =
  wrapper.children[0].children[1].children[2].children[4].lastElementChild;

value.innerHTML = "0";

//selects the modal element
const modal = document.getElementById("modal");

//selects the overlay element
const overlay = document.getElementById("overlay");

//selects the close icon
const close_icon = document.getElementById("close");

//function to execute when attachment icon is clicked
attachment_icon.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//function to execute when the close icon is clicked in modal
close_icon.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

const upload = document.getElementById("upload");
const files = document.getElementById("files");

upload.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData();
  for (let i = 0; i < files.files.length; i++) {
    formData.append("files", files.files[i]);
  }
  fetch("http://localhost:5000/upload_files", {
    method: "POST",
    body: formData,
    headers: {
      // "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
});
