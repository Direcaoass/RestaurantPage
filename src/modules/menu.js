export default function createMenu() {

        let menuBlocks = ''
    for (let i = 1; i < 9; i++) {
        menuBlocks += `<div class='block'><img class='img' src="./assets/img/img${i}.jpg" alt="img${i}"><h4>SandwichS andwichSa ndwichS andwi chSan dw ich ${i}</h4></div>`;
    }
    let menuContent = `<div class='menuContent'>${menuBlocks}</div>`;

    return menuContent;

}