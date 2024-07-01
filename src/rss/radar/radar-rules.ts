export const defaultRules = {
  '81.cn': {
    _name: '中国军网',
    '81rc': [
      {
        title: '中国人民解放军专业技术人才网',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/:category'],
        target:
          '/81params=>{const category=params.category;return`/81/81rc/${category?`/${category}`:""}`}',
      },
    ],
  },
  '163.com': {
    _name: '网易公开课',
    ds: [
      {
        title: '用户发帖',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/user/:id'],
        target: '/163/ds/:id',
      },
    ],
    '3g': [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/touch/exclusive/sub/:id'],
        target: '/163/exclusive/:id?',
      },
    ],
    renjian: [
      {
        title: '人间',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category', '/'],
        target: '/163/renjian/:category?',
      },
    ],
    'wp.m': [
      {
        title: '今日关注',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/163/html/newsapp/todayFocus/index.html', '/'],
        target: '/163/today',
      },
    ],
    'vip.open': [
      {
        title: '精品课程',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/'],
        target: '/163/open/vip',
      },
    ],
  },
  '12306.cn': {
    _name: '12306',
    www: [
      {
        title: '最新动态',
        docs: 'https://docs.rsshub.app/routes/travel',
        source: ['/', '/mormhweb/1/:id/index_fl.html'],
        target: '/12306/zxdt/:id',
      },
    ],
  },
  '12371.cn': {
    _name: '共产党员网',
    www: [
      {
        title: '最新发布',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/:category'],
        target: '/12371/:category?',
      },
    ],
  },
  '005.tv': {
    _name: '幻之羁绊动漫网',
    '.': [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:category'],
        target:
          '/005params=>{const category=params.category;return`/005${category?`/${category}`:""}`}',
      },
      {
        title: '二次元资讯',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/zx/'],
        target: '/005/005/zx',
      },
      {
        title: '慢慢说',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/zwh/'],
        target: '/005/005/zwh',
      },
      {
        title: '道听途说',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/dtts/'],
        target: '/005/005/dtts',
      },
      {
        title: '展会资讯',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/zh/'],
        target: '/005/005/zh',
      },
    ],
  },
  'jmcomic.group': {
    _name: '禁漫天堂',
    '.': [
      {
        title: '专辑',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/18comic/album/:id',
      },
      {
        title: '文庫',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/18comic/blogs/:category?',
      },
      {
        title: '成人 A 漫',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/18comic/:category?/:time?/:order?/:keyword?',
      },
      {
        title: '搜索',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/18comic/:category?/:time?/:order?/:keyword?',
      },
    ],
  },
  '1lou.me': {
    _name: 'BT 之家 1LOU 站',
    '.': [
      {
        title: '通用',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/:params'],
        target:
          '/1lou(_,url)=>{url=new URL(url);return`/1lou${url.href.replace(rootUrl,"")}`}',
      },
    ],
  },
  '1point3acres.com': {
    _name: '一亩三分地',
    blog: [
      {
        title: '博客',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category'],
        target: '/1point3acres/blog/:category?',
      },
    ],
    instant: [
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/section/:id', '/'],
        target: '/1point3acres/category/:id?/:type?/:order?',
      },
      {
        title: '分区',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/section/:id', '/'],
        target: '/1point3acres/section/:id?/:type?/:order?',
      },
      {
        title: '用户回帖',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/profile/:id', '/'],
        target: '/1point3acres/user/:id/posts',
      },
      {
        title: '用户主题帖',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/profile/:id', '/'],
        target: '/1point3acres/user/:id/threads',
      },
    ],
    offer: [
      {
        title: '录取结果',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/1point3acres/offer',
      },
    ],
  },
  '36kr.com': {
    _name: '36kr',
    '.': [
      {
        title: '资讯热榜',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/hot-list/:category', '/'],
        target: '/36kr/hot-list/:category',
      },
    ],
  },
  '3dmgame.com': {
    _name: '3DMGame',
    '.': [
      {
        title: '游戏资讯',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/games/:name/:type'],
        target: '/3dmgame/games/:name/:type?',
      },
      {
        title: '新闻中心',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news/:category', '/news'],
        target: '/3dmgame/news/:category?',
      },
    ],
  },
  '423down.com': {
    _name: '423Down',
    '.': [
      {
        title: '423Down',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/:category', '/'],
        target:
          '/423downparams=>{const category=params.category;return`/423down${category?`/${category}`:""}`}',
      },
    ],
    www: [
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/'],
        target: '/423down/',
      },
      {
        title: '安卓软件',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/apk'],
        target: '/423down/apk',
      },
      {
        title: '电脑软件 - 原创软件',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/zd423'],
        target: '/423down/zd423',
      },
      {
        title: '电脑软件 - 媒体播放',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/multimedia'],
        target: '/423down/multimedia',
      },
      {
        title: '电脑软件 - 网页浏览',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/browser'],
        target: '/423down/browser',
      },
      {
        title: '电脑软件 - 图形图像',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/image'],
        target: '/423down/image',
      },
      {
        title: '电脑软件 - 聊天软件',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/im'],
        target: '/423down/im',
      },
      {
        title: '电脑软件 - 办公软件',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/work'],
        target: '/423down/work',
      },
      {
        title: '电脑软件 - 上传下载',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/down'],
        target: '/423down/down',
      },
      {
        title: '电脑软件 - 实用软件',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/softtool'],
        target: '/423down/softtool',
      },
      {
        title: '电脑软件 - 系统辅助',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/systemsoft'],
        target: '/423down/systemsoft',
      },
      {
        title: '电脑软件 - 系统必备',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/systemplus'],
        target: '/423down/systemplus',
      },
      {
        title: '电脑软件 - 安全软件',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/security'],
        target: '/423down/security',
      },
      {
        title: '电脑软件 - 补丁相关',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/patch'],
        target: '/423down/patch',
      },
      {
        title: '电脑软件 - 硬件相关',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/hardware'],
        target: '/423down/hardware',
      },
      {
        title: '操作系统 - Windows 11',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/win11'],
        target: '/423down/win11',
      },
      {
        title: '操作系统 - Windows 10',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/win10'],
        target: '/423down/win10',
      },
      {
        title: '操作系统 - Windows 7',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/win7'],
        target: '/423down/win7',
      },
      {
        title: '操作系统 - Windows XP',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/win7/winxp'],
        target: '/423down/win7/winxp',
      },
      {
        title: '操作系统 - WinPE',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/pe-system'],
        target: '/423down/pe-system',
      },
    ],
  },
  '4gamers.com.tw': {
    _name: '4Gamers',
    www: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news', '/'],
        target: '/4gamers/',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news', '/'],
        target: '/4gamers/category/:category',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news/tag/:tag'],
        target: '/4gamers/tag/:tag',
      },
      {
        title: '主題',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news/option-cfg/:topic'],
        target: '/4gamers/topic/:topic',
      },
    ],
  },
  '50forum.org.cn': {
    _name: '经济 50 人论坛',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/home/article/index/category/zhuanjia.html', '/'],
        target: '/50forum/',
      },
    ],
  },
  '51cto.com': {
    _name: '51CTO',
    '.': [
      {
        title: '推荐',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/51cto/index/recommend',
      },
    ],
  },
  '52hrtt.com': {
    _name: '52hrtt 华人头条',
    '.': [
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/global/n/w/symposium/:id'],
        target: '/52hrtt/symposium/:id',
      },
    ],
  },
  '5eplay.com': {
    _name: '5EPLAY',
    csgo: [
      {
        title: '新闻列表',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/', '/article'],
        target: '/5eplay/article',
      },
    ],
  },
  '69shuba.pro': {
    _name: '69书吧',
    www: [
      {
        title: '章节',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/book/:id.htm'],
        target: '/69shu/article/:id',
      },
    ],
  },
  '6parkbbs.com': {
    _name: '留园网',
    club: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:id/index.php', '/'],
        target: '/6park/:id?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:id/index.php', '/'],
        target: '/6park/:id?',
      },
    ],
  },
  'hao6v.com': {
    _name: '6v 电影',
    '.': [
      {
        title: '最新电影',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/', '/gvod/zx.html'],
        target: '/6v123/latestMovies',
      },
      {
        title: '最新电视剧',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/', '/gvod/dsj.html'],
        target: '/6v123/latestTVSeries',
      },
    ],
  },
  '8kcosplay.com': {
    _name: '8KCosplay',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/8kcos/cat/:cat{.+}?',
      },
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/8kcos/',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/tag/:tag'],
        target: '/8kcos/tag/:tag',
      },
    ],
  },
  '91porn.com': {
    _name: '91porn',
    '.': [
      {
        title: 'Author',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/index.php'],
        target: '/91porn/author/:uid/:lang?',
      },
      {
        title: 'Hot Video Today',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/index.php'],
        target: '/91porn/:lang?',
      },
    ],
  },
  '95mm.org': {
    _name: 'MM 范',
    '.': [
      {
        title: '集合',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/95mm/category/:category',
      },
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/95mm/tab/:tab?',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/95mm/tag/:tag',
      },
    ],
  },
  'a9vg.com': {
    _name: 'A9VG 电玩部落',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/list/news', '/'],
        target: '/a9vg/',
      },
    ],
  },
  'aamacau.com': {
    _name: '論盡媒體 AllAboutMacau Media',
    '.': [
      {
        title: '话题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/aamacau/:category?/:id?',
      },
    ],
  },
  'abc.net.au': {
    _name: 'ABC News',
    '.': [
      {
        title: 'Channel & Topic',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category*'],
        target: '/abc/:category',
      },
    ],
  },
  'abmedia.io': {
    _name: '链新闻 ABMedia',
    www: [
      {
        title: '类别',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/:catehory'],
        target: '/abmedia/:category',
      },
      {
        title: '首页最新新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/abmedia/index',
      },
    ],
  },
  'ahhhhfs.com': {
    _name: 'A 姐分享',
    '.': [
      {
        title: '存档列表',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/abskoop/',
      },
      {
        title: '存档列表 - NSFW',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/abskoop/nsfw',
      },
    ],
  },
  'academia.edu': {
    _name: 'Academia',
    '.': [
      {
        title: 'interest',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/Documents/in/:interest'],
        target: '/academia/topic/:interest',
      },
    ],
  },
  'accessbriefing.com': {
    _name: 'Access Briefing',
    '.': [
      {
        title: 'Articles',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category*'],
        target: '/accessbriefing/:category',
      },
      {
        title: 'Latest - News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest/news'],
        target: '/accessbriefing/latest/news',
      },
      {
        title: 'Latest - Products & Technology',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest/products-and-technology'],
        target: '/accessbriefing/latest/products-and-technology',
      },
      {
        title: 'Latest - Rental News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest/rental-news'],
        target: '/accessbriefing/latest/rental-news',
      },
      {
        title: 'Latest - People',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest/people'],
        target: '/accessbriefing/latest/people',
      },
      {
        title: 'Latest - Regualtions & Safety',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest/regualtions-safety'],
        target: '/accessbriefing/latest/regualtions-safety',
      },
      {
        title: 'Latest - Finance',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest/finance'],
        target: '/accessbriefing/latest/finance',
      },
      {
        title: 'Latest - Sustainability',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest/sustainability'],
        target: '/accessbriefing/latest/sustainability',
      },
      {
        title: 'Insight - Interviews',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/insight/interviews'],
        target: '/accessbriefing/insight/interviews',
      },
      {
        title: 'Insight - Longer reads',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/insight/longer-reads'],
        target: '/accessbriefing/insight/longer-reads',
      },
      {
        title: 'Insight - Videos and podcasts',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/insight/videos-and-podcasts'],
        target: '/accessbriefing/insight/videos-and-podcasts',
      },
    ],
  },
  'acfun.cn': {
    _name: 'AcFun',
    www: [
      {
        title: '用户投稿',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/u/:id'],
        target: '/acfun/user/video/:id',
      },
    ],
  },
  'acg17.com': {
    _name: 'ACG17',
    '.': [
      {
        title: '全部文章',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/post'],
        target: '/acg17/post/all',
      },
    ],
  },
  'acs.org': {
    _name: 'Unknown',
    pubs: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/journal/:id', '/'],
        target: '/acs/journal/:id',
      },
    ],
  },
  'aeaweb.org': {
    _name: 'American Economic Association',
    '.': [
      {
        title: 'Journal',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journals/:id', '/'],
        target: '/aeaweb/:id',
      },
    ],
  },
  'aeon.co': {
    _name: 'AEON',
    aeon: [
      {
        title: 'Categories',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category'],
        target: '/aeon/category/:category',
      },
      {
        title: 'Types',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:type'],
        target: '/aeon/:type',
      },
    ],
  },
  'agemys.org': {
    _name: 'AGE 动漫',
    '.': [
      {
        title: '番剧详情',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/detail/:id'],
        target: '/agefans/detail/:id',
      },
      {
        title: '最近更新',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/update', '/'],
        target: '/agefans/update',
      },
    ],
  },
  'aotter.net': {
    _name: '电獭少女',
    agirls: [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/posts/:category'],
        target: '/agirls/:category',
      },
      {
        title: '当前精选主题列表',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/', '/topic'],
        target: '/agirls/topic_list',
      },
      {
        title: '精选主题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topic/:topic'],
        target: '/agirls/topic/:topic',
      },
    ],
  },
  'gitlab.io': {
    _name: 'AG⓪RA',
    agora0: [
      {
        title: '零博客',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog/:category', '/'],
        target: '/agora0/:category',
      },
    ],
  },
  'github.io': {
    _name: 'AG⓪RA',
    agorahub: [
      {
        title: '共和報',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/pen0'],
        target: '/agora0/pen0',
      },
    ],
    njuferret: [
      {
        title: 'Blogs',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/njuferret/blog',
      },
    ],
  },
  'ahjzu.edu.cn': {
    _name: '安徽建筑大学',
    news: [
      {
        title: '通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/20/list.htm'],
        target: '/ahjzu/news',
      },
    ],
  },
  'ainvest.com': {
    _name: 'AInvest',
    '.': [
      {
        title: 'Latest Article',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/news'],
        target: '/ainvest/article',
      },
      {
        title: 'Latest News',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/news'],
        target: '/ainvest/news',
      },
    ],
  },
  'aip.org': {
    _name: 'American Institute of Physics',
    pubs: [
      {
        title: 'Journal',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/:pub/:jrn'],
        target: '/aip/:pub/:jrn',
      },
    ],
  },
  'airchina.com.cn': {
    _name: '中国国际航空公司',
    www: [
      {
        title: '服务公告',
        docs: 'https://docs.rsshub.app/routes/travel',
        source: ['/'],
        target: '/airchina/announcement',
      },
    ],
  },
  'alipan.com': {
    _name: '阿里云盘',
    www: [
      {
        title: '文件列表',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/s/:share_id/folder/:parent_file_id', '/s/:share_id'],
        target: '/alipan/files/:share_id/:parent_file_id?',
      },
    ],
  },
  'aliresearch.com': {
    _name: '阿里研究院',
    '.': [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/cn/information', '/'],
        target: '/aliresearch/information',
      },
    ],
  },
  'alistapart.com': {
    _name: 'A List Apart',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/articles/'],
        target: '/alistapart/',
      },
      {
        title: 'Topics',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blog/topic/:topic'],
        target: '/alistapart/:topic',
      },
    ],
  },
  'taobao.org': {
    _name: '阿里云',
    mysql: [
      {
        title: '数据库内核月报',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/monthly', '/'],
        target: '/aliyun/database_month',
      },
    ],
  },
  'aliyun.com': {
    _name: '阿里云',
    developer: [
      {
        title: '开发者社区 - 主题',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/group/:type'],
        target: '/aliyun/developer/group/:type',
      },
    ],
  },
  'ally.net.cn': {
    _name: '艾莱资讯',
    rail: [
      {
        title: '世界轨道交通资讯网',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/', '/html/:category?/:topic?'],
        target: '/ally/rail/:category?/:topic?',
      },
    ],
  },
  'alternativeto.net': {
    _name: 'AlternativeTo',
    www: [
      {
        title: 'Platform Software',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/platform/:name'],
        target: '/alternativeto/platform/:name',
      },
      {
        title: 'Software Alternatives',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/software/:name'],
        target: '/alternativeto/software/:name',
      },
    ],
  },
  'android.com': {
    _name: 'Android',
    developer: [
      {
        title: 'SDK Platform Tools release notes',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/studio/releases/platform-tools', '/'],
        target: '/android/platform-tools-releases',
      },
    ],
  },
  'annualreviews.org': {
    _name: 'Annual Reviews',
    '.': [
      {
        title: 'Journal',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journal/:id', '/'],
        target: '/annualreviews/:id',
      },
    ],
  },
  'apnews.com': {
    _name: 'AP News',
    '.': [
      {
        title: 'RSS',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:rss'],
        target: '/apnews/rss/:rss',
      },
      {
        title: 'Topics',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/hub/:topic'],
        target: '/apnews/topics/:topic',
      },
    ],
  },
  'appcenter.ms': {
    _name: 'App Center',
    install: [
      {
        title: 'Release',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: [
          '/users/:user/apps/:app/distribution_groups/:distribution_group',
          '/orgs/:user/apps/:app/distribution_groups/:distribution_group',
        ],
        target: '/app-center/release/:user/:app/:distribution_group',
      },
    ],
  },
  'apple.com': {
    _name: 'Apple',
    apps: [
      {
        title: 'App Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/:country/app/:appSlug/:id', '/:country/app/:id'],
        target: '/apple/apps/update/:country/:id',
      },
      {
        title: 'Price Drop',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/'],
        target: '/appstore/price/:country/:type/:id',
      },
    ],
    support: [
      {
        title: 'Exchange and Repair Extension Programs',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:country/service-programs'],
        target: '/apple/exchange_repair/:country',
      },
    ],
    podcasts: [
      {
        title: '播客',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/cn/podcast/:id'],
        target: '/apple/podcast/:id',
      },
    ],
  },
  'appleinsider.com': {
    _name: 'AppleInsider',
    '.': [
      {
        title: 'Category',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category', '/'],
        target: '/appleinsider/:category',
      },
    ],
  },
  'app.so': {
    _name: 'App Store/Mac App Store',
    '.': [
      {
        title: '每日精品限免 / 促销应用（鲜面连线 by AppSo）',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/xianmian'],
        target: '/appstore/xianmian',
      },
    ],
  },
  'aqicn.org': {
    _name: '空气质量',
    '.': [
      {
        title: '实时 AQI',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/aqicn/:city/:pollution?',
      },
    ],
  },
  'arcteryx.com': {
    _name: 'Arcteryx',
    '.': [
      {
        title: 'New Arrivals',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/:country/en/c/:gender/new-arrivals'],
        target: '/arcteryx/new-arrivals/:country/:gender',
      },
    ],
    outlet: [
      {
        title: 'Outlet',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/:country/en/c/:gender'],
        target: '/arcteryx/outlet/:country/:gender',
      },
    ],
    regear: [
      {
        title: 'Regear New Arrivals',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/shop/new-arrivals', '/'],
        target: '/arcteryx/regear/new-arrivals',
      },
    ],
  },
  'artstation.com': {
    _name: 'ArtStation',
    www: [
      {
        title: 'Artist Profolio',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/:handle'],
        target: '/artstation/:handle',
      },
    ],
  },
  'asiantolick.com': {
    _name: 'Asian to lick',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/asiantolick/:category{.+}?',
      },
    ],
  },
  'asus.com.cn': {
    _name: 'ASUS',
    '.': [
      {
        title: 'BIOS',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/'],
        target: '/asus/bios/:model',
      },
    ],
  },
  'asus.com': {
    _name: 'ASUS',
    '.': [
      {
        title: 'GPU Tweak',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/campaign/GPU-Tweak-III/*', '/'],
        target: '/asus/gpu-tweak',
      },
    ],
  },
  'atptour.com': {
    _name: 'ATP Tour',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/atptour/news/:lang?',
      },
    ],
  },
  'baai.ac.cn': {
    _name: '北京智源人工智能研究院',
    hub: [
      {
        title: '智源社区 - 活动',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/events', '/'],
        target: '/baai/hub/events',
      },
    ],
    '.': [
      {
        title: '智源社区',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target:
          '/baai(_params,url)=>{const searchParams=new URL(url).searchParams;const tagId=searchParams.get("tag_id");const sort=searchParams.get("sort");const range=searchParams.get("time_range");return`/baai/hub${tagId?`/${tagId}`:""}${sort?`/${sort}`:""}${range?`/${range}`:""}`}',
      },
    ],
  },
  'backlinko.com': {
    _name: 'Backlinko',
    '.': [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog', '/'],
        target: '/backlinko/blog',
      },
    ],
  },
  'baidu.com': {
    _name: '百度',
    gushitong: [
      {
        title: '首页指数',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/baidu/gushitong/index',
      },
    ],
    tieba: [
      {
        title: '帖子动态',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/p/:id'],
        target: '/baidu/tieba/post/:id',
      },
      {
        title: '帖子动态',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/p/:id'],
        target: '/baidu/tieba/post/lz/:id',
      },
    ],
  },
  'bandcamp.com': {
    _name: 'Bandcamp',
    '.': [
      {
        title: 'Upcoming Live Streams',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/live_schedule'],
        target: '/bandcamp/live',
      },
      {
        title: 'Tag',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/tag/:tag'],
        target: '/bandcamp/tag/:tag',
      },
      {
        title: 'Weekly',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/bandcamp/weekly',
      },
    ],
  },
  'bangumi.moe': {
    _name: 'アニメ新番組',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/bangumi/moe',
      },
    ],
  },
  'bangumi.online': {
    _name: 'アニメ新番組',
    '.': [
      {
        title: '當季新番',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/bangumi/online',
      },
    ],
  },
  'bgm.tv': {
    _name: 'アニメ新番組',
    '.': [
      {
        title: '放送列表',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/calendar'],
        target: '/bangumi/tv/calendar/today',
      },
      {
        title: '小组话题的新回复',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/group/topic/:id'],
        target: '/bangumi/tv/topic/:id',
      },
      {
        title: '小组话题',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/group/:id'],
        target: '/bangumi/tv/group/:id',
      },
      {
        title: '成员关注榜',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:type'],
        target: '/bangumi/:type/followrank',
      },
      {
        title: '现实人物的新作品',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/person/:id'],
        target: '/bangumi/tv/person/:id',
      },
      {
        title: '条目的通用路由格式',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/subject/:id'],
        target: '/bangumi/tv/subject/:id',
      },
      {
        title: '用户日志',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/user/:id'],
        target: '/bangumi/tv/user/blog/:id',
      },
      {
        title: '用户想看',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/anime/list/:id/wish'],
        target: '/bangumi/tv/user/wish/:id',
      },
    ],
  },
  'baozimh.com': {
    _name: '包子漫画',
    www: [
      {
        title: '订阅漫画',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/comic/:name'],
        target: '/baozimh/comic/:name',
      },
    ],
  },
  'barronschina.com.cn': {
    _name: '巴伦周刊中文版',
    '.': [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/barronschina/:category?',
      },
    ],
  },
  'bbcnewslabs.co.uk': {
    _name: 'BBC News Labs',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/bbcnewslabs/news',
      },
    ],
  },
  'beijingprice.cn': {
    _name: '北京价格',
    '.': [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/:category'],
        target:
          '/beijingpriceparams=>{const category=params.category;return`/beijingprice${category?`/${category}`:""}`}',
      },
      {
        title: '价格资讯 - 新闻资讯',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/jgzx/xwzx/'],
        target: '/beijingprice/jgzx/xwzx',
      },
      {
        title: '价格资讯 - 工作动态',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/jgzx/gzdt/'],
        target: '/beijingprice/jgzx/gzdt',
      },
      {
        title: '价格资讯 - 各区动态',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/jgzx/gqdt/'],
        target: '/beijingprice/jgzx/gqdt',
      },
      {
        title: '价格资讯 - 通知公告',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/jgzx/tzgg/'],
        target: '/beijingprice/jgzx/tzgg',
      },
      {
        title: '价格资讯 - 价格早报',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/jgzx/jgzb/'],
        target: '/beijingprice/jgzx/jgzb',
      },
      {
        title: '综合信息 - 价格听证',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/zhxx/jgtz/'],
        target: '/beijingprice/zhxx/jgtz',
      },
      {
        title: '综合信息 - 价格监测定点单位名单',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/zhxx/jgjcdddwmd/'],
        target: '/beijingprice/zhxx/jgjcdddwmd',
      },
      {
        title: '综合信息 - 部门预算决算',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/bmys/'],
        target: '/beijingprice/bmys',
      },
    ],
  },
  'bellroy.com': {
    _name: 'Bellroy',
    '.': [
      {
        title: 'New Releases',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/collection/new-releases', '/'],
        target: '/bellroy/new-releases',
      },
    ],
  },
  'bendibao.com': {
    _name: '本地宝',
    '.': [
      {
        title: '焦点资讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/bendibao/news/:city',
      },
    ],
  },
  'bigquant.com': {
    _name: 'BigQuant',
    '.': [
      {
        title: '专题报告',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/bigquant/collections',
      },
    ],
  },
  'bilibili.com': {
    _name: 'Bilibili',
    space: [
      {
        title: 'UP 主专栏',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/article/:uid',
      },
      {
        title: 'UP 主投币视频',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/coin/:uid',
      },
      {
        title: 'UP 主动态',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/dynamic/:uid',
      },
      {
        title: 'UP 主粉丝',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/followers/:uid',
      },
      {
        title: 'UP 主关注用户',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/followings/:uid',
      },
      {
        title: 'UP 主点赞视频',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/like/:uid',
      },
      {
        title: '用户追番列表',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/bangumi/:uid',
      },
      {
        title: 'UP 主默认收藏夹',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid', '/:uid/favlist'],
        target: '/bilibili/user/fav/:uid',
      },
      {
        title: 'UP 主投稿',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:uid'],
        target: '/bilibili/user/video/:uid',
      },
    ],
    www: [
      {
        title: '热搜',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/'],
        target: '/bilibili/hot-search',
      },
    ],
    live: [
      {
        title: '直播开播',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/:roomID'],
        target: '/bilibili/live/room/:roomID',
      },
    ],
    manga: [
      {
        title: '漫画更新',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/detail/:comicid'],
        target: '/bilibili/manga/update/:comicid',
      },
    ],
    show: [
      {
        title: '会员购票务',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/platform'],
        target: '/bilibili/platform/:area?/:p_type?/:uid?',
      },
    ],
    game: [
      {
        title: '最新公告',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/pcr/news.html'],
        target: '/priconne-redive/news/zh-cn',
      },
    ],
  },
  'binance.com': {
    _name: 'Binance',
    '.': [
      {
        title: 'Binance数字货币及交易对上新',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang/support/announcement'],
        target: '/binance/launchpool',
      },
    ],
  },
  'bing.com': {
    _name: 'Bing',
    www: [
      {
        title: '每日壁纸',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/', '/'],
        target: '/bing/:routeParams?',
      },
    ],
    cn: [
      {
        title: '搜索',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/bing/search/:keyword',
      },
    ],
  },
  'biodiscover.com': {
    _name: 'biodiscover.com 生物探索',
    www: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:channel'],
        target: '/biodiscover/:channel',
      },
    ],
  },
  'bioone.org': {
    _name: 'BioOne',
    '.': [
      {
        title: 'Featured articles',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/'],
        target: '/bioone/featured',
      },
      {
        title: 'Journals',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journals/:journal', '/'],
        target: '/bioone/journals/:journal',
      },
    ],
  },
  'bit.edu.cn': {
    _name: '北京理工大学',
    rszhaopin: [
      {
        title: '人才招聘',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/bit/rszhaopin',
      },
    ],
    grd: [
      {
        title: '研究生院招生信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zsgz/zsxx/index.htm', '/'],
        target: '/bit/yjs',
      },
    ],
    cs: [
      {
        title: '计院通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg', '/'],
        target: '/bit/cs',
      },
    ],
    jwc: [
      {
        title: '教务处通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg', '/'],
        target: '/bit/jwc',
      },
    ],
  },
  'bitbucket.com': {
    _name: 'Bitbucket',
    '.': [
      {
        title: 'Commits',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/commits/:workspace/:repo_slug'],
        target: '/bitbucket/commits/:workspace/:repo_slug',
      },
    ],
  },
  'bitmovin.com': {
    _name: 'Bitmovin',
    '.': [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blog', '/'],
        target: '/bitmovin/blog',
      },
    ],
  },
  'bjfu.edu.cn': {
    _name: '北京林业大学',
    graduate: [
      {
        title: '研究生院培养动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/bjfu/grs',
      },
    ],
    kyc: [
      {
        title: '科技处通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/bjfu/kjc',
      },
    ],
    it: [
      {
        title: '信息学院通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/index.html'],
        target: '/bjfu/it/:type',
      },
    ],
    jwc: [
      {
        title: '教务处通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/index.html'],
        target: '/bjfu/jwc/:type',
      },
    ],
    news: [
      {
        title: '绿色新闻网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/index.html'],
        target: '/bjfu/news/:type',
      },
    ],
  },
  'bjp.org.cn': {
    _name: '北京天文馆',
    '.': [
      {
        title: '每日一图',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/APOD/today.shtml', '/APOD/list.shtml', '/'],
        target: '/bjp/apod',
      },
    ],
  },
  'bjsk.org.cn': {
    _name: '北京社科网',
    keti: [
      {
        title: '基金项目管理平台',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/indexAction!to_index.action', '/'],
        target: '/bjsk/keti/:id',
      },
    ],
  },
  'bjtu.edu.cn': {
    _name: 'Beijing Jiaotong University',
    gs: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/bjtu/gs/:type?',
      },
    ],
  },
  'bjx.com.cn': {
    _name: '北极星电力网',
    huanbao: [
      {
        title: '环保要闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/yw', '/'],
        target: '/bjx/huanbao',
      },
    ],
  },
  'blogread.cn': {
    _name: '技术头条',
    '.': [
      {
        title: '最新文章',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/news/newest.php'],
        target: '/blogread/newest',
      },
    ],
  },
  'bloomberg.com': {
    _name: 'Bloomberg',
    www: [
      {
        title: 'Authors',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/*/authors/:id/:slug', '/authors/:id/:slug'],
        target: '/bloomberg/authors/:id/:slug',
      },
    ],
  },
  'bluestacks.com': {
    _name: 'BlueStacks',
    '.': [
      {
        title: 'BlueStacks 5 Release Notes',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: [
          '/hc/en-us/articles/360056960211-Release-Notes-BlueStacks-5',
          '/',
        ],
        target: '/bluestacks/release/5',
      },
    ],
  },
  'bmkg.go.id': {
    _name: 'BADAN METEOROLOGI, KLIMATOLOGI, DAN GEOFISIKA(Indonesian)',
    '.': [
      {
        title: 'Recent Earthquakes',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/', '/gempabumi-terkini.html'],
        target: '/bmkg/earthquake',
      },
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/', '/berita'],
        target: '/bmkg/news',
      },
    ],
  },
  'bnu.edu.cn': {
    _name: '北京师范大学',
    bs: [
      {
        title: '经济与工商管理学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category/index.html'],
        target: '/bnu/bs/:category',
      },
    ],
    dwxgb: [
      {
        title: '党委学生工作部',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category/:type/index.html'],
        target: '/bnu/dwxgb/:category/:type',
      },
    ],
    jwb: [
      {
        title: '教务部（研究生院）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/bnu/jwb',
      },
    ],
    'www.lib': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category/index.htm'],
        target: '/bnu/lib/:category',
      },
    ],
    mba: [
      {
        title: '经济与工商管理学院MBA',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category'],
        target:
          '/bnuparams=>{const category=params.category;return category?`/${category.replace(/\\/index\\.html$/,"")}`:""}',
      },
      {
        title: '新闻聚焦',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xwdt/index.html'],
        target: '/bnu/mba/xwdt',
      },
      {
        title: '通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg/index.html'],
        target: '/bnu/mba/tzgg',
      },
      {
        title: 'MBA系列讲座',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/mbaxljz/index.html'],
        target: '/bnu/mba/mbaxljz',
      },
      {
        title: '招生动态 - 下载专区',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zsdt/cjwt/index.html'],
        target: '/bnu/mba/zsdt/cjwt',
      },
      {
        title: '国际视野 - 海外基地',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/gjhz/hwjd/index.html'],
        target: '/bnu/mba/gjhz/hwjd',
      },
      {
        title: '国际视野 - 学位合作',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/gjhz/xwhz/index.html'],
        target: '/bnu/mba/gjhz/xwhz',
      },
      {
        title: '国际视野 - 长期交换',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/gjhz/zqjh/index.html'],
        target: '/bnu/mba/gjhz/zqjh',
      },
      {
        title: '国际视野 - 短期项目',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/gjhz/dqxm/index.html'],
        target: '/bnu/mba/gjhz/dqxm',
      },
      {
        title: '校园生活 - 学生组织',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xysh/xszz/index.html'],
        target: '/bnu/mba/xysh/xszz',
      },
      {
        title: '职业发展 - 校外导师',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zyfz/xwds/index.html'],
        target: '/bnu/mba/zyfz/xwds',
      },
      {
        title: '职业发展 - 企业实践',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zyfz/zycp/index.html'],
        target: '/bnu/mba/zyfz/zycp',
      },
      {
        title: '职业发展 - 就业创业',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zyfz/jycy/index.html'],
        target: '/bnu/mba/zyfz/jycy',
      },
    ],
  },
  'boc.cn': {
    _name: '中国银行',
    '.': [
      {
        title: '外汇牌价',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/sourcedb/whpj', '/'],
        target: '/boc/whpj',
      },
    ],
  },
  'booru.org': {
    _name: 'Booru',
    mmda: [
      {
        title: 'MMDArchive 标签查询',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/index.php'],
        target: '/booru/mmda/tags/:tags?',
      },
    ],
  },
  'brave.com': {
    _name: 'Brave',
    '.': [
      {
        title: 'Release Notes',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/latest', '/'],
        target: '/brave/latest',
      },
    ],
  },
  'bse.cn': {
    _name: '北京证券交易所',
    '.': [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/bse/:category?/:keyword?',
      },
    ],
  },
  'bsky.app': {
    _name: 'Bluesky (bsky)',
    '.': [
      {
        title: 'Post',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/profile/:handle'],
        target: '/bsky/profile/:handle',
      },
    ],
  },
  'btbtt20.com': {
    _name: 'BT 之家',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/btzj/:category?',
      },
    ],
  },
  'bulianglin.com': {
    _name: '不良林',
    '.': [
      {
        title: '全部文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/bulianglin/',
      },
    ],
  },
  'bupt.edu.cn': {
    _name: '北京邮电大学',
    '.': [
      {
        title: '人才招聘',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/bupt/rczp',
      },
    ],
  },
  'byau.edu.cn': {
    _name: '黑龙江八一农垦大学',
    xinwen: [
      {
        title: '新闻网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type_id/list.htm'],
        target: '/byau/news/:type_id',
      },
    ],
  },
  'byteclicks.com': {
    _name: '字节点击',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/byteclicks/',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tag/:tag'],
        target: '/byteclicks/tag/:tag',
      },
    ],
  },
  'bytes.dev': {
    _name: 'ui.dev',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/archives', '/'],
        target: '/bytes/',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/issues', '/'],
        target: '/reactnewsletter/',
      },
    ],
  },
  'c114.com.cn': {
    _name: 'C114 通信网',
    '.': [
      {
        title: '滚动新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news/roll.asp', '/'],
        target: '/c114/roll',
      },
    ],
  },
  'caareviews.org': {
    _name: 'caa.reviews',
    '.': [
      {
        title: 'Book Reviews',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/reviews/book'],
        target: '/caareviews/book',
      },
      {
        title: 'Essays',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/reviews/essay'],
        target: '/caareviews/essay',
      },
      {
        title: 'Exhibition Reviews',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/reviews/exhibition'],
        target: '/caareviews/exhibition',
      },
    ],
  },
  'cahkms.org': {
    _name: '全国港澳研究会',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/cahkms/:category?',
      },
    ],
  },
  'caijing.com.cn': {
    _name: '财经网',
    roll: [
      {
        title: '滚动新闻',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/index1.html', '/'],
        target: '/caijing/roll',
      },
    ],
  },
  'caixin.com': {
    _name: '财新博客',
    '.': [
      {
        title: '首页新闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/caixin/article',
      },
      {
        title: '最新文章',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/caixin/latest',
      },
    ],
    k: [
      {
        title: '财新数据通',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/web', '/'],
        target: '/caixin/database',
      },
    ],
    weekly: [
      {
        title: '财新周刊',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/', '/*'],
        target: '/caixin/weekly',
      },
    ],
  },
  'caixinglobal.com': {
    _name: 'Caixin Global',
    '.': [
      {
        title: 'Latest News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news', '/'],
        target: '/caixinglobal/latest',
      },
    ],
  },
  'cste.org.cn': {
    _name: '中国管理现代化研究会',
    '.': [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/categories/:id', '/'],
        target: '/camchina/:id?',
      },
    ],
  },
  'cartoonmad.com': {
    _name: '動漫狂',
    '.': [
      {
        title: '漫画更新',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/comic/:id'],
        target: '/cartoonmad/comic/:id',
      },
    ],
  },
  'cas.cn': {
    _name: '中国科学院',
    www: [
      {
        title: '成果转化',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/cg/:caty'],
        target: '/cas/cg/:caty?',
      },
    ],
    'www.ia': [
      {
        title: '自动化所',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/yjsjy/zs/sszs', '/'],
        target: '/cas/ia/yjs',
      },
    ],
    'www.iee': [
      {
        title: '电工研究所 科研动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xwzx/kydt', '/'],
        target: '/cas/iee/kydt',
      },
    ],
    'www.sim': [
      {
        title: '上海微系统与信息技术研究所 科技进展',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xwzx2016/kyjz', '/'],
        target: '/cas/sim/kyjz',
      },
    ],
  },
  'mesalab.cn': {
    _name: '中国科学院',
    www: [
      {
        title: '信息工程研究所 第二研究室 处理架构组 知识库',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/f/article/articleList', '/'],
        target: '/cas/mesalab/kb',
      },
    ],
  },
  'cast.org.cn': {
    _name: '中国科学技术协会',
    '.': [
      {
        title: '通用',
        docs: 'https://docs.rsshub.app/routes/government',
        source: [
          '/:column/:subColumn/:category/index.html',
          '/:column/:subColumn/index.html',
        ],
        target: '/cast/:column/:subColumn/:category?',
      },
    ],
  },
  'cau.edu.cn': {
    _name: '中国农业大学',
    ciee: [
      {
        title: '研招网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/col/col26712/index.html', '/'],
        target: '/cau/ele',
      },
    ],
    yz: [
      {
        title: '研招网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/col/col41740/index.html', '/'],
        target: '/cau/yjs',
      },
    ],
  },
  'cbc.ca': {
    _name: 'Canadian Broadcasting Corporation',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news'],
        target: '/cbc/topics',
      },
    ],
  },
  'cbirc.gov.cn': {
    _name: '中国银行保险监督管理委员会',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:category', '/'],
        target: '/cbirc/:category?',
      },
    ],
  },
  'cbnweek.com': {
    _name: '第一财经杂志',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/cbnweek/',
      },
    ],
  },
  'ccf.org.cn': {
    _name: '中国计算机学会',
    '.': [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/:category', '/'],
        target: '/ccf/news/:category',
      },
    ],
    tfbd: [
      {
        title: '大数据专家委员会',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/tfbd/:caty/:id', '/'],
        target: '/ccf/tfbd/:caty/:id',
      },
    ],
  },
  '91wllm.com': {
    _name: '华中师范大学',
    ccnu: [
      {
        title: '就业信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news/index/tag/tzgg', '/'],
        target: '/ccnu/career',
      },
    ],
    wtu: [
      {
        title: '就业信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news/index/tag/:type'],
        target: '/wtu/job/:type',
      },
    ],
  },
  'ccnu.edu.cn': {
    _name: '华中师范大学',
    cs: [
      {
        title: '计算机学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xwzx/tzgg.htm', '/'],
        target: '/ccnu/cs',
      },
    ],
    uowji: [
      {
        title: '伍论贡学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xwzx/tzgg.htm', '/'],
        target: '/ccnu/wu',
      },
    ],
    gs: [
      {
        title: '研究生通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zsgz/ssyjs.htm', '/'],
        target: '/ccnu/yjs',
      },
    ],
  },
  'ccreports.com.cn': {
    _name: '消费者报道',
    www: [
      {
        title: '要闻',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/ccreports/article',
      },
    ],
  },
  'cctv.com': {
    _name: '央视新闻',
    news: [
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category'],
        target: '/cctv/:category',
      },
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category'],
        target: '/cctv/:category',
      },
    ],
    photo: [
      {
        title: '央视网图片《镜象》',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/jx', '/'],
        target: '/cctv/photo/jx',
      },
    ],
    tv: [
      {
        title: '新闻联播',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/lm/xwlb', '/'],
        target: '/cctv/xwlb',
      },
    ],
    navi: [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/cntv/:column',
      },
    ],
  },
  'cdzjryb.com': {
    _name: '成都住建蓉 e 办',
    zw: [
      {
        title: '商品住房购房登记',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/lottery/accept/projectList', '/'],
        target: '/cdzjryb/zw/projectList',
      },
    ],
  },
  'cebbank.com': {
    _name: '中国光大银行',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/site/ygzx/whpj/index.html', '/eportal/ui', '/'],
        target: '/cebbank/quotation/all',
      },
    ],
  },
  'cfachina.org': {
    _name: '中国期货业协会',
    '.': [
      {
        title: '分析师园地',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/servicesupport/analygarden/:program', '/'],
        target: '/cfachina/servicesupport/analygarden/:program?',
      },
    ],
  },
  'cfr.org': {
    _name: 'Council on Foreign Relations',
    www: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category', '/:category/:subCategory'],
        target: '/cfr/:category/:subCategory?',
      },
    ],
  },
  'cgtn.com': {
    _name: '中国环球电视网',
    '.': [
      {
        title: '播客',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/podcast/column/:category/*/:id'],
        target: '/cgtn/podcast/:category/:id',
      },
    ],
  },
  'chaincatcher.com': {
    _name: '链捕手 ChainCatcher',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/chaincatcher/',
      },
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news', '/'],
        target: '/chaincatcher/news',
      },
    ],
  },
  'changba.com': {
    _name: '唱吧',
    '.': [
      {
        title: '用户',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/s/:userid'],
        target: '/changba/:userid',
      },
    ],
  },
  'chaping.cn': {
    _name: '差评',
    '.': [
      {
        title: '图片墙',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/chaping/banner',
      },
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/newsflash'],
        target: '/chaping/newsflash',
      },
    ],
  },
  'china.com': {
    _name: 'China.com 中华网',
    finance: [
      {
        title: 'Finance News 财经 - 财经新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category'],
        target: '/china/finance/:category?',
      },
    ],
    news: [
      {
        title: 'News and current affairs 时事新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category'],
        target: '/china/news/:category?',
      },
    ],
    military: [
      {
        title: 'Military - Military News 军事 - 军事新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news'],
        target: '/china/news/military',
      },
    ],
  },
  'chinafactcheck.com': {
    _name: '有据',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/chinafactcheck/',
      },
    ],
  },
  'chinanews.com.cn': {
    _name: '中国新闻网',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/chinanews/',
      },
    ],
  },
  'chinaventure.com.cn': {
    _name: '投中网',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/chinaventure/news/:id?',
      },
    ],
  },
  'chsi.com.cn': {
    _name: '中国研究生招生信息网',
    yz: [
      {
        title: '考研热点新闻',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/'],
        target: '/chsi/hotnews',
      },
      {
        title: '考研动态',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/kyzx/kydt'],
        target: '/chsi/kydt',
      },
      {
        title: '考研资讯',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/kyzx/:type'],
        target: '/chsi/kyzx/:type',
      },
    ],
  },
  'chuanliu.org': {
    _name: '川流',
    '.': [
      {
        title: '严选',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/nice'],
        target: '/chuanliu/nice',
      },
    ],
  },
  'cib.com.cn': {
    _name: '中国兴业银行',
    '.': [
      {
        title: '外汇牌价',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/cib/whpj',
      },
    ],
  },
  'civitai.com': {
    _name: 'Civitai',
    '.': [
      {
        title: 'Model discussions',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/models/:modelId'],
        target: '/civitai/discussions/:modelId',
      },
      {
        title: 'Latest models',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/'],
        target: '/civitai/models',
      },
    ],
  },
  'ciweimao.com': {
    _name: '刺猬猫',
    wap: [
      {
        title: '章节',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/book/:id'],
        target: '/ciweimao/chapter/:id',
      },
    ],
  },
  'cls.cn': {
    _name: '财联社',
    '.': [
      {
        title: '热门文章排行榜',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/cls/hot',
      },
      {
        title: '电报',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/telegraph', '/'],
        target: '/cls/telegraph',
      },
    ],
  },
  'cmpxchg8b.com': {
    _name: 'cmpxchg8b',
    lock: [
      {
        title: 'Articles',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/articles'],
        target: '/cmpxchg8b/articles',
      },
    ],
  },
  'cn-healthcare.com': {
    _name: '健康界',
    '.': [
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/cn-healthcare/index',
      },
    ],
  },
  'cnbc.com': {
    _name: 'CNBC',
    www: [
      {
        title: 'Full article RSS',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/id/:id/device/rss/rss.html'],
        target: '/cnbc/rss/:id',
      },
    ],
  },
  'cnbeta.com.tw': {
    _name: 'cnBeta.COM',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/:id'],
        target:
          '/cnbetaparams=>`/cnbeta/category/${params.id.replace(".htm","")}`',
      },
      {
        title: '头条资讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/cnbeta/',
      },
      {
        title: '主题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topics/:id'],
        target:
          '/cnbetaparams=>`/cnbeta/topics/${params.id.replace(".htm","")}`',
      },
    ],
  },
  'cnblogs.com': {
    _name: '博客园',
    www: [
      {
        title: '10 天推荐排行榜',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/aggsite/topdiggs'],
        target: '/cnblogs/aggsite/topdiggs',
      },
      {
        title: '10 天推荐排行榜',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/aggsite/topdiggs'],
        target: '/cnblogs/aggsite/topviews',
      },
      {
        title: '10 天推荐排行榜',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/aggsite/topdiggs'],
        target: '/cnblogs/aggsite/headline',
      },
      {
        title: '10 天推荐排行榜',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/aggsite/topdiggs'],
        target: '/cnblogs/cate/:type',
      },
      {
        title: '10 天推荐排行榜',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/aggsite/topdiggs'],
        target: '/cnblogs/pick',
      },
    ],
  },
  'cncf.io': {
    _name: 'CNCF',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/reports'],
        target: '/cncf/reports',
      },
    ],
  },
  'cneb.gov.cn': {
    _name: '中国国家应急广播',
    '.': [
      {
        title: '应急新闻',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/yjxw/:category', '/'],
        target: '/cneb/yjxw/:category?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/yjxx', '/'],
        target: '/cneb/yjxx',
      },
    ],
  },
  'cngal.org': {
    _name: 'CnGal',
    www: [
      {
        title: '制作者 / 游戏新闻',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/entries/index/:id'],
        target: '/cngal/entry/:id',
      },
      {
        title: '每周速报',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/', '/weeklynews'],
        target: '/cngal/weekly',
      },
    ],
  },
  'cnki.net': {
    _name: '中国知网',
    navi: [
      {
        title: '网络首发',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/knavi/journals/:name/detail'],
        target: '/cnki/journals/debut/:name',
      },
      {
        title: '期刊',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/knavi/journals/:name/detail'],
        target: '/cnki/journals/:name',
      },
    ],
  },
  'codeforces.com': {
    _name: 'Codeforces',
    www: [
      {
        title: 'Latest contests',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/contests'],
        target: '/codeforces/contests',
      },
    ],
    '.': [
      {
        title: 'Recent actions',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/recent-actions'],
        target: '/codeforces/recent-actions',
      },
    ],
  },
  'coindesk.com': {
    _name: 'CoinDesk Consensus Magazine',
    '.': [
      {
        title: '新闻周刊',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/coindesk/consensus-magazine',
      },
    ],
  },
  'colamanga.com': {
    _name: 'COLAMANGA',
    www: [
      {
        title: 'Manga',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:id/'],
        target: '/colamanga/:id',
      },
    ],
  },
  'comicskingdom.com': {
    _name: 'Comics Kingdom',
    '.': [
      {
        title: 'Archive',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:name/*', '/:name'],
        target: '/comicskingdom/:name',
      },
    ],
  },
  'consumer.org.hk': {
    _name: '消费者委员会',
    '.': [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/consumer/:category?/:language?/:keyword?',
      },
    ],
  },
  'cool18.com': {
    _name: '禁忌书屋',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/cool18/:id?/:type?/:keyword?',
      },
    ],
  },
  'coomer.party': {
    _name: 'Coomer',
    '.': [
      {
        title: 'Artist',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/onlyfans/user/:id', '/'],
        target: '/coomer/artist/:id',
      },
      {
        title: 'Recent Posts',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/posts', '/'],
        target: '/coomer/posts',
      },
    ],
  },
  'copernicium.tw': {
    _name: '日新说',
    www: [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/copernicium/:category',
      },
    ],
  },
  'cpcaauto.com': {
    _name: 'cpcaauto.com',
    '.': [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php'],
        target:
          '/cpcaauto(_,url)=>{url=new URL(url);const types=url.searchParams.get("types");const id=url.searchParams.get("id");return types?`/${types}${id?`/${id}`:""}`:""}',
      },
      {
        title: '行业新闻 - 国内乘用车',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=news&anid=10'],
        target: '/cpcaauto/news/news/10',
      },
      {
        title: '行业新闻 - 进口及国外乘用车',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=news&anid=64'],
        target: '/cpcaauto/news/news/64',
      },
      {
        title: '行业新闻 - 后市场',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=news&anid=44'],
        target: '/cpcaauto/news/news/44',
      },
      {
        title: '行业新闻 - 商用车',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=news&anid=62'],
        target: '/cpcaauto/news/news/62',
      },
      {
        title: '车市解读 - 周度',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=csjd&anid=128'],
        target: '/cpcaauto/news/csjd/128',
      },
      {
        title: '车市解读 - 月度',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=csjd&anid=129'],
        target: '/cpcaauto/news/csjd/129',
      },
      {
        title: '车市解读 - 指数',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=csjd&anid=130'],
        target: '/cpcaauto/news/csjd/130',
      },
      {
        title: '车市解读 - 预测',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=csjd&anid=131'],
        target: '/cpcaauto/news/csjd/131',
      },
      {
        title: '发布会报告 - 上海市场上牌数',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=119'],
        target: '/cpcaauto/news/bgzl/119',
      },
      {
        title: '发布会报告 - 京城车市',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=122'],
        target: '/cpcaauto/news/bgzl/122',
      },
      {
        title: '发布会报告 - 进口车市场分析',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=120'],
        target: '/cpcaauto/news/bgzl/120',
      },
      {
        title: '发布会报告 - 二手车市场分析',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=121'],
        target: '/cpcaauto/news/bgzl/121',
      },
      {
        title: '发布会报告 - 价格指数',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=124'],
        target: '/cpcaauto/news/bgzl/124',
      },
      {
        title: '发布会报告 - 热点评述',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=125'],
        target: '/cpcaauto/news/bgzl/125',
      },
      {
        title: '发布会报告 - 新能源月报',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=126'],
        target: '/cpcaauto/news/bgzl/126',
      },
      {
        title: '发布会报告 - 商用车月报',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=127'],
        target: '/cpcaauto/news/bgzl/127',
      },
      {
        title: '发布会报告 - 政策分析',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=bgzl&anid=123'],
        target: '/cpcaauto/news/bgzl/123',
      },
      {
        title: '经济与政策 - 一周经济',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=meeting&anid=46'],
        target: '/cpcaauto/news/meeting/46',
      },
      {
        title: '经济与政策 - 一周政策',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=meeting&anid=47'],
        target: '/cpcaauto/news/meeting/47',
      },
      {
        title: '乘联会论坛 - 论坛文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=yjsy&anid=49'],
        target: '/cpcaauto/news/yjsy/49',
      },
      {
        title: '乘联会论坛 - 两会',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=yjsy&anid=111'],
        target: '/cpcaauto/news/yjsy/111',
      },
      {
        title: '乘联会论坛 - 车展看点',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news.php?types=yjsy&anid=113'],
        target: '/cpcaauto/news/yjsy/113',
      },
    ],
  },
  'cpuid.com': {
    _name: 'CPUID',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/news.html', '/'],
        target: '/cpuid/news',
      },
    ],
  },
  'cqgas.cn': {
    _name: '重庆燃气',
    '.': [
      {
        title: '停气检修通知',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/'],
        target: '/cqgas/tqtz',
      },
    ],
  },
  'creative-comic.tw': {
    _name: 'CCC 創作集',
    '.': [
      {
        title: '漫畫',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/book/:id/*'],
        target: '/creative-comic/:id',
      },
    ],
  },
  'crossbell.io': {
    _name: 'Crossbell',
    '.': [
      {
        title: 'Notes of character',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/*'],
        target: '/crossbell/notes',
      },
      {
        title: 'Notes',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/*'],
        target: '/crossbell/notes',
      },
      {
        title: 'Notes of source',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/*'],
        target: '/crossbell/notes',
      },
    ],
  },
  'csdn.net': {
    _name: 'CSDN',
    blog: [
      {
        title: 'User Feed',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/:user'],
        target: '/csdn/blog/:user',
      },
    ],
  },
  'csu.edu.cn': {
    _name: '中南大学',
    career: [
      {
        title: '就业信息网招聘信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/campus/index/category/1', '/campus', '/'],
        target: '/csu/career',
      },
    ],
  },
  'cts.com.tw': {
    _name: '華視',
    news: [
      {
        title: '新聞',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category/index.html'],
        target: '/cts/:category',
      },
    ],
  },
  'cuc.edu.cn': {
    _name: '中国传媒大学',
    yz: [
      {
        title: '研究生招生网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/8549/list.htm', '/'],
        target: '/cuc/yz',
      },
    ],
  },
  'cuilingmag.com': {
    _name: '萃嶺网',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/:category'],
        target:
          '/cuilingmagparams=>{const category=params.category;return`/cuilingmag${category?`/${category}`:""}`}',
      },
      {
        title: '全部',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/cuilingmag/',
      },
      {
        title: '哲学 · 文明',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/philosophy_civilization'],
        target: '/cuilingmag/philosophy_civilization',
      },
      {
        title: '艺术 · 科技',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/art_science'],
        target: '/cuilingmag/art_science',
      },
      {
        title: '未来 · 生命',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/future_life'],
        target: '/cuilingmag/future_life',
      },
      {
        title: '行星智慧',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/planetary_wisdom'],
        target: '/cuilingmag/planetary_wisdom',
      },
      {
        title: '数字治理',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/digital_governance'],
        target: '/cuilingmag/digital_governance',
      },
      {
        title: 'Noema精选',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/selected_noema'],
        target: '/cuilingmag/selected_noema',
      },
    ],
  },
  'curiouscat.live': {
    _name: 'CuriousCat',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:id'],
        target: '/curiouscat/user/:id',
      },
    ],
  },
  'curius.app': {
    _name: 'Curius',
    '.': [
      {
        title: 'User',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:name'],
        target: '/curius/links/:name',
      },
    ],
  },
  'cw.com.tw': {
    _name: '天下雜誌',
    '.': [
      {
        title: '作者',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/author/:channel'],
        target: '/cw/author/:channel',
      },
      {
        title: '最新上線',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/today', '/'],
        target: '/cw/today',
      },
    ],
  },
  'cyzone.cn': {
    _name: '创业邦',
    '.': [
      {
        title: '作者',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/author/:id', '/'],
        target: '/cyzone/author/:id',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/channel/:id', '/'],
        target: '/cyzone/:id',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/channel/:id', '/'],
        target: '/cyzone/:id',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/label/:name', '/'],
        target: '/cyzone/label/:name',
      },
    ],
  },
  'cztv.com': {
    _name: '新蓝网（浙江广播电视集团）',
    '.': [
      {
        title: '浙江新闻联播 - 每日合集',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/videos/zjxwlb', '/'],
        target: '/cztv/zjxwlb/daily',
      },
      {
        title: '浙江新闻联播',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/videos/zjxwlb', '/'],
        target: '/cztv/zjxwlb',
      },
    ],
  },
  'daily.dev': {
    _name: 'Daily.dev',
    '.': [
      {
        title: 'Most Discussed',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/popular'],
        target: '/daily/discussed',
      },
      {
        title: 'Popular',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/popular'],
        target: '/daily/',
      },
      {
        title: 'Most upvoted',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/popular'],
        target: '/daily/upvoted',
      },
      {
        title: 'User Posts',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:userId/posts', '/:userId'],
        target: '/daily/user/:userId',
      },
    ],
  },
  'darwinawards.com': {
    _name: 'Darwin Awards',
    '.': [
      {
        title: 'Award Winners',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/darwin', '/'],
        target: '/darwinawards/',
      },
    ],
  },
  'dataguidance.com': {
    _name: 'DataGuidance',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/search/news'],
        target: '/dataguidance/news',
      },
    ],
  },
  'dayanzai.me': {
    _name: '大眼仔旭',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/:category', '/:category/*'],
        target: '/dayanzai/:category',
      },
    ],
  },
  'dbaplus.cn': {
    _name: 'dbaplus社群',
    '.': [
      {
        title: '最新文章',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/dbaplus/',
      },
    ],
  },
  'dblp.org': {
    _name: 'DBLP',
    '.': [
      {
        title: 'Keyword Search',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/:field'],
        target: '/dblp/:field',
      },
    ],
  },
  'dcfever.com': {
    _name: 'DCFever',
    '.': [
      {
        title: '新聞中心',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news/index.php'],
        target: '/dcfever/news',
      },
      {
        title: '測試報告',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:type/reviews.php'],
        target: '/dcfever/reviews/:type',
      },
    ],
  },
  'ddosi.org': {
    _name: '雨苁博客',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/category/:category/'],
        target: '/ddosi/category/:category',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/ddosi/',
      },
    ],
  },
  'deadline.com': {
    _name: 'Deadline',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/deadline/',
      },
    ],
  },
  'dedao.cn': {
    _name: '得到',
    '.': [
      {
        title: '知识城邦',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/knowledge/topic/:topic', '/knowledge', '/'],
        target: '/dedao/knowledge/:topic?/:type?',
      },
    ],
  },
  'igetget.com': {
    _name: '得到',
    '.': [
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/dedao/list/:category?',
      },
    ],
  },
  'deepin.org': {
    _name: 'Deepin',
    bbs: [
      {
        title: 'BBS Home Page',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/user/:user_id'],
        target: '/deepin/homepage/:user_id',
      },
    ],
  },
  'deeplearning.ai': {
    _name: 'deeplearning.ai',
    www: [
      {
        title: 'TheBatch 周报',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/thebatch', '/'],
        target: '/deeplearning/thebatch',
      },
    ],
  },
  'deepmind.com': {
    _name: 'DeepMind',
    '.': [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog', '/'],
        target: '/deepmind/blog',
      },
    ],
  },
  'dehenglaw.com': {
    _name: '德恒律师事务所',
    '.': [
      {
        title: '专业文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:language/paper/0008/000902.aspx'],
        target: '/dehenglaw/:language/paper',
      },
      {
        title: '出版物',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:language/publish/0008/000903.aspx'],
        target: '/dehenglaw/:language/publish',
      },
      {
        title: '德恒论坛',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:language/luntan/0008/000901.aspx'],
        target: '/dehenglaw/:language/luntan',
      },
    ],
  },
  'delta.io': {
    _name: 'Delta Lake',
    '.': [
      {
        title: 'Blogs',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog'],
        target: '/deltaio/blog',
      },
    ],
  },
  'devolverdigital.com': {
    _name: 'DevolverDigital',
    '.': [
      {
        title: 'Official Blogs',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog'],
        target: '/devolverdigital/blog',
      },
    ],
  },
  'dhu.edu.cn': {
    _name: '东华大学',
    news: [
      {
        title: '学术信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/6410'],
        target: '/dhu/news/xsxx',
      },
    ],
  },
  'diandong.com': {
    _name: '电动邦',
    '.': [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news'],
        target: '/diandong/news/:cate',
      },
    ],
  },
  'diershoubing.com': {
    _name: '二柄 APP',
    '.': [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/diershoubing/news',
      },
    ],
  },
  'digitalcameraworld.com': {
    _name: 'Digital Camera World',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/digitalcameraworld/news',
      },
    ],
  },
  'discord.com': {
    _name: 'Discord',
    '.': [
      {
        title: 'Channel Messages',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: [
          '/channels/:guildId/:channelId/:messageID',
          '/channels/:guildId/:channelId',
        ],
        target: '/discord/channel/:channelId',
      },
    ],
  },
  'disinfo.eu': {
    _name: 'EU Disinfo Lab',
    '.': [
      {
        title: 'Publications',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/disinfo/publications',
      },
    ],
  },
  'diskanalyzer.com': {
    _name: 'WizTree',
    '.': [
      {
        title: "What's New",
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/whats-new', '/'],
        target: '/diskanalyzer/whats-new',
      },
    ],
  },
  'distill.pub': {
    _name: 'Distill',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/distill/',
      },
    ],
  },
  'dlnews.com': {
    _name: 'DL NEWS',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/articles/:category'],
        target: '/dlnews/:category',
      },
    ],
  },
  'dlsite.com': {
    _name: 'DLsite',
    'ci-en': [
      {
        title: "Ci-en Creators' Article",
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/creator/:id/article/843558', '/'],
        target: '/dlsite/ci-en/:id/article',
      },
    ],
  },
  'dmzj.com': {
    _name: '动漫之家',
    news: [
      {
        title: '新闻站',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/dmzj/news',
      },
    ],
  },
  'dnaindia.com': {
    _name: 'DNA India',
    www: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category'],
        target: '/dnaindia/:category',
      },
      {
        title: 'Topic',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/topic/:topic'],
        target: '/dnaindia/topic/:topic',
      },
    ],
  },
  'docschina.org': {
    _name: '印记中文',
    '.': [
      {
        title: '周刊 - JavaScript',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/news/weekly/js/*', '/news/weekly/js', '/'],
        target: '/docschina/jsweekly',
      },
    ],
  },
  'domp4.cc': {
    _name: 'DoMP4 影视',
    '.': [
      {
        title: '剧集订阅',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/detail/:id'],
        target: '/domp4/detail/:id',
      },
      {
        title: '最近更新的电源BT列表',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/', '/custom/update.html'],
        target: '/domp4/latest_movie_bt',
      },
      {
        title: '最近更新',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/', '/custom/update.html'],
        target: '/domp4/latest/:type?',
      },
    ],
  },
  'dongqiudi.com': {
    _name: '懂球帝',
    www: [
      {
        title: '早报',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/special/48'],
        target: '/dongqiudi/daily',
      },
      {
        title: '球员新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/player/*id'],
        target:
          '/dongqiudiparams=>`/dongqiudi/player_news/${params.id.replace(".html","")}`',
      },
      {
        title: '足球赛果',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/team/*team'],
        target:
          '/dongqiudiparams=>`/dongqiudi/result/${params.team.replace(".html","")}`',
      },
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/special/:id'],
        target: '/dongqiudi/special/:id',
      },
      {
        title: '球队新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/team/*team'],
        target:
          '/dongqiudiparams=>`/dongqiudi/team_news/${params.team.replace(".html","")}`',
      },
    ],
    m: [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/home/:id'],
        target: '/dongqiudi/top_news/:id',
      },
    ],
  },
  'dora-world.com': {
    _name: 'Doraemon Channel',
    www: [
      {
        title: 'Article',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:topic'],
        target: '/dora-world/article/:topic/:topicId?',
      },
    ],
  },
  'dorohedoro.net': {
    _name: 'Dorohedoro',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news', '/'],
        target: '/dorohedoro/news',
      },
    ],
  },
  'douban.com': {
    _name: '豆瓣',
    book: [
      {
        title: '豆瓣读书论坛',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:id/discussion'],
        target: '/douban/:id/discussion',
      },
    ],
    www: [
      {
        title: '豆瓣小组',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/group/:groupid'],
        target: '/douban/group/:groupid',
      },
      {
        title: '豆瓣榜单与集合',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/subject_collection/:type'],
        target: '/douban/list/:type',
      },
    ],
  },
  'douyin.com': {
    _name: '抖音直播',
    '.': [
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/hashtag/:cid'],
        target: '/douyin/hashtag/:cid',
      },
      {
        title: '博主',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/user/:uid'],
        target: '/douyin/user/:uid',
      },
    ],
    live: [
      {
        title: '直播间开播',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/:rid'],
        target: '/douyin/live/:rid',
      },
    ],
  },
  'douyu.com': {
    _name: '斗鱼直播',
    yuba: [
      {
        title: '鱼吧帖子',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/group/:id', '/group/newself/:id', '/group/newall/:id', '/'],
        target: '/douyu/group/:id',
      },
      {
        title: '鱼吧跟帖',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/p/:id', '/'],
        target: '/douyu/post/:id',
      },
    ],
    www: [
      {
        title: '直播间开播',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/:id', '/'],
        target: '/douyu/room/:id',
      },
    ],
  },
  'dribbble.com': {
    _name: 'Dribbble',
    '.': [
      {
        title: 'Popular',
        docs: 'https://docs.rsshub.app/routes/design',
        source: ['/'],
        target: '/dribbble/popular',
      },
      {
        title: 'User (or team)',
        docs: 'https://docs.rsshub.app/routes/design',
        source: ['/:name'],
        target: '/dribbble/user/:name',
      },
    ],
  },
  'dtcj.com': {
    _name: 'DT 财经',
    '.': [
      {
        title: '数据洞察',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/insighttopic/:id'],
        target: '/dtcj/datainsight/:id',
      },
    ],
  },
  'duozhuayu.com': {
    _name: '多抓鱼',
    '.': [
      {
        title: '搜索结果',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/search/book/:wd'],
        target: '/duozhuayu/search/:wd',
      },
    ],
  },
  'dxy.cn': {
    _name: '丁香园',
    '.': [
      {
        title: '个人帖子',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: [
          '/bbs/newweb/pc/profile/:userId/threads',
          '/bbs/newweb/pc/profile/:userId',
        ],
        target: '/dxy/bbs/profile/thread/:userId',
      },
    ],
  },
  'eagle.cool': {
    _name: 'Eagle',
    cn: [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/design',
        source: ['/blog'],
        target: '/eagle/blog',
      },
    ],
  },
  'cea.gov.cn': {
    _name: '地震速报',
    www: [
      {
        title: '中国地震台',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cea/xwzx/zqsd/index.html', '/'],
        target: '/earthquake/ceic/:type?',
      },
      {
        title: '中国地震局',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cea/xwzx/zqsd/index.html', '/'],
        target: '/earthquake/:region?',
      },
    ],
  },
  'eastday.com': {
    _name: '东方网',
    mini: [
      {
        title: '24 小时热闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/eastday/24',
      },
    ],
    www: [
      {
        title: '原创',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/eastday/portrait',
      },
    ],
    sh: [
      {
        title: '上海新闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/eastday/sh',
      },
    ],
  },
  'eastmoney.com': {
    _name: '东方财富',
    data: [
      {
        title: '研究报告',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/report/:category'],
        target: '/eastmoney/report/:category',
      },
    ],
  },
  'ecnu.edu.cn': {
    _name: 'East China Normal University 华东师范大学',
    acm: [
      {
        title: 'ACM Online-Judge contests list',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/contest/', '/'],
        target: '/ecnu/acm/contest/',
      },
    ],
    'www.jwc': [
      {
        title: '教务处通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/'],
        target: '/ecnu/tzgg',
      },
    ],
  },
  'kaoyan.com': {
    _name: 'East China Normal University 华东师范大学',
    yz: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/ecnu/tiaoji', '/'],
        target: '/ecnu/yjs',
      },
    ],
  },
  'economist.com': {
    _name: 'The Economist',
    '.': [
      {
        title: 'Espresso',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/the-world-in-brief', '/espresso'],
        target: '/economist/espresso',
      },
      {
        title: 'Category',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:endpoint'],
        target: '/economist/:endpoint',
      },
    ],
  },
  'businessreview.global': {
    _name: 'The Economist',
    '.': [
      {
        title: 'Global Business Review',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/economist/global-business-review',
      },
    ],
  },
  'ecust.edu.cn': {
    _name: '华东理工大学',
    e: [
      {
        title: '继续教育学院 - 学院公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/engine2/m/38F638B77773ADD3', '/'],
        target: '/ecust/jxjy/news',
      },
    ],
    gschool: [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/12753/list.htm', '/'],
        target: '/ecust/yjs',
      },
    ],
  },
  'egsea.com': {
    _name: 'e 公司',
    '.': [
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news/flash'],
        target: '/egsea/flash',
      },
    ],
  },
  'ekantipur.com': {
    _name: 'Ekantipur / कान्तिपुर (Nepal)',
    '.': [
      {
        title: 'Full Article RSS',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:channel'],
        target: '/ekantipur/:channel',
      },
    ],
  },
  'elasticsearch.cn': {
    _name: 'Elastic 中文社区',
    '.': [
      {
        title: '发现',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:params', '/'],
        target: '/elasticsearch-cn/:params',
      },
    ],
  },
  'eleduck.com': {
    _name: '电鸭社区',
    '.': [
      {
        title: '工作机会',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/categories/5', '/'],
        target: '/eleduck/jobs',
      },
    ],
  },
  'sciencedirect.com': {
    _name: 'ELSEVIER',
    www: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/journal/:journal/*'],
        target: '/elsevier/:journal',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/journal/:journal/*'],
        target: '/elsevier/:journal',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/journal/:journal/*'],
        target: '/elsevier/:journal',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/journal/:journal/*'],
        target: '/elsevier/:journal',
      },
    ],
    '.': [
      {
        title: 'Journal',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journal/:id', '/'],
        target: '/sciencedirect/journal/:id',
      },
    ],
  },
  'epicgames.com': {
    _name: 'Epic Games Store',
    store: [
      {
        title: 'Free games',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:locale/free-games'],
        target: '/epicgames/freegames/:locale',
      },
    ],
  },
  'esquirehk.com': {
    _name: 'Esquire Hong Kong',
    www: [
      {
        title: 'Tag',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tag/:id', '/:id'],
        target: '/esquirehk/tag/:id?',
      },
    ],
  },
  'blogspot.com': {
    _name: '歐洲動態（國際）',
    europechinese: [
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/europechinese/latest',
      },
    ],
    ygkkk: [
      {
        title: '最新发表',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/ygkkk/',
      },
    ],
  },
  'eventernote.com': {
    _name: 'Eventernote',
    www: [
      {
        title: '声优活动及演唱会',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/actors/:name/:id/events'],
        target: '/eventernote/actors/:name/:id',
      },
    ],
  },
  'f-droid.org': {
    _name: 'F-Droid',
    '.': [
      {
        title: 'App Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/en/packages/:app/'],
        target: '/f-droid/apprelease/:app',
      },
    ],
  },
  'famitsu.com': {
    _name: 'ファミ通',
    www: [
      {
        title: 'Category',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/category/:category/page/1'],
        target: '/famitsu/category/:category?',
      },
    ],
  },
  'fanqienovel.com': {
    _name: '番茄小说',
    '.': [
      {
        title: '小说更新',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/page/:bookId'],
        target: '/fanqienovel/page/:bookId',
      },
    ],
  },
  'fansly.com': {
    _name: 'Fansly',
    '.': [
      {
        title: 'User Timeline',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:username/posts', '/:username/media'],
        target: '/fansly/user/:username',
      },
      {
        title: 'Hashtag',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/explore/tag/:tag'],
        target: '/fansly/tag/:tag',
      },
    ],
  },
  'fantia.jp': {
    _name: 'Fantia',
    '.': [
      {
        title: 'User Posts',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/fanclubs/:id'],
        target: '/fantia/user/:id',
      },
    ],
  },
  'fanxinzhui.com': {
    _name: '追新番',
    '.': [
      {
        title: '最近更新',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/lastest'],
        target: '/fanxinzhui/',
      },
    ],
  },
  'farmatters.com': {
    _name: 'Farmatters',
    '.': [
      {
        title: 'Exclusive',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/exclusive'],
        target: '/farmatters/exclusive',
      },
      {
        title: 'Exclusive',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/exclusive'],
        target: '/farmatters/exclusive',
      },
      {
        title: 'Exclusive',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/exclusive'],
        target: '/farmatters/exclusive',
      },
      {
        title: 'Exclusive',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/exclusive'],
        target: '/farmatters/exclusive',
      },
    ],
  },
  'fastbull.cn': {
    _name: '法布财经',
    '.': [
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/express-news', '/'],
        target: '/fastbull/express-news',
      },
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/news', '/'],
        target: '/fastbull/news',
      },
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/news', '/'],
        target: '/fastbull/',
      },
    ],
  },
  'fda.gov': {
    _name: 'U.S. Food and Drug Administration',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: [
          '/medical-devices/news-events-medical-devices/cdrhnew-news-and-updates',
          '/',
        ],
        target: '/fda/cdrh/:titleOnly',
      },
    ],
  },
  'feng.com': {
    _name: '威锋',
    '.': [
      {
        title: '社区',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/forum/photo/:id', '/forum/:id'],
        target: '/feng/forum/:id',
      },
    ],
  },
  'sdo.com': {
    _name: 'FINAL FANTASY XIV 最终幻想 14',
    'ff.web': [
      {
        title: '最终幻想 14 国服',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/web8/index.html'],
        target: '/ff14/zh',
      },
      {
        title: '最终幻想 14 国服',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/web8/index.html'],
        target: '/ff14/zh',
      },
    ],
  },
  'fffdm.com': {
    _name: '风之动漫',
    www: [
      {
        title: '在线漫画',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/manhua/:id', '/:id'],
        target: '/fffdm/manhua/:id',
      },
    ],
  },
  'finology.in': {
    _name: 'Finology Insider',
    insider: [
      {
        title: 'Bullets',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/bullets'],
        target: '/finology/bullets',
      },
      {
        title: 'Category',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:category'],
        target: '/finology/:category',
      },
      {
        title: 'Most Viewed',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/most-viewed'],
        target: '/finology/most-viewed/monthly',
      },
      {
        title: 'Trending Topic',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/tag/:topic'],
        target: '/finology/tag/:topic',
      },
    ],
  },
  'finviz.com': {
    _name: 'finviz',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/news.ashx', '/'],
        target: '/finviz/:category?',
      },
    ],
  },
  'mozilla.org': {
    _name: 'Mozilla',
    addons: [
      {
        title: 'Add-ons Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: [
          '/:lang/firefox/addon/:id/versions',
          '/:lang/firefox/addon/:id',
        ],
        target: '/firefox/addons/:id',
      },
    ],
  },
  'firefox.com': {
    _name: 'Mozilla',
    monitor: [
      {
        title: 'Firefox Monitor',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/', '/breaches'],
        target: '/firefox/breaches',
      },
    ],
  },
  'spb.ru': {
    _name: 'Fisher Spb',
    fisher: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/news'],
        target: '/fisher-spb/news',
      },
    ],
  },
  'fishshell.com': {
    _name: 'fish shell',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/fishshell/',
      },
    ],
  },
  'fjksbm.com': {
    _name: '福建考试报名网',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/portal/:category', '/portal'],
        target: '/fjksbm/:category?',
      },
    ],
  },
  'flyert.com': {
    _name: '飞客茶馆',
    '.': [
      {
        title: '信用卡',
        docs: 'https://docs.rsshub.app/routes/travel',
        source: ['/'],
        target: '/flyert/creditcard/:bank',
      },
      {
        title: '优惠信息',
        docs: 'https://docs.rsshub.app/routes/travel',
        source: ['/'],
        target: '/flyert/preferential',
      },
    ],
  },
  'followin.io': {
    _name: 'Followin',
    '.': [
      {
        title: 'KOL',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang/kol/:kolId', '/kol/:kolId'],
        target: '/followin/kol/:kolId/:lang?',
      },
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang?/news', '/news'],
        target: '/followin/news/:lang?',
      },
      {
        title: 'Tag',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang/tag/:tagId', '/tag/:tagId'],
        target: '/followin/tag/:tagId/:lang?',
      },
      {
        title: 'Topic',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang/topic/:topicId', '/topic/:topicId'],
        target: '/followin/topic/:topicId/:lang?',
      },
    ],
  },
  'foresightnews.pro': {
    _name: 'Foresight News',
    '.': [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/foresightnews/article',
      },
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/column/detail/:id', '/'],
        target: '/foresightnews/column/:id',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/foresightnews/',
      },
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news', '/'],
        target: '/foresightnews/news',
      },
    ],
  },
  'foreverblog.cn': {
    _name: '十年之约',
    www: [
      {
        title: '专题展示 - 文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/feeds.html'],
        target: '/foreverblog/feeds',
      },
    ],
  },
  'fortunechina.com': {
    _name: '财富中文网',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category', '/'],
        target: '/fortunechina/:category?',
      },
    ],
  },
  'free.com.tw': {
    _name: '免費資源網路社群',
    '.': [
      {
        title: '最新文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/free/',
      },
    ],
  },
  'freebuf.com': {
    _name: 'FreeBuf',
    '.': [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/articles/:type/*.html', '/articles/:type'],
        target: '/freebuf/articles/:type',
      },
    ],
  },
  'freecomputerbooks.com': {
    _name: 'Free Computer Books',
    '.': [
      {
        title: 'Book List',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/', '/index.html'],
        target: '/freecomputerbooks/:category?',
      },
    ],
  },
  'freewechat.com': {
    _name: '自由微信',
    '.': [
      {
        title: '公众号',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/profile/:id'],
        target: '/freewechat/profile/:id',
      },
    ],
  },
  'jjmhw.cc': {
    _name: '漫小肆韓漫',
    www: [
      {
        title: '漫画更新',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/book/:id'],
        target: '/freexcomic/book/:id',
      },
    ],
  },
  'fuliba2023.net': {
    _name: '福利吧',
    '.': [
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/fuliba/latest',
      },
    ],
  },
  'furstar.jp': {
    _name: 'Furstar',
    '.': [
      {
        title: '已经出售的角色列表',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/:lang/archive.php', '/archive.php'],
        target: '/furstar/archive/:lang',
      },
      {
        title: '画师列表',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/furstar/artists',
      },
      {
        title: '最新售卖角色列表',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/:lang', '/'],
        target: '/furstar/characters/:lang',
      },
    ],
  },
  'fx678.com': {
    _name: '汇通网',
    '.': [
      {
        title: '7x24 小时快讯',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/kx'],
        target: '/fx678/kx',
      },
    ],
  },
  'gameapps.hk': {
    _name: 'GameApps.hk 香港手机游戏网',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/gameapps/',
      },
    ],
  },
  'gamegene.cn': {
    _name: '游戏基因',
    news: [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news'],
        target: '/gamegene/news',
      },
    ],
  },
  'gamer.com.tw': {
    _name: '巴哈姆特電玩資訊站',
    ani: [
      {
        title: '動畫瘋 - 最後更新',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/gamer/new_anime',
      },
    ],
  },
  'gamersecret.com': {
    _name: 'Gamer Secret',
    '.': [
      {
        title: 'Category',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:type', '/:type/:category', '/'],
        target: '/gamersecret/:type?/:category?',
      },
    ],
  },
  'gcores.com': {
    _name: '机核网',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category'],
        target: '/gcores/category/:category',
      },
      {
        title: '专题文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/collections/:collection'],
        target: '/gcores/collections/:collection',
      },
      {
        title: '播客',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/categories/:category'],
        target: '/gcores/radios/:category',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/categories/:tag', '/'],
        target: '/gcores/tag/:tag',
      },
    ],
  },
  'gdut.edu.cn': {
    _name: '广东工业大学',
    oas: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/seeyon'],
        target: '/gdut/oa_news/',
      },
    ],
  },
  'gelonghui.com': {
    _name: '格隆汇',
    '.': [
      {
        title: '最热文章',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/gelonghui/hot-article',
      },
      {
        title: '实时快讯',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/live', '/'],
        target: '/gelonghui/live',
      },
      {
        title: '主题文章',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/subject/:id'],
        target: '/gelonghui/subject/:id',
      },
      {
        title: '用户文章',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/user/:id'],
        target: '/gelonghui/user/:id',
      },
    ],
  },
  'geocaching.com': {
    _name: 'Geocaching',
    '.': [
      {
        title: 'Official Blogs',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog/', '/'],
        target: '/geocaching/blogs',
      },
    ],
  },
  'getdr.com': {
    _name: '趨勢科技防詐達人',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/getdr/',
      },
    ],
  },
  'gettr.com': {
    _name: 'GETTR',
    '.': [
      {
        title: 'User timeline',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/user/:id'],
        target: '/gettr/user/:id',
      },
    ],
  },
  'sunborngame.com': {
    _name: '少女前线',
    '.': [
      {
        title: '情报局',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:category', '/'],
        target: '/gf-cn/news/:category?',
      },
    ],
  },
  'gihyo.jp': {
    _name: 'gihyo.jp',
    '.': [
      {
        title: 'Series',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/list/group/:id'],
        target: '/gihyo/list/group/:id',
      },
    ],
  },
  'gitee.com': {
    _name: 'Gitee',
    '.': [
      {
        title: '仓库提交',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:owner/:repo/commits'],
        target: '/gitee/commits/:owner/:repo',
      },
      {
        title: '仓库动态',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:owner/:repo'],
        target: '/gitee/events/:owner/:repo',
      },
      {
        title: '仓库 Releases',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:owner/:repo/releases'],
        target: '/gitee/releases/:owner/:repo',
      },
      {
        title: '用户公开动态',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:username'],
        target: '/gitee/events/:username',
      },
    ],
  },
  'github.com': {
    _name: 'GitHub',
    '.': [
      {
        title: 'Repo Branches',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user/:repo/branches', '/:user/:repo'],
        target: '/github/branches/:user/:repo',
      },
      {
        title: 'Issue / Pull Request comments',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user/:repo/:type', '/:user/:repo/:type/:number'],
        target: '/github/comments/:user/:repo/:number?',
      },
      {
        title: 'Repo Contributors',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user/:repo/graphs/contributors', '/:user/:repo'],
        target: '/github/contributors/:user/:repo',
      },
      {
        title: 'File Commits',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user/:repo/blob/:branch/*filepath'],
        target: '/github/file/:user/:repo/:branch/:filepath',
      },
      {
        title: 'User Followers',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user'],
        target: '/github/user/followers/:user',
      },
      {
        title: 'Repo Issues',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: [
          '/:user/:repo/issues',
          '/:user/:repo/issues/:id',
          '/:user/:repo',
        ],
        target: '/github/issue/:user/:repo',
      },
      {
        title: 'Notifications',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/notifications'],
        target: '/github/notifications',
      },
      {
        title: 'Repo Pull Requests',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: [
          '/:user/:repo/pulls',
          '/:user/:repo/pulls/:id',
          '/:user/:repo',
        ],
        target: '/github/pull/:user/:repo',
      },
      {
        title: 'Repo Pulse',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user/:repo/pulse', '/:user/:repo/pulse/:period'],
        target: '/github/pulse/:user/:repo/:period?',
      },
      {
        title: 'User Repo',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user'],
        target: '/github/repos/:user',
      },
      {
        title: 'Repo Stars',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user/:repo/stargazers', '/:user/:repo'],
        target: '/github/stars/:user/:repo',
      },
      {
        title: 'User Starred Repositories',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:user'],
        target: '/github/starred_repos/:user',
      },
      {
        title: 'Topics',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/topics'],
        target: '/github/topics/:name/:qs?',
      },
      {
        title: 'Trending',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/trending'],
        target: '/github/trending/:since',
      },
      {
        title: 'Wiki History',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: [
          '/:user/:repo/wiki/:page/_history',
          '/:user/:repo/wiki/:page',
          '/:user/:repo/wiki/_history',
          '/:user/:repo/wiki',
        ],
        target: '/github/wiki/:user/:repo/:page',
      },
    ],
    gist: [
      {
        title: 'Gist Commits',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: [
          '/:owner/:gistId/revisions',
          '/:owner/:gistId/stargazers',
          '/:owner/:gistId/forks',
          '/:owner/:gistId',
        ],
        target: '/github/gist/:gistId',
      },
    ],
  },
  'gitpod.io': {
    _name: 'Gitpod',
    '.': [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blog', '/'],
        target: '/gitpod/blog',
      },
      {
        title: 'Changelog',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/changelog', '/'],
        target: '/gitpod/changelog',
      },
    ],
  },
  'globallawreview.org': {
    _name: '环球法律评论',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/Magazine/GetIssueContentList', '/'],
        target: '/globallawreview/',
      },
    ],
  },
  'gocn.vip': {
    _name: 'GoCN',
    '.': [
      {
        title: '招聘',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/gocn/jobs',
      },
      {
        title: '每日新闻',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/gocn/topics',
      },
    ],
  },
  'anitaku.to': {
    _name: 'Gogoanimehd',
    developer: [
      {
        title: 'Recent Releases',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/gogoanimehd/recent-releases',
      },
    ],
  },
  'google.com': {
    _name: 'Google',
    chromewebstore: [
      {
        title: 'Extension Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/detail/:name/:id'],
        target: '/google/chrome/extension/:id',
      },
    ],
  },
  'ah.gov.cn': {
    _name: '上海市人民政府',
    kjt: [
      {
        title: '安徽省科学技术厅',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/:category'],
        target:
          '/govparams=>{const category=params.category;return`/gov/ah/kjt${category?`/${category}`:""}`}',
      },
      {
        title: '科技资讯 - 通知公告',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzx/tzgg/index.html'],
        target: '/gov/ah/kjt/kjzx/tzgg',
      },
      {
        title: '科技资讯 - 工作动态',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzx/gzdt/index.html'],
        target: '/gov/ah/kjt/kjzx/gzdt',
      },
      {
        title: '科技资讯 - 基层科技',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzx/jckj/index.html'],
        target: '/gov/ah/kjt/kjzx/jckj',
      },
      {
        title: '科技资讯 - 媒体聚焦',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzx/mtjj/index.html'],
        target: '/gov/ah/kjt/kjzx/mtjj',
      },
      {
        title: '科技资讯 - 重要转载',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzx/zyzz/index.html'],
        target: '/gov/ah/kjt/kjzx/zyzz',
      },
      {
        title: '科技资讯 - 图片视频',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzx/tpsp/index.html'],
        target: '/gov/ah/kjt/kjzx/tpsp',
      },
      {
        title: '科技统计 - 技术市场交易',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjtj/jsscjy/index.html'],
        target: '/gov/ah/kjt/kjzy/kjtj/jsscjy',
      },
      {
        title: '科技统计 - 科技成果公报',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjtj/kjcggb/index.html'],
        target: '/gov/ah/kjt/kjzy/kjtj/kjcggb',
      },
      {
        title: '科技统计 - 孵化载体发展',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjtj/cyfhfz/index.html'],
        target: '/gov/ah/kjt/kjzy/kjtj/cyfhfz',
      },
      {
        title: '科技数据 - 创新企业',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjsj/cxqy/index.html'],
        target: '/gov/ah/kjt/kjzy/kjsj/cxqy',
      },
      {
        title: '科技数据 - 创新项目',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjsj/cxxm/index.html'],
        target: '/gov/ah/kjt/kjzy/kjsj/cxxm',
      },
      {
        title: '科技数据 - 创新成果',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjsj/cxcg/index.html'],
        target: '/gov/ah/kjt/kjzy/kjsj/cxcg',
      },
      {
        title: '科技数据 - 转化基金入库项目',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjsj/zhjjrkxm/index.html'],
        target: '/gov/ah/kjt/kjzy/kjsj/zhjjrkxm',
      },
      {
        title: '科技数据 - 创新平台',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjsj/cxpt/index.html'],
        target: '/gov/ah/kjt/kjzy/kjsj/cxpt',
      },
      {
        title: '科技数据 - 创新园区',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjsj/cxyq/index.html'],
        target: '/gov/ah/kjt/kjzy/kjsj/cxyq',
      },
      {
        title: '科技数据 - 创新许可',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/kjzy/kjsj/cxxk/index.html'],
        target: '/gov/ah/kjt/kjzy/kjsj/cxxk',
      },
    ],
  },
  'bjedu.gov.cn': {
    _name: '上海市人民政府',
    gh: [
      {
        title: '通用',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/ghsite/:urlPath/index.html', '/ghsite/:urlPath'],
        target: '/gov/beijing/bjedu/gh/:urlPath',
      },
    ],
  },
  'beijing.gov.cn': {
    _name: '上海市人民政府',
    jw: [
      {
        title: '通知公告',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/tzgg'],
        target: '/gov/beijing/jw/tzgg',
      },
    ],
  },
  'caac.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '公众留言',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/HDJL/'],
        target: '/gov/caac/cjwt',
      },
    ],
  },
  'chinatax.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '最新文件',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/*'],
        target: '/gov/chinatax/latest',
      },
    ],
  },
  'cq.gov.cn': {
    _name: '上海市人民政府',
    rlsbj: [
      {
        title: '重庆市人民政府 人力社保局 - 人事考试通知',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/chongqing/rsks',
      },
      {
        title: '重庆市人民政府 人力社保局 - 事业单位公开招聘',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/chongqing/sydwgkzp/:year?',
      },
    ],
  },
  'cmse.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '飞行任务',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/fxrw'],
        target: '/gov/cmse/fxrw',
      },
    ],
  },
  'customs.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '拍卖信息 / 海关法规',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/customs/list',
      },
    ],
  },
  'tqyb.com.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '广东省内城市预警信号',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/gz/weatherAlarm/otherCity/'],
        target: '/gov/guangdong/tqyb/sncsyjxh',
      },
      {
        title: '突发性天气提示',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/gz/weatherAlarm/suddenWeather/'],
        target: '/gov/guangdong/tqyb/tfxtq',
      },
    ],
  },
  'changsha.gov.cn': {
    _name: '上海市人民政府',
    wlwz: [
      {
        title: '长沙市人民政府',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/webapp/cs2020/email/*'],
        target: '/gov/hunan/changsha/major-email',
      },
    ],
  },
  'jiangsu.gov.cn': {
    _name: '上海市人民政府',
    wlt: [
      {
        title: '江苏文旅局审批公告',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/jiangsu/wlt',
      },
    ],
  },
  'jinan.gov.cn': {
    _name: '上海市人民政府',
    jnmhc: [
      {
        title: '获取国家医师资格考试通知',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/*'],
        target: '/gov/jinan/healthcommission/medical_exam_notice',
      },
    ],
  },
  'mee.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '要闻动态',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/ywdt/:category'],
        target: '/gov/mee/ywdt/:category',
      },
    ],
  },
  'mem.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '事故及灾害查处',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/gk/sgcc/:category'],
        target: '/gov/mem/gk/sgcc/:category',
      },
    ],
  },
  'miit.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '文件发布',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/jgsj/:ministry/wjfb/index.html'],
        target: '/gov/miit/wjfb/:ministry',
      },
      {
        title: '意见征集',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/gzcy/yjzj/index.html'],
        target: '/gov/miit/yjzj',
      },
    ],
  },
  'moa.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '中华人民共和国农业农村部 - 新闻',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/moa/:suburl',
      },
    ],
  },
  'moe.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '司局通知',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/s78/:column/tongzhi', '/s78/:column'],
        target: '/gov/moe/s78/:column',
      },
    ],
  },
  'moj.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '立法意见征集',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/lfyjzj/lflfyjzj/*', '/pub/sfbgw/lfyjzj/lflfyjzj/*'],
        target: '/gov/moj/lfyjzj',
      },
    ],
  },
  'nea.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '发展规划司',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/sjzz/ghs/'],
        target: '/gov/nea/sjzz/ghs',
      },
    ],
  },
  'npc.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '通用',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/npc/c2/:caty'],
        target: '/gov/npc/:caty',
      },
    ],
  },
  'pbc.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '沟通交流',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/goutongjiaoliu/113456/113469/index.html'],
        target: '/gov/pbc/goutongjiaoliu',
      },
      {
        title: '工作论文',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/redianzhuanti/118742/4122386/4122692/index.html'],
        target: '/gov/pbc/gzlw',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/redianzhuanti/118742/4122386/4122510/index.html'],
        target: '/gov/pbc/zcyj',
      },
    ],
  },
  'samr.gov.cn': {
    _name: '上海市人民政府',
    xgzlyhd: [
      {
        title: '留言咨询',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/gjjly/index'],
        target: '/gov/samr/xgzlyhd/:category?/:department?',
      },
    ],
  },
  'sh.gov.cn': {
    _name: '上海市人民政府',
    fgw: [
      {
        title: '上海市发展和改革委员会',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/:category'],
        target:
          '/govparams=>{const category=params.category.replace(/\\/index\\.html/,"");return`/gov/sh/fgw${category?`/${category}`:""}`}',
      },
      {
        title: '最新信息公开',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/fgw_zxxxgk/index.html'],
        target: '/gov/sh/fgw/fgw_zxxxgk',
      },
      {
        title: '要闻动态',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/fgw_fzggdt/index.html'],
        target: '/gov/sh/fgw/fgw_fzggdt',
      },
      {
        title: '上海市发展和改革委员会',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/:category'],
        target:
          '/govparams=>{const category=params.category.replace(/\\/index\\.html/,"");return`/gov/sh/fgw${category?`/${category}`:""}`}',
      },
      {
        title: '最新信息公开',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/fgw_zxxxgk/index.html'],
        target: '/gov/sh/fgw/fgw_zxxxgk',
      },
      {
        title: '要闻动态',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/fgw_fzggdt/index.html'],
        target: '/gov/sh/fgw/fgw_fzggdt',
      },
    ],
    rsj: [
      {
        title: '上海市职业能力考试院 考试项目',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/sh/rsj/ksxm',
      },
      {
        title: '上海市职业能力考试院 考试项目',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/shanghai/rsj/ksxm',
      },
    ],
    'wsbs.wgj': [
      {
        title: '上海市文旅局审批公告',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/sh/wgj',
      },
      {
        title: '上海市文旅局审批公告',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/sh/wgj',
      },
    ],
    wsjkw: [
      {
        title: '上海卫健委 疫情通报',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/sh/wsjkw/yqtb',
      },
      {
        title: '上海卫健委 疫情通报',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/shanghai/wsjkw/yqtb',
      },
    ],
  },
  'sz.gov.cn': {
    _name: '上海市人民政府',
    xxgk: [
      {
        title: '深圳市考试院',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/cn/xxgk/zfxxgj/:caty'],
        target: '/gov/shenzhen/hrss/szksy/:caty/:page?',
      },
    ],
    zjj: [
      {
        title: '深圳市住房和建设局',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/xxgk/:caty'],
        target: '/gov/shenzhen/zjj/xxgk/:caty',
      },
    ],
    zzb: [
      {
        title: '深圳市委组织部',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/*'],
        target: '/gov/shenzhen/zzb/:caty/:page?',
      },
    ],
  },
  'mztoday.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '今日绵竹',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/*'],
        target: '/gov/sichuan/deyang/mztoday',
      },
    ],
  },
  'stats.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '国家统计局 通用',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/*path'],
        target: '/gov/gov/stats/*path',
      },
    ],
  },
  'suzhou.gov.cn': {
    _name: '上海市人民政府',
    www: [
      {
        title: '政府信息公开文件',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/szxxgk/front/xxgk_right.jsp', '/'],
        target: '/gov/suzhou/doc',
      },
      {
        title: '政府新闻',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/szsrmzf/:uid/nav_list.shtml'],
        target: '/gov/suzhou/news/:uid',
      },
    ],
  },
  'taiyuan.gov.cn': {
    _name: '上海市人民政府',
    rsj: [
      {
        title: '太原市人力资源和社会保障局政府公开信息',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/*'],
        target: '/gov/taiyuan/rsj/:caty/:page?',
      },
    ],
  },
  'wuhan.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '武汉要闻',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/sy/whyw/', '/whyw', '/'],
        target: '/gov/wuhan/sy/whyw',
      },
    ],
  },
  'zjks.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '通知',
        docs: 'https://docs.rsshub.app/routes/government',
        source: [
          '/zjgwy/website/init.htm',
          '/zjgwy/website/queryDetail.htm',
          '/zjgwy/website/queryMore.htm',
        ],
        target: '/gov/zhejiang/gwy',
      },
    ],
  },
  'www.gov.cn': {
    _name: '上海市人民政府',
    '.': [
      {
        title: '信息稿件',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/zhengce/govall',
      },
      {
        title: '最新政策',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/zhengce/zuixin.htm', '/'],
        target: '/gov/zhengce/zuixin',
      },
      {
        title: '最新政策',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/zhengce/zuixin.htm', '/'],
        target: '/gov/zhengce/:category{.+}?',
      },
      {
        title: '最新文件',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/gov/zhengce/wenjian',
      },
    ],
  },
  'zj.gov.cn': {
    _name: '上海市人民政府',
    search: [
      {
        title: '浙江省人民政府-全省政府网站统一搜索',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/jsearchfront/search.do'],
        target: '/gov/zj/search/:websiteid?/:word/:cateid?',
      },
    ],
  },
  'gq.com': {
    _name: 'GQ',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/gq/news',
      },
    ],
  },
  'greasyfork.org': {
    _name: 'Greasy Fork',
    '.': [
      {
        title: 'Script Feedback',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/:language/scripts/:script/feedback'],
        target: '/greasyfork/scripts/:script/feedback',
      },
      {
        title: 'Script Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/:language', '/:language/scripts/by-site/:domain'],
        target: '/greasyfork/:language/:domain?',
      },
      {
        title: 'Script Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/:language', '/:language/scripts/by-site/:domain'],
        target: '/greasyfork/scripts/sort/:sort/:language?',
      },
      {
        title: 'Script Version History',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/:language/scripts/:script/versions'],
        target: '/greasyfork/scripts/:script/versions',
      },
    ],
  },
  'grist.org': {
    _name: 'Grist',
    '.': [
      {
        title: 'Featured',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/grist/featured',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/articles/'],
        target: '/grist/',
      },
      {
        title: 'Series',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/series/:series'],
        target: '/grist/series/:series',
      },
      {
        title: 'Topic',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:topic'],
        target: '/grist/topic/:topic',
      },
    ],
  },
  'grubstreet.com': {
    _name: 'Grub Street',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/grubstreet/',
      },
    ],
  },
  'guancha.cn': {
    _name: '观察者网',
    '.': [
      {
        title: '头条',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/GuanChaZheTouTiao', '/'],
        target: '/guancha/headline',
      },
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/guancha/:category?',
      },
      {
        title: '观学院',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/guancha/:category?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/guancha/:category?',
      },
    ],
  },
  'guangdiu.com': {
    _name: '逛丢',
    '.': [
      {
        title: '一小时风云榜',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/rank'],
        target: '/guangdiu/rank',
      },
    ],
  },
  'guanhai.com.cn': {
    _name: '观海新闻',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/guanhai/',
      },
    ],
  },
  'guduodata.com': {
    _name: '骨朵数据',
    data: [
      {
        title: '日榜',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/guduodata/daily',
      },
    ],
  },
  'guokr.com': {
    _name: '果壳网',
    '.': [
      {
        title: '果壳网专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:channel'],
        target: '/guokr/column/:channel',
      },
      {
        title: '科学人',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/scientific', '/'],
        target: '/guokr/scientific',
      },
    ],
  },
  'gxmzu.edu.cn': {
    _name: '广西民族大学',
    ai: [
      {
        title: '人工智能学院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index/tzgg.htm', '/'],
        target: '/gxmzu/aitzgg',
      },
    ],
    library: [
      {
        title: '图书馆最新消息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news/news_list.jsp', '/'],
        target: '/gxmzu/libzxxx',
      },
    ],
    yjs: [
      {
        title: '研究生院招生公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg/zsgg.htm', '/'],
        target: '/gxmzu/yjszsgg',
      },
    ],
  },
  'gzhu.edu.cn': {
    _name: '广州大学',
    yjsy: [
      {
        title: '研究生院招生动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zsxx/zsdt/zsdt.htm', '/'],
        target: '/gzhu/yjs',
      },
    ],
  },
  'ycombinator.com': {
    _name: 'Hacker News',
    news: [
      {
        title: '用户',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:section', '/'],
        target: '/hackernews/:section?/:type?/:user?',
      },
    ],
  },
  'hackertalk.net': {
    _name: 'HACKER TALK 黑客说',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/hackertalk/',
      },
    ],
  },
  'hacking8.com': {
    _name: 'Hacking8',
    '.': [
      {
        title: '信息流',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/index/:category', '/'],
        target: '/hacking8/:category?',
      },
      {
        title: '搜索',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/index/:category', '/'],
        target: '/hacking8/:category?',
      },
    ],
  },
  'hackyournews.com': {
    _name: 'HackYourNews',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/hackyournews/',
      },
    ],
  },
  'hakkatv.org.tw': {
    _name: '客家電視台',
    '.': [
      {
        title: '新聞首頁',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news'],
        target: '/hakkatv/news',
      },
    ],
  },
  'syosetu.org': {
    _name: 'hameln',
    '.': [
      {
        title: 'chapter',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/novel/:id'],
        target: '/hameln/chapter/:id',
      },
    ],
  },
  'harvard.edu': {
    _name: 'Harvard Health Publishing',
    'www.health': [
      {
        title: 'Health Blog',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog'],
        target: '/harvard/health/blog',
      },
    ],
  },
  'hashnode.dev': {
    _name: 'hashnode',
    '.': [
      {
        title: '用户博客',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/hashnode/blog/:username',
      },
    ],
  },
  'hbooker.com': {
    _name: '欢乐书客',
    '.': [
      {
        title: '章节',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/book/:id'],
        target: '/hbooker/chapter/:id',
      },
    ],
  },
  'hbr.org': {
    _name: 'Harvard Business Review',
    '.': [
      {
        title: 'Topic',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topic/:topic', '/'],
        target: '/hbr/topic/:topic?/:type?',
      },
    ],
  },
  'hdu.edu.cn': {
    _name: '杭州电子科技大学',
    computer: [
      {
        title: '计算机学院 - 通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/6738/list.htm'],
        target: '/hdu/cs',
      },
      {
        title: '计算机学院 - 研究生通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/6769/list.htm'],
        target: '/hdu/cs/pg',
      },
    ],
  },
  'hebtv.com': {
    _name: '河北网络广播电视台',
    'web.cmc': [
      {
        title: '农博士在行动',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/cms/rmt0336/19/19js/st/ds/nmpd/nbszxd/index.shtml'],
        target: '/hebtv/nbszxd',
      },
    ],
  },
  'hellobtc.com': {
    _name: '白话区块链',
    '.': [
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news'],
        target: '/hellobtc/news',
      },
    ],
  },
  'hex-rays.com': {
    _name: 'Hex-Rays',
    '.': [
      {
        title: 'Hex-Rays News',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/', '/blog'],
        target: '/hex-rays/news',
      },
    ],
  },
  'hicairo.com': {
    _name: "HiFeng'Blog",
    '.': [
      {
        title: '最近发表',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/hicairo/',
      },
    ],
  },
  'hinatazaka46.com': {
    _name: 'Sakamichi Series 坂道系列官网资讯',
    '.': [
      {
        title: 'Hinatazaka46 News 日向坂 46 新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/s/official/news/list', '/'],
        target: '/hinatazaka46/news',
      },
    ],
  },
  'hit.edu.cn': {
    _name: '哈尔滨工业大学',
    hitgs: [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/*'],
        target: '/hit/hitgs',
      },
    ],
    jwc: [
      {
        title: '教务处通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/*'],
        target: '/hit/jwc',
      },
    ],
    today: [
      {
        title: '今日哈工大',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/category/:category'],
        target: '/hit/today/:category',
      },
    ],
  },
  'hitcon.org': {
    _name: 'HITCON',
    zeroday: [
      {
        title: '漏洞',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/vulnerability/:status'],
        target: '/hitcon/zeroday/vulnerability/:status?',
      },
    ],
  },
  'hitwh.edu.cn': {
    _name: '哈尔滨工业大学（威海）',
    '.': [
      {
        title: '今日工大 - 通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/1024/list.htm', '/'],
        target: '/hitwh/today',
      },
    ],
  },
  'hizh.cn': {
    _name: '珠海网',
    '.': [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/hizu/:column?',
      },
    ],
  },
  'hk01.com': {
    _name: '香港 01',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/channel/:id', '/'],
        target: '/hk01/channel/:id?',
      },
      {
        title: '热门',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/hot', '/'],
        target: '/hk01/hot',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/issue/:id', '/'],
        target: '/hk01/issue/:id?',
      },
      {
        title: '即時',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest', '/'],
        target: '/hk01/latest',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tag/:id', '/'],
        target: '/hk01/tag/:id?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/zone/:id', '/'],
        target: '/hk01/zone/:id?',
      },
    ],
  },
  'hkej.com': {
    _name: '信报财经新闻',
    '.': [
      {
        title: '即时新闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/hkej/:category?',
      },
    ],
  },
  'hkepc.com': {
    _name: 'HKEPC',
    '.': [
      {
        title: 'HKEPC 电脑领域',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/hkepc/:category?',
      },
    ],
  },
  'hket.com': {
    _name: '香港经济日报',
    www: [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/hket/:category?',
      },
    ],
  },
  'hkjunkcall.com': {
    _name: 'HKJunkCall 資訊中心',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/hkjunkcall/',
      },
    ],
  },
  'voc.com.cn': {
    _name: '湖南日报',
    '.': [
      {
        title: '电子刊物',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/hnrb/:id',
      },
    ],
  },
  'edu.cnundefined': {
    _name: '湖南大学',
    'scc.hnu': [
      {
        title: '校园招聘',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/hnu/careers',
      },
    ],
  },
  'dh.gov.hk': {
    _name: 'Hong Kong Department of Health 香港卫生署',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/hongkong/chp/:category?/:language?',
      },
      {
        title: 'Press Release',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/hongkong/dh/:language?',
      },
    ],
  },
  'hotukdeals.com': {
    _name: 'hotukdeals',
    www: [
      {
        title: 'hottest',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/hotukdeals/hottest',
      },
    ],
  },
  'houxu.app': {
    _name: '后续',
    '.': [
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/events', '/'],
        target: '/houxu/events',
      },
      {
        title: '热点',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/houxu/',
      },
      {
        title: 'Live',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/lives/:id', '/'],
        target: '/houxu/lives/:id',
      },
      {
        title: '跟踪',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/memory', '/'],
        target: '/houxu/memory',
      },
    ],
  },
  'howtoforge.com': {
    _name: 'Howtoforge Linux Tutorials',
    '.': [
      {
        title: 'Tutorials',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/'],
        target: '/howtoforge/',
      },
    ],
  },
  'hpoi.net': {
    _name: 'Hpoi 手办维基',
    www: [
      {
        title: '所有周边',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/hobby/all'],
        target: '/hpoi/items/all',
      },
      {
        title: '热门推荐',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/bannerItem/list'],
        target: '/hpoi/bannerItem',
      },
    ],
  },
  'hrbeu.edu.cn': {
    _name: '哈尔滨工程大学',
    job: [
      {
        title: '大型招聘会',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/*'],
        target: '/hrbeu/job/bigemploy',
      },
      {
        title: '就业服务平台',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/*'],
        target: '/hrbeu/job/calendar',
      },
    ],
    uae: [
      {
        title: '水声工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id.htm'],
        target: '/hrbeu/uae/:id',
      },
    ],
    ugs: [
      {
        title: '本科生院工作通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:author/list.htm'],
        target: '/hrbeu/ugs/news/:author',
      },
    ],
    yjsy: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/hrbeu/yjsy/list/:id',
      },
    ],
  },
  'huanqiu.com': {
    _name: '环球网',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/huanqiu/news/:category?',
      },
    ],
  },
  'hubu.edu.cn': {
    _name: '湖北大学',
    '.': [
      {
        title: '通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index/tzgg.htm'],
        target: '/hubu/www/index/tzgg',
      },
      {
        title: '学术预告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index/xsyg.htm'],
        target: '/hubu/www/index/xsyg',
      },
    ],
    zhxy: [
      {
        title: '通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index/tzgg.htm'],
        target: '/hubu/zhxy/index/tzgg',
      },
      {
        title: '新闻动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index/xwdt.htm'],
        target: '/hubu/zhxy/index/xwdt',
      },
      {
        title: '人才培养',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/rcpy.htm'],
        target: '/hubu/zhxy/rcpy',
      },
      {
        title: '人才培养 - 本科生教育',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/rcpy/bksjy.htm'],
        target: '/hubu/zhxy/rcpy/bksjy',
      },
      {
        title: '人才培养 - 研究生教育',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/rcpy/yjsjy.htm'],
        target: '/hubu/zhxy/rcpy/yjsjy',
      },
      {
        title: '人才培养 - 招生与就业',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/rcpy/zsyjy/zsxx.htm'],
        target: '/hubu/zhxy/rcpy/zsyjy/zsxx',
      },
      {
        title: '学科建设',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xkjianshe/zdxk.htm'],
        target: '/hubu/zhxy/xkjianshe/zdxk',
      },
      {
        title: '学科建设 - 重点学科',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xkjianshe/zdxk.htm'],
        target: '/hubu/zhxy/xkjianshe/zdxk',
      },
      {
        title: '学科建设 - 硕士点',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xkjianshe/ssd.htm'],
        target: '/hubu/zhxy/xkjianshe/ssd',
      },
      {
        title: '学科建设 - 博士点',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xkjianshe/bsd.htm'],
        target: '/hubu/zhxy/xkjianshe/bsd',
      },
      {
        title: '科研服务',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/kyfw.htm'],
        target: '/hubu/zhxy/kyfw',
      },
      {
        title: '科研服务 - 科研动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/kyfw/kydongt.htm'],
        target: '/hubu/zhxy/kyfw/kydongt',
      },
      {
        title: '科研服务 - 学术交流',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/kyfw/xsjl.htm'],
        target: '/hubu/zhxy/kyfw/xsjl',
      },
      {
        title: '科研服务 - 科研平台',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/kyfw/keyapt.htm'],
        target: '/hubu/zhxy/kyfw/keyapt',
      },
      {
        title: '科研服务 - 社会服务',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/kyfw/shfuw.htm'],
        target: '/hubu/zhxy/kyfw/shfuw',
      },
      {
        title: '党群工作',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/dqgz.htm'],
        target: '/hubu/zhxy/dqgz',
      },
      {
        title: '党群工作 - 党建工作',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/dqgz/djgz/jgdj.htm'],
        target: '/hubu/zhxy/dqgz/djgz/jgdj',
      },
      {
        title: '党群工作 - 工会工作',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/dqgz/ghgon.htm'],
        target: '/hubu/zhxy/dqgz/ghgon',
      },
    ],
  },
  'huggingface.co': {
    _name: 'Huggingface',
    '.': [
      {
        title: '中文博客',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blog/zh', '/'],
        target: '/huggingface/blog-zh',
      },
      {
        title: 'Daily Papers',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/papers', '/'],
        target: '/huggingface/daily-papers',
      },
    ],
  },
  'hunanpea.com': {
    _name: '湖南人事考试网',
    rsks: [
      {
        title: '公告',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/Category/:guid/ArticlesByCategory.do'],
        target: '/hunanpea/rsks/:guid',
      },
    ],
  },
  'hunau.edu.cn': {
    _name: '湖南农业大学',
    xky: [
      {
        title: '国际交流与合作处、国际教育学院、港澳台事务办公室',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/', '/:category'],
        target: '/hunau/:category',
      },
      {
        title: '教务处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/', '/:category'],
        target: '/hunau/:category',
      },
      {
        title: '公共管理与法学学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/', '/:category'],
        target: '/hunau/:category',
      },
      {
        title: '信息与智能科学学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/', '/:category'],
        target: '/hunau/:category',
      },
    ],
  },
  'hupu.com': {
    _name: '虎扑',
    m: [
      {
        title: '热帖',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category', '/'],
        target: '/hupu/:category',
      },
      {
        title: '社区',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category', '/'],
        target: '/hupu/:category',
      },
      {
        title: '社区',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category', '/'],
        target: '/hupu/:category',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category', '/'],
        target: '/hupu/:category',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category', '/'],
        target: '/hupu/:category',
      },
    ],
  },
  'hust.edu.cn': {
    _name: '华中科技大学',
    gszs: [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zsxx/ggtz.htm', '/'],
        target: '/hust/yjs',
      },
    ],
    aia: [
      {
        title: '人工智能和自动化学院新闻',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xyxw.htm', '/'],
        target: '/hust/aia/news',
      },
      {
        title: '人工智能和自动化学院新闻',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xyxw.htm', '/'],
        target: '/hust/auto/news',
      },
    ],
  },
  'huxiu.com': {
    _name: '虎嗅',
    '.': [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/article'],
        target: '/huxiu/article',
      },
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/article'],
        target: '/huxiu/channel/:id?',
      },
      {
        title: '24 小时',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/moment'],
        target: '/huxiu/moment',
      },
      {
        title: '搜索',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/huxiu/search/:keyword',
      },
    ],
  },
  'arknights.jp': {
    _name: '鹰角网络',
    ak: [
      {
        title: 'アークナイツ (日服新闻)',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news', '/'],
        target: '/hypergryph/arknights/japan',
      },
    ],
  },
  'hypergryph.com': {
    _name: '鹰角网络',
    'ak-conf': [
      {
        title: '明日方舟 - 游戏公告与新闻',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news'],
        target: '/hypergryph/arknights/news/:group?',
      },
    ],
  },
  'icac.org.hk': {
    _name: 'Hong Kong Independent Commission Against Corruption 香港廉政公署',
    '.': [
      {
        title: 'Press Releases',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/:lang/press/index.html'],
        target: '/icac/news/:lang',
      },
    ],
  },
  'icbc.com.cn': {
    _name: '中国工商银行',
    '.': [
      {
        title: '外汇牌价',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/column/1438058341489590354.html'],
        target: '/icbc/whpj',
      },
    ],
  },
  'idai.ly': {
    _name: 'iDaily',
    '.': [
      {
        title: '每日环球视野',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/idaily/:language?',
      },
    ],
  },
  'idolypride.jp': {
    _name: 'IDOLY PRIDE 偶像荣耀',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/news'],
        target: '/idolypride/news',
      },
    ],
  },
  'ieee-security.org': {
    _name: 'IEEE Computer Society',
    '.': [
      {
        title: 'IEEE Symposium on Security and Privacy',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/TC/SP-Index.html', '/'],
        target: '/ieee-security/security-privacy',
      },
    ],
  },
  'iehou.com': {
    _name: '网猴线报',
    '.': [
      {
        title: '最新线报',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/iehou/',
      },
      {
        title: '24小时热门',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/page-dayhot.htm'],
        target: '/iehou/dayhot',
      },
      {
        title: '一周热门',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/page-weekhot.htm'],
        target: '/iehou/weekhot',
      },
    ],
  },
  'neea.cn': {
    _name: 'IELTS 雅思',
    ielts: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/allnews'],
        target: '/ielts/',
      },
    ],
    jlpt: [
      {
        title: '教育部考试中心日本语能力测试重要通知',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/'],
        target: '/neea/jlpt',
      },
    ],
  },
  'iiilab.com': {
    _name: '人人都是自媒体',
    www: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/iiilab/',
      },
    ],
  },
  'ikea.cn': {
    _name: 'IKEA',
    '.': [
      {
        title: '中国 - 会员特惠',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/cn/zh/offers/family-offers', '/'],
        target: '/ikea/cn/family_offers',
      },
      {
        title: '中国 - 低价优选',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: [
          '/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40',
          '/',
        ],
        target: '/ikea/cn/low_price',
      },
      {
        title: '中国 - 当季新品推荐',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/cn/zh/new/', '/'],
        target: '/ikea/cn/new',
      },
    ],
  },
  'ikea.com': {
    _name: 'IKEA',
    '.': [
      {
        title: 'UK - New Product Release',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/gb/en/new/new-products/', '/'],
        target: '/ikea/gb/new',
      },
      {
        title: 'UK - Offers',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/gb/en/offers', '/'],
        target: '/ikea/gb/offer',
      },
    ],
  },
  'imagemagick.org': {
    _name: 'ImageMagick',
    '.': [
      {
        title: 'Changelog',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/script/download.php', '/script', '/'],
        target: '/imagemagick/changelog',
      },
    ],
  },
  'imdb.com': {
    _name: 'IMDb',
    www: [
      {
        title: 'Charts',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/chart/:chart/'],
        target: '/imdb/chart/:chart?',
      },
    ],
  },
  'imiker.com': {
    _name: '米课',
    '.': [
      {
        title: '米课圈精华',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/explore/find'],
        target: '/imiker/ask/jinghua',
      },
    ],
  },
  'indiansinkuwait.com': {
    _name: 'Indians in Kuwait',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/latest-news', '/'],
        target: '/indiansinkuwait/latest',
      },
    ],
  },
  'indienova.com': {
    _name: 'indienova 独立游戏',
    '.': [
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/column/:columnId'],
        target: '/indienova/column/:columnId',
      },
      {
        title: '会员开发游戏库',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/usergames', '/'],
        target: '/indienova/usergames',
      },
    ],
  },
  'inewsweek.cn': {
    _name: '中国新闻周刊',
    '.': [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:channel', '/'],
        target: '/inewsweek/:channel',
      },
    ],
  },
  'infoq.cn': {
    _name: 'InfoQ 中文',
    '.': [
      {
        title: '推荐',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/infoq/recommend',
      },
      {
        title: '话题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topic/:id'],
        target: '/infoq/topic/:id',
      },
    ],
  },
  'informedainews.com': {
    _name: 'Informed AI News',
    '.': [
      {
        title: '知闻AI',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/', '/zh-Hans/docs/:type', '/docs/:type'],
        target: '/informedainews/zh-Hans/docs/:type',
      },
    ],
  },
  'infzm.com': {
    _name: 'infzm',
    '.': [
      {
        title: '频道',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/contents'],
        target:
          '/infzm(_,url)=>url?`/infzm/${url.match(/contents\\?term_id=(\\d*)/)?.[1]}`:""',
      },
    ],
  },
  'instructables.com': {
    _name: 'Instructables',
    '.': [
      {
        title: 'Projects',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/projects'],
        target: '/instructables/projects',
      },
    ],
  },
  'ippa.top': {
    _name: '子方有料',
    '.': [
      {
        title: '最新文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/ippa/',
      },
    ],
  },
  'iqiyi.com': {
    _name: '爱奇艺',
    '.': [
      {
        title: '用户视频',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/u/:uid/*'],
        target: '/iqiyi/user/video/:uid',
      },
    ],
  },
  'iqnew.com': {
    _name: '爱 Q 生活网',
    '.': [
      {
        title: '最近更新',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/post/new_100/', '/'],
        target: '/iqnew/latest',
      },
    ],
  },
  'iresearch.com.cn': {
    _name: '艾瑞',
    www: [
      {
        title: '产业研究报告',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/report.shtml'],
        target: '/iresearch/report',
      },
    ],
  },
  'itc.cn': {
    _name: 'Open Github社区',
    open: [
      {
        title: '合集',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/itc/collection/:colType',
      },
    ],
  },
  'itch.io': {
    _name: 'itch.io',
    '.': [
      {
        title: 'Posts',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/t/:topic/:id'],
        target: '/itch/posts/:topic/:id',
      },
    ],
  },
  'ithome.com': {
    _name: 'iThome 台灣',
    '.': [
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tag/:name'],
        target: '/ithome/tag/:name',
      },
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/zt/:id'],
        target: '/ithome/zt/:id',
      },
    ],
  },
  'ithome.com.tw': {
    _name: 'iThome 台灣',
    www: [
      {
        title: 'Feeds',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category', '/:category/feeds'],
        target: '/ithome/tw/feeds/:category',
      },
    ],
  },
  'iwara.tv': {
    _name: 'iwara',
    ecchi: [
      {
        title: 'User Subscriptions',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/iwara/subscriptions',
      },
    ],
  },
  'ixigua.com': {
    _name: '西瓜视频',
    '.': [
      {
        title: '用户视频投稿',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/home/:uid'],
        target: '/ixigua/user/video/:uid',
      },
    ],
  },
  'javbus.com': {
    _name: 'JavBus',
    www: [
      {
        title: 'Works',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/:path*'],
        target: '/javbus/:path',
      },
    ],
  },
  'javdb.com': {
    _name: 'JavDB',
    '.': [
      {
        title: '演員',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/actors/:id/:filter?',
      },
      {
        title: '主页',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/home/:category?/:sort?/:filter?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/lists/:id/:filter?/:sort?',
      },
      {
        title: '片商',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/makers/:id/:filter?',
      },
      {
        title: '排行榜',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/rankings/:category?/:time?',
      },
      {
        title: '搜索',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/search/:keyword?/:filter?/:sort?',
      },
      {
        title: '系列',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/series/:id/:filter?',
      },
      {
        title: '分類',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/tags/:query?/:category?',
      },
      {
        title: '番号',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/javdb/video_codes/:code/:filter?',
      },
    ],
  },
  'jianshu.com': {
    _name: '简书',
    www: [
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/c/:id'],
        target: '/jianshu/collection/:id',
      },
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/'],
        target: '/jianshu/home',
      },
      {
        title: '作者',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/u/:id'],
        target: '/jianshu/user/:id',
      },
    ],
  },
  'jiaoliudao.com': {
    _name: '交流岛资源网',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/jiaoliudao/',
      },
    ],
  },
  'okjike.com': {
    _name: '即刻',
    web: [
      {
        title: '圈子 - 纯文字',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/topic/:id'],
        target: '/jike/topic/text/:id',
      },
      {
        title: '圈子',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/topic/:id'],
        target: '/jike/topic/:id',
      },
      {
        title: '用户动态',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/u/:uid'],
        target: '/jike/user/:uid',
      },
    ],
  },
  'jin10.com': {
    _name: '金十数据',
    '.': [
      {
        title: '市场快讯',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/jin10/:important?',
      },
    ],
    xnews: [
      {
        title: '主题文章',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/topic/:id'],
        target: '/jin10/topic/:id',
      },
    ],
  },
  'jingzhengu.com': {
    _name: '精真估',
    www: [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/jingzhengu/news',
      },
    ],
  },
  'jisilu.cn': {
    _name: '集思录',
    '.': [
      {
        title: '广场',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/home/explore', '/explore', '/'],
        target: '/jisilu/:category?/:sort?/:day?',
      },
    ],
  },
  'jiuyangongshe.com': {
    _name: '韭研公社',
    www: [
      {
        title: '社群',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/jiuyangongshe/community',
      },
    ],
  },
  'jlu.edu.cn': {
    _name: '吉林大学',
    jwc: [
      {
        title: '教务通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/index.htm'],
        target: '/jlu/jwc',
      },
    ],
    ccst: [
      {
        title: '吉林大学计算机科学与技术学院 - 新闻中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: [
          '/xwzx/gsl.htm',
          '/xwzx/xstd.htm',
          '/xwzx/xytz.htm',
          '/xwzx/xyxw.htm',
          '/xwzx/zsjy.htm',
        ],
        target: '/jlu/ccst/xwzx/:category',
      },
    ],
  },
  'jou.edu.cn': {
    _name: '江苏海洋大学',
    www: [
      {
        title: '官网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index/tzgg.htm', '/'],
        target: '/jou/tzgg',
      },
    ],
    yz: [
      {
        title: '研招网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index/zxgg.htm', '/'],
        target: '/jou/yztzgg',
      },
    ],
  },
  '12356782.xyz': {
    _name: '极品性感美女',
    www: [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/:tab'],
        target: '/jpxgmn/:tab',
      },
      {
        title: '本周热门',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/jpxgmn/weekly',
      },
    ],
  },
  'jseea.cn': {
    _name: 'Unknown',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/webfile/news/:type'],
        target: '/jseea/news/:type',
      },
    ],
  },
  'juejin.cn': {
    _name: '掘金',
    '.': [
      {
        title: '小册',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/books'],
        target: '/juejin/books',
      },
      {
        title: '单个收藏夹',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/collection/:collectionId'],
        target: '/juejin/collection/:collectionId',
      },
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/column/:id'],
        target: '/juejin/column/:id',
      },
      {
        title: '收藏集',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/user/:id', '/user/:id/collections'],
        target: '/juejin/collections/:id',
      },
      {
        title: '用户文章',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/user/:id', '/user/:id/posts'],
        target: '/juejin/posts/:id',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/tag/:tag'],
        target: '/juejin/tag/:tag',
      },
    ],
  },
  'kadokawa.com.tw': {
    _name: '台灣角川',
    '.': [
      {
        title: '角編新聞台',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog/posts'],
        target: '/kadokawa/blog',
      },
    ],
  },
  'kaopu.news': {
    _name: '靠谱新闻',
    '.': [
      {
        title: '全部',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/kaopu/news/:language?',
      },
    ],
  },
  'kbs.co.kr': {
    _name: 'KBS',
    world: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/kbs/news',
      },
      {
        title: 'Today',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/kbs/today',
      },
    ],
  },
  'kcna.kp': {
    _name: 'Korean Central News Agency (KCNA) 朝鲜中央通讯社',
    www: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: [
          '/:lang',
          '/:lang/category/articles/q/1ee9bdb7186944f765208f34ecfb5407.kcmsf',
          '/:lang/category/articles.kcmsf',
        ],
        target: '/kcna/:lang',
      },
    ],
  },
  'ke.com': {
    _name: '贝壳研究院',
    'www.research': [
      {
        title: '研究成果',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/researchResults'],
        target: '/ke/researchResults',
      },
    ],
  },
  'gotokeep.com': {
    _name: 'Keep',
    '.': [
      {
        title: '运动日记',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/users/:id'],
        target: '/keep/user/:id',
      },
    ],
  },
  'kemono.su': {
    _name: 'Kemono',
    '.': [
      {
        title: 'Posts',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:source/user/:id', '/'],
        target: '/kemono/:source?/:id?',
      },
    ],
  },
  'kepu.net.cn': {
    _name: '中国科普博览',
    live: [
      {
        title: '直播回看',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/replay/index'],
        target: '/kepu/live',
      },
    ],
  },
  'keylol.com': {
    _name: '其乐',
    '.': [
      {
        title: '论坛',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:path'],
        target: '/keylol(params,url)=>url.replaceAll("forum.php?","")',
      },
    ],
  },
  'kimlaw.or.kr': {
    _name: 'The Korea Institute of Marine Law',
    '.': [
      {
        title: 'Thesis',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/67', '/'],
        target: '/kimlaw/thesis',
      },
    ],
  },
  'konghq.com': {
    _name: 'Kong API 网关平台',
    '.': [
      {
        title: '博客最新文章',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blog/*'],
        target: '/konghq/blog-posts',
      },
    ],
  },
  'kpmg.com': {
    _name: 'KPMG',
    '.': [
      {
        title: 'Insights',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/xx/en/home/insights.html'],
        target: '/kpmg/insights/en',
      },
      {
        title: 'Insights',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/cn/zh/home/insights.html'],
        target: '/kpmg/insights/zh',
      },
    ],
  },
  'kuaidi100.com': {
    _name: '快递 100',
    '.': [
      {
        title: '支持的快递公司列表',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/kuaidi100/company',
      },
    ],
  },
  'kunchengblog.com': {
    _name: 'Kun Cheng',
    '.': [
      {
        title: 'Essay',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/essay'],
        target: '/kunchengblog/essay',
      },
    ],
  },
  'kuwaitlocal.com': {
    _name: 'Kuwait Local',
    '.': [
      {
        title: 'Categorised News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/news/categories/:category'],
        target: '/kuwaitlocal/:category',
      },
    ],
  },
  'laimanhua8.com': {
    _name: '来漫画',
    www: [
      {
        title: '漫画列表',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/kanmanhua/:id'],
        target: '/laimanhua/:id',
      },
    ],
  },
  'lala.im': {
    _name: '荒岛',
    '.': [
      {
        title: '最新发布',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/lala/',
      },
    ],
  },
  'lang.live': {
    _name: '浪 Play 直播',
    '.': [
      {
        title: '直播间开播',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/room/:id'],
        target: '/lang/live/room/:id',
      },
    ],
  },
  'lanqiao.cn': {
    _name: '蓝桥云课',
    '.': [
      {
        title: '作者发布的课程',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/users/:uid'],
        target: '/lanqiao/author/:uid',
      },
      {
        title: '技术社区',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/questions/', '/questions/topics/:id'],
        target: '/lanqiao/questions/:id',
      },
    ],
  },
  'laohu8.com': {
    _name: '老虎社区',
    '.': [
      {
        title: '个人主页',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/personal/:id'],
        target: '/laohu8/personal/:id',
      },
    ],
  },
  'layoffs.fyi': {
    _name: 'Layoffs.fyi',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/layoffs/',
      },
    ],
  },
  'learnku.com': {
    _name: 'LearnKu',
    '.': [
      {
        title: '社区',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:community'],
        target: '/learnku/:community',
      },
    ],
  },
  'leetcode.com': {
    _name: 'LeetCode',
    '.': [
      {
        title: 'Articles',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/articles'],
        target: '/leetcode/articles',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/leetcode/dailyquestion/en',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/leetcode/dailyquestion/solution/en',
      },
    ],
  },
  'leetcode.cn': {
    _name: 'LeetCode',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/leetcode/dailyquestion/cn',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/leetcode/dailyquestion/solution/cn',
      },
    ],
  },
  'leiphone.com': {
    _name: '雷峰网',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/leiphone/:do?/:keyword?',
      },
      {
        title: '业界资讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/leiphone/newsflash',
      },
    ],
  },
  'iyingdi.com': {
    _name: '旅法师营地',
    www: [
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/lfsyd/home',
      },
      {
        title: '首页（旧版）',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/lfsyd/old_home',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/tz/people/:id', '/tz/people/:id/*'],
        target: '/lfsyd/user/:id',
      },
    ],
    mob: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/fine/:tagId'],
        target: '/lfsyd/tag/:tagId',
      },
    ],
  },
  'lianxh.cn': {
    _name: '连享会',
    www: [
      {
        title: '精彩资讯',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blogs/all.html', '/'],
        target: '/lianxh/:category?',
      },
    ],
  },
  'lifeweek.com.cn': {
    _name: '三联生活周刊',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/column/:channel'],
        target: '/lifeweek/channel/:channel',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/articleList/:tag'],
        target: '/lifeweek/tag/:tag',
      },
    ],
  },
  'lightnovel.us': {
    _name: '轻之国度',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/lightnovel/:keywords/:security_key',
      },
    ],
  },
  'line.me': {
    _name: 'LINE',
    today: [
      {
        title: 'TODAY - Channel',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:edition/v2/publisher/:id'],
        target: '/line/today/:edition/publisher/:id',
      },
      {
        title: 'TODAY',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/line/today/:edition?/:tab?',
      },
    ],
  },
  'linkedin.com': {
    _name: 'LinkedIn 领英',
    www: [
      {
        title: 'Jobs',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/jobs/search'],
        target:
          '/linkedin(params,url)=>{const searchParams=new URLSearchParams(new URL(url).search);const fJT=(0,import_utils.parseRouteParam)(searchParams.get("f_JT"));const fE=(0,import_utils.parseRouteParam)(searchParams.get("f_E"));const keywords=encodeURIComponent(searchParams.get("keywords")||"");const newSearchParams=new URLSearchParams;for(const[key,value]of searchParams.entries()){if(!["f_JT","f_E","keywords"].includes(key)){newSearchParams.append(key,value)}}return`/linkedin/jobs/${fJT}/${fE}/${keywords}/?${newSearchParams.toString()}`}',
      },
    ],
  },
  'linovelib.com': {
    _name: '哔哩轻小说',
    www: [
      {
        title: '卷',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/novel/:id/catalog'],
        target: '/linovelib/volume/:id',
      },
    ],
  },
  'liquipedia.net': {
    _name: 'Liquipedia',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/counterstrike/:id/Matches', '/dota2/:id'],
        target: '/liquipedia/counterstrike/matches/:id',
      },
      {
        title: 'Dota2 战队最近比赛结果',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/dota2/:id'],
        target: '/liquipedia/dota2/matches/:id',
      },
    ],
  },
  'literotica.com': {
    _name: 'Literotica',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/c/:category', '/'],
        target: '/literotica/category/:category',
      },
      {
        title: 'New Stories',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/'],
        target: '/literotica/new',
      },
    ],
  },
  'liveuamap.com': {
    _name: 'Live Universal Awareness Map',
    '.': [
      {
        title: '实时消息',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:region*'],
        target: '/liveuamap/:region',
      },
    ],
  },
  'lkong.com': {
    _name: '龙空',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/forum/:id', '/'],
        target: '/lkong/forum/:id?/:digest?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/thread/:id', '/'],
        target: '/lkong/thread/:id',
      },
    ],
  },
  'logonews.cn': {
    _name: 'LogoNews 标志情报局',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/work/tags/:tag'],
        target: '/logonews/work/tags/:tag',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/work/tags/:tag'],
        target: '/logonews/tag/:tag',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/work/tags/:tag'],
        target: '/logonews*',
      },
    ],
  },
  'loongarch.org': {
    _name: 'LA UOSC社区',
    bbs: [
      {
        title: '最热 / 最新帖子',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/loongarch/post/:type?',
      },
    ],
  },
  'lovelive-anime.jp': {
    _name: 'lovelive-anime',
    www: [
      {
        title: 'Love Live! Official Website Latest NEWS',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/', '/news'],
        target: '/lovelive-anime/news',
      },
    ],
  },
  'lrepacks.net': {
    _name: 'REPACK скачать',
    '.': [
      {
        title: 'REPACK скачать',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/:category'],
        target:
          '/lrepacksparams=>{const category=params.category;return`/lrepacks${category?`/${category}`:""}`}',
      },
      {
        title: 'Новые репаки на сегодня',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/novye-repaki-elchupacabra/'],
        target: '/lrepacks/novye-repaki-elchupacabra',
      },
      {
        title: 'Системные программы',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/repaki-sistemnyh-programm/'],
        target: '/lrepacks/repaki-sistemnyh-programm',
      },
      {
        title: 'Программы для графики',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/repaki-programm-dlya-grafiki/'],
        target: '/lrepacks/repaki-programm-dlya-grafiki',
      },
      {
        title: 'Программы для интернета',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/repaki-programm-dlya-interneta/'],
        target: '/lrepacks/repaki-programm-dlya-interneta',
      },
      {
        title: 'Мультимедиа программы',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/repaki-multimedia-programm/'],
        target: '/lrepacks/repaki-multimedia-programm',
      },
      {
        title: 'Программы для офиса',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/repaki-programm-dlya-ofisa/'],
        target: '/lrepacks/repaki-programm-dlya-ofisa',
      },
      {
        title: 'Разные программы',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/repaki-raznyh-programm/'],
        target: '/lrepacks/repaki-raznyh-programm',
      },
      {
        title: 'Системные библиотеки',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/sistemnye-biblioteki/'],
        target: '/lrepacks/sistemnye-biblioteki',
      },
      {
        title: 'Важная информация',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/informaciya/'],
        target: '/lrepacks/informaciya',
      },
    ],
  },
  'lsnu.edu.cn': {
    _name: '乐山师范学院',
    '.': [
      {
        title: '教学部通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/lsnu/jiaowc/tzgg',
      },
    ],
  },
  'luogu.com.cn': {
    _name: '洛谷',
    '.': [
      {
        title: '比赛列表',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/contest/list', '/'],
        target: '/luogu/contest',
      },
      {
        title: '日报',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/discuss/47327', '/'],
        target: '/luogu/daily',
      },
      {
        title: '用户博客',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blog/:name'],
        target: '/luogu/user/blog/:name',
      },
      {
        title: '用户动态',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/user/:uid'],
        target: '/luogu/user/feed/:uid',
      },
    ],
  },
  'luolei.org': {
    _name: '罗磊的独立博客',
    '.': [
      {
        title: '罗磊的独立博客',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/luolei/',
      },
    ],
  },
  'luxiangdong.com': {
    _name: '土猛的员外',
    '.': [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/luxiangdong/archive',
      },
    ],
  },
  'lxixsxa.com': {
    _name: 'LiSA',
    www: [
      {
        title: 'Latest Discography',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/', '/discography'],
        target: '/lxixsxa/disco',
      },
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/', '/info'],
        target: '/lxixsxa/info',
      },
    ],
  },
  'macfilos.com': {
    _name: 'Macfilos',
    '.': [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog', '/'],
        target: '/macfilos/blog',
      },
    ],
  },
  'macupdate.com': {
    _name: 'MacUpdate',
    '.': [
      {
        title: 'Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/app/mac/:appId/:appSlug'],
        target: '/macupdate/app/:appId/:appSlug?',
      },
    ],
  },
  'magnumphotos.com': {
    _name: 'Magnum Photos',
    '.': [
      {
        title: 'Magazine',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/magnumphotos/magazine',
      },
    ],
  },
  'mangadex.org': {
    _name: 'MangaDex',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/title/:id/*', '/title/:id'],
        target: '/mangadex/:id',
      },
    ],
  },
  'mhgui.com': {
    _name: '看漫画',
    www: [
      {
        title: '漫画更新',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/comic/:id/'],
        target: '/manhuagui/comic/:id',
      },
      {
        title: '漫画更新',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/comic/:id/'],
        target: '/manhuagui/comic/:id',
      },
      {
        title: '漫画个人订阅',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/user/book/shelf'],
        target: '/manhuagui/subscribe',
      },
    ],
  },
  'manyvids.com': {
    _name: 'ManyVids',
    www: [
      {
        title: 'Creator Videos',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: [
          '/Profile/:uid/:handle/Store/*',
          '/Profile/:uid/:handle/Store',
        ],
        target: '/manyvids/profile/vids/:uid',
      },
    ],
  },
  'matters.town': {
    _name: 'Matters',
    '.': [
      {
        title: 'Author',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:uid'],
        target: '/mattersparams=>`/matters/author/${params.uid.slice(1)}`',
      },
      {
        title: 'Latest, heat, essence',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/matters/latest/:type?',
      },
      {
        title: 'Tags',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tags/:tid'],
        target: '/matters/tags/:tid',
      },
    ],
  },
  'mdpi.com': {
    _name: 'MDPI',
    www: [
      {
        title: 'Journal',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journal/:journal'],
        target: '/mdpi/:journal',
      },
    ],
  },
  'medieval-china.club': {
    _name: '中国的中古',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/medieval-china/',
      },
    ],
  },
  'meteor.today': {
    _name: 'Meteor',
    '.': [
      {
        title: '看板列表',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/meteor/boards',
      },
    ],
  },
  'microsoft.com': {
    _name: 'Microsoft Edge',
    microsoftedge: [
      {
        title: 'Addons Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/addons/detail/:name/:crxid'],
        target: '/microsoft/edge/addon/:crxid',
      },
    ],
  },
  'miyoushe.com': {
    _name: '米哈游',
    '.': [
      {
        title: '米游社 - 同人榜',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:game/imgRanking/:forum_id/:ranking_id/:cate_id'],
        target: '/mihoyo/bbs/img-ranking/:game',
      },
      {
        title: '米游社 - 用户关注动态',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:game/timeline'],
        target: '/mihoyo/bbs/timeline',
      },
    ],
  },
  'mihoyo.com': {
    _name: '米哈游',
    sr: [
      {
        title: '崩坏：星穹铁道',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news'],
        target: '/mihoyo/sr',
      },
    ],
  },
  'hoyoverse.com': {
    _name: '米哈游',
    genshin: [
      {
        title: '原神',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:location/news'],
        target: '/mihoyo/ys/:location',
      },
    ],
  },
  'minecraft.net': {
    _name: 'Minecraft',
    '.': [
      {
        title: 'Java Blocked Servers',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/minecraft/blockedservers',
      },
      {
        title: 'Java Runtimes',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/minecraft/java-runtime/:arch?/:javaType?',
      },
      {
        title: 'Java Game Update',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/minecraft/version/:versionType?/:linkType?',
      },
    ],
  },
  'missav.com': {
    _name: 'MissAV.com',
    '.': [
      {
        title: '最近更新',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/dm397/new', '/new', '/'],
        target: '/missav/new',
      },
    ],
  },
  'miui.com': {
    _name: 'MIUI',
    'web.vip': [
      {
        title: '小米社区用户发帖',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/page/info/mio/mio/homePage'],
        target:
          '/miui(_,url)=>`/miui/community/user/${new URL(url).searchParams.get("uid")}`',
      },
    ],
  },
  'mixcloud.com': {
    _name: 'Mixcloud',
    '.': [
      {
        title: 'User',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/:username/:type'],
        target: '/mixcloud/:username/:type?',
      },
    ],
    www: [
      {
        title: 'User',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/:username/:type'],
        target: '/mixcloud/:username/:type?',
      },
    ],
  },
  'modelscope.cn': {
    _name: 'ModelScope 魔搭社区',
    community: [
      {
        title: 'DevPress 官方社区',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/modelscope/community',
      },
    ],
    '.': [
      {
        title: '数据集',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/datasets'],
        target: '/modelscope/datasets',
      },
      {
        title: '模型库',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/models'],
        target: '/modelscope/models',
      },
      {
        title: '创空间',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/studios'],
        target: '/modelscope/studios',
      },
    ],
  },
  'modian.com': {
    _name: '摩点',
    zhongchou: [
      {
        title: '众筹',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/:category/:sort/:status'],
        target: '/modian/zhongchou/:category?/:sort?/:status?',
      },
    ],
  },
  'modrinth.com': {
    _name: 'Modrinth',
    '.': [
      {
        title: 'Project versions',
        docs: 'https://docs.rsshub.app/routes/game',
        source: [
          '/mod/:id/*',
          '/plugin/:id/*',
          '/datapack/:id/*',
          '/shader/:id/*',
          '/resourcepack/:id/*',
          '/modpack/:id/*',
          '/mod/:id',
          '/plugin/:id',
          '/datapack/:id',
          '/shader/:id',
          '/resourcepack/:id',
          '/modpack/:id',
        ],
        target: '/modrinth/project/:id/versions',
      },
    ],
  },
  'mohw.gov.tw': {
    _name: '台灣衛生福利部',
    '.': [
      {
        title: '即時新聞澄清',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/'],
        target: '/mohw/clarification',
      },
    ],
  },
  'mox.moe': {
    _name: 'Mox.moe',
    '.': [
      {
        title: '首頁',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/l/:category', '/'],
        target: '/mox/:category?',
      },
    ],
  },
  'mpaypass.com.cn': {
    _name: '移动支付网',
    '.': [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/mpaypass/news',
      },
    ],
  },
  'mwm.net.cn': {
    _name: '管理世界',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/web/:category', '/'],
        target: '/mvm/:category?',
      },
    ],
  },
  'my-formosa.com': {
    _name: '美麗島電子報',
    '.': [
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/my-formosa/',
      },
    ],
  },
  'mydrivers.com': {
    _name: '快科技',
    m: [
      {
        title: '排行',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/newsclass.aspx'],
        target: '/mydrivers/rank',
      },
    ],
  },
  'myfigurecollection.net': {
    _name: 'MyFigureCollection',
    zh: [
      {
        title: 'Activity',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/browse', '/'],
        target: '/myfigurecollection/:category?/:language?',
      },
      {
        title: '圖片',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/browse', '/'],
        target: '/myfigurecollection/:category?/:language?',
      },
    ],
  },
  'mygopen.com': {
    _name: 'MyGoPen',
    '.': [
      {
        title: '分類',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/search/label/:label', '/'],
        target: '/mygopen/:label?',
      },
    ],
  },
  'mymusicsheet.com': {
    _name: 'MyMusicSheet',
    '.': [
      {
        title: 'User Sheets',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/:username/*', '/:username'],
        target: '/mymusicsheet/user/sheets/:username',
      },
    ],
  },
  'nasa.govundefined': {
    _name: 'NASA Astronomy Picture of the Day',
    apod: [
      {
        title: 'NASA 中文',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/nasa/apod-cn',
      },
      {
        title: 'Cheng Kung University Mirror',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/nasa/apod-ncku',
      },
      {
        title: 'NASA',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/nasa/apod',
      },
    ],
  },
  'nationalgeographic.com': {
    _name: '国家地理',
    '.': [
      {
        title: '每日一图',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/photo-of-the-day/*', '/'],
        target: '/natgeo/dailyphoto',
      },
    ],
    www: [
      {
        title: 'Latest Stories',
        docs: 'https://docs.rsshub.app/routes/travel',
        source: ['/pages/topic/latest-stories'],
        target: '/nationalgeographic/latest-stories',
      },
    ],
  },
  'natgeomedia.com': {
    _name: '国家地理',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/travel',
        source: ['/:cat/:type', '/'],
        target: '/natgeo/:cat/:type',
      },
    ],
  },
  'nature.com': {
    _name: 'Nature Journal',
    '.': [
      {
        title: 'Cover Story',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/'],
        target: '/nature/cover',
      },
      {
        title: 'Research Highlight',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/:journal/articles', '/:journal', '/'],
        target: '/nature/highlight/:journal',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/latest-news', '/news', '/'],
        target: '/nature/news',
      },
      {
        title: 'Nature News',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/latest-news', '/news', '/'],
        target: '/nature/news',
      },
      {
        title: 'Latest Research',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/:journal/research-articles', '/:journal', '/'],
        target: '/nature/research/:journal',
      },
    ],
  },
  'nautil.us': {
    _name: 'Nautilus',
    '.': [
      {
        title: 'Topics',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topics/:tid'],
        target: '/nautil/topic/:tid',
      },
    ],
  },
  'nbd.com.cn': {
    _name: '每经网',
    '.': [
      {
        title: '重磅原创',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/', '/columns/332'],
        target: '/nbd/daily',
      },
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/', '/columns/:id'],
        target: '/nbd/:id?',
      },
    ],
  },
  'nber.org': {
    _name: 'National Bureau of Economic Research',
    '.': [
      {
        title: 'All Papers',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/papers'],
        target: '/nber/papers',
      },
      {
        title: 'New Papers',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/papers'],
        target: '/nber/new',
      },
    ],
  },
  'ncc-cma.net': {
    _name: '国家气候中心',
    cmdp: [
      {
        title: '日平均气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/RPJQWQYZ',
      },
      {
        title: '近5天平均气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ5TPJQWJP',
      },
      {
        title: '近10天平均气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ10TQWJP',
      },
      {
        title: '近20天平均气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ20TQWJP',
      },
      {
        title: '近30天平均气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ30TQWJP',
      },
      {
        title: '本月以来气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/BYYLQWJP',
      },
      {
        title: '本季以来气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/BJYLQWJP',
      },
      {
        title: '本年以来气温距平',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/BNYLQWJP',
      },
      {
        title: '日降水量分布',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/QGRJSLFBT0808S',
      },
      {
        title: '近5天降水量',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ5TJSLFBT',
      },
      {
        title: '近10天降水量',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ10TJSL',
      },
      {
        title: '近20天降水量',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ20TJSL',
      },
      {
        title: '近30天降水量',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ30TJSL',
      },
      {
        title: '本月以来降水量',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/ncc-cma/cmdp/image/BYYLJSL',
      },
      {
        title: '本季以来降水量',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/BJYLJSL',
      },
      {
        title: '近10天降水量距平百分率',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ10TJSLJP',
      },
      {
        title: '近20天降水量距平百分率',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ20TJSLJP',
      },
      {
        title: '近30天降水量距平百分率',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/ZJ30TJSLJP',
      },
      {
        title: '本月以来降水量距平百分率',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/BYYLJSLJPZYQHZ',
      },
      {
        title: '本季以来降水量距平百分率',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/BJYLJSLJPZJQHZ',
      },
      {
        title: '本年以来降水量距平百分率',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/BNYLJSLJP',
      },
      {
        title: '气温距平（最近10天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmeana10_',
      },
      {
        title: '气温距平（最近20天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmeana20_',
      },
      {
        title: '气温距平（最近30天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmeana30_',
      },
      {
        title: '气温距平（最近90天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmeana90_',
      },
      {
        title: '最低气温距平（最近30天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmina30_',
      },
      {
        title: '最低气温距平（最近90天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmina90_',
      },
      {
        title: '最高气温距平（最近30天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmaxa30_',
      },
      {
        title: '最高气温距平（最近90天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbtmaxa90_',
      },
      {
        title: '降水量（最近10天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbrain10_',
      },
      {
        title: '降水量（最近20天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbrain20_',
      },
      {
        title: '降水量（最近30天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbrain30_',
      },
      {
        title: '降水量（最近90天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbrain90_',
      },
      {
        title: '降水距平百分率（最近10天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbraina10_',
      },
      {
        title: '降水距平百分率（最近20天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbraina20_',
      },
      {
        title: '降水距平百分率（最近30天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbraina30_',
      },
      {
        title: '降水距平百分率（最近90天）',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/cn/index.htm'],
        target: '/ncc-cma/cmdp/image/glbraina90_',
      },
    ],
  },
  'ncpssd.cn': {
    _name: '国家哲学社会科学文献中心',
    '.': [
      {
        title: '最新文献',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/', '/newlist'],
        target: '/ncpssd/newlist',
      },
    ],
  },
  'ncu.edu.cn': {
    _name: '南昌大学',
    jwc: [
      {
        title: '教务通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/jwtz/index.htm'],
        target: '/ncu/jwc',
      },
    ],
  },
  'ncwu.edu.cn': {
    _name: '华北水利水电大学',
    '.': [
      {
        title: '学校通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xxtz.htm'],
        target: '/ncwu/notice',
      },
    ],
  },
  'ndss-symposium.org': {
    _name: 'Network and Distributed System Security (NDSS) Symposium',
    '.': [
      {
        title: 'Accepted papers',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/'],
        target: '/ndss-symposium/ndss',
      },
    ],
  },
  'neatdownloadmanager.com': {
    _name: 'Neat Download Manager',
    '.': [
      {
        title: 'Download',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/index.php', '/'],
        target: '/neatdownloadmanager/download/:os?',
      },
    ],
  },
  'netflav.com': {
    _name: 'Netflav',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/netflav/',
      },
    ],
  },
  'neu.edu.cn': {
    _name: '东北大学',
    neunews: [
      {
        title: '新闻网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/neu/news/:type',
      },
    ],
  },
  'news.cn': {
    _name: '小黑盒',
    '.': [
      {
        title: '新华社新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/xhsxw.htm'],
        target: '/news/xhsxw',
      },
      {
        title: '新华社新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/xhsxw.htm'],
        target: '/news/whxw',
      },
    ],
  },
  'newsmarket.com.tw': {
    _name: '上下游 News&Market',
    '.': [
      {
        title: '分類',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog/category/:category', '/'],
        target: '/newsmarket/:category?',
      },
    ],
  },
  'newyorker.com': {
    _name: 'New Yorker',
    '.': [
      {
        title: 'The New Yorker',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/feed/:category/:subCategory'],
        target: '/newyorker/:category/:subCategory?',
      },
    ],
  },
  'newzmz.com': {
    _name: 'NEW 字幕组',
    '.': [
      {
        title: '指定剧集',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/newzmz/:id?/:downLinkType?',
      },
    ],
  },
  'nextapple.com': {
    _name: '壹蘋新聞網',
    tw: [
      {
        title: '最新新聞',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/', '/realtime/:category'],
        target: '/nextapple/realtime/:category?',
      },
    ],
  },
  'ngocn2.org': {
    _name: 'NGOCN',
    '.': [
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/ngocn2/:category?',
      },
    ],
  },
  'nhentai.net': {
    _name: 'nhentai',
    '.': [
      {
        title: 'Filter',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:key/:keyword'],
        target: '/nhentai/index/:key/:keyword',
      },
      {
        title: 'Advanced Search',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:key/:keyword'],
        target: '/nhentai/:key/:keyword',
      },
    ],
  },
  'nhk.or.jp': {
    _name: 'NHK',
    www3: [
      {
        title: 'News Web Easy',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news/easy/', '/'],
        target: '/nhk/news_web_easy',
      },
      {
        title: 'WORLD-JAPAN - Top Stories',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/nhkworld/:lang/news/list/', '/nhkworld/:lang/news/'],
        target: '/nhk/news/:lang',
      },
    ],
  },
  'niaogebiji.com': {
    _name: '鸟哥笔记',
    '.': [
      {
        title: '分类目录',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/cat/:cat'],
        target: '/niaogebiji/cat/:cat',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/', '/bulletin'],
        target: '/niaogebiji/',
      },
      {
        title: '今日事',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/', '/bulletin'],
        target: '/niaogebiji/today',
      },
    ],
  },
  'nikkei.com': {
    _name: 'The Nikkei 日本経済新聞',
    www: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category/archive', '/:category'],
        target: '/nikkei/:category',
      },
    ],
    asia: [
      {
        title: 'Nikkei Asia Latest News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/nikkei/asia',
      },
    ],
    cn: [
      {
        title: '中文版新闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category/:type', '/:category', '/'],
        target:
          '/nikkeiparams=>{if(params.category&&params.type){return`/nikkei/cn/cn/${params.category}/${params.type.replace(".html","")}`}else if(params.category&&!params.type){return`/nikkei/cn/cn/${params.category.replace(".html","")}`}else{return`/nikkei/cn/cn`}}',
      },
    ],
    'zh.cn': [
      {
        title: '中文版新聞',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category/:type', '/:category', '/'],
        target:
          '/nikkeiparams=>{if(params.category&&params.type){return`/nikkei/cn/zh/${params.category}/${params.type.replace(".html","")}`}else if(params.category&&!params.type){return`/nikkei/cn/zh/${params.category.replace(".html","")}`}else{return`/nikkei/cn/zh`}}',
      },
    ],
  },
  'nintendo.com': {
    _name: 'Nintendo',
    '.': [
      {
        title: 'Nintendo Direct',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/nintendo-direct/archive', '/'],
        target: '/nintendo/direct',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/store/games', '/'],
        target: '/nintendo/eshop/us',
      },
    ],
  },
  'nintendoswitch.com.cn': {
    _name: 'Nintendo',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/software', '/'],
        target: '/nintendo/eshop/cn',
      },
      {
        title: '首页资讯（中国）',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/nintendo/news/china',
      },
    ],
  },
  'nintendo.com.hk': {
    _name: 'Nintendo',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/software/switch', '/'],
        target: '/nintendo/eshop/hk',
      },
      {
        title: 'News（Hong Kong only）',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/topics', '/'],
        target: '/nintendo/news',
      },
    ],
  },
  'nintendo.co.jp': {
    _name: 'Nintendo',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/software/switch/index.html', '/'],
        target: '/nintendo/eshop/jp',
      },
      {
        title: 'Switch System Update（Japan）',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/support/switch/system_update/index.html', '/'],
        target: '/nintendo/system-update',
      },
    ],
  },
  'nippon.com': {
    _name: '走进日本',
    www: [
      {
        title: '政治外交',
        docs: 'https://docs.rsshub.app/routes/travel',
        source: ['/nippon/:category', '/cn'],
        target: '/nippon/:category?',
      },
    ],
  },
  'njglyy.com': {
    _name: '南京鼓楼医院',
    '.': [
      {
        title: '员工版教育培训',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/ygb/jypx/jypx.aspx', '/'],
        target: '/njglyy/ygbjypx',
      },
    ],
  },
  'njit.edu.cn': {
    _name: '南京工程学院',
    www: [
      {
        title: '南京工程学院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/njit/tzgg',
      },
    ],
  },
  'nju.edu.cn': {
    _name: '南京大学',
    admission: [
      {
        title: '本科迎新',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg/index.html', '/tzgg', '/'],
        target: '/nju/admission',
      },
    ],
    dafls: [
      {
        title: '大学外语部',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/13167/list.html', '/'],
        target: '/nju/dafls',
      },
    ],
    grawww: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/main.htm', '/'],
        target: '/nju/gra',
      },
    ],
    hospital: [
      {
        title: '校医院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/ggtz/index.html'],
        target: '/nju/hospital',
      },
    ],
    webplus: [
      {
        title: '后勤集团',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/_s25/main.psp'],
        target: '/nju/hqjt',
      },
    ],
    itsc: [
      {
        title: 'ITSC 信息中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg/list.htm'],
        target: '/nju/itsc',
      },
    ],
    jjc: [
      {
        title: '基建处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/main.htm', '/'],
        target: '/nju/jjc',
      },
    ],
    jw: [
      {
        title: '本科生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/nju/jw/:type',
      },
    ],
    rczp: [
      {
        title: '人才招聘网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/sylm/:type/index.html'],
        target: '/nju/rczp/:type',
      },
    ],
    zcc: [
      {
        title: '资产管理处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg/gyfytdglk/index.html', '/tzgg/index.html', '/'],
        target: '/nju/zcc',
      },
    ],
  },
  'njucm.edu.cn': {
    _name: '南京中医药大学',
    lib: [
      {
        title: '研究生院博士招生',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/2899/list.htm', '/'],
        target: '/njucm/grabszs',
      },
    ],
  },
  'njust.edu.cn': {
    _name: '南京理工大学',
    gs: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/njust/gs/:type',
      },
    ],
  },
  'njxzc.edu.cn': {
    _name: '南京晓庄学院',
    www: [
      {
        title: '官网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/89/list.htm', '/'],
        target: '/njxzc/tzgg',
      },
    ],
    lib: [
      {
        title: '图书馆通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/pxyhd/list.htm', '/'],
        target: '/njxzc/libtzgg',
      },
    ],
  },
  'nltimes.nl': {
    _name: 'NL Times',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/categories/:category'],
        target: '/nltimes/news/:category',
      },
    ],
  },
  'nmc.cn': {
    _name: '中央气象台',
    '.': [
      {
        title: '全国气象预警',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/publish/alarm.html', '/'],
        target: '/nmc/weatheralarm',
      },
    ],
  },
  'nodejs.org': {
    _name: 'Node.js',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/:language/blog', '/'],
        target: '/nodejs/blog/:language?',
      },
    ],
  },
  'nogizaka46.com': {
    _name: 'Sakamichi Series 坂道系列官网资讯',
    blog: [
      {
        title: 'Nogizaka46 Blog 乃木坂 46 博客',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/s/n46/diary/MEMBER'],
        target: '/nogizaka46/blog',
      },
    ],
    news: [
      {
        title: 'Nogizaka46 News 乃木坂 46 新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/s/n46/news/list'],
        target: '/nogizaka46/news',
      },
    ],
  },
  'nosec.org': {
    _name: 'NOSEC 安全讯息平台',
    '.': [
      {
        title: 'Posts',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/home/index/:keykind', '/home/index'],
        target:
          '/nosecparams=>`/nosec${params.keykind?`/${params.keybind.replace(".html","")}`:""}`',
      },
    ],
  },
  'notateslaapp.com': {
    _name: 'Not a Tesla App',
    '.': [
      {
        title: 'Tesla Software Updates',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/software-updates/history', '/software-updates', '/'],
        target: '/notateslaapp/ota',
      },
    ],
  },
  'notefolio.net': {
    _name: 'Notefolio',
    '.': [
      {
        title: 'Works',
        docs: 'https://docs.rsshub.app/routes/design',
        source: ['/search'],
        target: '/notefolio/search/:category?/:order?/:time?/:query?',
      },
    ],
  },
  'notion.so': {
    _name: 'Notion',
    '.': [
      {
        title: 'Database',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:id'],
        target: '/notion/database/:id',
      },
    ],
  },
  'now.com': {
    _name: 'Now 新聞',
    news: [
      {
        title: '新聞',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/now/news/:category?/:id?',
      },
    ],
  },
  'nowcoder.com': {
    _name: '牛客网',
    '.': [
      {
        title: '面经',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/nowcoder/experience',
      },
      {
        title: '实习广场 & 社招广场',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/nowcoder/jobcenter',
      },
      {
        title: '求职推荐',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/nowcoder/recommend',
      },
      {
        title: '校招日程',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/nowcoder/schedule',
      },
    ],
  },
  'npmjs.com': {
    _name: 'NPM',
    www: [
      {
        title: 'Package',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/package/:name'],
        target:
          '/npm/package/:name{(@[a-z0-9-~][a-z0-9-._~]*/)?[a-z0-9-~][a-z0-9-._~]*}',
      },
    ],
  },
  'ntdm9.com': {
    _name: 'NT动漫',
    '.': [
      {
        title: '番剧详情',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/video/:id'],
        target: '/ntdm/video/:id',
      },
    ],
  },
  'ntdtv.com': {
    _name: '新唐人电视台',
    www: [
      {
        title: '频道',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:language/:id'],
        target: '/ntdtv/:language/:id',
      },
    ],
  },
  'nua.edu.cn': {
    _name: 'Nanjing University of the Arts 南京艺术学院',
    dc: [
      {
        title: 'School of Design',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/nua/dc/:type',
      },
    ],
    grad: [
      {
        title: 'Graduate Institute',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/nua/gra/:type',
      },
    ],
    index: [
      {
        title: 'Official Information',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/nua/index/:type',
      },
    ],
    lib: [
      {
        title: 'Library',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/nua/lib/:type',
      },
    ],
    sxw: [
      {
        title: 'Shuangxing Information',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/nua/sxw/:type',
      },
    ],
  },
  'nuist.edu.cn': {
    _name: '南京信息工程大学',
    bulletin: [
      {
        title: '南信大信息公告栏',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category/list.htm'],
        target: '/nuist/bulletin/:category',
      },
    ],
    scs: [
      {
        title: 'NUIST CS（南信大计软院）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category/list.htm'],
        target: '/nuist/scs/:category',
      },
    ],
    xgc: [
      {
        title: '南信大学生工作处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/419/list.htm'],
        target: '/nuist/xgc',
      },
    ],
    lib: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/index/tzgg.htm'],
        target: '/nuist/lib',
      },
    ],
  },
  'nymity.ch': {
    _name: 'nymity',
    censorbib: [
      {
        title: 'CensorBib Updates',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/'],
        target: '/nymity/censorbib',
      },
    ],
  },
  'nytimes.com': {
    _name: 'The New York Times 纽约时报',
    '.': [
      {
        title: 'Best Seller Books',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/nytimes/book/:category?',
      },
      {
        title: '新闻简报',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/nytimes/daily_briefing_chinese',
      },
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/nytimes/:lang?',
      },
    ],
  },
  '0daily.com': {
    _name: 'Odaily 星球日报',
    '.': [
      {
        title: '活动',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/activityPage', '/'],
        target: '/odaily/activity',
      },
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/newsflash', '/'],
        target: '/odaily/newsflash',
      },
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/odaily/:id?',
      },
      {
        title: '搜索快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/search/:keyword'],
        target: '/odaily/search/news/:keyword',
      },
      {
        title: '用户文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/user/:id', '/'],
        target: '/odaily/user/:id',
      },
    ],
  },
  'olevod.one': {
    _name: '欧乐影院',
    www: [
      {
        title: '视频',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/vod/:id'],
        target: '/olevod/vod/:id',
      },
      {
        title: '最新视频',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/olevod/vodlist',
      },
    ],
  },
  'ollama.com': {
    _name: 'Ollama',
    '.': [
      {
        title: 'Models',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/library'],
        target: '/ollama/library',
      },
    ],
  },
  'onet.pl': {
    _name: 'Onet',
    wiadomosci: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/onet/news',
      },
    ],
  },
  'openwrt.org': {
    _name: 'Unknown',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/toh/:band/:model'],
        target: '/openwrt/releases/:model',
      },
    ],
  },
  'oschina.net': {
    _name: '开源中国',
    '.': [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/news/:category'],
        target: '/oschina/news/:category',
      },
      {
        title: '问答主题',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/question/topic/:topic'],
        target: '/oschina/topic/:topic',
      },
    ],
    my: [
      {
        title: '数字型账号用户博客',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/u/:uid'],
        target: '/oschina/u/:uid',
      },
      {
        title: '数字型账号用户博客',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/u/:uid'],
        target: '/oschina/user/:id',
      },
    ],
  },
  'otobanana.com': {
    _name: 'OTOBANANA',
    '.': [
      {
        title: 'Cast 音声投稿',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/user/:id/cast', '/user/:id'],
        target: '/otobanana/user/:id/cast',
      },
      {
        title: 'Livestream ライブ配信',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/user/:id/livestream', '/user/:id'],
        target: '/otobanana/user/:id/livestream',
      },
      {
        title: 'Timeline タイムライン',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/user/:id'],
        target: '/otobanana/user/:id',
      },
    ],
  },
  'ouc.edu.cn': {
    _name: '中国海洋大学',
    hqsz: [
      {
        title: '后勤公告通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news.html'],
        target: '/ouc/hqsz',
      },
    ],
    it: [
      {
        title: '信息科学与工程学院研究生招生通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/_s381/16619/list.psp', '/16619/list.htm', '/'],
        target: '/ouc/it/postgraduate',
      },
      {
        title: '信息科学与工程学院团学工作',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tx/:id/list.htm'],
        target: '/ouc/it/tx/:id',
      },
      {
        title: '信息科学与工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ouc/it',
      },
    ],
    jwc: [
      {
        title: '教务处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/6517/list.htm'],
        target: '/ouc/jwc',
      },
    ],
    jwgl: [
      {
        title: '选课信息教务通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/cas/login.action', '/public/SchoolNotice.jsp'],
        target: '/ouc/jwgl',
      },
    ],
    yz: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/5926/list.htm'],
        target: '/ouc/yjs',
      },
    ],
  },
  'oup.com': {
    _name: 'Oxford University Press',
    academic: [
      {
        title: 'Oxford Academic',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/', '/:name/issue'],
        target: '/oup/journals/:name',
      },
    ],
  },
  'p-articles.com': {
    _name: '虚词',
    '.': [
      {
        title: '虛詞作者',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/contributors/:author'],
        target: '/p-articles/contributors/:author',
      },
      {
        title: '版块',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/:section/'],
        target: '/p-articles/section/:section',
      },
    ],
  },
  'panewslab.com': {
    _name: 'PANews',
    '.': [
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/panewslab/author/:id',
      },
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/panewslab/column/:id',
      },
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/panewslab/news',
      },
      {
        title: '深度',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/', '/zh/profundity/index.html'],
        target: '/panewslab/profundity/:category?',
      },
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/panewslab/topic/:id',
      },
    ],
  },
  'papers.cool': {
    _name: 'Cool Papers',
    '.': [
      {
        title: 'arXiv Artificial Intelligence (cs.AI)',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/arxiv/cs.AI'],
        target: '/papers/arxiv/cs.AI',
      },
      {
        title: 'arXiv Computation and Language (cs.CL)',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/arxiv/cs.CL'],
        target: '/papers/arxiv/cs.CL',
      },
      {
        title: 'arXiv Computer Vision and Pattern Recognition (cs.CV)',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/arxiv/cs.CV'],
        target: '/papers/arxiv/cs.CV',
      },
      {
        title: 'arXiv Machine Learning (cs.LG)',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/arxiv/cs.LG'],
        target: '/papers/arxiv/cs.LG',
      },
    ],
  },
  'paradigm.xyz': {
    _name: 'Paradigm',
    '.': [
      {
        title: 'Writing',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/writing'],
        target: '/paradigm/writing',
      },
    ],
  },
  'paulgraham.com': {
    _name: 'Paul Graham',
    '.': [
      {
        title: 'Essays',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/articles.html'],
        target: '/paulgraham/articles',
      },
      {
        title: 'Essays',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/articles.html'],
        target: '/paulgraham/essays',
      },
      {
        title: 'Essays',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/articles.html'],
        target: '/paulgraham/',
      },
    ],
  },
  'penguinrandomhouse.com': {
    _name: 'Penguin Random House',
    '.': [
      {
        title: 'Articles',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/articles'],
        target: '/penguin-random-house/articles',
      },
      {
        title: 'Book Lists',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/the-read-down'],
        target: '/penguin-random-house/the-read-down',
      },
    ],
  },
  'people.com.cn': {
    _name: '人民网',
    liuyan: [
      {
        title: '领导留言板',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/people/liuyan/:id/:state?',
      },
    ],
    '.': [
      {
        title: '习近平系列重要讲话',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/people/:site?/:category?',
      },
    ],
  },
  'peopo.org': {
    _name: 'PeoPo 公民新聞',
    '.': [
      {
        title: '新聞分類',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topic/:topicId'],
        target: '/peopo/topic/:topicId',
      },
    ],
  },
  'phoronix.com': {
    _name: 'Phoronix',
    '.': [
      {
        title: 'News & Reviews',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category?/:topic?'],
        target: '/phoronix/:category?/:topic?',
      },
    ],
  },
  'pianyivps.com': {
    _name: '便宜VPS网',
    '.': [
      {
        title: '最新发布',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/pianyivps/',
      },
    ],
  },
  'pianyuan.org': {
    _name: '片源网',
    '.': [
      {
        title: '最新资源',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/pianyuan/index',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/pianyuan/index',
      },
    ],
  },
  'picnob.com': {
    _name: 'Instagram',
    '.': [
      {
        title: 'User Profile - Picnob',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/profile/:id/*'],
        target: '/picnob/user/:id',
      },
    ],
  },
  'picuki.com': {
    _name: 'Instagram',
    www: [
      {
        title: 'User Profile - Picuki',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/profile/:id'],
        target: '/picuki/profile/:id',
      },
    ],
  },
  'pikabu.ru': {
    _name: 'Pikabu',
    '.': [
      {
        title: 'User',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:name'],
        target: '/pikabu/user/:name',
      },
    ],
  },
  'pincong.rocks': {
    _name: '品葱',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/topic/:topic'],
        target: '/pincong/topic/:topic',
      },
    ],
  },
  'pingwest.com': {
    _name: '品玩',
    '.': [
      {
        title: '实时要闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/status', '/'],
        target: '/pingwest/status',
      },
      {
        title: '用户',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/user/:uid/:type', '/'],
        target: '/pingwest/user/:uid/:type',
      },
    ],
  },
  'pixabay.com': {
    _name: 'Pixabay',
    '.': [
      {
        title: 'Search',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/:searchType/search/:q'],
        target: '/pixabay/search/:q',
      },
    ],
  },
  'pixiv.net': {
    _name: 'pixiv',
    www: [
      {
        title: 'User Bookmark',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/users/:id/bookmarks/artworks'],
        target: '/pixiv/user/bookmarks/:id',
      },
      {
        title: 'Following timeline',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/bookmark_new_illust.php'],
        target: '/pixiv/user/illustfollows',
      },
      {
        title: 'User Novels',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/users/:id/novels'],
        target: '/pixiv/user/novels/:id',
      },
      {
        title: 'User Activity',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/users/:id'],
        target: '/pixiv/user/:id',
      },
    ],
  },
  'piyao.org.cn': {
    _name: '中国互联网联合辟谣平台',
    '.': [
      {
        title: '今日辟谣',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/jrpy/index.htm'],
        target: '/piyao/jrpy',
      },
    ],
  },
  'pkmer.cn': {
    _name: 'PKMer',
    '.': [
      {
        title: '最近更新',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/page/*'],
        target: '/pkmer/recent',
      },
    ],
  },
  'pku.edu.cn': {
    _name: '北京大学',
    hr: [
      {
        title: '人事处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/pku/hr/:category?',
      },
    ],
    nsd: [
      {
        title: '观点 - 国家发展研究院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/pku/nsd/gd',
      },
    ],
    admission: [
      {
        title: '研究生招生网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zsxx/sszs/index.htm', '/'],
        target: '/pku/admission/sszs',
      },
    ],
    bbs: [
      {
        title: '北大未名 BBS 全站十大',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/v2/hot-topic.php', '/'],
        target: '/pku/bbs/hot',
      },
    ],
    bio: [
      {
        title: '生命科学学院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/homes/Index/news/21/21.html', '/'],
        target: '/pku/cls/announcement',
      },
      {
        title: '生命科学学院近期讲座',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/homes/Index/news_jz/7/7.html', '/'],
        target: '/pku/cls/lecture',
      },
    ],
    'www.rccp': [
      {
        title: '每周一推 - 中国政治学研究中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/pku/rccp/mzyt',
      },
    ],
    ss: [
      {
        title: '软件与微电子学院 - 招生通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/admission/admnotice', '/'],
        target: '/pku/ss/admission',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index.php/newscenter/notice', '/'],
        target: '/pku/ss/notice',
      },
      {
        title: '软件与微电子学院 - 硕士统考招生通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/admission/admbrochure/admission01', '/'],
        target: '/pku/ss/pgadmin',
      },
    ],
  },
  'playno1.com': {
    _name: 'PLAYNO.1 玩樂達人',
    stno1: [
      {
        title: '情趣',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/stno1/:catid/'],
        target: '/playno1/st/:catid',
      },
    ],
  },
  'playpcesor.com': {
    _name: '电脑玩物',
    '.': [
      {
        title: '每日精选文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/playpcesor/',
      },
    ],
  },
  'plurk.com': {
    _name: 'Plurk',
    '.': [
      {
        title: 'Anonymous',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/anonymous'],
        target: '/plurk/anonymous',
      },
      {
        title: 'Hotlinks',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/hotlinks'],
        target: '/plurk/hotlinks',
      },
      {
        title: 'Plurk News',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/news'],
        target: '/plurk/news',
      },
      {
        title: 'Topic',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/topic/:topic'],
        target: '/plurk/topic/:topic',
      },
    ],
  },
  'pnas.org': {
    _name: 'Proceedings of The National Academy of Sciences',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/*topicPath'],
        target: '/pnas/:topicPath',
      },
    ],
  },
  'podwise.ai': {
    _name: 'Podwise',
    '.': [
      {
        title: 'Collections',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/', '/explore'],
        target: '/podwise/explore',
      },
      {
        title: 'Episodes',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/explore/:type'],
        target: '/podwise/explore/:type',
      },
    ],
  },
  'pornhub.com': {
    _name: 'PornHub',
    '.': [
      {
        title: 'Verified amateur / Model',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/model/:username/*'],
        target: '/pornhub/model/:username',
      },
      {
        title: 'Verified model / Pornstar',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/pornstar/:username/*'],
        target: '/pornhub/pornstar/:username',
      },
      {
        title: 'Users',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/users/:username/*'],
        target: '/pornhub/users/:username',
      },
    ],
  },
  'postman.com': {
    _name: 'Postman',
    '.': [
      {
        title: 'Release Notes',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/downloads/release-notes', '/'],
        target: '/postman/release-notes',
      },
    ],
  },
  'priconne-redive.jp': {
    _name: 'PRINCESS CONNECT! Re Dive プリンセスコネクト！Re Dive',
    '.': [
      {
        title: '最新公告',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news'],
        target: '/priconne-redive/news/jp',
      },
    ],
  },
  'so-net.tw': {
    _name: 'PRINCESS CONNECT! Re Dive プリンセスコネクト！Re Dive',
    princessconnect: [
      {
        title: '最新公告',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news'],
        target: '/priconne-redive/news/zh-tw',
      },
    ],
  },
  'producthunt.com': {
    _name: 'Product Hunt',
    www: [
      {
        title: 'Today Popular',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/producthunt/today',
      },
    ],
  },
  'playstation.com': {
    _name: 'PlayStation Store',
    www: [
      {
        title: 'PlayStation Monthly Games',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/en-sg/ps-plus/whats-new'],
        target: '/ps/monthly-games',
      },
    ],
  },
  'psyche.co': {
    _name: 'Psyche',
    '.': [
      {
        title: 'Topics',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:topic'],
        target: '/psyche/topic/:topic',
      },
      {
        title: 'Types',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:type'],
        target: '/psyche/type/:type',
      },
    ],
  },
  'pts.org.tw': {
    _name: '公視新聞網',
    news: [
      {
        title: '專題策展',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/curations', '/'],
        target: '/pts/curations',
      },
      {
        title: '整理報導',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/live/:id', '/'],
        target: '/pts/live/:id',
      },
      {
        title: '數位敘事',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/projects', '/'],
        target: '/pts/projects',
      },
    ],
  },
  'pumc.edu.cn': {
    _name: '北京协和医学院',
    mdadmission: [
      {
        title: '“4+4” 试点班招生网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/mdweb/site', '/'],
        target: '/pumc/mdadmission',
      },
    ],
  },
  'greenend.org.uk': {
    _name: 'PuTTY',
    'www.chiark': [
      {
        title: 'Change Log',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/~sgtatham/putty/changes.html', '/'],
        target: '/putty/changes',
      },
    ],
  },
  'pwc.com': {
    _name: 'PwC Strategy&',
    strategyand: [
      {
        title: 'Sustainability',
        docs: 'https://docs.rsshub.app/routes/other',
        source: [
          '/at/en/functions/sustainability-strategy/publications.html',
          '/',
        ],
        target: '/pwc/strategyand/sustainability',
      },
    ],
  },
  'qbitai.com': {
    _name: '量子位',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/:category'],
        target: '/qbitai/category/:category',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tag/:tag'],
        target: '/qbitai/tag/:tag',
      },
    ],
  },
  'qbittorrent.org': {
    _name: 'qBittorrent',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/news.php', '/'],
        target: '/qbittorrent/news',
      },
    ],
  },
  'qdu.edu.cn': {
    _name: '青岛大学',
    houqin: [
      {
        title: '后勤管理处通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzgg.htm', '/'],
        target: '/qdu/houqin',
      },
    ],
    jwc: [
      {
        title: '教务处通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/jwtz.htm', '/'],
        target: '/qdu/jwc',
      },
    ],
  },
  'qianzhan.com': {
    _name: '前瞻网',
    '.': [
      {
        title: '排行榜',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/analyst', '/'],
        target: '/qianzhan/analyst/rank',
      },
    ],
  },
  'qidian.com': {
    _name: '起点',
    my: [
      {
        title: '作者',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/author/:id'],
        target: '/qidian/author/:id',
      },
    ],
    book: [
      {
        title: '章节',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/info/:id'],
        target: '/qidian/chapter/:id',
      },
      {
        title: '讨论区',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/info/:id'],
        target: '/qidian/forum/:id',
      },
    ],
    www: [
      {
        title: '限时免费下期预告',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/free'],
        target: '/qidian/free',
      },
      {
        title: '限时免费',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/free'],
        target: '/qidian/free',
      },
    ],
  },
  'qingting.fm': {
    _name: '蜻蜓 FM',
    '.': [
      {
        title: '播客',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/channels/:id'],
        target: '/qingting/podcast/:id',
      },
    ],
  },
  'qipamaijia.com': {
    _name: '奇葩买家秀',
    '.': [
      {
        title: '频道',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/', '/:cate'],
        target: '/qipamaijia/:cate',
      },
    ],
  },
  'qlu.edu.cn': {
    _name: '齐鲁工业大学',
    '.': [
      {
        title: '通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tzggsh/list1.htm'],
        target: '/qlu/notice',
      },
    ],
  },
  'qm120.com': {
    _name: '全民健康网',
    '.': [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/qm120/news/:category?',
      },
    ],
  },
  'qq.com': {
    _name: '腾讯网',
    ac: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/Comic/ComicInfo/id/:id', '/'],
        target: '/qq/ac/comic/:id',
      },
      {
        title: '排行榜',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/Rank/comicRank/type/:type', '/'],
        target: '/qq/ac/rank/:type?/:time?',
      },
    ],
    'cfhd.cf': [
      {
        title: '穿越火线 CFHD 专区资讯中心 - 最新',
        docs: 'https://docs.rsshub.app/routes/game',
        source: [
          '/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml',
        ],
        target: '/qq/cfhd/news/60847',
      },
      {
        title: '穿越火线 CFHD 专区资讯中心 - 公告',
        docs: 'https://docs.rsshub.app/routes/game',
        source: [
          '/webplat/info/news_version3/37427/59139/59140/59625/m22510/list_1.shtml',
        ],
        target: '/qq/cfhd/news/59625',
      },
      {
        title: '穿越火线 CFHD 专区资讯中心 - 版本',
        docs: 'https://docs.rsshub.app/routes/game',
        source: [
          '/webplat/info/news_version3/37427/59139/59140/60850/m22510/list_1.shtml',
        ],
        target: '/qq/cfhd/news/60850',
      },
      {
        title: '穿越火线 CFHD 专区资讯中心 - 赛事',
        docs: 'https://docs.rsshub.app/routes/game',
        source: [
          '/webplat/info/news_version3/37427/59139/59140/59626/m22510/list_1.shtml',
        ],
        target: '/qq/cfhd/news/59626',
      },
      {
        title: '穿越火线 CFHD 专区资讯中心 - 杂谈',
        docs: 'https://docs.rsshub.app/routes/game',
        source: [
          '/webplat/info/news_version3/37427/59139/59140/59624/m22510/list_1.shtml',
        ],
        target: '/qq/cfhd/news/59624',
      },
    ],
    'vp.fact': [
      {
        title: '最新辟谣',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/home', '/'],
        target: '/qq/fact',
      },
    ],
    new: [
      {
        title: '更新',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/omn/author/:mid'],
        target: '/tencent/news/author/:mid',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/zt2020/page/feiyan.htm'],
        target: '/tencent/news/coronavirus/total',
      },
    ],
    'mp.weixin': [
      {
        title: '公众平台系统公告栏目',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/cgi-bin/announce'],
        target: '/wechat/announce',
      },
    ],
  },
  'qqorw.cn': {
    _name: '早报网',
    '.': [
      {
        title: '每日早报',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category', '/'],
        target: '/qqorw/:category?',
      },
    ],
  },
  'getquicker.net': {
    _name: 'Quicker',
    '.': [
      {
        title: '动作分享',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/Share/:category', '/'],
        target: '/quicker/share/:category?',
      },
    ],
  },
  'qust.edu.cn': {
    _name: '青岛科技大学',
    jw: [
      {
        title: '教务通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/jwtz.htm', '/'],
        target: '/qust/jw',
      },
    ],
  },
  'radio-canada.ca': {
    _name: 'Radio-Canada.ca',
    ici: [
      {
        title: 'Latest News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/rci/:lang', '/'],
        target: '/radio-canada/latest/:language?',
      },
    ],
  },
  'rarehistoricalphotos.com': {
    _name: 'Rare Historical Photos',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/rarehistoricalphotos/',
      },
    ],
  },
  'rattibha.com': {
    _name: 'Rattibha',
    '.': [
      {
        title: 'User Threads',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:user'],
        target: '/rattibha/user/:user',
      },
    ],
  },
  'rawkuma.com': {
    _name: 'Rawkuma',
    '.': [
      {
        title: 'Manga',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/manga/:id', '/'],
        target: '/rawkuma/manga/:id',
      },
    ],
  },
  'reactiflux.com': {
    _name: 'Reactiflux',
    www: [
      {
        title: 'Transcripts',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/transcripts'],
        target: '/reactiflux/transcripts',
      },
    ],
  },
  'readhub.cn': {
    _name: 'Readhub',
    '.': [
      {
        title: '每日早报',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/daily'],
        target: '/readhub/daily',
      },
    ],
  },
  'remnote.com': {
    _name: 'RemNote',
    '.': [
      {
        title: 'Changelog',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/changelog', '/'],
        target: '/remnote/changelog',
      },
    ],
  },
  'researchgate.net': {
    _name: 'ResearchGate',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/profile/:username'],
        target: '/researchgate/publications/:username',
      },
    ],
  },
  'reuters.com': {
    _name: 'Reuters 路透社',
    '.': [
      {
        title: 'Category/Topic/Author',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category/:topic', '/'],
        target: '/reuters/:category/:topic?',
      },
    ],
  },
  'rfi.fr': {
    _name: 'Radio France Internationale 法国国际广播电台',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/*path'],
        target: '/rfi/:path',
      },
    ],
  },
  'rodong.rep.kp': {
    _name: 'Rodong Sinmun 劳动新闻',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: [
          '/cn/index.php',
          '/en/index.php',
          '/ko/index.php',
          '/cn',
          '/en',
          '/ko',
        ],
        target: '/rodong/news',
      },
    ],
  },
  'routledge.com': {
    _name: 'Routledge',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:bookName/book-series/:bookId'],
        target: '/routledge/:bookName/book-series/:bookId',
      },
    ],
  },
  'rsshub.app': {
    _name: 'RSSHub',
    docs: [
      {
        title: 'New routes',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/*'],
        target: '/rsshub/routes',
      },
    ],
  },
  'ruancan.com': {
    _name: '软餐',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/cat/:category', '/'],
        target: '/ruancan/category/:category',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/ruancan/',
      },
      {
        title: '搜索',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/ruancan/search/:keyword?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/i/:id', '/'],
        target: '/ruancan/user/:id',
      },
    ],
  },
  'ruc.edu.cn': {
    _name: 'Renmin University of China',
    ai: [
      {
        title: '高瓴人工智能学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ruc/ai/:category?',
      },
    ],
    hr: [
      {
        title: '人事处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ruc/hr/:category?',
      },
    ],
  },
  'runtrail.cn': {
    _name: '跑野大爆炸',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/runtrail/',
      },
    ],
  },
  'rustcc.cn': {
    _name: 'Rust 语言中文社区',
    '.': [
      {
        title: '招聘',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/rustcc/jobs',
      },
      {
        title: '新闻/聚合',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/'],
        target: '/rustcc/news',
      },
    ],
  },
  'sakurazaka46.com': {
    _name: 'Sakamichi Series 坂道系列官网资讯',
    '.': [
      {
        title: 'Sakurazaka46 News 櫻坂 46 新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/s/s46/news/list', '/'],
        target: '/sakurazaka46/news',
      },
    ],
  },
  'samsung.com': {
    _name: 'Samsung',
    research: [
      {
        title: 'Research Blog',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog', '/'],
        target: '/samsung/research/blog',
      },
    ],
  },
  'sass.org.cn': {
    _name: '上海社会科学院',
    gs: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/sass/gs/:type',
      },
    ],
  },
  'scau.edu.cn': {
    _name: '华南农业大学',
    yzb: [
      {
        title: '华农研讯',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/2136/list1.htm', '/'],
        target: '/scau/yzb',
      },
    ],
    yjsy: [
      {
        title: '研究生院通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/208/list.htm', '/'],
        target: '/scau/yjsy',
      },
    ],
  },
  'science.org': {
    _name: 'Science Magazine',
    '.': [
      {
        title: 'Blogs',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/blogs/:name'],
        target: '/science/blogs/:name',
      },
      {
        title: 'Cover Story',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/'],
        target: '/science/cover',
      },
      {
        title: 'Current Issue',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journal/:journal', '/toc/:journal/current'],
        target: '/science/current/:journal',
      },
      {
        title: 'First Release',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journal/:journal', '/toc/:journal/0/0'],
        target: '/science/early/:journal',
      },
    ],
  },
  'sciencenet.cn': {
    _name: '科学网',
    blog: [
      {
        title: '用户博客',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/u/:id', '/'],
        target: '/sciencenet/user/:id',
      },
    ],
  },
  'scmp.com': {
    _name: 'Corona Virus Disease 2019',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/rss/:category_id/feed'],
        target: '/scmp/:category_id',
      },
      {
        title: 'Topics',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/topics/:topic'],
        target: '/scmp/topics/:topic',
      },
    ],
  },
  'scnu.edu.cn': {
    _name: '华南师范大学',
    jw: [
      {
        title: '教务处通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/ann/index.html', '/'],
        target: '/scnu/jw',
      },
    ],
    lib: [
      {
        title: '图书馆通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news/zuixingonggao', '/'],
        target: '/scnu/library',
      },
    ],
    ss: [
      {
        title: '软件学院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tongzhigonggao', '/'],
        target: '/scnu/ss',
      },
    ],
    yz: [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/tongzhigonggao/ssgg', '/'],
        target: '/scnu/yjs',
      },
    ],
    cs: [
      {
        title: '计算机学院竞赛通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/xueshenggongzuo/chengchangfazhan/kejichuangxin/', '/'],
        target: '/scnu/cs/match',
      },
    ],
  },
  'scut.edu.cn': {
    _name: '华南理工大学',
    www2: [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/graduate/14562/list.htm'],
        target: '/scut/yjs',
      },
      {
        title: '电子与信息学院 - 新闻速递',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/ee/16285/list.htm'],
        target: '/scut/seie/news_center',
      },
    ],
  },
  'scvtc.edu.cn': {
    _name: '四川职业技术学院',
    '.': [
      {
        title: '学院公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/ggfw1/xygg.htm', '/'],
        target: '/scvtc/xygg',
      },
    ],
  },
  'seekingalpha.com': {
    _name: 'Seeking Alpha',
    '.': [
      {
        title: 'Summary',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: [
          '/symbol/:symbol/:category',
          '/symbol/:symbol/earnings/:category',
        ],
        target: '/seekingalpha/:symbol/:category',
      },
    ],
  },
  'sega.jp': {
    _name: 'SEGA',
    'info-maimai': [
      {
        title: 'maimai DX Japanese Ver. News',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/sega/maimaidx/news',
      },
    ],
    pjsekai: [
      {
        title: '世界计划 多彩舞台 ｜ ProjectSekai ｜ プロセカ',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/news/index.html'],
        target: '/sega/pjsekai/news',
      },
    ],
  },
  'segmentfault.com': {
    _name: 'SegmentFault',
    '.': [
      {
        title: '博客',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/t/:tag/blogs'],
        target: '/segmentfault/blogs/:tag',
      },
      {
        title: '频道',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/channel/:name'],
        target: '/segmentfault/channel/:name',
      },
      {
        title: '用户',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/u/:name'],
        target: '/segmentfault/user/:name',
      },
    ],
  },
  'sensortower.com': {
    _name: 'Sensor Tower',
    '.': [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog', '/zh-CN/blog', '/ja/blog', '/ko/blog', '/'],
        target: '/sensortower/blog',
      },
    ],
  },
  'setn.com': {
    _name: '三立新聞網',
    '.': [
      {
        title: '新聞',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/ViewAll.aspx', '/'],
        target: '/setn/:category?',
      },
    ],
  },
  'seu.edu.cn': {
    _name: '东南大学',
    seugs: [
      {
        title: '研究生院全部公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/26671/list.htm', '/'],
        target: '/seu/yjs',
      },
    ],
    cse: [
      {
        title: '计算机技术与工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm', '/'],
        target: '/seu/cse/:type?',
      },
    ],
    radio: [
      {
        title: '信息科学与工程学院学术活动',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/_s29/15986/list.psp', '/'],
        target: '/seu/radio/academic',
      },
    ],
    yzb: [
      {
        title: '研究生招生网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/seu/yzb/:type',
      },
    ],
  },
  'sfacg.com': {
    _name: 'SF 轻小说',
    book: [
      {
        title: '章节',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/Novel/:id/*'],
        target: '/sfacg/novel/chapter/:id',
      },
    ],
  },
  'shcstheatre.com': {
    _name: '上海文化广场',
    www: [
      {
        title: '节目列表',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/Program/programList.aspx'],
        target: '/shcstheatre/programs',
      },
    ],
  },
  'shiep.edu.cn': {
    _name: '上海电力大学',
    bwc: [
      {
        title: '武装部保卫处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/bwc/:id',
      },
    ],
    career: [
      {
        title: '本科就业信息网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news/index/tag/:id'],
        target: '/shiep/career/:id',
      },
    ],
    cyb: [
      {
        title: '资产经营公司/产业办',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/cyb/:id',
      },
    ],
    dangban: [
      {
        title: '党委办公室',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/dangban/:id',
      },
    ],
    djfwzxdcs: [
      {
        title: '党建服务中心/党建督查室',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/djfwzxdcs/:id',
      },
    ],
    dqxy: [
      {
        title: '电气工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/dqxy/:id',
      },
    ],
    dwllc: [
      {
        title: '对外联络处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/dwllc/:id',
      },
    ],
    dxxy: [
      {
        title: '电子与信息工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/dxxy/:id',
      },
    ],
    energy: [
      {
        title: '能源与机械工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/energy/:id',
      },
    ],
    'energy-saving': [
      {
        title: '上海热交换系统节能工程技术研究中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/energy-saving/:id',
      },
    ],
    english: [
      {
        title: 'Shanghai University of Electric Power',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/english/:id',
      },
    ],
    fao: [
      {
        title: '国际交流与合作处（港澳台办公室）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/fao/:id',
      },
    ],
    fgw: [
      {
        title: '妇工委',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/fgw/:id',
      },
    ],
    fzghc: [
      {
        title: '发展规划处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/fzghc/:id',
      },
    ],
    gec: [
      {
        title: '上海新能源人才技术教育交流中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/gec/:id',
      },
    ],
    gonghui: [
      {
        title: '工会',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/gonghui/:id',
      },
    ],
    'green-energy': [
      {
        title: '上海绿色能源并网技术研究中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/green-energy/:id',
      },
    ],
    hhsyzx: [
      {
        title: '能源化学实验教学中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/hhsyzx/:id',
      },
    ],
    hhxy: [
      {
        title: '环境与化学工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/hhxy/:id',
      },
    ],
    hqglc: [
      {
        title: '后勤管理处（后勤服务中心）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/hqglc/:id',
      },
    ],
    ieetc: [
      {
        title: '创新创业工程训练中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/ieetc/:id',
      },
    ],
    jgdw: [
      {
        title: '机关党委',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jgdw/:id',
      },
    ],
    jgxy: [
      {
        title: '经济与管理学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jgxy/:id',
      },
    ],
    jijian: [
      {
        title: '纪委（监察专员办公室）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jijian/:id',
      },
    ],
    jjc: [
      {
        title: '基建处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jjc/:id',
      },
    ],
    jjxy: [
      {
        title: '继续教育学院（国际教育学院）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jjxy/:id',
      },
    ],
    jsjxfzzx: [
      {
        title: '教师教学发展中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jsjxfzzx/:id',
      },
    ],
    jsjxy: [
      {
        title: '计算机科学与技术学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jsjxy/:id',
      },
    ],
    jszyzx: [
      {
        title: '技术转移中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jszyzx/:id',
      },
    ],
    jwc: [
      {
        title: '教务处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jwc/:id',
      },
    ],
    jxfz: [
      {
        title: '电力装备设计与制造虚拟仿真中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/jxfz/:id',
      },
    ],
    kczx: [
      {
        title: '能源电力科创中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/kczx/:id',
      },
    ],
    kyc: [
      {
        title: '科研处/融合办',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/kyc/:id',
      },
    ],
    lgxq: [
      {
        title: '临港新校区建设综合办公室',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/lgxq/:id',
      },
    ],
    library: [
      {
        title: '图书馆',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/library/:id',
      },
    ],
    metc: [
      {
        title: '现代教育技术中心/信息办',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/metc/:id',
      },
    ],
    mpep: [
      {
        title: '上海市电力材料防护与新材料重点实验室',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/mpep/:id',
      },
    ],
    news: [
      {
        title: '新闻网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/news/:id',
      },
    ],
    nydlzk: [
      {
        title: '能源电力智库',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/nydlzk/:id',
      },
    ],
    office: [
      {
        title: '校长办公室（档案馆）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/office/:id',
      },
    ],
    rpstec: [
      {
        title: '国家新能源电力系统实验教学示范中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/rpstec/:id',
      },
    ],
    rsc: [
      {
        title: '党委教师工作部/人事处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/rsc/:id',
      },
    ],
    rwysxy: [
      {
        title: '人文艺术学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/rwysxy/:id',
      },
    ],
    sjc: [
      {
        title: '审计处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/sjc/:id',
      },
    ],
    skb: [
      {
        title: '马克思主义学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/skb/:id',
      },
    ],
    slxy: [
      {
        title: '数理学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/slxy/:id',
      },
    ],
    spgc: [
      {
        title: '智能发电实验教学中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/spgc/:id',
      },
    ],
    sysyzcglc: [
      {
        title: '实验室与资产管理处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/sysyzcglc/:id',
      },
    ],
    tgb: [
      {
        title: '离退休党委/退管办',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/tgb/:id',
      },
    ],
    tw: [
      {
        title: '团委',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/tw/:id',
      },
    ],
    tyb: [
      {
        title: '体育学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/tyb/:id',
      },
    ],
    tzb: [
      {
        title: '统战部',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/tzb/:id',
      },
    ],
    wenming: [
      {
        title: '文明办',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/wenming/:id',
      },
    ],
    wgyxy: [
      {
        title: '外国语学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/wgyxy/:id',
      },
    ],
    xcb: [
      {
        title: '宣传部（文明办、融媒体中心）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/xcb/:id',
      },
    ],
    xsc: [
      {
        title: '学生处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/xsc/:id',
      },
    ],
    xunchaban: [
      {
        title: '巡查办',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/xunchaban/:id',
      },
    ],
    xxgk: [
      {
        title: '信息公开网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/xxgk/:id',
      },
    ],
    yjsc: [
      {
        title: '研究生院/研工部',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/yjsc/:id',
      },
    ],
    zdhxy: [
      {
        title: '自动化工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/zdhxy/:id',
      },
    ],
    zs: [
      {
        title: '本科招生网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/zs/:id',
      },
    ],
    ztjy: [
      {
        title: '学习路上',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/ztjy/:id',
      },
    ],
    zzb: [
      {
        title: '组织部（老干部处、党校）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:id/list.htm'],
        target: '/shiep/zzb/:id',
      },
    ],
  },
  'shisu.edu.cn': {
    _name: '上海外国语大学',
    en: [
      {
        title: 'SISU TODAY | FEATURED STORIES',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/resources/:section/'],
        target: '/shisu/en/:section',
      },
    ],
    news: [
      {
        title: '上外新闻',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:section/index.html'],
        target: '/shisu/news/:section',
      },
    ],
  },
  'shmeea.edu.cn': {
    _name: '上海市教育考试院',
    www: [
      {
        title: '自学考试通知公告',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/page/04000/index.html', '/'],
        target: '/shmeea/self-study',
      },
    ],
  },
  'shmtu.edu.cn': {
    _name: '上海海事大学',
    jwc: [
      {
        title: '教务信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/shmtu/jwc/:type',
      },
    ],
    portal: [
      {
        title: '数字平台',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/shmtu/portal/:type',
      },
    ],
    www: [
      {
        title: '官网信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/shmtu/www/:type',
      },
    ],
  },
  'shoac.com.cn': {
    _name: '上海东方艺术中心',
    '.': [
      {
        title: '演出月历',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/shoac/recent-show',
      },
    ],
  },
  'shopback.com.tw': {
    _name: 'ShopBack',
    '.': [
      {
        title: 'Store',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/:category', '/'],
        target: '/shopback/:store',
      },
    ],
  },
  'shopify.com': {
    _name: 'Shopify',
    apps: [
      {
        title: 'App reviews',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:handle'],
        target: '/shopify/apps/:handle/reviews/:page?',
      },
      {
        title: 'App store search',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/search'],
        target:
          '/shopify(_params,url)=>{const{searchParams}=new URL(url).searchParams;return searchParams.has("q")?`/shopify/apps/search/${searchParams.get("q")}`:null}',
      },
    ],
  },
  'shoppingdesign.com.tw': {
    _name: 'Shopping Design',
    www: [
      {
        title: '文章列表',
        docs: 'https://docs.rsshub.app/routes/design',
        source: ['/post'],
        target: '/shoppingdesign/posts',
      },
    ],
  },
  'showstart.com': {
    _name: '秀动网',
    www: [
      {
        title: '音乐人 - 演出更新',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/artist/:id'],
        target: '/showstart/artist/:id',
      },
      {
        title: '厂牌 - 演出更新',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/host/:id'],
        target: '/showstart/brand/:id',
      },
    ],
  },
  'shu.edu.cn': {
    _name: '上海大学',
    www: [
      {
        title: '官网信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/shu/:type',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/shu/:type',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/shu/:type',
      },
    ],
  },
  'shuiguopai.com': {
    _name: '水果派',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/shuiguopai/',
      },
    ],
  },
  'sicau.edu.cn': {
    _name: '四川农业大学',
    dky: [
      {
        title: '动物科技学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/sicau/dky/:category?',
      },
      {
        title: '招生就业',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/sicau/zsjy/:category?',
      },
    ],
    jiaowu: [
      {
        title: '教务处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/sicau/jiaowu/jxtz',
      },
    ],
    yan: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/sicau/yan/:category?',
      },
    ],
  },
  'sigsac.org': {
    _name: 'ACM Special Interest Group on Security Audit and Control',
    '.': [
      {
        title: 'The ACM Conference on Computer and Communications Security',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/ccs.html', '/'],
        target: '/sigsac/ccs',
      },
    ],
  },
  'simpleinfo.cc': {
    _name: '簡訊設計',
    blog: [
      {
        title: '志祺七七',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/blog/:category'],
        target: '/simpleinfo/:category',
      },
    ],
  },
  'sina.com.cn': {
    _name: '新浪',
    tech: [
      {
        title: '专栏 - 创事记',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/chuangshiji', '/'],
        target: '/sina/csj',
      },
    ],
    finance: [
      {
        title: '财经－国內',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/china', '/'],
        target: '/sina/finance/china',
      },
      {
        title: '美股',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/stock/usstock', '/'],
        target: '/sina/finance/stock/usstock',
      },
    ],
  },
  'sinchew.com.my': {
    _name: '星洲网',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/sinchew*',
      },
    ],
  },
  'sjtu.edu.cn': {
    _name: '上海交通大学',
    gs: [
      {
        title: '研究生通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/announcement/:type'],
        target: '/sjtu/gs/:type',
      },
    ],
  },
  'sketis.net': {
    _name: 'Sketis | Website of Dr. Makarius Wenzel',
    'isabelle-dev': [
      {
        title: 'Isabelle Development Blogs',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: [
          '/phame/',
          '/phame/blog/',
          '/phame/blog/view/:blog/',
          '/phame/post/',
          '/phame/post/view/:post_id/:post_title/',
        ],
        target: '/sketis/isabelle-dev/blog/1',
      },
      {
        title: 'Isabelle Development Blogs',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: [
          '/phame/',
          '/phame/blog/',
          '/phame/blog/view/:blog/',
          '/phame/post/',
          '/phame/post/view/:post_id/:post_title/',
        ],
        target: '/sketis/isabelle-dev/blog/2',
      },
    ],
  },
  'slowmist.com': {
    _name: '慢雾科技',
    '.': [
      {
        title: '动态',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/zh/news.html'],
        target: '/slowmist/:type?',
      },
    ],
  },
  'smashingmagazine.com': {
    _name: 'Smashing Magazine',
    '.': [
      {
        title: 'Category',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/category/:category'],
        target: '/smashingmagazine/:category',
      },
    ],
  },
  'smzdm.com': {
    _name: '什么值得买',
    zhiyou: [
      {
        title: '用户文章',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/member/:uid/article'],
        target: '/smzdm/article/:uid',
      },
      {
        title: '用户爆料',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/member/:uid/baoliao'],
        target: '/smzdm/baoliao/:uid',
      },
    ],
    post: [
      {
        title: '好文分类',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/fenlei/:name'],
        target: '/smzdm/haowen/fenlei/:name',
      },
    ],
  },
  'snowpeak.com': {
    _name: 'Snow Peak',
    '.': [
      {
        title: 'New Arrivals(USA)',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/collections/new-arrivals', '/'],
        target: '/snowpeak/us/new-arrivals',
      },
    ],
  },
  'sobooks.net': {
    _name: 'SoBooks',
    '.': [
      {
        title: '归档',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/:category'],
        target: '/sobooks/:category',
      },
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/:category'],
        target: '/sobooks/:category',
      },
      {
        title: '标签',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/books/tag/:tag'],
        target: '/sobooks/tag/:tag',
      },
    ],
  },
  'sohu.com': {
    _name: '搜狐号',
    mp: [
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/profile'],
        target:
          '/sohu(_params,url)=>`/sohu/mp/${new URL(url).searchParams.get("xpt")}`',
      },
    ],
  },
  'sony.com': {
    _name: 'Sony',
    '.': [
      {
        title: 'Software Downloads',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/electronics/support/:productType/:productId/downloads'],
        target: '/sony/downloads/:productType/:productId',
      },
    ],
  },
  'soundofhope.org': {
    _name: '希望之声',
    '.': [
      {
        title: '频道',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:channel/:id'],
        target: '/soundofhope/:channel/:id',
      },
    ],
  },
  'spotify.com': {
    _name: 'Spotify',
    open: [
      {
        title: 'Artist Albums',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/artist/:id'],
        target: '/spotify/artist/:id',
      },
      {
        title: 'Personal Top Artists',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/spotify/top/artists',
      },
      {
        title: 'Playlist',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/playlist/:id'],
        target: '/spotify/playlist/:id',
      },
      {
        title: 'Personal Saved Tracks',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/collection/tracks'],
        target: '/spotify/saved',
      },
      {
        title: 'Show',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/show/:id'],
        target: '/spotify/show/:id',
      },
      {
        title: 'Personal Top Tracks',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/spotify/top/tracks',
      },
    ],
  },
  'springer.com': {
    _name: 'Springer',
    www: [
      {
        title: 'Journal',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/journal/:journal/*'],
        target: '/springer/journal/:journal',
      },
    ],
  },
  'sqmc.edu.cn': {
    _name: '新乡医学院三全学院',
    '.': [
      {
        title: '官网信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category/list.htm'],
        target: '/sqmc/www/:category?',
      },
    ],
  },
  'sse.com.cn': {
    _name: '上海证券交易所',
    www: [
      {
        title: '监管问询',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/disclosure/credibility/supervision/inquiries', '/'],
        target: '/sse/inquire',
      },
    ],
    kcb: [
      {
        title: '科创板项目动态',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/home', '/'],
        target: '/sse/renewal',
      },
    ],
  },
  'ssm.gov.mo': {
    _name: '澳门卫生局',
    www: [
      {
        title: '最新消息',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/', '/portal'],
        target: '/ssm/news',
      },
    ],
  },
  'sspai.com': {
    _name: '少数派 sspai',
    '.': [
      {
        title: '作者动态',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/u/:id/updates'],
        target: '/sspai/activity/:id',
      },
      {
        title: '作者',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/u/:id/posts'],
        target: '/sspai/author/:id',
      },
      {
        title: '用户收藏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/u/:slug/bookmark_posts'],
        target: '/sspai/bookmarks/:slug',
      },
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/column/:id'],
        target: '/sspai/column/:id',
      },
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/index'],
        target: '/sspai/index',
      },
      {
        title: 'Matrix',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/matrix'],
        target: '/sspai/matrix',
      },
      {
        title: '会员社区',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/community'],
        target: '/sspai/prime/community',
      },
      {
        title: '付费专栏文章更新',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/series/:id', '/series/:id/list', '/series/:id/metadata'],
        target: '/sspai/series/:id',
      },
      {
        title: '最新上架付费专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/series'],
        target: '/sspai/series',
      },
      {
        title: '标签订阅',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tag/:keyword'],
        target: '/sspai/tag/:keyword',
      },
      {
        title: '专题内文章更新',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topic/:id'],
        target: '/sspai/topic/:id',
      },
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topics'],
        target: '/sspai/topics',
      },
    ],
    shortcuts: [
      {
        title: 'Shortcuts Gallery',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/*'],
        target: '/sspai/shortcuts',
      },
    ],
  },
  'sspu.edu.cn': {
    _name: '上海第二工业大学',
    jwc: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/jwc/:listId/list.htm'],
        target: '/sspu/jwc/:listId',
      },
    ],
    pe2016: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:id/list.htm'],
        target: '/sspu/pe/:id',
      },
    ],
  },
  'startuplatte.com': {
    _name: '創新拿鐵',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/:category', '/'],
        target: '/startuplatte/:category?',
      },
    ],
  },
  'stbu.edu.cn': {
    _name: '四川工商学院',
    jsjxy: [
      {
        title: '计算机学院 - 通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news', '/', '/'],
        target: '/stbu/jsjxy',
      },
    ],
    '.': [
      {
        title: '学院新闻',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/html/news/xueyuan', '/'],
        target: '/stbu/xyxw',
      },
    ],
  },
  'steamcommunity.com': {
    _name: 'Steam',
    '.': [
      {
        title: 'Community Hub',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:appid'],
        target: '/steam/appcommunityfeed/:appid',
      },
      {
        title: 'Sharefile Changelog',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/sharedfiles/filedetails/changelog/:sharefileID'],
        target: '/steam/sharefile-changelog/:sharefileID',
      },
      {
        title: 'Workshop Search Results',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:appid/workshop/'],
        target: '/steam/workshopsearch/:appid',
      },
    ],
  },
  'steampowered.com': {
    _name: 'Steam',
    store: [
      {
        title: 'Community Hub',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:appid/*/'],
        target: '/steam/appcommunityfeed/:appid',
      },
      {
        title: 'Store Search',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/', '/search/:params'],
        target: '/steam/search/:params',
      },
    ],
  },
  'stockedge.com': {
    _name: 'Stock Edge',
    web: [
      {
        title: 'Daily Updates News',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/daily-updates/news'],
        target: '/stockedge/daily-updates/news',
      },
    ],
  },
  'storm.mg': {
    _name: '風傳媒',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category/:id'],
        target: '/storm/:category?/:id?',
      },
    ],
  },
  'storyfm.cn': {
    _name: '故事 FM',
    '.': [
      {
        title: '播客',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/episodes-list', '/'],
        target: '/storyfm/episodes',
      },
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/storyfm/index',
      },
    ],
  },
  'stream-capital.com': {
    _name: '远川研究所',
    www: [
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/search'],
        target: '/stream-capital/search',
      },
    ],
  },
  'studygolang.com': {
    _name: 'Go 语言中文网',
    '.': [
      {
        title: '板块',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/go/:id', '/'],
        target: '/studygolang/go/:id?',
      },
    ],
  },
  'supchina.com': {
    _name: 'SupChina',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/feed', '/'],
        target: '/supchina/',
      },
      {
        title: 'Podcasts',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/podcasts', '/'],
        target: '/supchina/podcasts',
      },
    ],
  },
  'sustech.edu.cn': {
    _name: '南方科技大学',
    biddingoffice: [
      {
        title: '采购与招标管理部',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/sustech/bidding',
      },
    ],
    newshub: [
      {
        title: '新闻网（中文）',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news'],
        target: '/sustech/newshub-zh',
      },
    ],
    gs: [
      {
        title: '研究生网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/sustech/yjs',
      },
    ],
  },
  'swissinfo.ch': {
    _name: 'swissinfo',
    '.': [
      {
        title: 'Category',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:language/:category', '/'],
        target: '/swissinfo/:language?/:category?',
      },
    ],
  },
  'swjtu.edu.cn': {
    _name: '西南交通大学',
    jwc: [
      {
        title: '教务网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/vatuu/WebAction', '/'],
        target: '/swjtu/jwc',
      },
    ],
    jiuye: [
      {
        title: '就业招聘信息',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/career', '/'],
        target: '/swjtu/jyzpxx',
      },
    ],
    xg: [
      {
        title: '扬华素质网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: [
          '/web/Home/PushNewsList',
          '/web/Home/NewsList',
          '/web/Home/ColourfulCollegeNewsList',
          '/web/Publicity/List',
          '/',
        ],
        target: '/swjtu/xg',
      },
    ],
    gsee: [
      {
        title: '地球科学与工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/swjtu/gsee/yjs',
      },
    ],
  },
  'swpu.edu.cn': {
    _name: '西南石油大学',
    '.': [
      {
        title: '办公网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/swpu/bgw/:code',
      },
      {
        title: '财经学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/swpu/cjxy/:code',
      },
      {
        title: '教务处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/swpu/dean/:code',
      },
      {
        title: '电气信息学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/swpu/dxy/:code',
      },
      {
        title: '信息学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/swpu/is/:code',
      },
      {
        title: '计算机与软件学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/swpu/scs/:code',
      },
    ],
  },
  'syosetu.com': {
    _name: 'syosetu',
    novel18: [
      {
        title: 'chapter',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/:id'],
        target: '/syosetu/chapter/:id',
      },
    ],
  },
  'sysu.edu.cn': {
    _name: '中山大学',
    cse: [
      {
        title: '数据科学与计算机学院动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/sysu/cse',
      },
    ],
    ygafz: [
      {
        title: '粤港澳发展研究院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/sysu/ygafz/:type?',
      },
    ],
  },
  'szse.cn': {
    _name: '深圳证券交易所',
    '.': [
      {
        title: '问询函件',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/disclosure/supervision/inquire/index.html', '/'],
        target: '/szse/inquire',
      },
      {
        title: '上市公告 - 可转换债券',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/disclosure/notice/company/index.html', '/'],
        target: '/szse/notice',
      },
      {
        title: '最新规则',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/lawrules/rule/new', '/'],
        target: '/szse/rule',
      },
    ],
    listing: [
      {
        title: '创业板项目动态',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: [
          '/projectdynamic/1/index.html',
          '/projectdynamic/2/index.html',
          '/projectdynamic/3/index.html',
          '/',
        ],
        target: '/szse/projectdynamic/:type?/:stage?/:status?',
      },
    ],
  },
  'taiwannews.com.tw': {
    _name: 'Taiwan News 台灣英文新聞',
    '.': [
      {
        title: 'Hot News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:lang/index'],
        target: '/taiwannews/hot/:lang',
      },
    ],
  },
  'tangshufang.com': {
    _name: '唐书房',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category', '/'],
        target: '/tangshufang/:category?',
      },
    ],
  },
  'taoguba.com.cn': {
    _name: '淘股吧',
    '.': [
      {
        title: '用户博客',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/blog/:id', '/'],
        target: '/taoguba/blog/:id',
      },
      {
        title: '用户博客',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/blog/:id', '/'],
        target: '/taoguba/user/:id',
      },
    ],
  },
  'taptap.com': {
    _name: 'TapTap 中国',
    '.': [
      {
        title: '游戏更新',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:id'],
        target: '/taptap/changelog/:id',
      },
      {
        title: '游戏更新',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:id'],
        target: '/taptap/changelog/:id',
      },
      {
        title: '游戏评价',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:id/review', '/app/:id'],
        target: '/taptap/review/:id',
      },
      {
        title: '游戏评价',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:id/review', '/app/:id'],
        target: '/taptap/review/:id',
      },
      {
        title: '游戏论坛',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/app/:id/topic', '/app/:id'],
        target: '/taptap/topic/:id',
      },
    ],
  },
  'tass.com': {
    _name: 'Russian News Agency TASS',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category'],
        target: '/tass/:category',
      },
    ],
  },
  'techcrunch.com': {
    _name: 'TechCrunch',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/techcrunch/news',
      },
    ],
  },
  'techflowpost.com': {
    _name: '深潮 TechFlow',
    '.': [
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/newsletter/index.html'],
        target: '/techflowpost/express',
      },
      {
        title: '首页',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/techflowpost/',
      },
    ],
  },
  'techpowerup.com': {
    _name: 'TechPowerUp',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/techpowerup/',
      },
      {
        title: 'Reviews',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/techpowerup/review/:keyword?',
      },
    ],
  },
  'telegram.org': {
    _name: 'Telegram',
    '.': [
      {
        title: 'Telegram Blog',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/blog'],
        target: '/telegram/blog',
      },
    ],
  },
  't.me': {
    _name: 'Telegram',
    '.': [
      {
        title: 'Channel',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/s/:username'],
        target: '/telegram/channel/:username',
      },
    ],
  },
  'tencent.com': {
    _name: '腾讯',
    cloud: [
      {
        title: '腾讯云开发者社区专栏',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/developer/column'],
        target: '/tencent/cloud/developer/column/:categoryId?',
      },
    ],
  },
  'tesla.cn': {
    _name: '特斯拉中国',
    '.': [
      {
        title: '价格',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/model3/design', '/'],
        target: '/tesla/price',
      },
    ],
  },
  'tgbus.com': {
    _name: '电玩巴士 TGBUS',
    www: [
      {
        title: '文章列表',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/list/:category/'],
        target: '/tgbus/list/:category',
      },
    ],
  },
  'theatlantic.com': {
    _name: 'The Atlantic',
    www: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category'],
        target: '/theatlantic/:category',
      },
    ],
  },
  'theblockbeats.info': {
    _name: '律动 BlockBeats',
    www: [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/article'],
        target: '/theblockbeats/article',
      },
      {
        title: '快讯',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/newsflash'],
        target: '/theblockbeats/newsflash',
      },
    ],
  },
  'thehindu.com': {
    _name: 'The Hindu',
    '.': [
      {
        title: 'Topic',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/topic/:topic'],
        target: '/thehindu/topic/:topic',
      },
    ],
  },
  'theinitium.com': {
    _name: '端传媒',
    '.': [
      {
        title: '作者',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/author/:type'],
        target: '/theinitium/author/:type',
      },
      {
        title: '专题・栏目',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/channel/:type'],
        target: '/theinitium/channel/:type',
      },
      {
        title: '作者',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/author/:type'],
        target: '/theinitium/author/:type',
      },
      {
        title: '话题・标签',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/tags/:type'],
        target: '/theinitium/tags/:type',
      },
    ],
  },
  'factpaper.cn': {
    _name: '澎湃新闻',
    '.': [
      {
        title: '明查',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/thepaper/factpaper/:status',
      },
    ],
  },
  'thepaper.cn': {
    _name: '澎湃新闻',
    '.': [
      {
        title: '首页头条',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/thepaper/featured',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/thepaper/sidebar',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/thepaper/839studio/:id',
      },
    ],
  },
  'thepetcity.co': {
    _name: 'PetCity 毛孩日常',
    '.': [
      {
        title: 'Pet Staff 毛孩好物',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/cute-item', '/'],
        target: '/thepetcity/1',
      },
      {
        title: 'Funny News毛孩趣聞',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/funny-news', '/'],
        target: '/thepetcity/2',
      },
      {
        title: 'Knowledge飼養大全',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/knowledge', '/'],
        target: '/thepetcity/3',
      },
      {
        title: 'Hot Spot 毛孩打卡點',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/hot-spot', '/'],
        target: '/thepetcity/4',
      },
      {
        title: 'Raise Pets 養寵物新手',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/raise-cats', '/'],
        target: '/thepetcity/5',
      },
      {
        title: 'PetCity 毛孩日常 | 飼養竉物、竉物用品、萌寵趣聞',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/thepetcity/:term?',
      },
    ],
  },
  'theverge.com': {
    _name: 'The Verge',
    '.': [
      {
        title: 'The Verge',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:hub', '/'],
        target: '/theverge/:hub?',
      },
    ],
  },
  'thwiki.cc': {
    _name: 'THBWiki',
    '.': [
      {
        title: 'Calendar',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/', '/%E6%97%A5%E7%A8%8B%E8%A1%A8'],
        target: '/thwiki/calendar',
      },
    ],
  },
  'tiktok.com': {
    _name: 'TikTok',
    '.': [
      {
        title: 'User',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:user'],
        target: '/tiktok/user/:user',
      },
    ],
  },
  'dl.gov.cn': {
    _name: '停水通知',
    swj: [
      {
        title: '大连市',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/col/col4296/index.html', '/'],
        target: '/tingshuitz/dalian',
      },
    ],
  },
  'hzwgc.com': {
    _name: '停水通知',
    www: [
      {
        title: '杭州市',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/public/stop_the_water', '/'],
        target: '/tingshuitz/hangzhou',
      },
    ],
  },
  'jlwater.com': {
    _name: '停水通知',
    '.': [
      {
        title: '南京市',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/portal/10000013', '/'],
        target: '/tingshuitz/nanjing',
      },
    ],
  },
  'sz-water.com.cn': {
    _name: '停水通知',
    '.': [
      {
        title: '深圳市',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/*'],
        target: '/tingshuitz/shenzhen',
      },
    ],
  },
  'whwater.com': {
    _name: '停水通知',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/IWater.shtml', '/'],
        target: '/tingshuitz/wuhan',
      },
    ],
  },
  'xswater.com': {
    _name: '停水通知',
    www: [
      {
        title: '萧山区',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/gongshui/channels/227.html', '/'],
        target: '/tingshuitz/xiaoshan',
      },
    ],
  },
  'yjsswjt.com': {
    _name: '停水通知',
    '.': [
      {
        title: '阳江市',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/zxdt_list.jsp', '/'],
        target: '/tingshuitz/yangjiang',
      },
    ],
  },
  'tingtingfm.com': {
    _name: '听听 FM',
    mobile: [
      {
        title: '节目',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/v3/program/:programId'],
        target: '/tingtingfm/program/:programId',
      },
    ],
  },
  'tokeninsight.com': {
    _name: 'TokenInsight',
    '.': [
      {
        title: 'Blogs',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang/blogs'],
        target: '/tokeninsight/blog/:lang',
      },
      {
        title: 'Latest',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang/latest'],
        target: '/tokeninsight/bulletin/:lang',
      },
      {
        title: 'Research',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:lang/report'],
        target: '/tokeninsight/report/:lang',
      },
    ],
  },
  'tongji.edu.cn': {
    _name: '同济大学',
    bksy: [
      {
        title: '本科生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/tongji/bks',
      },
    ],
    yz: [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zsxw/ggtz.htm', '/'],
        target: '/tongji/yjs',
      },
    ],
  },
  'tophub.today': {
    _name: '今日热榜',
    '.': [
      {
        title: '榜单',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/n/:id'],
        target: '/tophub/:id',
      },
      {
        title: '榜单列表',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/n/:id'],
        target: '/tophub/list/:id',
      },
    ],
  },
  'topys.cn': {
    _name: 'TOPYS',
    '.': [
      {
        title: '关键字',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/search/:keyword', '/'],
        target: '/topys/:keyword?',
      },
    ],
  },
  'tradingview.com': {
    _name: 'TradingView',
    '.': [
      {
        title: 'Desktop releases and release notes',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: [
          '/support/solutions/43000673888-tradingview-desktop-releases-and-release-notes/',
        ],
        target: '/tradingview/desktop',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/pine-script-docs/en/:version/Release_notes.html'],
        target: '/tradingview/pine/:version',
      },
    ],
  },
  'transcriptforest.com': {
    _name: 'Transcript Forest',
    www: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/en/channel'],
        target: '/transcriptforest/:channel?',
      },
    ],
  },
  'tribalfootball.com': {
    _name: 'Tribal Football',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/tribalfootball/',
      },
    ],
  },
  'trow.cc': {
    _name: 'The Ring of Wonder',
    '.': [
      {
        title: '首页更新',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/trow/portal',
      },
    ],
  },
  'tsinghua.edu.cn': {
    _name: '清华大学',
    lib: [
      {
        title: '图书馆资源动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zydt/:category'],
        target:
          '/tsinghuaparams=>{const category=params.category?.replace(/\\.htm$/,"");return`/tsinghua/lib/zydt${category?`/${category}`:""}`}',
      },
      {
        title: '图书馆资源动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zydt'],
        target: '/tsinghua/lib/zydt',
      },
      {
        title: '图书馆已购资源动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zydt/yg'],
        target: '/tsinghua/lib/zydt/yg',
      },
      {
        title: '图书馆试用资源动态',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/zydt/sy'],
        target: '/tsinghua/lib/zydt/sy',
      },
    ],
  },
  'ttv.com.tw': {
    _name: '台視新聞網',
    news: [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category'],
        target: '/ttv/:category?',
      },
    ],
  },
  'tvb.com': {
    _name: '无线新闻',
    '.': [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:language/:category', '/'],
        target: '/tvb/news/:category?/:language?',
      },
    ],
  },
  'twitch.tv': {
    _name: 'Twitch',
    www: [
      {
        title: 'Stream Schedule',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/:login/schedule'],
        target: '/twitch/schedule/:login',
      },
      {
        title: 'Channel Video',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/:login/videos'],
        target: '/twitch/video/:login',
      },
    ],
  },
  'x.com': {
    _name: 'X (Twitter)',
    '.': [
      {
        title: 'Home timeline',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/home'],
        target: '/twitter/home',
      },
      {
        title: 'Keyword',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/search'],
        target: '/twitter/keyword/:keyword/:routeParams?',
      },
      {
        title: 'List timeline',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/i/lists/:id'],
        target: '/twitter/list/:id',
      },
      {
        title: 'User media',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:id/media'],
        target: '/twitter/media/:id',
      },
      {
        title: 'User timeline',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:id'],
        target: '/twitter/user/:id',
      },
    ],
  },
  'twreporter.org': {
    _name: '報導者',
    '.': [
      {
        title: '分類',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:category'],
        target: '/twreporter/category/:category',
      },
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/twreporter/newest',
      },
    ],
  },
  'tynu.edu.cn': {
    _name: '太原师范学院',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/index/tzgg.htm', '/index.htm', '/'],
        target: '/tynu/',
      },
    ],
  },
  'typora.io': {
    _name: 'Typora',
    support: [
      {
        title: 'Dev Release Changelog',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/'],
        target: '/typora/changelog',
      },
      {
        title: 'Changelog',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/'],
        target: '/typora/changelog',
      },
    ],
  },
  'typst.app': {
    _name: 'Typst',
    '.': [
      {
        title: 'Universe',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/universe'],
        target: '/typst/universe',
      },
    ],
  },
  'u9a9.com': {
    _name: 'U9A9',
    '.': [
      {
        title: 'Search',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/u9a9/:preview?',
      },
      {
        title: 'Search',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/u9a9/search/:keyword/:preview?',
      },
    ],
  },
  'uber.com': {
    _name: 'Uber 优步',
    www: [
      {
        title: 'Engineering',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog/pittsburgh/engineering'],
        target: '/uber/blog',
      },
    ],
  },
  'ucas.ac.cn': {
    _name: '中国科学院大学',
    ai: [
      {
        title: '人工智能学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index.php/zh-cn/tzgg', '/'],
        target: '/ucas/ai',
      },
    ],
  },
  'uchicago.edu': {
    _name: 'The University of Chicago Press: Journals',
    journals: [
      {
        title: 'Current Issue',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/toc/:journal/current', '/journal/:journal'],
        target: '/uchicago/journals/current/:journal',
      },
    ],
  },
  'udn.com': {
    _name: '聯合新聞網',
    '.': [
      {
        title: '即時新聞',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news/breaknews/1/:id', '/'],
        target: '/udn/news/breakingnews/:id',
      },
    ],
    global: [
      {
        title: '轉角國際 - 首頁',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/global_vision/index/:category', '/'],
        target: '/udn/global/:category?',
      },
      {
        title: '轉角國際 - 標籤',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/search/tagging/1020/:tag', '/'],
        target: '/udn/global/tag/:tag?',
      },
    ],
  },
  'uestc.edu.cn': {
    _name: '电子科技大学',
    auto: [
      {
        title: '自动化工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/auto',
      },
    ],
    cqe: [
      {
        title: '文化素质教育中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/cqe',
      },
    ],
    gr: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/gr',
      },
    ],
    jwc: [
      {
        title: '教务处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/jwc',
      },
    ],
    news: [
      {
        title: '新闻中心',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/news',
      },
    ],
    scse: [
      {
        title: '计算机科学与工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/scse',
      },
    ],
    sice: [
      {
        title: '信息与通信工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/sice',
      },
    ],
    sise: [
      {
        title: '信息与软件工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/uestc/sise',
      },
    ],
  },
  'uibe.edu.cn': {
    _name: '对外经济贸易大学',
    hr: [
      {
        title: '人力资源处',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:category/:type', '/:category', '/'],
        target: '/uibe/hr/:category?/:type?',
      },
    ],
  },
  'ulapia.com': {
    _name: '乌拉邦',
    www: [
      {
        title: '最新研报',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/ulapia/research/latest',
      },
    ],
  },
  'unraid.net': {
    _name: 'Unraid',
    '.': [
      {
        title: 'Community Apps',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/community/apps'],
        target: '/unraid/community-apps',
      },
    ],
  },
  'unusualwhales.com': {
    _name: 'Unusual Whales',
    '.': [
      {
        title: 'News Flow',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/news', '/'],
        target: '/unusualwhales/news',
      },
    ],
  },
  'upc.edu.cn': {
    _name: '中国石油大学（华东）',
    jwc: [
      {
        title: '教务处通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/:type/list.htm'],
        target: '/upc/jwc/:type?',
      },
    ],
    'zs.gs': [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/sszs/list.htm', '/'],
        target: '/upc/yjs',
      },
    ],
  },
  'uptimerobot.com': {
    _name: 'Uptime Robot',
    rss: [
      {
        title: 'RSS',
        docs: 'https://docs.rsshub.app/routes/forecast',
        source: ['/:id'],
        target: '/uptimerobot/rss/:id',
      },
    ],
  },
  'uraaka-joshi.com': {
    _name: '裏垢女子まとめ',
    '.': [
      {
        title: 'User',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:id'],
        target: '/uraaka-joshi/:id',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/uraaka-joshi/',
      },
    ],
  },
  'urbandictionary.com': {
    _name: 'Urban Dictionary',
    '.': [
      {
        title: 'Random words',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/random.php', '/'],
        target: '/urbandictionary/random',
      },
    ],
  },
  'usenix.org': {
    _name: 'USENIX',
    '.': [
      {
        title: ';login:',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/publications/loginonline', '/publications', '/'],
        target: '/usenix/loginonline',
      },
      {
        title: 'Security Symposia',
        docs: 'https://docs.rsshub.app/routes/journal',
        source: ['/conferences/all', '/conferences', '/'],
        target: '/usenix/usenix-security-sympoium',
      },
    ],
  },
  'ustb.edu.cn': {
    _name: '北京科技大学',
    gs: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type'],
        target: '/ustb/yjsy/news/:type',
      },
    ],
    yzxc: [
      {
        title: '研究生招生信息网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustb/yzxc/tzgg',
      },
    ],
  },
  'ustc.edu.cn': {
    _name: '中国科学技术大学',
    eeis: [
      {
        title: '电子工程与信息科学系',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustc/eeis',
      },
    ],
    gradschool: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustc/gs',
      },
    ],
    '.': [
      {
        title: '官网通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustc/news',
      },
    ],
    job: [
      {
        title: '就业信息网',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustc/job',
      },
    ],
    'www.teach': [
      {
        title: '教务处通知新闻',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustc/jwc',
      },
    ],
    math: [
      {
        title: '数学科学学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustc/math',
      },
    ],
    sist: [
      {
        title: '信息科学技术学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/ustc/sist',
      },
    ],
  },
  'utgd.net': {
    _name: 'UNTAG',
    '.': [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/category/s/:category', '/'],
        target: '/utgd/:category',
      },
      {
        title: '时间线',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/utgd/timeline',
      },
      {
        title: '专题',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/topic', '/'],
        target: '/utgd/topic/:topic',
      },
    ],
  },
  'gixnetwork.org': {
    _name: 'University of Washington',
    '.': [
      {
        title: 'Global Innovation Exchange News',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/news/:category'],
        target: '/uw/gix/news/:category',
      },
    ],
  },
  'v1tx.com': {
    _name: 'v1tx',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/v1tx/',
      },
    ],
  },
  'v2ex.com': {
    _name: 'V2EX',
    '.': [
      {
        title: '帖子',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/t/:postid'],
        target: '/v2ex/post/:postid',
      },
    ],
  },
  'v2rayshare.com': {
    _name: 'V2rayShare',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/v2rayshare/',
      },
    ],
  },
  'vcb-s.com': {
    _name: 'VCB-Studio',
    '.': [
      {
        title: '分类文章',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/archives/category/:cate'],
        target: '/vcb-s/category/:cate',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/vcb-s/',
      },
    ],
  },
  'baden-wuerttemberg.de': {
    _name: 'Constitutional Court of Baden-Württemberg (Germany)',
    verfgh: [
      {
        title: 'Press releases',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/de/presse-und-service/pressemitteilungen/'],
        target: '/verfghbw/press',
      },
    ],
  },
  'vice.com': {
    _name: 'VICE',
    www: [
      {
        title: 'Topic',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:language/topic/:topic'],
        target: '/vice/topic/:topic/:language',
      },
    ],
  },
  'vimeo.com': {
    _name: 'Vimeo',
    '.': [
      {
        title: 'Channel',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: [
          '/channels/:channel',
          '/channels/:channel/videos',
          '/channels/:channel/videos/:sort/:format',
        ],
        target: '/vimeo/channel/:channel',
      },
    ],
  },
  'vocus.cc': {
    _name: '方格子',
    '.': [
      {
        title: '出版專題',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:id/home', '/:id/introduce'],
        target: '/vocus/publication/:id',
      },
    ],
  },
  'vom.mn': {
    _name: 'Voice of Mongolia 蒙古之声',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:lang', '/'],
        target: '/vom/featured/:lang',
      },
    ],
  },
  'wallhaven.cc': {
    _name: 'wallhaven',
    '.': [
      {
        title: 'Search',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/wallhaven/search/:filter?/:needDetails?',
      },
      {
        title: 'Search',
        docs: 'https://docs.rsshub.app/routes/picture',
        source: ['/'],
        target: '/wallhaven/:filter?/:needDetails?',
      },
    ],
  },
  'wallpaperhub.app': {
    _name: 'WallpaperHub',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/wallpaperhub', '/'],
        target: '/wallpaperhub/',
      },
    ],
  },
  'wallstreetcn.com': {
    _name: '华尔街见闻',
    '.': [
      {
        title: '最热文章',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/wallstreetcn/hot/:period?',
      },
      {
        title: '实时快讯',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/live/:category', '/'],
        target: '/wallstreetcn/live/:category?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news/:category', '/'],
        target: '/wallstreetcn/news/:category?',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news/:category', '/'],
        target: '/wallstreetcn/:category?',
      },
    ],
  },
  'wanqu.co': {
    _name: '湾区日报',
    '.': [
      {
        title: '最新推荐',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/wanqu/news',
      },
    ],
  },
  'warthunder.com': {
    _name: 'War Thunder',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/en/news', '/'],
        target: '/warthunder/news',
      },
    ],
  },
  'watasuke.net': {
    _name: 'Watasuke',
    '.': [
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog/', '/'],
        target: '/watasuke/blog',
      },
    ],
  },
  'web.dev': {
    _name: 'web.dev',
    '.': [
      {
        title: 'Articles',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/articles'],
        target: '/web/articles',
      },
      {
        title: 'Blog',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/blog'],
        target: '/web/blog',
      },
      {
        title: 'Series',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/series/:seriesName'],
        target: '/web/series/:seriesName',
      },
    ],
  },
  'cimidata.com': {
    _name: '微信小程序',
    '.': [
      {
        title: '公众号（CareerEngine 来源）',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/a/:id'],
        target: '/wechat/ce/:id',
      },
    ],
  },
  'data258.com': {
    _name: '微信小程序',
    mp: [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/', '/article/category/:id'],
        target: '/wechat/data258/:id?',
      },
    ],
  },
  'weekendhk.com': {
    _name: '新假期周刊',
    '.': [
      {
        title: '最新文章',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/weekendhk/',
      },
    ],
  },
  'weibo.com': {
    _name: '微博绿洲',
    '.': [
      {
        title: '最新关注时间线',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/'],
        target: '/weibo/friends',
      },
      {
        title: '超话',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/p/:id/super_index'],
        target: '/weibo/super_index/:id',
      },
      {
        title: '用户收藏动态',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/'],
        target: '/weibo/user_bookmarks/:uid',
      },
    ],
    s: [
      {
        title: '热搜榜',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/top/summary'],
        target: '/weibo/search/hot/:fulltext?',
      },
    ],
  },
  'weibo.cn': {
    _name: '微博绿洲',
    m: [
      {
        title: '博主',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/u/:uid', '/profile/:uid', '/u/:uid'],
        target: '/weibo/user/:uid',
      },
      {
        title: '用户',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/u/:uid', '/profile/:uid'],
        target: '/weibo/user/:uid',
      },
    ],
  },
  'wellcee.com': {
    _name: 'Wellcee 唯心所寓',
    www: [
      {
        title: '支持的城市',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/wellcee/support-city',
      },
    ],
  },
  'wfdf.sport': {
    _name: 'WFDF',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/news/', '/'],
        target: '/wfdf/news',
      },
    ],
  },
  'wfu.edu.cn': {
    _name: '潍坊学院',
    jwc: [
      {
        title: '教务处通知',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/wfu/jwc',
      },
    ],
    news: [
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/wfu/news',
      },
    ],
  },
  'whitehouse.gov': {
    _name: 'The White House',
    '.': [
      {
        title: 'Briefing Room',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/briefing-room/:category', '/'],
        target: '/whitehouse/briefing-room/:category',
      },
      {
        title: 'Office of Science and Technology Policy',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/ostp', '/'],
        target: '/whitehouse/ostp',
      },
    ],
  },
  'who.int': {
    _name: 'World Health Organization | WHO',
    '.': [
      {
        title: 'Newsroom',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/news-room/:type'],
        target: '/who/news-room/:type',
      },
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/news'],
        target: '/who/news',
      },
      {
        title: 'Speeches',
        docs: 'https://docs.rsshub.app/routes/government',
        source: ['/director-general/speeches'],
        target: '/who/speeches',
      },
    ],
  },
  'whu.edu.cn': {
    _name: '武汉大学',
    rsgis: [
      {
        title: '武汉大学遥感信息工程学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index.htm'],
        target: '/whu/rsgis/index',
      },
    ],
    gs: [
      {
        title: '研究生院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/index.htm', '/'],
        target: '/whu/gs',
      },
    ],
  },
  'wikinews.org': {
    _name: '维基新闻',
    zh: [
      {
        title: '最新新闻',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/wiki/Special:%E6%96%B0%E9%97%BB%E8%AE%A2%E9%98%85'],
        target: '/wikinews/latest',
      },
    ],
  },
  'winstall.app': {
    _name: 'winstall',
    '.': [
      {
        title: 'Apps Update',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/apps/:appId'],
        target: '/winstall/:appId',
      },
    ],
  },
  'wired.com': {
    _name: 'WIRED',
    www: [
      {
        title: 'Tags',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/tag/:tag/'],
        target: '/wired/tag/:tag',
      },
    ],
  },
  'antibody-software.com': {
    _name: 'WziFile',
    '.': [
      {
        title: 'Version History',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/wizfile/download'],
        target: '/wizfile/updates',
      },
    ],
  },
  'wnacg.com': {
    _name: '紳士漫畫',
    '.': [
      {
        title: '分类更新',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/*'],
        target:
          '/wnacg(_,url)=>`/wnacg/category/${new URL(url).pathname.match(/albums-index-cate-(\\d+)\\.html$/)[1]}`',
      },
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/albums.html', '/'],
        target: '/wnacg/',
      },
      {
        title: '標籤更新',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/*'],
        target:
          '/wnacg(_,url)=>`/wnacg/tag/${new URL(url).pathname.match(/albums-index-tag-(.+?)\\.html$/)[1]}`',
      },
    ],
  },
  'worldjournal.com': {
    _name: '世界新聞網',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/wj/*path'],
        target: '/worldjournal/:path',
      },
    ],
  },
  'worldofwarships.com': {
    _name: 'World of Warships',
    blog: [
      {
        title: 'Development Blog',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/worldofwarships/devblog',
      },
    ],
  },
  'woshipm.com': {
    _name: '人人都是产品经理',
    '.': [
      {
        title: '热门文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/woshipm/popular',
      },
      {
        title: '用户文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/u/:id'],
        target: '/woshipm/user_article/:id',
      },
    ],
    wen: [
      {
        title: '天天问',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/woshipm/wen',
      },
    ],
  },
  'wyzxwk.com': {
    _name: '乌有之乡',
    '.': [
      {
        title: '栏目',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/Article/:id', '/'],
        target: '/wyzxwk/article/:id?',
      },
    ],
  },
  'x-mol.com': {
    _name: 'X-MOL',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/news/index'],
        target: '/x-mol/news',
      },
    ],
  },
  'xboxfan.com': {
    _name: '盒心光环',
    '.': [
      {
        title: '资讯',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/xboxfan/news',
      },
    ],
  },
  'xianbao.fun': {
    _name: '线报酷',
    new: [
      {
        title: '线板酷',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/xianbao/',
      },
    ],
  },
  'xiaohongshu.com': {
    _name: '小红书',
    '.': [
      {
        title: '专辑',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/board/:board_id'],
        target: '/xiaohongshu/board/:board_id',
      },
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/user/profile/:user_id'],
        target: '/xiaohongshu/user/:user_id/notes',
      },
    ],
  },
  'xiaomiyoupin.com': {
    _name: '小米有品',
    '.': [
      {
        title: '小米有品众筹',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/xiaomiyoupin/crowdfunding',
      },
      {
        title: '小米有品每日上新',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/xiaomiyoupin/latest',
      },
    ],
  },
  'xiaote.com': {
    _name: '小特社区',
    '.': [
      {
        title: '首页帖子',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/'],
        target: '/xiaote/news',
      },
    ],
  },
  'xiaoyuzhoufm.com': {
    _name: '小宇宙',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/'],
        target: '/xiaoyuzhou/',
      },
      {
        title: '播客',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/podcast/:id'],
        target: '/xiaoyuzhou/podcast/:id',
      },
    ],
  },
  'xiaozhuanlan.com': {
    _name: '小专栏',
    '.': [
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:id'],
        target: '/xiaozhuanlan/column/:id',
      },
    ],
  },
  'xjtu.edu.cn': {
    _name: '西安交通大学',
    ee: [
      {
        title: '电气学院',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/xjtu/ee/:id?',
      },
    ],
    gs: [
      {
        title: '研究生院通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/'],
        target: '/xjtu/gs/tzgg',
      },
    ],
  },
  'xmanhua.com': {
    _name: 'X 漫画',
    '.': [
      {
        title: '最新动态',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/:uid'],
        target: '/xmanhua/:uid',
      },
    ],
  },
  'xmnn.cn': {
    _name: '厦门网',
    epaper: [
      {
        title: '数字媒体',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:id'],
        target: '/xmnn/epaper/:id',
      },
    ],
  },
  'xueqiu.com': {
    _name: '雪球',
    '.': [
      {
        title: '用户专栏',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/:id/column'],
        target: '/xueqiu/column/:id',
      },
      {
        title: '用户收藏动态',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/u/:id'],
        target: '/xueqiu/favorite/:id',
      },
      {
        title: '热帖',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/'],
        target: '/xueqiu/hots',
      },
      {
        title: '组合最新调仓信息',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/P/:id', '/p/:id'],
        target: '/xueqiu/snb/:id',
      },
      {
        title: '股票评论',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/S/:id'],
        target: '/xueqiu/stock_comments/:id',
      },
      {
        title: '股票信息',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/S/:id', '/s/:id'],
        target: '/xueqiu/stock_info/:id',
      },
      {
        title: '今日话题',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/today'],
        target: '/xueqiu/today',
      },
      {
        title: '用户自选动态',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/u/:id'],
        target: '/xueqiu/user_stock/:id',
      },
      {
        title: '用户动态',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/u/:id'],
        target: '/xueqiu/user/:id',
      },
    ],
  },
  'xunhupay.com': {
    _name: '虎皮椒',
    www: [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/blog'],
        target: '/xunhupay/blog',
      },
    ],
  },
  'xys.org': {
    _name: '新语丝',
    '.': [
      {
        title: '新到资料',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/', '/new.html'],
        target: '/xys/new',
      },
    ],
  },
  'xyzrank.com': {
    _name: '中文播客榜',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/'],
        target: '/xyzrank/:category?',
      },
    ],
  },
  'yahoo.com': {
    _name: 'Yahoo',
    '.': [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/'],
        target: '/yahoo/news/:region/:category?',
      },
    ],
  },
  'yande.re': {
    _name: 'yande',
    '.': [
      {
        title: 'posts',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/post/'],
        target: '/yande/post/popular_recent/:period?',
      },
    ],
  },
  'yenpress.com': {
    _name: 'Yen Press',
    '.': [
      {
        title: 'Series',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/series/:name'],
        target: '/yenpress/series/:name',
      },
    ],
  },
  'yicai.com': {
    _name: '第一财经',
    '.': [
      {
        title: '一财号',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/author/:id', '/author'],
        target: '/yicai/author/:id',
      },
      {
        title: '正在',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/brief'],
        target: '/yicai/brief',
      },
      {
        title: '关注',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/feed/:id', '/feed'],
        target: '/yicai/feed/:id',
      },
      {
        title: '头条',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/yicai/headline',
      },
      {
        title: '最新',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/'],
        target: '/yicai/latest',
      },
      {
        title: '新闻',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/news/:id', '/news'],
        target: '/yicai/news/:id',
      },
      {
        title: '视听',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/video/:id', '/video'],
        target: '/yicai/video/:id',
      },
      {
        title: 'VIP 频道',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/vip/product/:id', '/'],
        target: '/yicai/vip/:id',
      },
    ],
  },
  'ymgal.games': {
    _name: '月幕 Galgame',
    '.': [
      {
        title: '本月新作',
        docs: 'https://docs.rsshub.app/routes/anime',
        source: ['/'],
        target: '/ymgal/game/release',
      },
    ],
  },
  'yoasobi-music.jp': {
    _name: 'Yoasobi Official',
    www: [
      {
        title: 'News & Biography',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/', '/:category'],
        target: '/yoasobi-music/info/:category',
      },
      {
        title: 'Live',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/', '/live'],
        target: '/yoasobi-music/live',
      },
      {
        title: 'Media',
        docs: 'https://docs.rsshub.app/routes/live',
        source: ['/', '/media'],
        target: '/yoasobi-music/media',
      },
    ],
  },
  'yomiuri.co.jp': {
    _name: 'Yomiuri Shimbun 読売新聞',
    www: [
      {
        title: 'News',
        docs: 'https://docs.rsshub.app/routes/traditional-media',
        source: ['/:category'],
        target: '/yomiuri/:category?',
      },
    ],
  },
  'yomujp.com': {
    _name: '日本語多読道場',
    '.': [
      {
        title: '等级',
        docs: 'https://docs.rsshub.app/routes/reading',
        source: ['/', '/:level'],
        target: '/yomujp/:level',
      },
    ],
  },
  'youku.com': {
    _name: '优酷',
    i: [
      {
        title: '频道',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/i/:id'],
        target: '/youku/channel/:id',
      },
    ],
  },
  'youtube.com': {
    _name: 'YouTube',
    www: [
      {
        title: 'Channel with id',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/channel/:id'],
        target: '/youtube/channel/:id',
      },
      {
        title: 'Custom URL',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/c/:id'],
        target: '/youtube/c/:id',
      },
      {
        title: 'Subscriptions',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/feed/subscriptions', '/feed/channels'],
        target: '/youtube/subscriptions',
      },
      {
        title: 'Channel with username',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/user/:username'],
        target: '/youtube/user/:username',
      },
    ],
  },
  'youzhiyouxing.cn': {
    _name: '有知有行',
    '.': [
      {
        title: '有知文章',
        docs: 'https://docs.rsshub.app/routes/finance',
        source: ['/materials'],
        target: '/youzhiyouxing/materials',
      },
    ],
  },
  'yuque.com': {
    _name: '语雀',
    '.': [
      {
        title: '知识库',
        docs: 'https://docs.rsshub.app/routes/study',
        source: ['/:name/:book'],
        target: '/yuque/:name/:book',
      },
    ],
  },
  'yxdown.com': {
    _name: '游讯网',
    '.': [
      {
        title: '精彩推荐',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/yxdown/recommend',
      },
    ],
  },
  'yxdzqb.com': {
    _name: '游戏打折情报',
    '.': [
      {
        title: '游戏折扣',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/'],
        target: '/yxdzqb/:type',
      },
    ],
  },
  'yxrb.net': {
    _name: '游戏日报',
    news: [
      {
        title: '分类',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/:category', '/'],
        target: '/yxrb/:category',
      },
    ],
  },
  'yysub.net': {
    _name: '人人影视',
    '.': [
      {
        title: '今日播出',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/tv/schedule', '/'],
        target: '/yyets/today',
      },
    ],
  },
  'yystv.cn': {
    _name: '游研社',
    '.': [
      {
        title: '游研社 - 全部文章',
        docs: 'https://docs.rsshub.app/routes/game',
        source: ['/docs'],
        target: '/yystv/docs',
      },
    ],
  },
  'myzaker.com': {
    _name: 'ZAKER',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/other',
        source: ['/:type/:id'],
        target: '/zaker/:type/:id',
      },
    ],
  },
  'zaozao.run': {
    _name: '前端早早聊',
    www: [
      {
        title: '文章',
        docs: 'https://docs.rsshub.app/routes/programming',
        source: ['/article/:type'],
        target: '/zaozao/article/:type',
      },
    ],
  },
  'zcool.com.cn': {
    _name: '站酷',
    www: [
      {
        title: '用户作品',
        docs: 'https://docs.rsshub.app/routes/design',
        source: ['/u/:id'],
        target: '/zcool/user/:id',
      },
    ],
  },
  'zhibo8.cc': {
    _name: '直播吧',
    '.': [
      {
        title: 'Unknown',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category/luxiang.htm'],
        target: '/zhibo8/luxiang/:category',
      },
    ],
    news: [
      {
        title: '滚动新闻',
        docs: 'https://docs.rsshub.app/routes/bbs',
        source: ['/:category'],
        target: '/zhibo8/more/:category',
      },
    ],
  },
  'zhihu.com': {
    _name: '知乎',
    www: [
      {
        title: '用户动态',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/people/:id'],
        target: '/zhihu/people/activities/:id',
      },
      {
        title: '用户回答',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/people/:id/answers'],
        target: '/zhihu/people/answers/:id',
      },
      {
        title: '收藏夹',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/collection/:id'],
        target: '/zhihu/collection/:id',
      },
      {
        title: '知乎热榜',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/hot'],
        target: '/zhihu/hotlist',
      },
      {
        title: '用户文章',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:usertype/:id/posts', '/:usertype/:id'],
        target: '/zhihu/posts/:usertype/:id',
      },
      {
        title: '问题',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/question/:questionId'],
        target: '/zhihu/question/:questionId',
      },
      {
        title: '话题',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/topic/:topicId/:type'],
        target: '/zhihu/topic/:topicId',
      },
      {
        title: '知乎书店 - 知乎周刊',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/pub/weekly'],
        target: '/zhihu/weekly',
      },
      {
        title: '知乎想法热榜',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/zhihu/bookstore/newest'],
        target: '/zhihu/pin/hotlist',
      },
      {
        title: '用户想法',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/people/:id/pins'],
        target: '/zhihu/people/pins/:id',
      },
      {
        title: 'xhu - 用户动态',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/people/:id'],
        target: '/zhihu/people/activities/:id',
      },
      {
        title: 'xhu - 用户回答',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/people/:id/answers'],
        target: '/zhihu/people/answers/:id',
      },
      {
        title: 'xhu - 收藏夹',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/collection/:id'],
        target: '/zhihu/xhu/collection/:id',
      },
      {
        title: 'xhu - 问题',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/question/:questionId'],
        target: '/zhihu/xhu/question/:questionId',
      },
      {
        title: 'xhu - 话题',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/topic/:topicId/:type'],
        target: '/zhihu/xhu/topic/:topicId',
      },
    ],
    daily: [
      {
        title: '知乎日报 - 合集',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/*'],
        target: '/zhihu/daily',
      },
      {
        title: '知乎日报',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/*'],
        target: '/zhihu/daily',
      },
      {
        title: '知乎想法 - 24 小时新闻汇总',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/*'],
        target: '/zhihu/daily',
      },
    ],
    zhuanlan: [
      {
        title: '专栏',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:id'],
        target: '/zhihu/zhuanlan/:id',
      },
      {
        title: 'xhu- 专栏',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/:id'],
        target: '/zhihu/zhuanlan/:id',
      },
    ],
  },
  'zhiy.cc': {
    _name: '知园',
    '.': [
      {
        title: 'Newsletter',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:author'],
        target: '/zhiy/letters/:author',
      },
      {
        title: '笔记',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/:author'],
        target: '/zhiy/posts/:author',
      },
    ],
  },
  'zhonglun.com': {
    _name: '中伦律师事务所',
    '.': [
      {
        title: '专业文章',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/research/articles'],
        target: '/zhonglun/research/article/zh',
      },
    ],
    en: [
      {
        title: ' Articles',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/research/articles'],
        target: '/zhonglun/research/article/en',
      },
    ],
    ja: [
      {
        title: '論評',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/research/articles'],
        target: '/zhonglun/research/article/ja',
      },
    ],
    kr: [
      {
        title: '전문기사',
        docs: 'https://docs.rsshub.app/routes/new-media',
        source: ['/research/articles'],
        target: '/zhonglun/research/article/kr',
      },
    ],
  },
  'zhubai.love': {
    _name: '竹白',
    analy: [
      {
        title: '上周热门 TOP 20',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/zhubai/top20',
      },
    ],
  },
  'zhujiceping.com': {
    _name: '国外主机测评',
    '.': [
      {
        title: '最新发布',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/zhujiceping/',
      },
    ],
  },
  'zhuwang.cc': {
    _name: '中国养猪网',
    zhujia: [
      {
        title: '全国今日生猪价格',
        docs: 'https://docs.rsshub.app/routes/shopping',
        source: ['/'],
        target: '/zhuwang/zhujia',
      },
    ],
  },
  'zimuxia.cn': {
    _name: 'FIX 字幕侠',
    '.': [
      {
        title: '剧集',
        docs: 'https://docs.rsshub.app/routes/multimedia',
        source: ['/portfolio/:id'],
        target: '/zimuxia/portfolio/:id',
      },
    ],
  },
  'zjut.edu.cn': {
    _name: '浙江工业大学',
    'www.news': [
      {
        title: '浙工大新闻',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/:type/list.htm'],
        target: '/zjut/news/:type',
      },
    ],
  },
  'zotero.org': {
    _name: 'Zotero',
    '.': [
      {
        title: 'Version History',
        docs: 'https://docs.rsshub.app/routes/program-update',
        source: ['/', '/support/changelog'],
        target: '/zotero/versions',
      },
    ],
  },
  'zrblog.net': {
    _name: '赵容部落',
    '.': [
      {
        title: '最新文章',
        docs: 'https://docs.rsshub.app/routes/blog',
        source: ['/'],
        target: '/zrblog/',
      },
    ],
  },
  'zsxq.com': {
    _name: '知识星球',
    wx: [
      {
        title: '星球',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/dweb2/index/group/:id'],
        target: '/zsxq/group/:id/:scope?',
      },
      {
        title: '用户足迹',
        docs: 'https://docs.rsshub.app/routes/social-media',
        source: ['/dweb2/index/footprint/:id'],
        target: '/zsxq/user/:id',
      },
    ],
  },
  'zuel.edu.cn': {
    _name: '中南财经政法大学',
    wap: [
      {
        title: '通知公告',
        docs: 'https://docs.rsshub.app/routes/university',
        source: ['/', '/notice/list.htm'],
        target: '/zuel/notice',
      },
    ],
  },
};
