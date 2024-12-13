document.addEventListener('DOMContentLoaded', () => {
    // 初始化 IntersectionObserver 配置
    const createObserver = (callback, options) => new IntersectionObserver(callback, options);

    // 文章列表动画
    const postElements = document.querySelectorAll(".post");
    const postObserver = createObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "50px",
        threshold: 0.1
    });

    postElements.forEach((post, index) => {
        post.style.setProperty("--delay", `${index * 0.2}s`);
        postObserver.observe(post);
    });

    // 时间轴动画
    const timelineItems = document.querySelectorAll('.timeline-item');
    let currentTimelineIndex = 0;
    const batchSize = 10;

    const animateTimelineBatch = () => {
        for (let i = 0; i < batchSize && currentTimelineIndex < timelineItems.length; i++, currentTimelineIndex++) {
            timelineItems[currentTimelineIndex].style.animationDelay = `${(currentTimelineIndex + 1) * 0.1}s`;
        }
        if (currentTimelineIndex < timelineItems.length) {
            requestAnimationFrame(animateTimelineBatch);
        }
    };

    requestAnimationFrame(animateTimelineBatch);

    // 图片懒加载
    const imageObserver = createObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('img-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // 返回顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.classList.add('back-to-top');
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('visible', window.scrollY > 300);
    });

    // 脚注标注点击滚动处理
    const headerHeight = document.querySelector('.header').offsetHeight;

    document.querySelectorAll('.footnote-ref a, .footnote-backref').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault(); // 阻止默认跳转行为

                // 滚动到目标位置，减去 header 的高度
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth', // 平滑滚动
                });
            }
        });
    });

    // 显示文章内容
    setTimeout(function () {
        document.querySelector('.skeleton-container').style.display = 'none';
        document.querySelector('.single-content').style.display = 'block';
    }, 300);
});
