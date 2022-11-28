import { coffee_list } from "./coffee.js";

class Coffee {
  constructor() {
    let my_coffee_list = [];
  }
  setClassCoffeeList(array) {
    this.my_coffee_list = array;
  }
  getCheckedCheckBoxes() {
    var checkboxes = document.getElementsByTagName("input");
    var checkboxesChecked = [];
    for (var index = 0; index < checkboxes.length; index++) {
      if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value);
        console.log("help me");
      }
    }
    return checkboxesChecked;
  }

  putCheckBoxesResults() {
    let results = this.getCheckedCheckBoxes().sort();
      let result_length = results.length;
   
    if (result_length == 0) {
      document.getElementById("description").innerHTML = "Выберите ингредиенты для кофе";
      return "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/50f12772294197.5be29482106f2.jpg";
    }

    for (let i = 0; i < this.my_coffee_list.length; i++){
      if (this.my_coffee_list[i]['ingredients'].length == result_length) {
        if (JSON.stringify(results) === JSON.stringify(this.my_coffee_list[i]['ingredients'].sort())) {
          document.getElementById("description").innerHTML = this.my_coffee_list[i]['description'];
          return this.my_coffee_list[i]['image'];
        }
      }
    }
    document.getElementById("description").innerHTML = "Такого кофе нет.";
      return "https://avatars.mds.yandex.net/get-images-cbir/7969022/REcb233K8n8nWJ1PsKv1Wg3189/ocr";
  }
}

export let main_html = new Coffee();
main_html.setClassCoffeeList(coffee_list);
document.getElementById('image').src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/50f12772294197.5be29482106f2.jpg";
document.getElementById("description").innerHTML = "Выберите ингредиенты для кофе!";
