export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    menuProduct: '#template-menu-product',
  },
  containerOf: {
    menu: '#product-list',
    pages: '#pages',
    home: '.home-wrapper',
  },
  nav: {
    links: '.nav-bar-right a',
  },
};

export const classNames = {
  menuProduct: {
    wrapperActive: 'active',
  },
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};
export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  homePage: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};
