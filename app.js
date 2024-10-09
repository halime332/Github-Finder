import { Github } from "./scripts/api.js";
import { elements } from "./scripts/helpers.js";
import { UI } from "./scripts/ui.js";

/* Github clasının örneğini oluşturma(miras alma) */
const github = new Github();

/* UI class'ın örneği */
const ui = new UI();
github.fetchUserData();

const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;
  if (value == "") {
    ui.showAlert("Form alanını doldurunuz", "alert alert-warning");

    return;
  }

  if (value) {
    github.fetchUserData(value).then((res) => {
      if ((res.message == "Not Found")) {
        ui.showAlert("Aradığınız kullanıcı bulunamadı.", "alert alert-danger");

      } else {
        //kullanıcı bulunduysa
        ui.showAlert("Kullanıcı bulundu.", "alert alert-success");
        ui.renderProfile(res.data);
        console.log(res);
        ui.renderProjects(res.repos);


      }
    })
      .catch((err) => console.log(err));
    return;
  }
};
/* olay izleyicileri */
elements.searchBtn.addEventListener("click", getInput);
