import { TravelPlan } from "./travel-plan";

export async function generateTravelPlan(query: string): Promise<TravelPlan> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Parse the query to extract information (simplified)
  const mockPlans = [
    {
      destination: '东京',
      duration: 7,
      travelers: '家庭(2大1小)',
      budget: 20000,
      coverImage: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '东京樱花季家庭游 - 7天深度体验',
      summary: '为您精心规划的东京7日家庭游行程，正值樱花盛开的季节。行程覆盖了东京最经典的景点，包括浅草寺、东京塔、上野公园等赏樱胜地，同时安排了适合亲子的活动如迪士尼乐园。住宿选择了交通便利的新宿地区，方便您的出行。',
      recommendations: [
        '春季是东京樱花盛开的最佳时节，上野公园和千鸟渊是绝佳的赏樱地点',
        '东京迪士尼乐园和迪士尼海洋适合全家游玩，建议各安排一天',
        '新宿、涩谷、银座是购物和美食的天堂',
        'JR山手线是游览东京的最便捷交通工具'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵达东京 - 新宿初体验',
          activities: [
            '成田机场乘坐成田EXPRESS到新宿',
            '酒店办理入住手续',
            '新宿都厅免费展望台看夜景',
            '歌舞伎町体验东京夜生活'
          ],
          meals: [
            '晚餐：一兰拉面（新宿店）',
            '夜宵：居酒屋体验'
          ],
          transport: '成田EXPRESS + JR山手线',
          highlights: ['都市夜景', '居酒屋文化']
        },
        {
          day: 2,
          title: '浅草寺与东京天空树',
          activities: [
            '浅草寺参拜祈福',
            '仲见世通购买传统小物',
            '东京天空树登顶观景',
            '墨田水族馆参观'
          ],
          meals: [
            '早餐：酒店自助餐',
            '午餐：浅草老字号天妇罗店',
            '晚餐：天空树商场内用餐'
          ],
          transport: 'JR山手线 + 地铁银座线',
          highlights: ['传统文化', '现代建筑', '水族馆']
        },
        {
          day: 3,
          title: '上野公园赏樱与博物馆',
          activities: [
            '上野公园赏樱花',
            '上野动物园看熊猫',
            '国立科学博物馆参观',
            '阿美横町购物街闲逛'
          ],
          meals: [
            '早餐：便利店采购',
            '午餐：公园内野餐',
            '晚餐：上野车站内便当'
          ],
          transport: 'JR山手线',
          highlights: ['樱花季', '熊猫', '科学馆']
        },
        {
          day: 4,
          title: '东京迪士尼乐园奇妙之旅',
          activities: [
            '东京迪士尼乐园全日游',
            '经典项目：太空山、加勒比海盗',
            '观看花车游行',
            '烟火表演'
          ],
          meals: [
            '早餐：酒店',
            '午餐：乐园内主题餐厅',
            '晚餐：乐园内快餐'
          ],
          transport: 'JR京叶线',
          highlights: ['迪士尼魔法', '花车游行', '烟火秀']
        },
        {
          day: 5,
          title: '涩谷与表参道时尚之旅',
          activities: [
            '涩谷十字路口体验',
            '涩谷Sky观景台',
            '表参道Hills购物',
            '竹下通原宿文化体验'
          ],
          meals: [
            '早餐：星巴克（涩谷店）',
            '午餐：表参道精致料理',
            '晚餐：原宿特色小食'
          ],
          transport: 'JR山手线',
          highlights: ['城市象征', '时尚购物', '青年文化']
        },
        {
          day: 6,
          title: '银座购物与皇居东御苑',
          activities: [
            '皇居东御苑散步',
            '银座商业区购物',
            '歌舞伎座观看表演',
            '筑地外市场美食之旅'
          ],
          meals: [
            '早餐：酒店',
            '午餐：筑地市场海鲜',
            '晚餐：银座高级料理'
          ],
          transport: 'JR山手线 + 地铁丸之内线',
          highlights: ['皇室庭园', '奢华购物', '海鲜美食']
        },
        {
          day: 7,
          title: '东京塔与最后购物',
          activities: [
            '东京塔登塔观景',
            '增上寺参拜',
            '六本木Hills购物',
            '成田机场离境'
          ],
          meals: [
            '早餐：酒店',
            '午餐：六本木美食广场',
            '机场：便当'
          ],
          transport: 'JR山手线 + 成田EXPRESS',
          highlights: ['东京地标', '最后购物', '圆满结束']
        }
      ],
      budgetBreakdown: {
        transportation: 3000,
        accommodation: 8000,
        food: 4500,
        activities: 3500,
        shopping: 1000,
        total: 20000
      },
      tips: [
        '建议购买JR Pass 7日票，能节省不少交通费用',
        '春季东京天气多变，建议携带薄外套和雨具',
        '迪士尼乐园建议提前下载官方APP，可以查看等候时间',
        '日本很多地方不收小费，但需要注意用餐礼仪',
        '建议准备现金，虽然很多地方接受信用卡但现金更方便',
        '垃圾分类严格，建议随身携带垃圾袋',
        '电车内不要大声说话，是基本礼仪'
      ]
    },
    {
      destination: '马尔代夫',
      duration: 10,
      travelers: '情侣',
      budget: 50000,
      coverImage: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '马尔代夫蜜月天堂 - 10日浪漫之旅',
      summary: '为您打造的马尔代夫10日蜜月之旅，选择了两个不同特色的度假村，让您体验不同的海岛风情。前5天入住水上别墅，享受私密的海上生活；后5天转到沙滩别墅，感受细软的白沙滩。全程包含丰富的水上活动和浪漫晚餐安排。',
      recommendations: [
        '马尔代夫全年适宜旅游，11-4月是最佳季节，天气稳定少雨',
        '选择了两家不同风格的度假村，体验更加丰富',
        '包含潜水、浮潜、海钓等多项水上活动',
        '每天安排不同主题的浪漫晚餐'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵达马尔代夫 - 梦想开始的地方',
          activities: [
            '马累机场抵达',
            '水上飞机前往第一家度假村',
            '水上别墅入住',
            '夕阳鸡尾酒时光'
          ],
          meals: [
            '午餐：机场餐厅',
            '晚餐：度假村迎宾晚餐'
          ],
          transport: '水上飞机',
          highlights: ['水上飞机体验', '水上别墅', '马尔代夫日落']
        },
        {
          day: 2,
          title: '浮潜探索海底世界',
          activities: [
            '浮潜课程培训',
            '珊瑚礁浮潜',
            'SPA放松治疗',
            '海滩漫步'
          ],
          meals: [
            '早餐：别墅内私人早餐',
            '午餐：海滩餐厅',
            '晚餐：沙滩烛光晚餐'
          ],
          transport: '度假村内交通',
          highlights: ['珊瑚礁', 'SPA体验', '烛光晚餐']
        },
        {
          day: 3,
          title: '深海潜水与海豚之约',
          activities: [
            '深海潜水体验',
            '海豚观赏巡游',
            '私人海滩时光',
            '星空观测'
          ],
          meals: [
            '早餐：别墅露台',
            '午餐：船上便当',
            '晚餐：水下餐厅'
          ],
          transport: '潜水船 + 观光船',
          highlights: ['深海潜水', '海豚', '水下餐厅']
        },
        {
          day: 4,
          title: '海钓与日落巡航',
          activities: [
            '深海钓鱼',
            '烹饪体验课',
            '日落巡航',
            '传统马尔代夫文化表演'
          ],
          meals: [
            '早餐：别墅内',
            '午餐：自己钓的鱼',
            '晚餐：船上BBQ'
          ],
          transport: '钓鱼船 + 巡航船',
          highlights: ['海钓', '烹饪体验', '日落巡航']
        },
        {
          day: 5,
          title: '水上别墅告别与转场',
          activities: [
            '最后的水上别墅时光',
            '水上飞机转场',
            '沙滩别墅入住',
            '海滩探索'
          ],
          meals: [
            '早餐：水上别墅',
            '午餐：转场途中',
            '晚餐：新度假村欢迎晚餐'
          ],
          transport: '水上飞机',
          highlights: ['转场体验', '沙滩别墅', '新环境探索']
        },
        {
          day: 6,
          title: '沙滩运动与水疗',
          activities: [
            '沙滩排球',
            '帆船驾驶',
            '情侣SPA',
            '沙滩瑜伽'
          ],
          meals: [
            '早餐：沙滩餐厅',
            '午餐：泳池边',
            '晚餐：主餐厅自助'
          ],
          transport: '度假村内',
          highlights: ['沙滩运动', '帆船', '情侣SPA']
        },
        {
          day: 7,
          title: '无人岛探险',
          activities: [
            '无人岛一日游',
            '沙洲野餐',
            '贝壳收集',
            '海边摄影'
          ],
          meals: [
            '早餐：别墅内',
            '午餐：无人岛野餐',
            '晚餐：海鲜BBQ'
          ],
          transport: '快艇',
          highlights: ['无人岛', '野餐', '摄影']
        },
        {
          day: 8,
          title: '文化体验与购物',
          activities: [
            '当地村庄参观',
            '传统手工艺学习',
            '纪念品购买',
            '马尔代夫传统晚餐'
          ],
          meals: [
            '早餐：别墅',
            '午餐：当地餐厅',
            '晚餐：传统马尔代夫料理'
          ],
          transport: '当地交通',
          highlights: ['文化体验', '手工艺', '传统料理']
        },
        {
          day: 9,
          title: '最后的海岛时光',
          activities: [
            '自由活动',
            '最后的浮潜',
            '回忆录制作',
            '告别晚餐'
          ],
          meals: [
            '早餐：别墅',
            '午餐：任选餐厅',
            '晚餐：特别告别晚餐'
          ],
          transport: '度假村内',
          highlights: ['自由时光', '回忆制作', '告别晚餐']
        },
        {
          day: 10,
          title: '美好回忆带回家',
          activities: [
            '打包整理',
            '水上飞机送机',
            '马累机场',
            '返程'
          ],
          meals: [
            '早餐：别墅',
            '午餐：机场'
          ],
          transport: '水上飞机',
          highlights: ['美好回忆', '圆满结束']
        }
      ],
      budgetBreakdown: {
        transportation: 8000,
        accommodation: 32000,
        food: 6000,
        activities: 3000,
        shopping: 1000,
        total: 50000
      },
      tips: [
        '马尔代夫属于穆斯林国家，需要尊重当地宗教文化',
        '紫外线很强，务必做好防晒措施',
        '度假村通常包含三餐，但酒水另收费',
        '水上活动较多，建议购买旅行保险',
        '当地货币是拉菲亚，但美元通用',
        '小费文化，建议准备一些小面额美元',
        '珊瑚礁保护很重要，请勿触碰或带走任何海洋生物'
      ]
    },
    {
      destination: '泰国（曼谷-清迈-普吉）',
      duration: 15,
      travelers: '3个朋友',
      budget: 15000,
      coverImage: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '泰国三城穷游记 - 15天深度探索',
      summary: '专为预算有限的年轻人设计的泰国15日深度游。路线覆盖泰国三大热门城市：曼谷的繁华都市、清迈的文化古韵、普吉的海滩风情。住宿以性价比高的青旅和民宿为主，交通选择当地公共交通，餐饮以街头小食和当地餐厅为主，让您以最少的预算体验最多的泰国风情。',
      recommendations: [
        '11-3月是泰国旅游最佳季节，天气凉爽少雨',
        '泰国签证简单，可以落地签或提前办理',
        '当地交通发达，BTS、MRT、双条车都很方便',
        '街头美食丰富且便宜，是体验当地文化的最佳方式'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵达曼谷 - 初识微笑之国',
          activities: [
            '素万那普机场抵达',
            '机场快线到市区',
            '考山路青旅入住',
            '考山路夜市初体验'
          ],
          meals: [
            '午餐：机场',
            '晚餐：考山路街头小食'
          ],
          transport: '机场快线 + BTS',
          highlights: ['背包客天堂', '街头小食', '夜市文化']
        },
        {
          day: 2,
          title: '曼谷大皇宫与卧佛寺',
          activities: [
            '大皇宫参观',
            '玉佛寺朝拜',
            '卧佛寺看巨大卧佛',
            '湄南河长尾船游览'
          ],
          meals: [
            '早餐：青旅附近小店',
            '午餐：宫殿附近泰式料理',
            '晚餐：河边餐厅'
          ],
          transport: '长尾船 + 步行',
          highlights: ['泰式建筑', '佛教文化', '湄南河']
        },
        {
          day: 3,
          title: '水上市场与铁道市场',
          activities: [
            '丹嫩沙多水上市场',
            '铁道市场奇观',
            '返回曼谷市区',
            'Chatuchak周末市场购物'
          ],
          meals: [
            '早餐：青旅',
            '午餐：水上市场小食',
            '晚餐：周末市场美食'
          ],
          transport: '当地巴士 + BTS',
          highlights: ['水上市场', '火车奇观', '周末市场']
        },
        {
          day: 4,
          title: '曼谷现代面貌探索',
          activities: [
            'Siam商圈购物',
            'MBK购物中心',
            '四面佛参拜',
            '席隆路夜生活体验'
          ],
          meals: [
            '早餐：便利店',
            '午餐：商场美食广场',
            '晚餐：席隆路餐厅'
          ],
          transport: 'BTS天铁',
          highlights: ['现代曼谷', '购物', '都市夜生活']
        },
        {
          day: 5,
          title: '前往清迈 - 北部文化之都',
          activities: [
            '曼谷火车站',
            '夜火车前往清迈',
            '火车上过夜'
          ],
          meals: [
            '早餐：青旅',
            '午餐：火车站',
            '晚餐：火车餐车'
          ],
          transport: '夜火车',
          highlights: ['火车旅行', '泰国铁路体验']
        },
        {
          day: 6,
          title: '清迈古城初印象',
          activities: [
            '清迈火车站抵达',
            '古城内民宿入住',
            '清迈门探索',
            '周六夜市'
          ],
          meals: [
            '早餐：火车上',
            '午餐：古城内小店',
            '晚餐：夜市小食'
          ],
          transport: '双条车',
          highlights: ['古城文化', '兰纳建筑', '夜市美食']
        },
        {
          day: 7,
          title: '清迈寺庙文化深度游',
          activities: [
            '契迪龙寺参观',
            '帕辛寺朝拜',
            '素贴山双龙寺',
            '山顶看清迈全景'
          ],
          meals: [
            '早餐：民宿',
            '午餐：山上小店',
            '晚餐：古城内餐厅'
          ],
          transport: '双条车 + 摩托车',
          highlights: ['寺庙建筑', '山景', '古城全景']
        },
        {
          day: 8,
          title: '清迈手工艺与美食',
          activities: [
            '周日步行街',
            '手工艺品购买',
            '泰式按摩体验',
            '烹饪课程'
          ],
          meals: [
            '早餐：民宿',
            '午餐：步行街',
            '晚餐：自己做的泰菜'
          ],
          transport: '步行',
          highlights: ['手工艺', '泰式按摩', '烹饪学习']
        },
        {
          day: 9,
          title: '清迈郊外一日游',
          activities: [
            '美莎大象营',
            '与大象亲密接触',
            '兰花园参观',
            '长颈族村落'
          ],
          meals: [
            '早餐：民宿',
            '午餐：农场',
            '晚餐：返城路上'
          ],
          transport: '包车一日游',
          highlights: ['大象体验', '兰花', '民族文化']
        },
        {
          day: 10,
          title: '前往普吉 - 阳光海滩',
          activities: [
            '清迈机场',
            '飞往普吉',
            '巴东海滩入住',
            '海滩漫步'
          ],
          meals: [
            '早餐：民宿',
            '午餐：飞机上',
            '晚餐：海滩餐厅'
          ],
          transport: '国内航班',
          highlights: ['海岛风情', '海滩日落']
        },
        {
          day: 11,
          title: '普吉岛跳岛游',
          activities: [
            'PP岛一日游',
            '玛雅湾浮潜',
            '猴子海滩',
            '海上日落'
          ],
          meals: [
            '早餐：酒店',
            '午餐：PP岛',
            '晚餐：船上BBQ'
          ],
          transport: '快艇跳岛游',
          highlights: ['PP岛', '浮潜', '海上BBQ']
        },
        {
          day: 12,
          title: '普吉镇文化探索',
          activities: [
            '普吉老镇',
            '中葡建筑观赏',
            '周末夜市',
            '海鲜大餐'
          ],
          meals: [
            '早餐：海滩',
            '午餐：老镇茶餐厅',
            '晚餐：海鲜市场'
          ],
          transport: '当地巴士',
          highlights: ['殖民建筑', '多元文化', '海鲜美食']
        },
        {
          day: 13,
          title: '海滩运动与水上活动',
          activities: [
            '冲浪课程',
            '海滩排球',
            '摩托艇体验',
            '海滩按摩'
          ],
          meals: [
            '早餐：海滩小店',
            '午餐：海滩餐厅',
            '晚餐：芭东夜市'
          ],
          transport: '步行',
          highlights: ['水上运动', '海滩娱乐', '按摩放松']
        },
        {
          day: 14,
          title: '最后的海岛时光',
          activities: [
            '自由海滩时间',
            '纪念品购买',
            '最后的泰式按摩',
            '告别晚餐'
          ],
          meals: [
            '早餐：酒店',
            '午餐：海滩',
            '晚餐：特色泰菜'
          ],
          transport: '步行',
          highlights: ['自由时光', '纪念品', '告别晚餐']
        },
        {
          day: 15,
          title: '返程回国',
          activities: [
            '整理行李',
            '前往机场',
            '国际航班',
            '回到温馨的家'
          ],
          meals: [
            '早餐：酒店',
            '午餐：机场'
          ],
          transport: '机场巴士 + 航班',
          highlights: ['圆满结束', '美好回忆']
        }
      ],
      budgetBreakdown: {
        transportation: 4000,
        accommodation: 3500,
        food: 2500,
        activities: 3500,
        shopping: 1500,
        total: 15000
      },
      tips: [
        '泰国是小费国家，服务生、按摩师等都需要给小费',
        '街头小食很便宜但要注意卫生，选择人多的摊位',
        '泰国人很友善，但要尊重佛教文化，进寺庙要脱鞋',
        '天气炎热，要注意防晒和补水',
        '讨价还价是常态，特别是在市场和夜市',
        '租摩托车需要国际驾照，注意交通安全',
        '7-11便利店很普及，可以取现金和购买日用品',
        'Grab打车很方便，价格也合理'
      ]
    }
  ];

  // Simple query matching logic (in real app, this would be AI-powered)
  let selectedPlan = mockPlans[0]; // Default to Tokyo plan
  
  if (query.includes('马尔代夫') || query.includes('蜜月') || query.includes('情侣')) {
    selectedPlan = mockPlans[1];
  } else if (query.includes('穷游') || query.includes('东南亚') || query.includes('泰国')) {
    selectedPlan = mockPlans[2];
  }

  return {
    id: Date.now().toString(),
    ...selectedPlan,
    createdAt: new Date(),
    userQuery: query
  };
}

export async function simulateStreamingResponse(
  text: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const words = text.split('');
  
  for (let i = 0; i < words.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 20)); // 20ms delay per character
    onChunk(words[i]);
  }
}