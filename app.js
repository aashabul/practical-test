const box = document.querySelectorAll(".box");

box.forEach((item) => {
  for (let i = 0; i < 8; i++) {
    let div = document.createElement("div");
    div.classList.add("card");
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
