document.addEventListener('DOMContentLoaded', () => {
    const BASE_PRICE = 300;
  
    // Інформація про цукерки (numeric price для зручності підрахунку)
    const candyData = {
      candy1: {
        title: 'Цукерка "Молочне серце"',
        price: 45,
        description: 'Ніжний молочний шоколад з кокосовим праліне.'
      },
      candy2: {
        title: 'Цукерка "Солодка насолода"',
        price: 25,
        description: 'Насичений смак карамелі та нотка ванілі.'
      },
      candy3: {
        title: 'Цукерка "Ягідна мрія"',
        price: 30,
        description: 'Свіжий ягідний смак у кожному шматочку.'
      },
      candy4: {
        title: 'Цукерка "Ніжний акорд"',
        price: 35,
        description: 'Поєднання шоколаду та легкого крему.'
      },
      candy5: {
        title: 'Цукерка "Сонячний промінь"',
        price: 25,
        description: 'Легкий лимонний присмак із солодкою ноткою меду.'
      },
      candy6: {
        title: 'Цукерка "Класика"',
        price: 20,
        description: 'Традиційна шоколадна цукерка, що ніколи не набридає.'
      },
      candy7: {
        title: 'Цукерка "Фруктовий мікс"',
        price: 30,
        description: 'Мікс різних фруктів в одному шматочку.'
      },
      candy8: {
        title: 'Цукерка "Екзотика"',
        price: 40,
        description: 'Поєднання тропічних смаків та яскравих ароматів.'
      },
      candy9: {
        title: 'Цукерка "Медовий дотик"',
        price: 40,
        description: 'Цукерка з натуральним медом та горіхами.'
      },
      candy10: {
        title: 'Цукерка "Чарівна казка"',
        price: 40,
        description: 'Казковий смак з карамеллю та легким кремом.'
      }
    };
  
    // Конфігурації коробок
    const boxConfigs = [
      {
        id: 'box3-red-squareRounded-cardboard', 
        material: 'cardboard',
        shape: 'square-rounded',
        color: 'red',
        perspective: '/assets/img/constructor/box/box3.png',
        topView: '/assets/img/constructor/box/box3.1.png',
        quant: "4,16,32"
      },
      {
        id: 'box3-green-rectangle-window-cardboard', 
        material: 'cardboard',
        shape: 'rectangle-window',
        color: 'green',
        perspective: '/assets/img/constructor/box/box5.png',
        topView: '/assets/img/constructor/box/box5.1.png',
        quant: "4,16"
      },
      {
        id: 'box2-red-square-wood', 
        material: 'wood',
        shape: 'square',
        color: 'red',
        perspective: '/assets/img/constructor/box/box2.png',
        topView: '/assets/img/constructor/box/box2.1.png',
        quant: "4,8"
      },
      {
        id: 'box2-red-rectangle-cardboard', 
        material: 'cardboard',
        shape: 'rectangle',
        color: 'red',
        perspective: '/assets/img/constructor/box/box4.png',
        topView: '/assets/img/constructor/box/box4.1.png',
        quant: "4,16,32"
      },
      {
        id: 'box2-red-heart-cardboard', 
        material: 'cardboard',
        shape: 'heart',
        color: 'red',
        perspective: '/assets/img/constructor/box/box6.png',
        topView: '/assets/img/constructor/box/box6.1.png',
        quant: "4,16"
      },
      {
        id: 'box2-red-square-cardboard', 
        material: 'cardboard',
        shape: 'square',
        color: 'red',
        perspective: '/assets/img/constructor/box/box7.png',
        topView: '/assets/img/constructor/box/box7.1.png',
        quant: "4,16,32"
      },
      {
        id: 'box2-red-circle-window-cardboard', 
        material: 'cardboard',
        shape: 'circle-window',
        color: 'red',
        perspective: '/assets/img/constructor/box/box1.png',
        topView: '/assets/img/constructor/box/box1.1.png',
        quant: "4,16"
      }
    ];
  
    // Елементи перегляду
    const boxImageEl = document.getElementById('boxImage');      
    const topViewEl = document.getElementById('topViewImage');   
    const boxTopViewContainer = document.getElementById('boxTopView'); 
    const boxGridEl = document.getElementById('boxGrid');       
  
    // Попап для цукерки
    const candyInfoModal = document.getElementById('candyInfo');
    const closeInfoButton = document.getElementById('close_info');
    const candyTitleEl = candyInfoModal?.querySelector('.title_candy_info');
    const candyPriceEl = candyInfoModal?.querySelector('.price_candy_info');
    const candyDescEl = candyInfoModal?.querySelector('.desct_candy_info');
  
    // Стан для збереження розкладених цукерок
    let candyLayout = {};
  
    /**
     * Плавна зміна зображення (тільки при зміні опції).
     */
    function fadeOutInImage(imgEl, newSrc) {
      imgEl.style.transition = 'opacity 0.3s ease-in-out';
      imgEl.style.opacity = '0';
      setTimeout(() => {
        imgEl.src = newSrc;
        imgEl.onload = () => {
          imgEl.style.opacity = '1';
        };
      }, 300);
    }
  
    /**
     * Отримуємо поточні вибрані опції: material, color, shape, quantity.
     */
    function getSelectedOptions() {
      const materialEl = document.querySelector('.options-container[data-content="material"] .option.selected');
      const colorEl = document.querySelector('.options-container[data-content="color"] .option.selected');
      const shapeEl = document.querySelector('.options-container[data-content="shape"] .option.selected');
      const quantityEl = document.querySelector('.options-container[data-content="quantity"] .option.selected');
      return {
        material: materialEl ? materialEl.getAttribute('data-value') : null,
        color: colorEl ? colorEl.getAttribute('data-value') : null,
        shape: shapeEl ? shapeEl.getAttribute('data-value') : null,
        quantity: quantityEl ? quantityEl.getAttribute('data-value') : null
      };
    }
  
    /**
     * Знаходить конфігурацію коробки за обраним material + color + shape.
     */
    function getBoxConfig(material, shape, color) {
      return boxConfigs.find(box =>
        box.material === material &&
        box.shape === shape &&
        box.color === color
      );
    }
  
    /**
     * Оновлює загальну ціну:
     * 1) Базова ціна (300),
     * 2) Вибрані опції (material, color, shape, quantity),
     * 3) Сума за цукерки з сітки (data-candy атрибут).
     */
    function updatePrice() {
      let total = BASE_PRICE;
  
      // Додаємо ціни вибраних опцій (material, color, shape, quantity)
      const optionGroups = document.querySelectorAll('.options-container[data-content]:not(.candy-option)');
      optionGroups.forEach(group => {
        const selectedOption = group.querySelector('.option.selected');
        if (selectedOption) {
          total += Number(selectedOption.getAttribute('data-price')) || 0;
        }
      });
  
      // Додаємо ціни цукерок із сітки
      const cellsWithCandy = document.querySelectorAll('#boxGrid .grid-cell[data-candy]');
      cellsWithCandy.forEach(cell => {
        const candyType = cell.dataset.candy;
        if (candyData[candyType]) {
          total += candyData[candyType].price;
        }
      });
  
      // Оновлюємо відображення
      const priceElement = document.querySelector('.price-container .price');
      if (priceElement) {
        priceElement.textContent = total + ' ₴';
      }
    }
  
    /**
     * Зберігає поточне розташування цукерок
     */
    function saveCandyLayout() {
      candyLayout = {};
      const cells = document.querySelectorAll('#boxGrid .grid-cell');
      cells.forEach(cell => {
        const index = cell.dataset.cellIndex;
        const candyType = cell.dataset.candy;
        if (candyType) {
          candyLayout[index] = candyType;
        }
      });
    }
  
    /**
     * Відновлює розташування цукерок з збереженого стану
     */
    function restoreCandyLayout() {
      const cells = document.querySelectorAll('#boxGrid .grid-cell');
      cells.forEach(cell => {
        const index = cell.dataset.cellIndex;
        if (candyLayout[index]) {
          const candyType = candyLayout[index];
          // Відображаємо цукерку в клітинці
          cell.innerHTML = '';
          const candyOption = document.querySelector(`.options-container.candy-option .option[data-value="${candyType}"]`);
          if (candyOption) {
            const candyImgEl = candyOption.querySelector('img');
            if (candyImgEl) {
              const newCandyImg = document.createElement('img');
              newCandyImg.src = candyImgEl.src;
              newCandyImg.alt = candyImgEl.alt;
              newCandyImg.style.maxWidth = '90%';
              newCandyImg.style.maxHeight = '90%';
              cell.appendChild(newCandyImg);
            }
          }
          // Встановлюємо атрибут data-candy
          cell.dataset.candy = candyType;
        }
      });
      updatePrice();
    }
  
    /**
     * Оновлює відображення коробки (perspective або topView) залежно від вибраного табу.
     * @param {string} activeTab 
     * @param {boolean} [animate=true]
     */
    function updateBoxPreview(activeTab, animate = true) {
      const { material, color, shape } = getSelectedOptions();
      const config = getBoxConfig(material, shape, color);
      if (!config) {
        // Якщо такої комбінації немає – ставимо дефолт
        boxImageEl.src = '/assets/img/constructor/box/default.png';
        topViewEl.src = '/assets/img/constructor/box/default-top.png';
        return;
      }
  
      // Зберігаємо розташування цукерок перед зміною відображення
      if (activeTab !== 'candy' && boxGridEl.children.length > 0) {
        saveCandyLayout();
      }
  
      if (['material', 'color', 'shape'].includes(activeTab)) {
        // Показуємо перспективу
        if (animate) {
          fadeOutInImage(boxImageEl, config.perspective);
        } else {
          boxImageEl.src = config.perspective;
        }
        boxImageEl.style.display = 'block';
        boxTopViewContainer.style.display = 'none';
      } else {
        // Показуємо top view
        if (animate) {
          fadeOutInImage(topViewEl, config.topView);
        } else {
          topViewEl.src = config.topView;
        }
        boxTopViewContainer.style.display = 'block';
        boxImageEl.style.display = 'none';
        // Будуємо сітку
        updateGrid();
        
        // Відновлюємо цукерки після оновлення сітки
        if (Object.keys(candyLayout).length > 0) {
          restoreCandyLayout();
        }
      }
    }
  
    /**
     * Створює сітку (grid) в #boxGrid відповідно до data-grid вибраної кількості (наприклад, "2x2").
     * Зміна: зберігаємо індекс вибраної клітинки і відновлюємо її після створення сітки.
     */
    function updateGrid() {
      // Зберігаємо індекс вибраної клітинки (якщо є)
      let selectedCellIndex = null;
      const currentSelected = document.querySelector('#boxGrid .grid-cell.selected');
      if (currentSelected) {
        selectedCellIndex = currentSelected.dataset.cellIndex;
      }
      
      // Зберігаємо розкладку цукерок перед оновленням сітки
      if (boxGridEl.children.length > 0) {
        saveCandyLayout();
      }
      
      boxGridEl.innerHTML = '';
      const quantityOption = document.querySelector('.options-container[data-content="quantity"] .option.selected');
      if (!quantityOption) {
        boxGridEl.style.opacity = 0;
        boxGridEl.style.pointerEvents = 'none';
        return;
      }
      const gridAttr = quantityOption.getAttribute('data-grid'); // наприклад, "3x4"
      if (!gridAttr) return;
      const [rowsStr, colsStr] = gridAttr.split('x');
      const rows = parseInt(rowsStr, 10);
      const cols = parseInt(colsStr, 10);
      if (isNaN(rows) || isNaN(cols)) return;
  
      boxGridEl.style.display = 'grid';
      boxGridEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
      boxGridEl.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      boxGridEl.style.opacity = '1';
      boxGridEl.style.pointerEvents = 'auto';
  
      // Створюємо клітинки
      for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.dataset.cellIndex = i;
        // Клік по клітинці – вибір клітинки
        cell.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#boxGrid .grid-cell').forEach(c => c.classList.remove('selected'));
          cell.classList.add('selected');
        });
        boxGridEl.appendChild(cell);
      }
      
      // Відновлюємо розкладку цукерок
      if (Object.keys(candyLayout).length > 0) {
        restoreCandyLayout();
      }
      
      // Відновлюємо вибір клітинки, якщо він був збережений
      if (selectedCellIndex !== null) {
        const restoredCell = document.querySelector(`#boxGrid .grid-cell[data-cell-index="${selectedCellIndex}"]`);
        if (restoredCell) {
          restoredCell.classList.add('selected');
        }
      }
    }
  
    /**
     * Фільтрує доступні опції (material, color, shape, quantity) відповідно до boxConfigs.
     */
    function updateAvailableOptions() {
      // 1) Матеріали
      const materialOptions = document.querySelectorAll('.options-container[data-content="material"] .option');
      const availableMaterials = [...new Set(boxConfigs.map(box => box.material))];
      materialOptions.forEach(option => {
        const matVal = option.getAttribute('data-value');
        if (availableMaterials.includes(matVal)) {
          option.classList.remove('none_item');
        } else {
          option.classList.add('none_item');
          option.classList.remove('selected');
        }
      });
  
      // 2) Кольори
      const selectedMaterial = document.querySelector('.options-container[data-content="material"] .option.selected')?.getAttribute('data-value');
      const colorOptions = document.querySelectorAll('.options-container[data-content="color"] .option');
      if (selectedMaterial) {
        const availableColors = [...new Set(
          boxConfigs.filter(box => box.material === selectedMaterial).map(box => box.color)
        )];
        colorOptions.forEach(option => {
          const colVal = option.getAttribute('data-value');
          if (availableColors.includes(colVal)) {
            option.classList.remove('none_item');
          } else {
            option.classList.add('none_item');
            option.classList.remove('selected');
          }
        });
        // Якщо нічого не вибрано – вибираємо перший доступний
        let selectedColor = document.querySelector('.options-container[data-content="color"] .option.selected')?.getAttribute('data-value');
        if (!selectedColor && availableColors.length > 0) {
          const firstColorOption = Array.from(colorOptions).find(opt => availableColors.includes(opt.getAttribute('data-value')));
          if (firstColorOption) firstColorOption.classList.add('selected');
        }
      } else {
        colorOptions.forEach(opt => opt.classList.remove('none_item'));
      }
  
      // 3) Форма
      const selectedColor = document.querySelector('.options-container[data-content="color"] .option.selected')?.getAttribute('data-value');
      const shapeOptions = document.querySelectorAll('.options-container[data-content="shape"] .option');
      if (selectedMaterial && selectedColor) {
        const availableShapes = [...new Set(
          boxConfigs
            .filter(box => box.material === selectedMaterial && box.color === selectedColor)
            .map(box => box.shape)
        )];
        shapeOptions.forEach(option => {
          const shapeVal = option.getAttribute('data-value');
          if (availableShapes.includes(shapeVal)) {
            option.classList.remove('none_item');
          } else {
            option.classList.add('none_item');
            option.classList.remove('selected');
          }
        });
        let selectedShape = document.querySelector('.options-container[data-content="shape"] .option.selected')?.getAttribute('data-value');
        if (!selectedShape && availableShapes.length > 0) {
          const firstShapeOption = Array.from(shapeOptions).find(opt => availableShapes.includes(opt.getAttribute('data-value')));
          if (firstShapeOption) firstShapeOption.classList.add('selected');
        }
      } else {
        shapeOptions.forEach(opt => opt.classList.remove('none_item'));
      }
  
      // 4) Кількість
      const shapeSelected = document.querySelector('.options-container[data-content="shape"] .option.selected')?.getAttribute('data-value');
      const quantityContainer = document.querySelector('.options-container[data-content="quantity"]');
      const quantityOptions = quantityContainer ? quantityContainer.querySelectorAll('.option') : [];
      if (selectedMaterial && selectedColor && shapeSelected) {
        const availableQuantities = boxConfigs
          .filter(box => box.material === selectedMaterial && box.color === selectedColor && box.shape === shapeSelected)
          .map(box => box.quant)
          .flatMap(q => q.split(',').map(item => item.trim()));
        const uniqueQuants = [...new Set(availableQuantities)];
        quantityOptions.forEach(option => {
          const quantVal = option.getAttribute('data-value');
          if (uniqueQuants.includes(quantVal)) {
            option.classList.remove('none_item');
          } else {
            option.classList.add('none_item');
            option.classList.remove('selected');
          }
        });
      } else {
        quantityOptions.forEach(opt => {
          opt.classList.add('none_item');
          opt.classList.remove('selected');
        });
      }
    }
  
    /**
     * Обробка кліків по групах (material, color, shape, quantity).
     */
    function handleOptionGroup(container) {
      const options = container.querySelectorAll('.option');
      options.forEach(option => {
        option.addEventListener('click', () => {
          if (option.classList.contains('none_item')) return;
          options.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
          updatePrice();
          updateAvailableOptions();
          // Оновлюємо відображення коробки
          const activeTabEl = document.querySelector('.tabs .tab.active_tab');
          const activeTabName = activeTabEl ? activeTabEl.getAttribute('data-tab') : 'material';
          updateBoxPreview(activeTabName, true);
        });
      });
    }
  
    /**
     * Показує попап із інформацією про цукерку (title, price, description).
     */
    function showCandyInfoPopup(candyType) {
      const data = candyData[candyType];
      if (!data) return;
      if (candyTitleEl) candyTitleEl.textContent = data.title;
      if (candyPriceEl) candyPriceEl.textContent = data.price + ' ₴';
      if (candyDescEl) candyDescEl.textContent = data.description || '';
      candyInfoModal.classList.add('active_pop');
    }
  
    /**
     * Додає цукерку у вибрану клітинку
     */
    function addCandyToCell(candyType, selectedCell) {
      // Видаляємо попередню цукерку з клітинки (щоб не додавалася ціна повторно)
      if (selectedCell.dataset.candy) {
        selectedCell.removeAttribute('data-candy');
      }
      
      // Вставляємо нову цукерку
      selectedCell.innerHTML = '';
      const candyOption = document.querySelector(`.options-container.candy-option .option[data-value="${candyType}"]`);
      if (candyOption) {
        const candyImgEl = candyOption.querySelector('img');
        if (candyImgEl) {
          const newCandyImg = document.createElement('img');
          newCandyImg.src = candyImgEl.src;
          newCandyImg.alt = candyImgEl.alt;
          newCandyImg.style.maxWidth = '90%';
          newCandyImg.style.maxHeight = '90%';
          selectedCell.appendChild(newCandyImg);
        }
      }
      
      // Зберігаємо тип цукерки у клітинці
      selectedCell.dataset.candy = candyType;
      
      // Оновлюємо загальну ціну
      updatePrice();
      
      // Зберігаємо поточний стан розташування цукерок
      saveCandyLayout();
    }
  
    /**
     * Налаштовує поведінку для цукерок: 
     * 1) Показ попапу з інформацією при звичайному кліку
     * 2) Якщо вибрана клітинка сітки, вставляємо цукерку (і перераховуємо ціну).
     */
    function setupCandyClick() {
      const candyOptions = document.querySelectorAll('.options-container.candy-option .option');
      candyOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          
          // Знаходимо тип цукерки (candy1, candy2 тощо)
          const candyType = option.getAttribute('data-value');
          
          // Перевіряємо, чи є вибрана клітинка
          const selectedCell = document.querySelector('#boxGrid .grid-cell.selected');
          
          if (selectedCell) {
            // Якщо є вибрана клітинка - додаємо цукерку до неї без показу попапу
            addCandyToCell(candyType, selectedCell);
          } else {
            // Якщо клітинка не вибрана - просто показуємо інформацію про цукерку
            showCandyInfoPopup(candyType);
          }
        });
      });
    }
  
    /**
     * Налаштовує кнопки "Рандомізувати" (повна коробка) та "Випадкова розкладка" (лише цукерки).
     */
    function setupRandomButtons() {
      const randomBoxBtn = document.querySelector('.randoms');              // <button class="randoms">
      const randomCandiesBtn = document.querySelector('.dark_btn.btn_candy'); // <button class="dark_btn btn_candy">
  
      // Рандомно вибрати матеріал, колір, форму, кількість + розкласти цукерки
      function randomizeBox() {
        const groups = ['material', 'color', 'shape', 'quantity'];
        groups.forEach(group => {
          const container = document.querySelector(`.options-container[data-content="${group}"]`);
          if (container) {
            const validOptions = Array.from(container.querySelectorAll('.option:not(.none_item)'));
            if (validOptions.length > 0) {
              validOptions.forEach(opt => opt.classList.remove('selected'));
              const randomOpt = validOptions[Math.floor(Math.random() * validOptions.length)];
              randomOpt.classList.add('selected');
              updateAvailableOptions();
            }
          }
        });
        updatePrice();
        // Перемикаємося на вкладку "candy"
        const candyTab = document.querySelector('.tabs .tab[data-tab="candy"]');
        if (candyTab) {
          candyTab.click();
        } else {
          updateBoxPreview('candy', false);
        }
        // Рандомно розкласти цукерки
        randomizeCandies();
      }
  
      // Рандомна розкладка цукерок для вже обраної коробки
      function randomizeCandies() {
        const gridCells = document.querySelectorAll('#boxGrid .grid-cell');
        if (!gridCells || gridCells.length === 0) {
          alert("Спочатку оберіть кількість (щоб з'явилася сітка)!");
          return;
        }
        const candyOptions = Array.from(document.querySelectorAll('.options-container.candy-option .option'));
        if (candyOptions.length === 0) return;
        gridCells.forEach(cell => {
          cell.innerHTML = '';
          cell.removeAttribute('data-candy');
          const randomCandy = candyOptions[Math.floor(Math.random() * candyOptions.length)];
          const candyType = randomCandy.getAttribute('data-value');
          const candyImg = randomCandy.querySelector('img');
          if (candyImg) {
            const newImg = document.createElement('img');
            newImg.src = candyImg.src;
            newImg.alt = candyImg.alt;
            newImg.style.maxWidth = '70%';
            newImg.style.maxHeight = '80%';
            cell.appendChild(newImg);
          }
          // Прив'язуємо data-candy, щоб у підрахунку врахувати ціну
          cell.dataset.candy = candyType;
        });
        updatePrice();
        // Зберігаємо поточний стан розташування цукерок
        saveCandyLayout();
      }
  
      if (randomBoxBtn) {
        randomBoxBtn.addEventListener('click', randomizeBox);
      }
      if (randomCandiesBtn) {
        randomCandiesBtn.addEventListener('click', randomizeCandies);
      }
    }
  
    /**
     * Налаштовує закриття попапу при кліку на кнопку.
     */
    function setupCandyModal() {
      if (!candyInfoModal) return;
      candyInfoModal.addEventListener('click', e => e.stopPropagation());
      if (closeInfoButton) {
        closeInfoButton.addEventListener('click', () => {
          candyInfoModal.classList.remove('active_pop');
        });
      }
      // Якщо треба закривати при кліку поза попапом:
      document.addEventListener('click', () => {
        if (candyInfoModal.classList.contains('active_pop')) {
          candyInfoModal.classList.remove('active_pop');
        }
      });
    }
  
    /**
     * Налаштовує зняття виділення з клітинки при кліку за межами коробки
     */
    function setupClickOutsideBox() {
      document.addEventListener('click', (e) => {
        // Перевіряємо, чи клік не був на сітці або на цукерці
        if (!e.target.closest('#boxGrid') && !e.target.closest('.options-container.candy-option')) {
          // Знімаємо виділення з усіх клітинок
          document.querySelectorAll('#boxGrid .grid-cell').forEach(cell => {
            cell.classList.remove('selected');
          });
        }
      });
    }
  
    /**
     * Налаштовує роботу табів, ініціалізує все необхідне.
     */
    function setupTabs() {
      const tabs = document.querySelectorAll('.tabs .tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', function () {
          tabs.forEach(t => t.classList.remove('active_tab'));
          this.classList.add('active_tab');
          const tabName = this.getAttribute('data-tab');
          document.querySelectorAll('.options-container').forEach(container => {
            container.classList.remove('active_option');
          });
          const activeContainer = document.querySelector(`.options-container[data-content="${tabName}"]`);
          if (activeContainer) {
            activeContainer.classList.add('active_option');
          }
          updateBoxPreview(tabName, false);
        });
      });
    }
    
    function setupAddBoxValidation() {
        const addBoxButton = document.querySelector('.btn_add .lite_btn');
        const errorMessageEl = document.querySelector('.btn_add p');
    
        addBoxButton.addEventListener('click', () => {
          // Скидаємо попереднє повідомлення
          errorMessageEl.classList.remove('error');
          let messages = [];
    
          // Перевіряємо вибрані опції: material, color, shape, quantity
          const options = getSelectedOptions();
          if (!options.material) messages.push('Матеріал не вибрано');
          if (!options.color) messages.push('Колір не вибрано');
          if (!options.shape) messages.push('Форма не вибрана');
          if (!options.quantity) messages.push('Кількість не вибрана');
    
          // Перевіряємо, чи сітка (розкладка цукерок) заповнена повністю
          const gridCells = document.querySelectorAll('#boxGrid .grid-cell');
          if (gridCells.length > 0) {
            const missingCells = Array.from(gridCells).filter(cell => !cell.dataset.candy);
            if (missingCells.length > 0) {
              messages.push(`Не заповнено ${missingCells.length} клітинок цукерками`);
            }
          }
    
          if (messages.length > 0) {
            errorMessageEl.textContent = messages.join(', ');
            errorMessageEl.classList.add('error');
          } else {
            errorMessageEl.textContent = 'Бокс успішно додано у кошик!';
            errorMessageEl.classList.remove('error');
            // Тут можна додати логіку для додавання коробки у кошик
          }
        });
      }

    function init() {
      // Опрацьовуємо групи опцій (material, color, shape, quantity)
      const optionGroups = document.querySelectorAll('.options-container[data-content]');
      optionGroups.forEach(group => {
        handleOptionGroup(group);
      });
  
      // Налаштовуємо кліки для цукерок
      setupCandyClick();
  
      // Налаштовуємо кнопки "Рандомізувати" та "Випадкова розкладка"
      setupRandomButtons();
  
      // Налаштовуємо попап для інформації про цукерки
      setupCandyModal();
  
      // Налаштовуємо зняття виділення клітинки при кліку поза коробкою
      setupClickOutsideBox();
  
      // Налаштовуємо таби
      setupTabs();
  
      // Початкове оновлення доступних опцій, ціни та відображення коробки
      updateAvailableOptions();
      updatePrice();
      // Встановлюємо початкове відображення коробки, наприклад, з вкладкою "material"
      updateBoxPreview('material', false);

        // Налаштовуємо перевірку при натисканні кнопки "Додати бокс у кошик"
    setupAddBoxValidation();
    }
  
    init();
  });
  