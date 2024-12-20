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
            // 获取点击位置
            const x = event.clientX;
            const y = event.clientY;
            
            // 计算最大半径（屏幕对角线长度）
            const r = Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y)
            );

            // 设置CSS变量
            this.root.style.setProperty('--x', x + 'px');
            this.root.style.setProperty('--y', y + 'px');
            this.root.style.setProperty('--r', r + 'px');

            // 如果浏览器支持 View Transitions API
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    const theme = this.isDark ? 'light' : 'dark';
                    this.root.setAttribute('data-theme', theme);
                    localStorage.setItem('theme', theme);
                });
            } else {
                // 降级处理
                const theme = this.isDark ? 'light' : 'dark';
                this.root.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
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