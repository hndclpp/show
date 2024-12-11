document.addEventListener('DOMContentLoaded', function () {
    // 文章列表动画
    const posts = document.querySelectorAll(".post");
    const postObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // 停止观察以减少后续计算
                }
            });
        },
        {
            rootMargin: "50px", // 提前触发，减少用户滚动感知
            threshold: 0.1, // 10% 可见时触发
        }
    );
    posts.forEach((post, index) => {
        post.style.setProperty("--delay", `${index * 0.2}s`);
        postObserver.observe(post); // 仅观察即将进入视窗的元素
    });

    // 时间轴动画
    const items = document.querySelectorAll('.timeline-item');
    let batchSize = 10; // 每批动画的项目数量
    let currentIndex = 0;
    function animateBatch() {
        for (let i = 0; i < batchSize && currentIndex < items.length; i++, currentIndex++) {
            const item = items[currentIndex];
            item.style.animationDelay = `${(currentIndex + 1) * 0.1}s`;
        }
        if (currentIndex < items.length) {
            requestAnimationFrame(animateBatch);
        }
    }
    requestAnimationFrame(animateBatch);

    // 图片加载处理
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('img-visible');
                imgObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    const images = document.querySelectorAll('.content img');
    images.forEach(img => {
        if (img.complete) {
            imgObserver.observe(img);
        } else {
            img.onload = () => imgObserver.observe(img);
        }
    });

    // 返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.classList.add('back-to-top');
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
});


document.querySelectorAll('a[href^="#fn:"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth' // 平滑滚动
            });
        }
    });
});
