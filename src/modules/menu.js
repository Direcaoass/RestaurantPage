export default function createMenu() {

        let menuItem = ''
    for (let i = 1; i < 9; i++) {
        menuItem += `<div class='menuItem'><img class='img' src="./assets/img/img${i}.jpg" alt="img${i}"><h4>SandwichS andwichSa ndwichS andwi chSan dw ich ${i}</h4></div>`;
    }
    let menuContent = `<div class='menuContent'>${menuItem}</div>`;

    return menuContent;

}