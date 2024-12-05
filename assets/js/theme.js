document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    async function toggleTheme(event) {
        if (!document.startViewTransition) {
            document.documentElement.setAttribute('data-theme', 
                document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
            );
            return;
        }

        const x = event?.clientX ?? window.innerWidth;
        const y = event?.clientY ?? 0;

        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });

        try {
            await transition.ready;
            
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
            ];
            
            document.documentElement.animate(
                {
                    clipPath: document.documentElement.getAttribute('data-theme') === 'dark' 
                        ? clipPath 
                        : [...clipPath].reverse(),
                },
                {
                    duration: 500,
                    easing: 'ease-in',
                    pseudoElement: document.documentElement.getAttribute('data-theme') === 'dark'
                        ? '::view-transition-new(root)'
                        : '::view-transition-old(root)',
                }
            );
        } catch (e) {
            console.error('主题切换动画失败:', e);
        }
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', savedTheme || systemTheme);

    themeToggle?.addEventListener('click', toggleTheme);
}); 