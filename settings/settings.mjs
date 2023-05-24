export default function registerSFSettings() {
  // ...

  // Sparks Forge CR Loot Roller
Hooks.once("renderSettingsConfig", (app, html) => {
  const moduleSettings = document.createElement('div');
  moduleSettings.classList.add('SF_CR_Loot_Roller-settings');
  moduleSettings.innerHTML += '<h3>Sparks Forge CR Loot Roller</h3>';


    const checkbox1 = document.createElement('input');
    checkbox1.type = 'checkbox';
    checkbox1.name = 'GMOnlyDisabled';
    checkbox1.id = 'GMOnlyDisabled';
    checkbox1.dataset.dtype = 'Boolean';

    const checkbox2 = document.createElement('input');
    checkbox2.type = 'checkbox';
    checkbox2.name = 'banFirearms';
    checkbox2.id = 'banFirearms';
    checkbox2.dataset.dtype = 'Boolean';

    const checkbox3 = document.createElement('input');
    checkbox3.type = 'checkbox';
    checkbox3.name = 'banLaserWeapons';
    checkbox3.id = 'banLaserWeapons';
    checkbox3.dataset.dtype = 'Boolean';

    const checkbox4 = document.createElement('input');
    checkbox4.type = 'checkbox';
    checkbox4.name = 'banDecks';
    checkbox4.id = 'banDecks';
    checkbox4.dataset.dtype = 'Boolean';

    const label1 = document.createElement('label');
    label1.htmlFor = 'GMOnlyDisabled';
    label1.innerText = game.i18n.localize("SF_CR_Loot_Roller.GMOnlyDisabled");

    const label2 = document.createElement('label');
    label2.htmlFor = 'banFirearms';
    label2.innerText = game.i18n.localize("SF_CR_Loot_Roller.BanFirearms");

    const label3 = document.createElement('label');
    label3.htmlFor = 'banLaserWeapons';
    label3.innerText = game.i18n.localize("SF_CR_Loot_Roller.BanLaserWeapons");

    const label4 = document.createElement('label');
    label4.htmlFor = 'banDecks';
    label4.innerText = game.i18n.localize("SF_CR_Loot_Roller.BanDecks");

    checkbox1.checked = !game.settings.get("SF_CR_Loot_Roller", "GMOnlyDisabled");
    checkbox2.checked = game.settings.get("SF_CR_Loot_Roller", "banFirearms");
    checkbox3.checked = game.settings.get("SF_CR_Loot_Roller", "banLaserWeapons");
    checkbox4.checked = game.settings.get("SF_CR_Loot_Roller", "banDecks");

    checkbox1.addEventListener('change', event => {
      game.settings.set('SF_CR_Loot_Roller', 'GMOnlyDisabled', !event.currentTarget.checked);
    });

    checkbox2.addEventListener("change", event => {
      game.settings.set("SF_CR_Loot_Roller", "banFirearms", event.currentTarget.checked);
    });

    checkbox3.addEventListener("change", event => {
      game.settings.set("SF_CR_Loot_Roller", "banLaserWeapons", event.currentTarget.checked);
    });

    checkbox4.addEventListener("change", event => {
      game.settings.set("SF_CR_Loot_Roller", "banDecks", event.currentTarget.checked);
    });

    moduleSettings.appendChild(checkbox1);
    moduleSettings.appendChild(label1);
    moduleSettings.innerHTML += '<br>';
    moduleSettings.appendChild(checkbox2);
    moduleSettings.appendChild(label2);
    moduleSettings.innerHTML += '<br>';
    moduleSettings.appendChild(checkbox3);
    moduleSettings.appendChild(label3);
    moduleSettings.innerHTML += '<br>';
    moduleSettings.appendChild(checkbox4);
    moduleSettings.appendChild(label4);

    html.find('.settings-list').append(moduleSettings);
  });
}
