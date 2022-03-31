function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('card');
fetch('https://6243cf353da3ac772b06e729.mockapi.io/api/v1/food/')
  .then((response) => response.json())
  .then((data) => {
    return data.map(function (dataCard) {
      let div = createNode('div');
      div.className = 'shop_card';
      div.innerHTML = `
          <div class="img_card">
            <img class="image" src="https://dodopizza-a.akamaihd.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_292x292.jpeg" alt="pizza">
          </div>
            <div class="title_card">
              <h2>${dataCard.name}</h2>
            </div>
            <div class="setting_card">
              <div class="block_settings">
                <div class="group_settting">
                  <div class="item_settings">
                    <input class="select_setting" checked="checked" type="radio" id="settingsOne" name="selectMenu">
                    <label class="text_settings" for="settingsOne">${dataCard.settings.settingsOne[0]}</label>
                  </div>
                  <div class="item_settings">
                    <input type="radio" id="settingsTwo" name="selectMenu">
                    <label class="text_settings" for="settingsTwo">${dataCard.settings.settingsOne[1]}</label>
                  </div>
                </div>
              </div>
              <div class="block_settings">
                <div class="group_settting">
                <div class="item_settings">
                  <input type="radio" id="select_size_one" name="selectMenu_size">
                  <label class="text_settings" for="select_size_one">${dataCard.settings.settingsTwo[0]} см.</label>
                </div>
                <div class="item_settings">
                  <input type="radio" id="select_size_two" name="selectMenu_size">
                  <label class="text_settings" for="select_size_two">${dataCard.settings.settingsTwo[1]} см.</label>
                </div>
                <div class="item_settings">
                  <input type="radio" id="select_size_three" name="selectMenu_size">
                  <label class="text_settings" for="select_size_three">${dataCard.settings.settingsTwo[2]} см.</label>
                </div>
                </div>
              </div>
            </div>
            <div class="buy_card">
              <div class="pay_ruble">от ${dataCard.summary} ₽</div>
                <button type="button" onclick="alert(${dataCard.id})" class="add_cart">
                  <div class="text_addcart">Добавить</div>
                </button>
            </div>
        `;
      append(ul, div);
    })
  })
