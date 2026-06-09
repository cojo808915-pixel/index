window.addEventListener("load", () => {
  const scrollArea = document.querySelector(".scroll-area");

  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      scrollArea.scrollLeft += e.deltaY;
    },
    { passive: false }
  );
});
window.addEventListener("load", () => {
  const storyIndex = localStorage.getItem("story-currentIndex");
  console.log(storyIndex);
  if (storyIndex !== null) {
    const story = stories[storyIndex];
    console.log(story);
    document.querySelector(".t1").textContent = story.t1;
    document.querySelector(".t2").textContent = story.t2;

    const scrollContent = document.querySelector(".scroll-content");

    story.content.forEach((item) => {
      scrollContent.innerHTML += `
                <div class="node">
                    <p>${item.p}</p>
                    <img src="${item.img}" alt="">
                </div>`;
    });
  }
});


const stories = [
  {
    t1: "陈潜峰",
    t2: "国内和平文化推广者 湖北潜江的著名企业家",
    content: [
      {
        p: "创办天下和平美术馆，深耕跨国文化友好事业。",
        img: "../assets/imgs/story-detail/0/s01.png",
      },
      {
        p: "相关事迹获地方侨联表彰报道，以艺术为纽带凝聚跨国温情，默默耕耘促成四海相融，呼应静待枝丫盛放、繁花满园的美好愿景。",
        img: "../assets/imgs/story-detail/0/s02.png",
      },
    ],
  },
  {
    t1: "潍坊橄榄枝志愿队",
    t2: "多国志愿者组成民间团体",
    content: [
      {
        p: "潍坊橄榄枝志愿服务队汇聚十一国志愿者，扎根国际和平城市，以跨国志愿力量搭建民间友好阵地。",
        img: "../assets/imgs/story-detail/1/s01.png",
      },
      {
        p: "团队深耕文化交流，落地研学、非遗展览、科普等数百场活动，促成数百名中外青少年结对互动，依托线上平台拓宽文明往来渠道。",
        img: "../assets/imgs/story-detail/1/s02.png",
      },
      {
        p: "队伍持续传播和平包容理念，打造长效合作项目，获评市级优秀志愿品牌，用平凡志愿服务拉近海内外民心。",
        img: "../assets/imgs/story-detail/1/s03.png",
      },
    ],
  },
  {
    t1: "吉叶墨",
    t2: "秘鲁汉学家，中拉民间和平交流使者",
    content: [
      {
        p: "旅居中国十余年的秘鲁汉学家吉叶墨，深耕中华文化研究，因在中拉文化交流上的突出贡献，获外事场合公开赞誉。",
        img: "../assets/imgs/story-detail/2/s01.png",
      },
      {
        p: "他潜心文字译介，历时九年翻译唐诗，编撰二十余部中文外文著作与西语百科，以译本把中华文脉送往拉美各地。",
        img: "../assets/imgs/story-detail/2/s02.png",
      },
      {
        p: "跨界参演国产影视作品，常年在秘鲁高校开课讲学，凭借毕生奔走，化作联结中秘民心、融通两国文明的友好桥梁。",
        img: "../assets/imgs/story-detail/2/s03.png",
      },
    ],
  },
];
