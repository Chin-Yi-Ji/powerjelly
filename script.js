// 產品資料
const products = {
    d01: {
        name: 'D01',
        type: '鴨毛比賽級',
        description: '一般零打、中階選手、羽球教學',
        features: ['耐用', '穩定', '鴨毛'],
        details: `
            <h2>D01 鴨毛比賽級</h2>
            <p class="product-detail-type">鴨毛比賽級 - DARK WARRIORS 系列</p>
            <div class="product-detail-image">
                <img src="圖片/S__733519877.jpg" alt="D01 產品圖片" class="modal-product-image">
            </div>
            <div class="product-detail-content">
                <div class="product-detail-section">
                    <h3>產品特色</h3>
                    <ul>
                        <li>採用優質鴨毛，飛行穩定</li>
                        <li>適合一般零打和中階選手使用</li>
                        <li>性價比極高，經濟實惠</li>
                        <li>耐用性佳，使用壽命長</li>
                        <li>適合羽球教學使用</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>技術規格</h3>
                    <ul>
                        <li>羽毛材質：天然鴨毛</li>
                        <li>球頭材料：複合軟木</li>
                        <li>球速：中速</li>
                        <li>適用等級：一般零打到中階</li>
                        <li>包裝：12顆/筒</li>
                        <li>型號：PJDW-D01</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>適用場合</h3>
                    <ul>
                        <li>一般零打</li>
                        <li>中階選手練習</li>
                        <li>羽球教學</li>
                        <li>休閒娛樂</li>
                    </ul>
                </div>
            </div>
        `
    },
    gpro: {
        name: 'G PRO',
        type: '鵝毛比賽級',
        description: '專業選手首選，飛行軌跡精準',
        features: ['精準', '專業', '高級'],
        details: `
            <h2>G PRO 鵝毛比賽級</h2>
            <p class="product-detail-type">鵝毛比賽級 - DARK WARRIORS 系列</p>
            <div class="product-detail-content">
                <div class="product-detail-section">
                    <h3>產品特色</h3>
                    <ul>
                        <li>採用頂級鵝毛，飛行軌跡精準</li>
                        <li>專業選手比賽首選</li>
                        <li>高級品質，卓越性能</li>
                        <li>適合高強度比賽使用</li>
                        <li>TOP GOOSE FEATHER 品質</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>技術規格</h3>
                    <ul>
                        <li>羽毛材質：天然鵝毛</li>
                        <li>球頭材料：複合軟木</li>
                        <li>球速：高速</li>
                        <li>適用等級：高級到專業</li>
                        <li>包裝：12顆/筒</li>
                        <li>型號：PJDW-GPRO</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>適用場合</h3>
                    <ul>
                        <li>專業比賽</li>
                        <li>高級俱樂部</li>
                        <li>選手訓練</li>
                        <li>重要賽事</li>
                    </ul>
                </div>
            </div>
        `
    },
    g01: {
        name: 'G01',
        type: '鵝毛比賽級',
        description: '平衡性能與耐用性的理想選擇',
        features: ['平衡', '耐用', '實用'],
        details: `
            <h2>G01 鵝毛比賽級</h2>
            <p class="product-detail-type">鵝毛比賽級 - DARK WARRIORS 系列</p>
            <div class="product-detail-content">
                <div class="product-detail-section">
                    <h3>產品特色</h3>
                    <ul>
                        <li>平衡性能與耐用性</li>
                        <li>適合中級到高級選手</li>
                        <li>實用性高，性價比佳</li>
                        <li>穩定飛行，精準控制</li>
                        <li>TOP GOOSE FEATHER 品質</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>技術規格</h3>
                    <ul>
                        <li>羽毛材質：天然鵝毛</li>
                        <li>球頭材料：複合軟木</li>
                        <li>球速：中高速</li>
                        <li>適用等級：中級到高級</li>
                        <li>包裝：12顆/筒</li>
                        <li>型號：PJDW-G01</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>適用場合</h3>
                    <ul>
                        <li>俱樂部比賽</li>
                        <li>選手訓練</li>
                        <li>正式比賽</li>
                        <li>日常練習</li>
                    </ul>
                </div>
            </div>
        `
    },
    gtop: {
        name: 'G TOP',
        type: '鵝毛比賽級',
        description: '頂級比賽用球，卓越性能表現',
        features: ['頂級', '卓越', '競技'],
        details: `
            <h2>G TOP 鵝毛比賽級</h2>
            <p class="product-detail-type">鵝毛比賽級 - DARK WARRIORS 系列</p>
            <div class="product-detail-content">
                <div class="product-detail-section">
                    <h3>產品特色</h3>
                    <ul>
                        <li>頂級鵝毛，卓越性能表現</li>
                        <li>專為競技比賽設計</li>
                        <li>飛行軌跡完美，控制精準</li>
                        <li>適合高強度競技使用</li>
                        <li>TOP GOOSE FEATHER 品質</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>技術規格</h3>
                    <ul>
                        <li>羽毛材質：天然鵝毛</li>
                        <li>球頭材料：複合軟木</li>
                        <li>球速：高速</li>
                        <li>適用等級：專業級</li>
                        <li>包裝：12顆/筒</li>
                        <li>型號：PJDW-GTOP</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>適用場合</h3>
                    <ul>
                        <li>國際比賽</li>
                        <li>專業選手</li>
                        <li>重要賽事</li>
                        <li>高級訓練</li>
                    </ul>
                </div>
            </div>
        `
    },
    gprime: {
        name: 'G PRIME',
        type: '鵝毛比賽級',
        description: '旗艦級產品，無與倫比的品質',
        features: ['旗艦', '極致', '尊貴'],
        details: `
            <h2>G PRIME 鵝毛比賽級</h2>
            <p class="product-detail-type">鵝毛比賽級 - DARK WARRIORS 系列</p>
            <div class="product-detail-content">
                <div class="product-detail-section">
                    <h3>產品特色</h3>
                    <ul>
                        <li>旗艦級產品，無與倫比的品質</li>
                        <li>採用最頂級鵝毛製作</li>
                        <li>極致性能，尊貴體驗</li>
                        <li>專為頂級選手設計</li>
                        <li>BEST GOOSE FEATHER 品質</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>技術規格</h3>
                    <ul>
                        <li>羽毛材質：天然鵝毛</li>
                        <li>球頭材料：複合軟木</li>
                        <li>球速：超高速</li>
                        <li>適用等級：頂級專業</li>
                        <li>包裝：12顆/筒</li>
                        <li>型號：PJDW-GPRIME</li>
                    </ul>
                </div>
                <div class="product-detail-section">
                    <h3>適用場合</h3>
                    <ul>
                        <li>國際大賽</li>
                        <li>頂級選手</li>
                        <li>重要賽事</li>
                        <li>專業訓練</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS 動畫
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    // 導覽列功能
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 點擊導覽列連結時關閉漢堡選單
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 平滑滾動功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 導覽列滾動效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // 聯絡表單處理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單資料
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // 簡單驗證
            if (!name || !email || !subject || !message) {
                showNotification('請填寫所有欄位', 'error');
                return;
            }

            // 模擬表單提交
            showNotification('訊息已送出！我們會盡快回覆您。', 'success');
            this.reset();
        });
    }

    // 載入動畫
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// 平滑滾動到指定區塊
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 開啟產品詳細 Modal
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    const product = products[productId];

    if (product && modal && modalContent) {
        modalContent.innerHTML = `
            ${product.details}
            <div class="modal-actions">
                <button class="modal-button secondary" onclick="closeProductModal()">
                    <i class="fas fa-times"></i> 關閉
                </button>
                <button class="modal-button primary" onclick="goToPurchaseInfo()">
                    <i class="fas fa-shopping-cart"></i> 我要購買
                </button>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// 關閉產品詳細 Modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 點擊 Modal 外部關閉
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeProductModal();
    }
});

// 點擊關閉按鈕
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        closeProductModal();
    }
});

// 跳轉到購買資訊
function goToPurchaseInfo() {
    // 關閉 Modal
    closeProductModal();
    
    // 滾動到購買資訊區塊
    setTimeout(() => {
        scrollToSection('dealers');
    }, 300);
}

// 聯絡經銷商
function contactDealer(name, phone) {
    const message = `您好，我想向 ${name} 購買 POWER JELLY 產品，聯絡電話：${phone}`;
    showNotification(`已複製聯絡資訊：${name} - ${phone}`, 'success');
    
    // 複製電話號碼到剪貼簿
    if (navigator.clipboard) {
        navigator.clipboard.writeText(phone).then(() => {
            showNotification(`已複製電話號碼：${phone}`, 'success');
        });
    }
}

// 顯示通知訊息
function showNotification(message, type = 'info') {
    // 移除現有的通知
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // 創建新通知
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // 添加樣式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(45deg, #00ff88, #00cc66)' : 
                    type === 'error' ? 'linear-gradient(45deg, #ff4444, #cc0000)' : 
                    'linear-gradient(45deg, #00ccff, #0088cc)'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;

    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            margin-left: auto;
            padding: 0.2rem;
        }
        
        .notification-close:hover {
            opacity: 0.7;
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // 自動移除通知
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

 