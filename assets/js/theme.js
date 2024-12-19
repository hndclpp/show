document.addEventListener('DOMContentLoaded', function() {
    class ThemeManager {
        constructor() {
            // 初始化主题管理器
            this.themeToggle = document.getElementById('theme-toggle');  // 获取主题切换按钮
            this.root = document.documentElement;  // 获取根元素
            this.initialize();  // 执行初始化
        }

        initialize() {
            // 初始化主题设置
            const savedTheme = localStorage.getItem('theme');  // 获取保存的主题
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  // 检查系统主题偏好
            const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');  // 确定初始主题
            this.root.setAttribute('data-theme', initialTheme);  // 设置初始主题

            // 绑定点击事件
            if (this.themeToggle) {
                this.themeToggle.addEventListener('click', (e) => this.toggle(e));
            }
        }

        toggle(event) {
            // 计算动画起点（使用点击位置或屏幕中心）
            const x = event?.clientX ?? innerWidth / 2;
            const y = event?.clientY ?? innerHeight / 2;
            
            // 计算动画扩散半径（使用勾股定理计算最大覆盖半径）
            const endRadius = Math.hypot(
                Math.max(x, innerWidth - x),
                Math.max(y, innerHeight - y)
            );

            // 设置 CSS 变量，用于动画定位和大小
            this.root.style.setProperty('--x', x + 'px');  // 动画中心点X坐标
            this.root.style.setProperty('--y', y + 'px');  // 动画中心点Y坐标
            this.root.style.setProperty('--r', endRadius + 'px');  // 动画最大半径

            // 如果浏览器不支持 View Transitions API，直接切换主题
            if (!document.startViewTransition) {
                this.setTheme(this.isDark ? 'light' : 'dark');
                return;
            }

            // 使用 View Transitions API 执行主题切换
            document.startViewTransition(() => {
                const newTheme = this.isDark ? 'light' : 'dark';  // 确定新主题
                this.root.setAttribute('data-theme', newTheme);    // 设置新主题
                localStorage.setItem('theme', newTheme);           // 保存主题设置
            });
        }

        // 设置主题的辅助方法
        setTheme(theme) {
            this.root.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }

        // 获取当前是否为暗色主题
        get isDark() {
            return this.root.getAttribute('data-theme') === 'dark';
        }
    }

    // 创建主题管理器实例
    new ThemeManager();
}); 