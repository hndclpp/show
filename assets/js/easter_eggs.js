(function(){
    const _0x2345=['QXJyb3dVcA==','QXJyb3dEb3du','QXJyb3dMZWZ0','QXJyb3dSaWdodA==','Yg==','YQ==','aGVsbG8=','c2hvdw==','c2VjcmV0','bWVvdw==','d293','ZGFuY2U=','cmFpbmJvdw==','c3Bpbg==','Ymxpbms=','ZmxpcA==','c2hha2U=','d2F2ZQ==','Z2xpdGNo','c2h1dGRvd24='];
    const _0xc=function(s){return atob(s)};
    
    const _s=[_0xc(_0x2345[0]),_0xc(_0x2345[0]),_0xc(_0x2345[1]),_0xc(_0x2345[1]),
              _0xc(_0x2345[2]),_0xc(_0x2345[3]),_0xc(_0x2345[2]),_0xc(_0x2345[3]),
              _0xc(_0x2345[4]),_0xc(_0x2345[5])];
    let _i=0;
    
    let _t='';
    let _u=false;
    
    const _w={
        [_0xc(_0x2345[6])]: '你好啊！(◕ᴗ◕✿)',
        [_0xc(_0x2345[7])]: '发现主题彩蛋！╰(°▽°)╯',
        [_0xc(_0x2345[8])]: '彩蛋已解锁！(｡♥‿♥｡)',
        [_0xc(_0x2345[9])]: '喵~ ฅ՞•ﻌ•՞ฅ',
        [_0xc(_0x2345[10])]: '汪！(｀∇´ゞ)',
        [_0xc(_0x2345[11])]: '♪～(´ε｀ )',
        [_0xc(_0x2345[12])]: '🌈',
        [_0xc(_0x2345[13])]: '(@^0^@)',
        [_0xc(_0x2345[14])]: '(｡◕‿◕｡)',
        [_0xc(_0x2345[15])]: '(╯°□°）╯',
        [_0xc(_0x2345[16])]: '(ﾉ>ω<)ﾉ',
        [_0xc(_0x2345[17])]: '~(￣▽￣)~*',
        [_0xc(_0x2345[18])]: '系统故障...( ⊙_⊙)',
        [_0xc(_0x2345[19])]: '正在关闭系统...(￣_￣)∠※'
    };
    
    // 特殊效果函数
    function _e4() { // 彩虹效果
        document.body.style.animation = '_r 2s linear infinite';
        setTimeout(() => document.body.style.animation = '', 3000);
    }
    
    function _e5() { // 跳舞效果
        document.body.style.animation = '_d 0.5s ease infinite';
        setTimeout(() => document.body.style.animation = '', 3000);
    }
    
    function _e6() { // 抖动效果
        document.body.style.animation = '_s 0.1s ease infinite';
        setTimeout(() => document.body.style.animation = '', 1000);
    }
    
    function _e7() { // 旋转效果
        document.body.style.animation = '_sp 1s ease-in-out';
        setTimeout(() => document.body.style.animation = '', 1000);
    }
    
    function _e8() { // 闪烁效果
        document.body.style.animation = '_bl 0.1s ease infinite';
        setTimeout(() => document.body.style.animation = '', 1000);
    }
    
    function _e9() { // 翻转效果
        document.body.style.animation = '_fl 1s ease-in-out';
        setTimeout(() => document.body.style.animation = '', 1000);
    }
    
    function _e10() { // 摇晃效果
        document.body.style.animation = '_sh 0.5s ease infinite';
        setTimeout(() => document.body.style.animation = '', 2000);
    }
    
    function _e11() { // 波浪效果
        document.body.style.animation = '_w 2s ease infinite';
        setTimeout(() => document.body.style.animation = '', 2000);
    }
    
    // 添加故障效果函数
    function _e12() {
        // 创建遮罩层
        const _overlay = document.createElement('div');
        _overlay.className = '_gl';
        document.body.appendChild(_overlay);
        
        // 创建故障文本层
        const _glitch = document.createElement('div');
        _glitch.className = '_gt';
        _glitch.innerHTML = `
            <div class="_gt_r">SYSTEM FAILURE</div>
            <div class="_gt_g">SYSTEM FAILURE</div>
            <div class="_gt_b">SYSTEM FAILURE</div>
        `;
        _overlay.appendChild(_glitch);
        
        // 动画序列
        setTimeout(() => {
            _overlay.classList.add('_gl_on'); // 黑屏
            
            setTimeout(() => {
                _overlay.classList.add('_gl_glitch'); // 开始闪烁
                _glitch.style.display = 'block';
                
                setTimeout(() => {
                    _overlay.classList.add('_gl_noise'); // 添加雪花
                    
                    setTimeout(() => {
                        _overlay.classList.add('_gl_out'); // 淡出效果
                        
                        setTimeout(() => {
                            _overlay.remove(); // 移除所有效果
                        }, 1000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 100);
    }
    
    // 添加关机效果函数
    function _e13() {
        // 创建关机画面
        const _shutdown = document.createElement('div');
        _shutdown.className = '_sd';
        
        // 添加关机文本
        const _text = document.createElement('div');
        _text.className = '_sd_text';
        _text.innerHTML = `
            <div class="_sd_line">正在关闭系统...</div>
            <div class="_sd_line">正在保存数据...</div>
            <div class="_sd_line">正在关闭服务...</div>
            <div class="_sd_line _sd_blink">请勿关闭电源</div>
        `;
        _shutdown.appendChild(_text);
        
        // 添加进度条
        const _progress = document.createElement('div');
        _progress.className = '_sd_progress';
        _progress.innerHTML = '<div class="_sd_bar"></div>';
        _shutdown.appendChild(_progress);
        
        document.body.appendChild(_shutdown);
        
        // 动画序列
        setTimeout(() => {
            _shutdown.classList.add('_sd_on'); // 淡入
            
            // 逐行显示文本
            const lines = _text.querySelectorAll('._sd_line');
            lines.forEach((line, i) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                }, i * 1000);
            });
            
            // 进度条动画
            setTimeout(() => {
                _progress.classList.add('_sd_progress_on');
                
                // 完成后闪烁并重启
                setTimeout(() => {
                    _shutdown.classList.add('_sd_flicker');
                    
                    setTimeout(() => {
                        _shutdown.classList.add('_sd_off');
                        setTimeout(() => {
                            _shutdown.remove();
                        }, 1000);
                    }, 2000);
                }, 5000);
            }, 2000);
        }, 100);
    }
    
    // 监听键盘
    document.addEventListener('keypress',function(e){
        _t+=e.key.toLowerCase();
        
        if(_t.includes(_0xc(_0x2345[8]))){ // secret
            if(!_u){
                _u=true;
                _m(_w[_0xc(_0x2345[8])]);
            }
            _t='';
            return;
        }
        
        if(_u){
            Object.keys(_w).forEach(k=>{
                if(k!==_0xc(_0x2345[8]) && _t.includes(k)){
                    _m(_w[k]);
                    switch(k){
                        case _0xc(_0x2345[9]): _e6(); break; // meow
                        case _0xc(_0x2345[11]): _e5(); break; // dance
                        case _0xc(_0x2345[12]): _e4(); break; // rainbow
                        case _0xc(_0x2345[13]): _e7(); break; // spin
                        case _0xc(_0x2345[14]): _e8(); break; // blink
                        case _0xc(_0x2345[15]): _e9(); break; // flip
                        case _0xc(_0x2345[16]): _e10(); break; // shake
                        case _0xc(_0x2345[17]): _e11(); break; // wave
                        case _0xc(_0x2345[18]): _e12(); break; // glitch
                        case _0xc(_0x2345[19]): _e13(); break; // shutdown
                    }
                    _t='';
                }
            });
        }
        
        if(_t.length>20)_t='';
    });
    
    function _m(x){
        const _d=document.createElement('div');
        _d.style.cssText=`
            position:fixed;
            top:20%;
            left:50%;
            transform:translateX(-50%);
            background:rgba(0,0,0,0.8);
            color:white;
            padding:10px 20px;
            border-radius:4px;
            z-index:10000;
            animation:_f 2s ease-in-out forwards;
        `;
        _d.textContent=x;
        document.body.appendChild(_d);
        setTimeout(()=>_d.remove(),2000);
    }
    
    function _e1(){
        let _c=0;
        const _x=15;
        const _v=setInterval(function(){
            if(_c>=_x){
                clearInterval(_v);
                return;
            }
            _e2();
            _c++;
        },300);
    }
    
    function _e2(){
        const _d=document.createElement('div');
        _d.className='_p';
        const _x=Math.random()*window.innerWidth;
        const _y=Math.random()*window.innerHeight;
        _d.style.left=_x+'px';
        _d.style.top=_y+'px';
        document.body.appendChild(_d);
        _e3(_d);
        setTimeout(function(){
            _d.remove();
        },1000);
    }
    
    function _e3(_p){
        const _c=['#ff0','#f0f','#0ff','#f00','#0f0','#00f'];
        const _n=30;
        
        for(let i=0;i<_n;i++){
            const _d=document.createElement('div');
            _d.className='_q';
            const _a=(i*360)/_n;
            const _r=50+Math.random()*50;
            const _x=Math.cos(_a*Math.PI/180)*_r;
            const _y=Math.sin(_a*Math.PI/180)*_r;
            const _l=_c[Math.floor(Math.random()*_c.length)];
            
            _d.style.cssText=`
                position:absolute;
                width:4px;
                height:4px;
                background:${_l};
                border-radius:50%;
                transform:translate(-50%,-50%);
                --x:${_x}px;
                --y:${_y}px;
                animation:_a .8s ease-out forwards;
            `;
            
            _p.appendChild(_d);
        }
        
        const _e=document.createElement('div');
        _e.style.cssText=`
            position:absolute;
            width:4px;
            height:4px;
            background:white;
            border-radius:50%;
            transform:translate(-50%,-50%);
            animation:_b .5s ease-out forwards;
        `;
        
        _p.appendChild(_e);
    }
    
    const _s1=document.createElement('style');
    _s1.textContent=`
        @keyframes _f{
            0%{opacity:0;transform:translate(-50%,-20px)}
            20%{opacity:1;transform:translate(-50%,0)}
            80%{opacity:1;transform:translate(-50%,0)}
            100%{opacity:0;transform:translate(-50%,-20px)}
        }
        @keyframes _a{
            0%{transform:translate(0,0);opacity:1}
            100%{transform:translate(var(--x),var(--y));opacity:0}
        }
        @keyframes _b{
            0%{transform:scale(1);opacity:1}
            100%{transform:scale(30);opacity:0}
        }
        @keyframes _d {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        @keyframes _s {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-5px, 0); }
            75% { transform: translate(5px, 0); }
        }
        @keyframes _sp {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes _bl {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        @keyframes _fl {
            0% { transform: perspective(400px) rotateY(0); }
            100% { transform: perspective(400px) rotateY(360deg); }
        }
        @keyframes _sh {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
        }
        @keyframes _w {
            0%, 100% { transform: skewX(0deg); }
            25% { transform: skewX(10deg); }
            75% { transform: skewX(-10deg); }
        }
        
        /* 故障效果样式 */
        ._gl {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: 99999;
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
        }
        
        ._gl_on {
            opacity: 1;
        }
        
        ._gl_glitch {
            animation: _gl_flicker 0.2s infinite;
        }
        
        ._gl_noise::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA/Pz9fX19/f3+fn5+/v7/f39////9BWNxrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVQ4jWNgGAWjgP6ASdXAwEBVwcBAVcHAgKqCgQFVBQMDqgoGBlQVDAyoKhgYUFUwMKCqYGAYBaNgwAEAuqYBf3eXuHAAAAAASUVORK5CYII=');
            animation: _gl_noise .2s infinite;
            opacity: 0.1;
        }
        
        ._gl_out {
            opacity: 0;
            transition: opacity 1s;
        }
        
        ._gt {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: monospace;
            font-size: 24px;
            font-weight: bold;
            display: none;
        }
        
        ._gt_r, ._gt_g, ._gt_b {
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            mix-blend-mode: screen;
        }
        
        ._gt_r { color: #f00; transform: translate(-2px,0); }
        ._gt_g { color: #0f0; transform: translate(2px,0); }
        ._gt_b { color: #00f; }
        
        @keyframes _gl_flicker {
            0% { opacity: 0.9; }
            50% { opacity: 0.3; }
            100% { opacity: 0.9; }
        }
        
        @keyframes _gl_noise {
            0% { transform: translate(0,0) }
            10% { transform: translate(-5%,-5%) }
            20% { transform: translate(-10%,5%) }
            30% { transform: translate(5%,-10%) }
            40% { transform: translate(-5%,15%) }
            50% { transform: translate(-10%,5%) }
            60% { transform: translate(15%,0) }
            70% { transform: translate(0,10%) }
            80% { transform: translate(-15%,0) }
            90% { transform: translate(10%,5%) }
            100% { transform: translate(5%,0) }
        }
        
        /* 关机效果样式 */
        ._sd {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            color: #fff;
            font-family: monospace;
            z-index: 99999;
            opacity: 0;
            transition: opacity 0.5s;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        ._sd_on {
            opacity: 1;
        }
        
        ._sd_off {
            opacity: 0;
        }
        
        ._sd_text {
            margin-bottom: 30px;
        }
        
        ._sd_line {
            opacity: 0;
            transition: opacity 0.5s;
            margin: 10px 0;
            font-size: 18px;
        }
        
        ._sd_blink {
            animation: _sd_blink 1s infinite;
        }
        
        ._sd_progress {
            width: 300px;
            height: 20px;
            background: #333;
            border: 2px solid #666;
            position: relative;
            overflow: hidden;
        }
        
        ._sd_bar {
            width: 0%;
            height: 100%;
            background: #0066cc;
            transition: width 5s linear;
        }
        
        ._sd_progress_on ._sd_bar {
            width: 100%;
        }
        
        ._sd_flicker {
            animation: _sd_flicker 0.2s infinite;
        }
        
        @keyframes _sd_blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        @keyframes _sd_flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(_s1);
})(); 