import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();
  }

  renderInMenu() {
    const thisProduct = this;
    // generate HTML based on template
    const generatedHTML = templates.menuProduct(thisProduct.data);
    const generatedHTMLhome = templates.homePage(thisProduct.data);

    // create element using utils.createElementFromHTML
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    thisProduct.elementhome = utils.createDOMFromHTML(generatedHTMLhome);
    // find menu container
    const homeContainer = document.querySelector(select.containerOf.home);
    const menuContainer = document.querySelector(select.containerOf.menu);
    // add element to menu

    homeContainer.appendChild(thisProduct.elementhome);
    menuContainer.appendChild(thisProduct.element);
  }
}

export default Product;
