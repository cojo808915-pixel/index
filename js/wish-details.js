function initializeCarousel(carousel, items) {
  // Style the carousel container
  carousel.style.position = "relative";
  carousel.style.width = "100%";

  // Create a wrapper for all items
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.transition = "none";
  wrapper.style.width = `${items.length * 100}%`;

  // Move all items into the wrapper
  items.forEach((item) => {
    item.style.width = `${100 / items.length}%`;
    wrapper.appendChild(item);
  });

  // Clone first item and append to end for smooth loop
  const firstItemClone = items[0].cloneNode(true);
  wrapper.appendChild(firstItemClone);

  // Add wrapper to carousel
  carousel.appendChild(wrapper);

  let position = 0;
  function animate() {
    //    速度调整
    const direction = carousel.closest(".past") ? 0.005 : -0.005;
    position += direction;
    if (carousel.closest(".past")) {
      if (position >= 100) position = 0;
    } else {
      if (position <= -100) position = 0;
    }
    wrapper.style.transform = `translateX(${position}%)`;
    requestAnimationFrame(animate);
  }
  animate();
}

document.addEventListener("DOMContentLoaded", function () {
  const viewButtons = document.querySelectorAll(".card button");

  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const todayCarousel = document.querySelector(".today .carousel");
      const pastCarousel = document.querySelector(".past .carousel");

      // Initialize carousels after content is loaded
      setTimeout(() => {
        const todayItems = todayCarousel.querySelectorAll("li");
        const pastItems = pastCarousel.querySelectorAll("li");
        initializeCarousel(todayCarousel, todayItems);
        initializeCarousel(pastCarousel, pastItems);
      }, 0);
    });
  });
});
// details渲染数据
const detailsData = {
  讯息来往: {
    today: [
      {
        title: "实时通讯",
        image: "../assets/imgs/wish-detalis/communication/today/1.png",
      },
      {
        title: "实地览胜",
        image: "../assets/imgs/wish-detalis/communication/today/2.png",
      },
      {
        title: "信息速传",
        image: "../assets/imgs/wish-detalis/communication/today/3.png",
      },
      {
        title: "学术文化广播",
        image: "../assets/imgs/wish-detalis/communication/today/4.png",
      },
      {
        title: "面对面相会",
        image: "../assets/imgs/wish-detalis/communication/today/5.png",
      },
    ],
    past: [
      {
        title: "驿传传音",
        image: "../assets/imgs/wish-detalis/communication/past/1.png",
      },
      {
        title: "口典传俗",
        image: "../assets/imgs/wish-detalis/communication/past/2.png",
      },
      {
        title: "资讯迟递",
        image: "../assets/imgs/wish-detalis/communication/past/3.png",
      },
      {
        title: "民俗固守",
        image: "../assets/imgs/wish-detalis/communication/past/4.png",
      },
      {
        title: "赴约远行",
        image: "../assets/imgs/wish-detalis/communication/past/5.png",
      },
    ],
  },
  资源共享: {
    today: [
      {
        title: "全域通商",
        image: "../assets/imgs/wish-detalis/share/today/1.png",
      },
      {
        title: "物资互济",
        image: "../assets/imgs/wish-detalis/share/today/2.png",
      },
      {
        title: "优种互通",
        image: "../assets/imgs/wish-detalis/share/today/3.png",
      },
      {
        title: "技艺共学",
        image: "../assets/imgs/wish-detalis/share/today/4.png",
      },
      {
        title: "全域协防",
        image: "../assets/imgs/wish-detalis/share/today/5.png",
      },
    ],
    past: [
      {
        title: "物产自足",
        image: "../assets/imgs/wish-detalis/share/past/1.png",
      },
      {
        title: "本地储济",
        image: "../assets/imgs/wish-detalis/share/past/2.png",
      },
      {
        title: "良种自留",
        image: "../assets/imgs/wish-detalis/share/past/3.png",
      },
      {
        title: "技艺秘传",
        image: "../assets/imgs/wish-detalis/share/past/4.png",
      },
      {
        title: "一地备防",
        image: "../assets/imgs/wish-detalis/share/past/5.png",
      },
    ],
  },
  交流载体: {
    today: [
      {
        title: "线上云端沟通",
        image: "../assets/imgs/wish-detalis/message/today/1.png",
      },
      {
        title: "云端出游",
        image: "../assets/imgs/wish-detalis/message/today/2.png",
      },
      {
        title: "艺影远播",
        image: "../assets/imgs/wish-detalis/message/today/3.png",
      },
      {
        title: "学界共聚",
        image: "../assets/imgs/wish-detalis/message/today/4.png",
      },
      {
        title: "研学互通",
        image: "../assets/imgs/wish-detalis/message/today/5.png",
      },

    ],
    past: [
      {
        title: "车马远行",
        image: "../assets/imgs/wish-detalis/message/past/1.png",
      },
      {
        title: "徒步游历",
        image: "../assets/imgs/wish-detalis/message/past/2.png",
      },
      {
        title: "戏台献艺",
        image: "../assets/imgs/wish-detalis/message/past/3.png",
      },
      {
        title: "书院论学",
        image: "../assets/imgs/wish-detalis/message/past/4.png",
      },
      {
        title: "远赴求学",
        image: "../assets/imgs/wish-detalis/message/past/5.png",
      },
    ],
  },
};
// details默认隐藏，点击查看后出现
document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelector(".details");
  const viewButtons = document.querySelectorAll(".card button");
  const p3Gray = document.querySelector(".p3-gray");

  // 初始隐藏详情
  details.style.display = "none";
  // 初始隐藏灰色背景
  p3Gray.style.display = "none";

  // 为每个按钮添加点击事件
  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Jump to page-3 section
      document.querySelector(".page-3").scrollIntoView({
        behavior: "smooth",
      });
      // 显示灰色背景
      p3Gray.style.display = "block";

      const buttonValue = button.value; // 读取button的value值

      // Get the corresponding data based on button value
      const data = detailsData[buttonValue];

      // Clear existing content
      const todayCarousel = document.querySelector(".today .carousel");
      const pastCarousel = document.querySelector(".past .carousel");
      todayCarousel.innerHTML = "";
      pastCarousel.innerHTML = "";

      // Render today's items 10 times
      for (let i = 0; i < 10; i++) {
        data.today.forEach((item) => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const span = document.createElement("span");
          img.src = item.image;
          img.alt = item.title;
          span.className = "name";
          span.textContent = item.title;
          li.appendChild(img);
          li.appendChild(span);
          todayCarousel.appendChild(li);
        });
      }

      // Render past items 10 times
      for (let i = 0; i < 10; i++) {
        data.past.forEach((item) => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const span = document.createElement("span");
          img.src = item.image;
          img.alt = item.title;
          span.className = "name";
          span.textContent = item.title;
          li.appendChild(img);
          li.appendChild(span);
          pastCarousel.appendChild(li);
        });
      }

      // 显示详情区域
      const today = document.querySelector(".details .today");
      const past = document.querySelector(".details .past");
      const closeBT = document.querySelector(".details .close-bt");
      details.style.display = "block";
      // 从右出场
      today.style.transform = "translateX(100%)";
      today.style.transition = "transform 2s ease-out";
      setTimeout(() => {
        today.style.transform = "translateX(0)";
      }, 0);
      // 关闭按钮也从右出场
      closeBT.style.transform = "translateX(100%)";
      closeBT.style.transition = "transform 2s ease-out";
      setTimeout(() => {
        closeBT.style.transform = "translateX(0)";
      }, 0);
      // 从左出场
      past.style.transform = "translateX(-100%)";
      past.style.transition = "transform 2s ease-out";
      setTimeout(() => {
        past.style.transform = "translateX(0)";
      }, 0);

      // 隐藏所有查看按钮
      viewButtons.forEach((btn) => (btn.style.display = "none"));
    });
  });
  // 关闭按钮点击事件
  const closeButton = document.querySelector(".details .close-bt");
  closeButton.addEventListener("click", () => {
    details.style.display = "none";
    p3Gray.style.display = "none";
    viewButtons.forEach((btn) => (btn.style.display = "block"));
  });
});
// 政策树
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
btn1.addEventListener("click", () => {
  window.location.href = "./policytree-1.html";
});
btn2.addEventListener("click", () => {
  window.location.href = "./policytree-2.html";
});
btn3.addEventListener("click", () => {
  window.location.href = "./policytree-3.html";
});
btn4.addEventListener("click", () => {
  window.location.href = "./policytree-4.html";
});
// 三卡片页面
document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".page-7 .photos .photo");
  let currentIndex = 0;
  // 点击时可跳转页面
  photos.forEach((photo, index) => {
    photo.addEventListener("click", () => {
      // 跳转到对应的页面
      switch (index) {
        case 0:
          window.location.href = "./story-detail.html";
          localStorage.setItem('story-currentIndex', '0');
          break;
        case 1:
          window.location.href = "./story-detail.html";
          localStorage.setItem('story-currentIndex', '1');
          break;
        case 2:
          window.location.href = "./story-detail.html";
          localStorage.setItem('story-currentIndex', '2');
          break;
      }
    });
  });


  function cyclePhotos() {
    // Remove active from all photos
    photos.forEach((photo) => photo.classList.remove("active"));

    // Add active to current photo
    photos[currentIndex].classList.add("active");

    // 根据索性渲染intro
    const title = document.querySelector(".target");
    const subtitle = document.querySelector(".subtitle");
    const titles = ["陈潜峰—国内和平文化推广者", "潍坊橄榄枝志愿服务队", "吉叶墨—中拉民间和平交流使者"];
    const subtitles = [
      "多年奔走多国开展民间文化沙龙，用美术创作传递包容共处的理念，被地方侨联专题报道表彰，以点滴耕耘浇灌跨国友好，契合静待繁花盛放的意境。 ",
      "汇聚中国、巴基斯坦、肯尼亚、泰国等11国普通志愿者，常年开展非遗互鉴、跨国青少年研学、公益科普活动，全年数百场文化交流志愿活动，面向海内外普及包容共处的和平理念",
      "秘鲁知名翻译家、汉学家。大半辈子扎根中国，翻译上百部中国典籍、拍摄中华文化纪录片，常年往返中秘两国讲学，用书本文字打通拉美与中国的文明纽带，是民间友好和平代表",
    ];
    function updateContent() {
      title.textContent = titles[currentIndex];
      subtitle.textContent = subtitles[currentIndex];
    }
    updateContent();
    // 更新索引并循环
    currentIndex = (currentIndex + 1) % photos.length;

    setTimeout(cyclePhotos, 3000);
  }

  // Start the cycle
  cyclePhotos();
});
