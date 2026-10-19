const header = document.querySelector('header');
const button = document.querySelector('.nav-button');
button.addEventListener('click', function() {
    header.classList.toggle('nav-open');
});

const modal = document.querySelector('#modal');
if (modal) {
    const modalButtons = document.querySelectorAll('.skill-item');
    if (modalButtons.length > 0) {
        modalButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const img = button.querySelector('figure img.normal');
                if(img){
                    const src = img.getAttribute('src');
                    console.log(src)
                    const modalImage = modal.querySelector('figure img');
                    if(modalImage){
                        modalImage.src = src;
                    }
                }
                const figure = button.querySelector('figure');
                if(figure){
                    const text = figure.dataset.text;
                    if(text){
                        const p = modal.querySelector('p');
                        if(p){
                            p.textContent = text;
                        }
                    }
                }
                modal.classList.add('open')
            })
        })
    }
    const closeButton = document.querySelector('.modal-close');
    if (closeButton){
        closeButton.addEventListener('click', () => {
            modal.classList.remove('open')
        })
    }
}

// ローディングアニメーション制御
const loading = document.querySelector('.loading');
if (loading){
    // const lastShown = localStorage.getItem('loadingLastShown');
    // 検証ツール→アプリケーション→ローカルストレージで確認できる
    const lastShown = Number(localStorage.getItem('loadingLastShown'));
    const now = Date.now(); // 現在時刻
    const INTERVAL = 24*60*60*1000 //１日が何ミリ秒か計算。設定値など変わらない値は大文字の変数にすることが多い
    
    // console.log(now, lastShown, now-lastShown, INTERVAL);
    if (lastShown && now-lastShown<INTERVAL){
        // 24時間以内：ローディングなし
        loading.classList.add('off');
    } else {
        // 24時間経過後：ローディングあり
        localStorage.setItem('loadingLastShown', now);
    }
}
