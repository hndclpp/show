document.addEventListener('DOMContentLoaded', () => {
    // 获取菜单相关的 DOM 元素
    const menuToggle = document.querySelector('.menu-toggle')      // 菜单切换按钮
    const menuOverlay = document.getElementById('menuOverlay')     // 菜单遮罩层
    const menuItems = document.querySelector('.menu-items')        // 菜单项容器
    let plum = null                                               // 梅花效果实例

    // 切换菜单状态的函数
    function toggleMenu() {
        // 切换各个元素的 active 类
        menuToggle.classList.toggle('active')    // 切换按钮状态
        menuOverlay.classList.toggle('active')   // 切换遮罩层状态
        menuItems.classList.toggle('active')     // 切换菜单项状态
        document.body.classList.toggle('menu-open') // 切换body状态，防止滚动

        // 检查菜单是否处于激活状态
        const isActive = menuOverlay.classList.contains('active')
        console.log('Menu state:', isActive)

        if (isActive) {
            // 菜单打开时，创建新的梅花效果
            if (plum) {
                // 如果已存在实例，先销毁
                plum.destroy()
                plum = null
            }
            console.log('Creating new plum effect')
            plum = new Plum()
        } else if (plum) {
            // 菜单关闭时，销毁梅花效果
            console.log('Destroying plum effect')
            plum.destroy()
            plum = null
        }
    }

    // 绑定菜单切换事件
    menuToggle.addEventListener('click', toggleMenu)
})