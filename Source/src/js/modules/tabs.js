const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        })

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()

    // Делегирование события хедеру для табов
    header.addEventListener('click', (event) => {
        const target = event.target
        // Проверка на наличие таргета и что клик произошел на нашил табах
        if (target && (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {  // Убираем точку из tabSelector'a
                tab.forEach((item, index) => {
                    if(target === item || target.parentNode === item) {
                        hideTabContent()
                        showTabContent(index)
                    }
                })
        }
    })
}

export default tabs