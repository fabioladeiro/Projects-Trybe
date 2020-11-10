export async function getCategories() {
  const API = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(API)
    .then((response) => response.json())
    .then((data) => data.map((categorie) => categorie));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    return fetch(API)
      .then((response) => response.json())
      .then((data) => data);
  } else if (!query) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    return fetch(API)
      .then((response) => response.json())
      .then((data) => data);
  }
  const API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(API)
    .then((response) => response.json())
    .then((data) => data);
}
