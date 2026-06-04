const footerText = document.querySelectorAll('footer > span > p');
const scrollItems = document.querySelectorAll('footer > span');
const scrollBar = document.querySelector('.scroll-bar');
const moveSvg = document.querySelector('.move-svg');
const footer = document.querySelector('footer');

footer.addEventListener(
  'wheel',
  function (event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;

    // 计算scrollBar的位置
    // const scrollPercentage =
    //   this.scrollLeft / (this.scrollWidth - this.clientWidth);
    // scrollBar.style.transform = `translateX(${scrollPercentage * 133}%)`;
  },
  { passive: false }
);

document.addEventListener('DOMContentLoaded', () => {
  const plowDetail = document.getElementById('plowDetail');
  const footerItems = document.querySelectorAll('footer span');

  // 初始化显示第一个项目
  updatePlowDetail('银板和约');
  updateFooterTextColor('银板和约');

  // 为每个footer项添加点击事件
  footerItems.forEach((item) => {
    item.addEventListener('click', () => {
      const title = item.querySelector('p').textContent;
      updatePlowDetail(title);
      updateFooterTextColor(title);
    });
  });

  function updatePlowDetail(title) {
    const data = plowData[title];
    if (data) {
      plowDetail.setAttribute('title', data.title);
      plowDetail.setAttribute('poem', data.poem);
      plowDetail.setAttribute('description', data.description);
      plowDetail.setAttribute('image', data.image);
    }
  }

  function updateFooterTextColor(activeTitle) {
    footerText.forEach((text) => {
      if (text.textContent === activeTitle) {
        text.style.color = '#137C41'; // 选中项的颜色
      } else {
        text.style.color = '#6b401d'; // 未选中项的颜色
      }
    });
  }
});
const plowData = {
  银板和约: {
    title: '银板和约',
    poem: `公元前1258年，古埃及与赫梯双方通过外
    交结束长期对立，签署了历史上已知最早的和平协议，
    条约被刻于银板之上，内容包括互不侵扰、相互援助等条款。
    银板副本陈列于伊斯坦布尔考古博物馆，
    是见证早期人类以对话解决争端的珍贵文物。`,
    description: '开创了以书面契约规范国际关系的先河，为后世协议提供了最古老的范本。',
    image: '../assets/imgs/origin/plow-detail/01.png',
  },
  罗马和平时期: {
    title: '罗马和平时期',
    poem: `自公元前27年起，环地中海区域进入长达
    约两百年的繁荣时代，统一的治理体系覆盖了
    从不列颠到北非的广大区域，商贸活跃、文化交流频繁。`,
    description: '展示了统一治理下跨区域合作的可能性，为后世超大规模社会内部秩序构建提供了范例。',
    image: '../assets/imgs/origin/plow-detail/02.png',
  },
  丝绸之路的开辟与繁荣: {
    title: '丝绸之路的开辟与繁荣',
    poem: `两千多年前，横贯亚欧的通道逐步形成，
    以商贸往来与文化对话连接广袤大地。
    张骞出使、郑和远航，留下友好交往佳话，
    实现了跨区域的互通与互鉴。`,
    description: '展示了以经济往来与文化对话实现跨区域和谐共生的可能性，为后世互联互通提供了宝贵参照。',
    image: '../assets/imgs/origin/plow-detail/03.png',
  },
  乌尔纳姆法典: {
    title: '乌尔纳姆法典',
    poem: `约公元前2100年，
    两河流域颁布了已知最早的成文规范汇编，
    涵盖商业交易、婚姻家庭等内容，
    体现了通过法治维护社会有序运转的理念。`,
    description: '为早期社会确立了行为准则，标志着人类通过成文规则构建安宁的自觉意识开始萌发。',
    image: '../assets/imgs/origin/plow-detail/04.png',
  },
  威斯特伐利亚和约: {
    title: '威斯特伐利亚和约',
    poem: `1648年签订的这一系列协定确立了平等与主权原则，
    标志着国际关系从单一中心走向多元协商，
    开创了以国际会议和条约解决事务的现代模式。
    从此，各方通过对话协调诉求、以规则维护安宁。`,
    description: '被公认为近代世界体系格局开始的标志，奠定了现代国际规则治理的基础。',
    image: '../assets/imgs/origin/plow-detail/05.png',
  },
  欧洲协调机制: {
    title: '欧洲协调机制',
    poem: `1815年维也纳会议后，
    主要各方通过定期会晤协商处理重大事务，
    开创了大国协调机制，以对话方式维护区域稳定。`,
    description: '建立了以多边对话代替单一力量主导的协调模式，为后续国际组织提供了早期范本。',
    image: '../assets/imgs/origin/plow-detail/06.png',
  },
  海牙和平会议: {
    title: '海牙和平会议',
    poem: `1899年和1907年，
    来自多方的代表在海牙举行会议，
    首次明确“和平解决国际争端”原则，
    并设立了常设仲裁法院，
    为国际争端提供了制度化的对话平台。`,
    description: '标志着国际争端解决从临时安排走向制度化、法治化的新阶段。',
    image: '../assets/imgs/origin/plow-detail/07.png',
  },
  国际联盟: {
    title: '国际联盟',
    poem: `1920年成立的国际联盟是人类第一个
    以维护世界安宁为宗旨的普遍性组织，
    倡导通过集体协商解决事务，
    为后世积累了宝贵的制度经验。`,
    description: '开启了以普遍性国际组织维护安宁的探索，为联合国的建立奠定了制度基础。',
    image: '../assets/imgs/origin/plow-detail/08.png',
  },
  非战公约: {
    title: '非战公约',
    poem: `1928年，15方代表在巴黎共同签署了
    这一具有开创性的国际公约，首次在全球范围内
    公开宣布放弃以某种方式作为推行政策的工具，
    截至1933年共有63方加入。
    它以庄严的法律形式宣告了对话优于对抗的时代精神。`,
    description: '作为国际规则史上的重要转折点，为后续国际法治建设提供了方向指引。',
    image: '../assets/imgs/origin/plow-detail/09.png',
  },
  甘地非暴力不合作运动: {
    title: '甘地非暴力不合作运动',
    poem: `印度倡导者甘地开创了以非暴力方式推动社会变革的先河，
    通过和平表达诉求影响深远。
    其精神启发了全球众多民权与和平运动。`,
    description: '为非暴力理念赋予了系统的实践范式，成为世界范围内和平变革的重要思想资源。',
    image: '../assets/imgs/origin/plow-detail/10.png',
  },
  联合国宪章: {
    title: '联合国宪章',
    poem: `1945年，多方代表在旧金山共同签署了这份奠定战后国际秩序的纲领性文件。
    宪章开篇宣示了“欲免后世再遭战祸”的坚定信念，
    确立了以集体对话维护共同利益的核心框架。`,
    description: '确立了以联合国为核心的集体行动框架，为世界范围的共同发展提供了制度保障。',
    image: '../assets/imgs/origin/plow-detail/11.png',
  },
  联合国正式成立: {
    title: '联合国正式成立',
    poem: `1945年10月24日，联合国正式成立，
    从最初的51个创始方发展到如今的193个成员，
    成为最具普遍性的全球组织。
    它致力于维护国际友好关系、促进国际合作、协调各方行动。
    联合国在预防性外交、发展援助等领域开展了大量实践。`,
    description: '和平从区域事务上升为全人类共同参与的系统性事业，奠定了现代全球治理的基石。',
    image: '../assets/imgs/origin/plow-detail/12.png',
  },
  国际红十字运动: {
    title: '国际红十字运动',
    poem: `红十字国际委员会自1863年成立以来，
    始终致力于为受困者提供生命救助与人文关怀，
    先后三次荣获诺贝尔和平奖，创下历史之最。
    它起草的《日内瓦公约》成为国际人道法的重要基石。`,
    description: '将人道关怀制度化、体系化，为全球受困者提供了坚实的生命救助与人文支撑。',
    image: '../assets/imgs/origin/plow-detail/13.png',
  },
  联合国维和行动: {
    title: '联合国维和行动',
    poem: `自1948年起，联合国开始部署维和特派团，
    通过中立观察和协调行动，帮助各方缓和局势、恢复安宁。
    截至目前，已有多方参与行动，协助从紧张局势走向安定重建。
    1988年，联合国维和部队获诺贝尔和平奖。`,
    description: '为国际社会以集体行动缓解紧张局势、维护安宁提供了可操作的实践范本。',
    image: '../assets/imgs/origin/plow-detail/14.png',
  },
  马丁·路德·金领导的民权运动: {
    title: '马丁·路德·金领导的民权运动',
    poem: `受非暴力理念启发，美国民权运动领袖
    马丁·路德·金通过和平方式推动社会变革，
    其倡导直接影响了《民权法案》的通过，
    改变了社会风貌。他的努力推动了
    平等与尊重理念的广泛传播。`,
    description: '以非暴力方式推动制度变革的成功典范，展现了和平理念改变社会的现实力量。',
    image: '../assets/imgs/origin/plow-detail/15.png',
  },
  奥斯陆协议: {
    title: '奥斯陆协议',
    poem: `1993年，在多方共同见证下，
    双方（巴解组织、以色列政府）
    领导人在白宫历史性地握手，
    签署了旨在推动区域安宁的框架性协议，
    为后续对话铺平了道路。
    这一时刻被视为互信重建的重要象征。`,
    description: '以对话重建互信的典范，为复杂问题的协商解决提供了实践参照。',
    image: '../assets/imgs/origin/plow-detail/16.png',
  },
  蔑视不公正法运动: {
    title: '蔑视不公正法运动',
    poem: `在各方共同努力下，南非废除了种族隔离制度。
    该运动通过公开抵抗形式对抗南非国家党推行的
    以"种族隔离"为名的系统性种族歧视政策。
    运动成员通过挑战当局的种族限制措施。
    1994年新南非诞生，标志着这一历史进程的完成。`,
    description: '以包容与和解实现社会转型的经典案例，为世界范围内的和平过渡提供了借鉴。',
    image: '../assets/imgs/origin/plow-detail/17.png',
  },
  戴维营协议: {
    title: '戴维营协议',
    poem: `1978年，在美国推动下，
    埃及和以色列双方签署了具有里程碑意义的和平框架协议，
    为推动区域和平进程迈出关键一步，随后建立了正式关系。
    它为后续区域对话开辟了道路。`,
    description: '为推动区域安宁提供了重要动力，成为后续和平进程的重要参照。',
    image: '../assets/imgs/origin/plow-detail/18.png',
  },
  国际和平日的设立: {
    title: '国际和平日的设立',
    poem: `2001年9月7日，联合国大会通过决议，
    决定自2002年起，国际和平日为9月21日。
    决议中提到：
    “宣布此后，国际和平日应成为全球停火和非暴力日”，
    并邀请所有国家和人民在这一天停止敌对行动。`,
    description: '将和平理念融入全球公共生活，成为跨越文化差异、凝聚共同价值的重要纽带。',
    image: '../assets/imgs/origin/plow-detail/19.png',
  },
  世界粮食计划署获诺贝尔和平奖: {
    title: '世界粮食计划署获诺贝尔和平奖',
    poem: `2020年，世界粮食计划署因其在
    消除饥饿、改善和平条件方面
    做出的卓越贡献荣获诺贝尔和平奖。
    该组织每年为上亿人提供粮食援助，
    以食物守护安宁。`,
    description: '将消除饥饿与维护和平深度联结，拓宽了和平内涵的认知边界。',
    image: '../assets/imgs/origin/plow-detail/20.png',
  },
  联合国全球锲约的发起: {
    title: '联合国全球锲约的发起',
    poem: `1999年首次提出，
    2000年在联合国正式启动，
    号召各方共同遵守人权、环境等领域的十项基本原则，
    成为全球规模最大的企业可持续发展倡议。`,
    description: '以自愿遵守的原则框架替代强制约束，开创了多主体合作的新路径，为人类共同发展奠定了价值共识基础。',
    image: '../assets/imgs/origin/plow-detail/21.png',
  },
};
