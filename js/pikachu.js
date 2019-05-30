!function(){
	function writeCode(prefix, code, fn){
		let domCode = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id = setInterval(()=>{
			n += 1
			domCode.innerHTML = prefix + code.substring(0, n)
			styleTag.innerHTML = prefix + code.substring(0, n)
			domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
			domCode.scrollTop = domCode.scrollHeight
			if(n >= code.length){
				window.clearInterval(id)
				fn && fn.call()
			}
		},20)
	}
	
	let result = `
/* 首先准备一张带背景色的纸 */
.preview-wrapper {
	background: #5F996D;
}
.preview {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: scale(0.6);
}
.pikachu {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.pikachu .ear-paper {
	display: flex;
	justify-content: center;
	align-items: center;
}

/* 接下来 画皮卡丘的耳朵 */
.pikachu .ear-paper .ear {
	width: 80px;
	height: 300px;
	background: #fad61f;
	border-radius: 50%;
	box-shadow: 0px -55px 2px 0px #000;
}
.pikachu .ear-paper .ear.ear-1 {
	transform: rotate(-40deg);
	margin-right: 100px;
}
.pikachu .ear-paper .ear.ear-2 {
	transform: rotate(40deg);
	margin-left: 100px;
}

/* 然后画皮卡丘的头部 */
.pikachu .face-paper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.pikachu .face-paper .face-1 {
	width: 300px;
	height: 294px;
	background: #fad61f;
	border-radius: 43% 43% 50% 50%;
	box-shadow: 0px 0px 1px 0px #413c3c;
	margin-top: -210px;
	display: flex;
	flex-direction: column;
}

.pikachu .face-paper .face-2 {
	width: 320px;
	height: 215px;
	background: #fad61f;
	border-radius: 44% 44% 50% 50%;
	box-shadow: 0px 1px 0px 0px #413c3c;
	margin-top: -170px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
}

/* 然后画皮卡丘的眼睛 */
.pikachu .face-paper .face-1 .eye-paper {
	display: flex;
	justify-content: space-around;
}
.pikachu .face-paper .face-1 .eye-paper .eye {
	width: 60px;
	height: 60px;
	background: #000;
	border-radius: 50%;
	margin-top: 112px;
	position: relative;
	z-index: 1;
	box-shadow: 0px 3px 9px 0px #413c3c;
}
.pikachu .face-paper .face-1 .eye-paper .eye::before {
	content: '';
	display: block;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	top: 4px;
}
.pikachu .face-paper .face-1 .eye-paper .eye.eye-1::before {
	right: 5px;
}
.pikachu .face-paper .face-1 .eye-paper .eye.eye-2::before {
	left: 5px;
}
.pikachu .face-paper .face-1 .eye-paper .eye::after {
	content: '';
	display: block;
	width: 15px;
	height: 8px;
	border-radius: 100%;
	background: #fff;
	position: absolute;
	top: 48px;
}
.pikachu .face-paper .face-1 .eye-paper .eye.eye-1::after {
	left: 6px;
}
.pikachu .face-paper .face-1 .eye-paper .eye.eye-2::after {
	right: 6px;
}

/* 再然后画皮卡丘的鼻子 */
.pikachu .face-paper .face-1 .nose {
	width: 18px;
	height: 7px;
	background: #000;
	border-radius: 100%;
	position: relative;
	z-index: 2;
	margin: 0 auto;
	box-shadow: 0px 3px 9px 0px #413c3c;
}
/* 再然后画皮卡丘的脸蛋 */
.pikachu .face-paper .face-2 .circle {
	display: flex;
	justify-content: space-between;
}
.pikachu .face-paper .face-2 .circle .circle-1,
.pikachu .face-paper .face-2 .circle .circle-2 {
	width: 75px;
	height: 65px;
	background: #fe2f13;
	border-radius: 50%;
	box-shadow: 0px 0px 5px 0px #bf0c15;
}

/* 最后画皮卡丘的嘴巴 */
.pikachu .face-paper .face-2 .mouth {
	width: 60px;
	height: 32px;
	border-bottom: 8px solid #000;
	border-top: transparent;
	border-radius: 100%;
	position: absolute;
	top: 92px;
	left: 50%;
	margin-left: -30px;
}

/* 好了，一只画好的皮卡丘送给你 */
	`
	writeCode('', result)
}.call()