/* 文章列表动画 */
document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".post");

    const observer = new IntersectionObserver(
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
        observer.observe(post); // 仅观察即将进入视窗的元素
    });
});


/* 时间轴动画 */    
document.addEventListener('DOMContentLoaded', function() {
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
});


/* 处理图片加载 */
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('img-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const images = document.querySelectorAll('.content img');
    images.forEach(img => {
        if (img.complete) {
            observer.observe(img);
        } else {
            img.onload = () => observer.observe(img);
        }
    });
});

