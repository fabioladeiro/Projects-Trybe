const deleteModel = require('../models/deleteRecipeModel');

const renderDeleteRecipe = (req, res) => {
  const { user, params } = req;
  const { id } = params;
  const message = null;
  res.render('deleteRecipe', { user, id, message });
};

const postDeleteRecipe = async (req, res) => {
  const { user, body, params } = req;
  const { id } = params;
  let message = 'Senha Incorreta.';

  // encontrar o usuario da pessoa que criou a receita (parametro é o id da receita)
  const UserOfRecipe = await deleteModel.findUserOfRecipe(id);

  // encontrar a senha da pessoa que criou a receita
  const userPassword = await deleteModel.findById(UserOfRecipe.userId);

  // compara o usuario que criou a receita com o usuario que está logado
  if (UserOfRecipe.userId !== user.id) {
    message = 'Você não tem autorização para excluir esta receita';
    return res.render('deleteRecipe', { user, id, message });
  }

  // compara a senha da pessoa que criou a receita com a senha inserida pelo usuario
  if (userPassword.password === body.password) {
    await deleteModel.deleteRecipe(id);
    return res.redirect('/');
  }
  return res.render('deleteRecipe', { user, id, message });
};

module.exports = {
  renderDeleteRecipe,
  postDeleteRecipe,
};
