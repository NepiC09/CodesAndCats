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
      }
    }
    return checkboxesChecked;
  }

  putCheckBoxesResults() {
    let results = this.getCheckedCheckBoxes().sort();
      let result_length = results.length;
   
    if (result_length == 0) {
      document.getElementById("description").innerHTML = "Лапки сделали сайт. Не верьте лапкам";
      return "https://i.postimg.cc/Kzyfd0rC/VLAJ72-RUPQRW5-IIi-YD72-O79-YYft-IJlb2htxgb-AFUON6herq7d05h-Zhqb9-Wnhm-Rd-Vs-GOwh4j-PRTZMh3-BVnv1lyoux.jpg";
    }

    for (let i = 0; i < this.my_coffee_list.length; i++){
      if (this.my_coffee_list[i]['ingredients'].length == result_length) {
        if (JSON.stringify(results) === JSON.stringify(this.my_coffee_list[i]['ingredients'].sort())) {
          document.getElementById("description").innerHTML = this.my_coffee_list[i]['description'];
          return this.my_coffee_list[i]['image'];
        }
      }
    }
    document.getElementById("description").innerHTML = "Drink some shit";
      return "https://memepedia.ru/wp-content/uploads/2018/09/papey-gavna-original.jpg";
  }
}

export let main_html = new Coffee();
main_html.setClassCoffeeList(coffee_list);
document.getElementById('image').src = "https://i.postimg.cc/Kzyfd0rC/VLAJ72-RUPQRW5-IIi-YD72-O79-YYft-IJlb2htxgb-AFUON6herq7d05h-Zhqb9-Wnhm-Rd-Vs-GOwh4j-PRTZMh3-BVnv1lyoux.jpg";
document.getElementById("description").innerHTML = "Лапки сделали сайт. Не верьте лапкам";