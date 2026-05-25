

const sentens = [
  "文明差异，怎样助推世界走向和平？",
  "我们的和平理念与文化根脉从哪里来？",
  "青年如何赓续和平薪火？",
  "科技发展将如何重塑未来的和平秩序？",
  "和平的起源与早期形态应该从何说起？",
  "和平理念在跨文化语境中，如何实现对话与共鸣？",
  "新时代背景下，全球和平面临哪些新的机遇与挑战？",
  "和平的未来发展方向，需要我们以何种视角去审视？",
  "和平的实现路径，需要我们从哪些方面着手？"
];

//设置弹幕字体颜色
const danmuColors = [
  "rgba(20, 55, 85, 0.7)",
  "rgba(130, 90, 65, 0.7)",
  "rgba(120, 85, 95,0.7)"
];
let colorIndex = 0; // 用来循环颜色

//新增，记录当前正在使用的垂直轨道，避免重复
const usedTracks = new Set();
const maxTracks = 8;

// 弹幕效果
let currentNum = 1;
const createDanmu = () => {
  const danmu = document.createElement("div");
  danmu.classList.add("scrolling_item");
  danmu.style.zIndex = -10;
  danmu.textContent = sentens[Math.floor(Math.random() * sentens.length)];
  danmu.style.fontSize = `${Math.floor(Math.random() * 3 + 5)}vh`;
  danmu.style.left = `${window.innerWidth}px`;
  //自动循环三种颜色
  danmu.style.color = danmuColors[colorIndex % danmuColors.length];
  colorIndex++;
  const scrollingContainer = document.querySelector(".scrolling");

  //修复1：随机选择一个未被占用的垂直轨道
  let randomNum;
  let attempts = 0;
  // 尝试找一个空轨道，最多尝试maxTracks次
  do {
    randomNum = Math.floor(Math.random() * maxTracks);
    attempts++;
  } while (usedTracks.has(randomNum) && attempts < maxTracks);
  // 标记轨道为已占用  
  usedTracks.add(randomNum);
  // 计算top位置，并加上微小随机偏移，避免完全对齐  
  const trackHeight = Math.floor(100 / maxTracks);
  const randomOffset = Math.random() * 2; // ±1vh的随机偏移  
  danmu.style.top = `${randomNum * trackHeight + randomOffset}vh`;
  scrollingContainer.appendChild(danmu);

  // 修复2：给弹幕速度加随机变化，避免同轨道弹幕同步移动  
  const baseSpeed = 15000;
  const randomSpeed = baseSpeed + Math.random() * 3000; // 15000~18000ms之间随机  
  danmu.style.transition = `transform ${randomSpeed}ms linear`;
  setTimeout(() => {
    danmu.style.transform = `translateX(-${window.innerWidth + danmu.offsetWidth}px)`;
  }, 0);
  // 弹幕移出屏幕后，释放轨道  
  danmu.addEventListener("transitionend", function () {
    usedTracks.delete(randomNum); // 释放轨道    
    danmu.remove();
  });

  // let randomNum = Math.floor(Math.random() * 9) - 1;

  // if (randomNum === currentNum) randomNum = 1;
  // else currentNum = randomNum;

  // //   if (randomNum === 3) randomNum = 1;
  // //   else if (randomNum === 4) randomNum = 2;
  // //   else if (randomNum === 5) randomNum = 6;
  // danmu.style.top = `${randomNum * Math.floor(100 / 8)}vh`;
  // scrollingContainer.appendChild(danmu);
  // danmu.style.transition = `transform 15000ms linear`;
  // setTimeout(() => {
  //   danmu.style.transform = `translateX(-${window.innerWidth + danmu.offsetWidth
  //     }px)`;
  // }, 0);
  // danmu.addEventListener("transitionend", function () {
  //   danmu.remove();
  // });
};
// 启动弹幕循环
let createDame;
const startDanmuLoop = () => {
  createDame = setInterval(createDanmu, 1050);
};

// 停止弹幕循环
const stopDanmuLoop = () => {
  clearInterval(createDame);
};

// 开始执行弹幕
startDanmuLoop();
