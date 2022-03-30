function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const ul = document.getElementById('card');

fetch('https://6243cf353da3ac772b06e729.mockapi.io/food/')
  .then((response) => response.json())
  .then(function (data) {
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
                  <div tabindex="0" class="item_settings">
                    <div class="text_settings">${dataCard.settings.settingsOne[0]}</div>
                  </div>
                  <div tabindex="0" class="item_settings">
                    <div class="text_settings">${dataCard.settings.settingsOne[1]}</div>
                  </div>
                </div>
              </div>
              <div class="block_settings">
                <div class="group_settting">
                    <div tabindex="0" class="item_settings">
                      <div class="text_settings">${dataCard.settings.settingsTwo[0]} см.</div>
                    </div>
                    <div tabindex="0" class="item_settings">
                      <div class="text_settings">${dataCard.settings.settingsTwo[1]} см.</div>
                    </div>
                    <div tabindex="0" class="item_settings">
                      <div class="text_settings">${dataCard.settings.settingsTwo[2]} см.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buy_card">
              <div class="pay_ruble">от ${dataCard.summary} ₽</div>
                <button class="add_cart">
                  <div class="text_addcart">Добавить</div>
                </button>
            </div>
        `;
      append(ul, div);
    });
  });
