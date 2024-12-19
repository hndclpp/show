// 模态框功能
const initModal = () => {
    // 获取DOM元素
    const elements = {
        modal: document.getElementById("modal"),
        image: document.getElementById("modal-image"),
        title: document.getElementById("modal-title")
    };

    // 模态框控制函数
    const modalControls = {
        show: (img, title) => {
            elements.modal.style.display = "flex";
            elements.image.src = img.src;
            elements.title.textContent = title || "";
            document.body.classList.add("modal-open");
        },
        hide: () => {
            elements.modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    };

    // 事件处理函数
    const handleImageClick = (img) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        modalControls.show(img, img.alt || img.title || '');
    };

    // 初始化事件监听
    const initEvents = () => {
        // 模态框点击关闭
        elements.modal.addEventListener("click", (e) => {
            if (e.target === elements.modal || e.target.classList.contains("close")) {
                modalControls.hide();
            }
        });

        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') modalControls.hide();
        });

        // 图片点击事件
        const excludeSelectors = '.post-header img, .avatar, .logo img';
        document.querySelectorAll('img').forEach(img => {
            if (!img.closest(excludeSelectors)) {
                img.style.cursor = 'zoom-in';
                img.addEventListener("click", handleImageClick(img));
            }
        });
    };

    // 初始化
    initEvents();

    // 暴露公共方法
    window.showModal = modalControls.show;
    window.hideModal = modalControls.hide;
};

// 当DOM加载完成时初始化
document.addEventListener("DOMContentLoaded", initModal); 