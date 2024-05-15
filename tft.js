const quantities = {
    vest: 0,
    cloak: 0,
    belt: 0,
    tear: 0,
    rod: 0,
    glove: 0,
    bow: 0,
    sword: 0
  };
  
  function incrementCount(itemId) {
    quantities[itemId]++;
    document.getElementById(`${itemId}-count`).textContent = quantities[itemId];
  }
  
  function runCrafting() {
    const components = [
      { name: "chain-vest", crafting_name: "A", quantity: quantities.vest },
      { name: "negatron-cloak", crafting_name: "B", quantity: quantities.cloak },
      { name: "giants-belt", crafting_name: "C", quantity: quantities.belt },
      { name: "tear-of-the-goddess", crafting_name: "D", quantity: quantities.tear },
      { name: "needlessly-large-rod", crafting_name: "E", quantity: quantities.rod },
      { name: "sparring-gloves", crafting_name: "F", quantity: quantities.glove },
      { name: "recurve-bow", crafting_name: "G", quantity: quantities.bow },
      { name: "bf-sword", crafting_name: "H", quantity: quantities.sword }
    ];
  
    const optimalItems = craftOptimalItems(components, crafting_rules);
    const optimalItemsDiv = document.getElementById('optimal-items');
    optimalItemsDiv.innerHTML = ''; // Clear previous results
  
    optimalItems.forEach(item => {
      const containerDiv = document.createElement('div');
  
      const finalItemImg = document.createElement('img');
      finalItemImg.src = `https://cdn.mobalytics.gg/assets/tft/images/game-items/set11/${item.combination_name}.png?v=57`;
      finalItemImg.alt = item.combination_name;
      containerDiv.appendChild(finalItemImg);
  
      const separator = document.createElement('span');
      separator.textContent = ' : ';
      containerDiv.appendChild(separator);
  
      item.components.forEach((componentName, index) => {
        const componentImg = document.createElement('img');
        const component = components.find(comp => comp.name === componentName);
        componentImg.src = `https://cdn.mobalytics.gg/assets/tft/images/game-items/set11/${component.name}.png?v=57`;
        componentImg.alt = component.name;
        containerDiv.appendChild(componentImg);
  
        if (index < item.components.length - 1) {
          const plusSeparator = document.createElement('span');
          plusSeparator.textContent = ' + ';
          containerDiv.appendChild(plusSeparator);
        }
      });
  
      optimalItemsDiv.appendChild(containerDiv);
    });
  }
  
  function clearCount() {
    for (let key in quantities) {
      quantities[key] = 0;
      document.getElementById(`${key}-count`).textContent = quantities[key];
    }
    document.getElementById('optimal-items').innerHTML = '';
  }

  //Values from Mobalytics
const crafting_rules = {
    "AA": { value: 6, name: "bramble-vest" }, "AB": { value: 4, name: "gargoyle-stoneplate" }, "AC": { value: 4, name: "sunfire-cape" }, "AD": { value: 4, name: "fimbulwinter" }, "AE": { value: 4, name: "crownguard" },
    "AF": { value: 4, name: "steadfast-hammer" }, "AG": { value: 2, name: "titans-resolve" }, "AH": { value: 4, name: "edge-of-night" },
    "BB": { value: 6, name: "dragons-claw" }, "BC": { value: 1, name: "evenshroud" }, "BD": { value: 4, name: "adaptive-helm" }, "BE": { value: 4, name: "ionic-spark" }, "BF": { value: 1, name: "quicksilver" },
    "BG": { value: 4, name: "runaans-hurricane" }, "BH": { value: 2, name: "bloodthirster" },
    "CC": { value: 6, name: "warmogs-armor" }, "CD": { value: 4, name: "redemption" }, "CE": { value: 4, name: "morellonomicon" }, "CF": { value: 4, name: "guardbreaker" }, "CG": { value: 4, name: "nashors-tooth" },
    "CH": { value: 2, name: "steraks-gage" },
    "DD": { value: 6, name: "blue-buff" }, "DE": { value: 1, name: "archangels-staff" }, "DF": { value: 1, name: "hand-of-justice" }, "DG": { value: 2, name: "statikk-shiv" }, "DH": { value: 6, name: "spear-of-shojin" },
    "EE": { value: 4, name: "rabadons-deathcap" }, "EF": { value: 4, name: "jeweled-gauntlet" }, "EG": { value: 6, name: "guinsoos-rageblade" }, "EH": { value: 2, name: "hextech-gunblade" },
    "FF": { value: 2, name: "thiefs-gloves" }, "FG": { value: 4, name: "last-whisper" }, "FH": { value: 2, name: "infinity-edge" },
    "GG": { value: 4, name: "redbuff" }, "GH": { value: 6, name: "giant-slayer" },
    "HH": { value: 2, name: "deathblade" },
};

function craftOptimalItems(components, crafting_rules) {
    let expandedComponents = [];
    for (let comp of components) {
        for (let i = 0; i < comp.quantity; i++) {
            expandedComponents.push(comp);
        }
    }

    let pairs = [];
    for (let i = 0; i < expandedComponents.length; i++) {
        for (let j = i + 1; j < expandedComponents.length; j++) {
            let name1 = expandedComponents[i].crafting_name;
            let name2 = expandedComponents[j].crafting_name;
            let key = name1 + name2;
            let reverseKey = name2 + name1;
            if (crafting_rules[key]) {
                let { value, name } = crafting_rules[key];
                pairs.push({ value, name, i, j });
            } else if (crafting_rules[reverseKey]) {
                let { value, name } = crafting_rules[reverseKey];
                pairs.push({ value, name, i, j });
            }
        }
    }

    pairs.sort((a, b) => b.value - a.value);

    let used = Array(expandedComponents.length).fill(false);
    let optimalItems = [];

    for (let pair of pairs) {
        let { value, name, i, j } = pair;
        if (!used[i] && !used[j]) {
            optimalItems.push({
                combination_name: name,
                components: [expandedComponents[i].name, expandedComponents[j].name],
                value: value
            });
            used[i] = true;
            used[j] = true;
        }
    }

    return optimalItems;
}