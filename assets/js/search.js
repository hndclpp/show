document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const searchSkeleton = document.getElementById('search-skeleton');
    const searchHistory = document.getElementById('search-history');
    const pagination = document.getElementById('pagination');
    let fuse;
    let allResults = [];
    const resultsPerPage = 5;
    let currentPage = 1;

    // 添加错误处理
    fetch('/index.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error('Invalid search index data');
            }
            
            console.log('Search index loaded:', data);
            
            const options = {
                keys: [
                    { name: 'title', weight: 0.7 },
                    { name: 'content', weight: 0.3 }
                ],
                threshold: 0.3,
                includeScore: true,
                minMatchCharLength: 2
            };
            
            fuse = new Fuse(data, options);
            loadSearchHistory();
        })
        .catch(error => {
            console.error('Error loading search index:', error);
            searchResults.innerHTML = '<p class="error">搜索功能加载失败，请稍后再试。</p>';
        });

    function performSearch() {
        const query = searchInput.value.trim();
        if (!query || !fuse) {
            searchResults.innerHTML = '';
            return;
        }

        // console.log('开始搜索...');  // 调试日志

        // 显示骨架屏，隐藏其他内容
        searchResults.style.display = 'none';
        pagination.style.display = 'none';
        searchSkeleton.style.display = 'block';

        console.log('骨架屏已显示');  // 调试日志

        // 模拟加载延迟
        setTimeout(() => {
            // console.log('开始处理搜索结果');  // 调试日志
            try {
                allResults = fuse.search(query);
                
                // 隐藏骨架屏，显示结果
                searchSkeleton.style.display = 'none';
                searchResults.style.display = 'block';
                
                // console.log('搜索完成，找到结果：', allResults.length);  // 调试日志

                if (allResults.length === 0) {
                    searchResults.innerHTML = '<p class="no-results">未找到相关结果</p>';
                    pagination.style.display = 'none';
                    return;
                }

                currentPage = 1;
                displayResults(1);
                updatePagination();
                addToSearchHistory(query);
                
                // 显示分页
                pagination.style.display = 'flex';
            } catch (error) {
                // console.error('搜索错误：', error);  // 调试日志
                searchSkeleton.style.display = 'none';
                searchResults.style.display = 'block';
                searchResults.innerHTML = '<p class="error">搜索出错，请重试</p>';
                pagination.style.display = 'none';
            }
        }, 800); // 增加延迟时间到 800ms，使效果更明显
    }

    function displayResults(page) {
        const start = (page - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        const pageResults = allResults.slice(start, end);

        searchResults.innerHTML = '';
        pageResults.forEach(result => {
            const item = result.item;
            const div = document.createElement('div');
            div.className = 'search-result-item';
            
            // 创建摘要文本
            let summary = item.summary || item.content;
            summary = summary.length > 200 ? summary.substring(0, 200) + '...' : summary;
            
            div.innerHTML = `
                <a href="${item.permalink}" class="search-result-title">${item.title}</a>
                <div class="search-result-summary">${summary}</div>
            `;
            searchResults.appendChild(div);
        });
    }

    function updatePagination() {
        const totalPages = Math.ceil(allResults.length / resultsPerPage);
        pagination.innerHTML = '';

        if (totalPages > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '上一页';
            prevButton.disabled = currentPage === 1;
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    displayResults(currentPage);
                    updatePagination();
                }
            });
            pagination.appendChild(prevButton);

            const nextButton = document.createElement('button');
            nextButton.textContent = '下一页';
            nextButton.disabled = currentPage === totalPages;
            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    displayResults(currentPage);
                    updatePagination();
                }
            });
            pagination.appendChild(nextButton);
        }
    }

    function addToSearchHistory(query) {
        let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!history.includes(query)) {
            history.unshift(query);
            if (history.length > 5) history.pop();
            localStorage.setItem('searchHistory', JSON.stringify(history));
            displaySearchHistory();
        }
    }

    function loadSearchHistory() {
        displaySearchHistory();
    }

    function displaySearchHistory() {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.innerHTML = '';
        history.forEach(query => {
            const span = document.createElement('span');
            span.textContent = query;
            span.addEventListener('click', () => {
                searchInput.value = query;
                performSearch();
            });
            searchHistory.appendChild(span);
        });
    }

    // 确保事件监听器正确添加
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // 添加输入防抖
        let debounceTimer;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(performSearch, 300);
        });
    }

    loadSearchHistory();
});