// 社团活动页面JavaScript功能

document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const filterButtons = document.querySelectorAll('.filter-btn');
    const clubCards = document.querySelectorAll('.club-card');
    const modal = document.getElementById('clubModal');
    const modalClubName = document.getElementById('modalClubName');
    const modalClubDesc = document.getElementById('modalClubDesc');
    const closeModal = document.querySelector('.close-modal');
    
    // 社团详细信息数据
    const clubDetails = {
        '爱心俱乐部': {
            description: '开展各类志愿服务活动，传递爱心与温暖。组织校园内外志愿服务，培养社会责任感和奉献精神。',
            activityTime: '每周三 18:30-20:30',
            location: '学生活动中心201',
            contact: 'club@nankai.edu.cn'
        },
        '绿色行动协会': {
            description: '关注环境保护，开展环保宣传和实践活动。推动绿色校园建设，提高环保意识。',
            activityTime: '每周二、四 18:00-19:30',
            location: '环境科学楼203',
            contact: 'green@nankai.edu.cn'
        },
        '公益实践部': {
            description: '组织各类公益活动，服务社会。开展扶贫助学、社区服务等活动，培养公益精神。',
            activityTime: '每周五 19:00-21:00',
            location: '学生活动中心301',
            contact: 'gongyi@nankai.edu.cn'
        },
        '乡村振兴研习社': {
            description: '研究乡村振兴战略，开展农村调研和实践活动。关注农村发展，服务乡村振兴。',
            activityTime: '每周六 14:00-16:30',
            location: '经济学院楼402',
            contact: 'xiangcun@nankai.edu.cn'
        },
        '社区服务团': {
            description: '深入社区开展服务活动，促进校社合作。组织社区服务项目，服务社区居民。',
            activityTime: '每周日 9:00-11:30',
            location: '学生活动中心102',
            contact: 'shequ@nankai.edu.cn'
        },
        '全球治理与国际组织发展研究会': {
            description: '研究全球治理，培养国际视野和组织能力。关注国际事务，培养全球公民意识。',
            activityTime: '每周三 19:00-21:00',
            location: '周恩来政府管理学院503',
            contact: 'global@nankai.edu.cn'
        },
        '人工智能协会': {
            description: '探索人工智能技术，开展AI项目开发。学习前沿AI技术，培养创新能力。',
            activityTime: '每周二、四 19:00-21:00',
            location: '计算机学院楼302',
            contact: 'ai@nankai.edu.cn'
        },
        '数据科学协会': {
            description: '研究数据分析与挖掘技术，开展数据科学项目。培养数据思维和分析能力。',
            activityTime: '每周一、三 18:30-20:30',
            location: '统计与数据科学学院401',
            contact: 'data@nankai.edu.cn'
        },
        '物联网技术协会': {
            description: '探索物联网技术，开展IoT项目实践。学习物联网应用开发，培养实践能力。',
            activityTime: '每周五 18:00-20:00',
            location: '电子信息与光学工程学院303',
            contact: 'iot@nankai.edu.cn'
        },
        '区块链技术协会': {
            description: '研究区块链技术，开展区块链应用开发。探索去中心化应用，培养创新思维。',
            activityTime: '每周三 19:30-21:30',
            location: '软件学院201',
            contact: 'blockchain@nankai.edu.cn'
        },
        '机器人技术协会': {
            description: '研发机器人技术，参加机器人竞赛。学习机器人设计与控制，培养工程能力。',
            activityTime: '每周六 14:00-17:00',
            location: '自动化学院实验室',
            contact: 'robot@nankai.edu.cn'
        },
        '网络安全协会': {
            description: '学习网络安全技术，提高信息安全意识。开展安全攻防实践，培养安全技能。',
            activityTime: '每周二 19:00-21:00',
            location: '网络空间安全学院402',
            contact: 'security@nankai.edu.cn'
        },
        '红色记忆宣讲团': {
            description: '传承红色基因，宣讲革命历史与精神。开展红色教育活动，弘扬爱国主义精神。',
            activityTime: '每周五 18:30-20:30',
            location: '马克思主义学院301',
            contact: 'hongse@nankai.edu.cn'
        },
        '青年马克思主义理论学习社': {
            description: '学习马克思主义理论，培养理论素养。开展理论学习研讨，提高思想认识。',
            activityTime: '每周三 19:00-21:00',
            location: '马克思主义学院402',
            contact: 'marx@nankai.edu.cn'
        },
        '国史研习社': {
            description: '研究中国历史，传承中华文明。开展历史学术研讨，培养历史思维。',
            activityTime: '每周四 18:30-20:30',
            location: '历史学院303',
            contact: 'history@nankai.edu.cn'
        },
        '时政论坛': {
            description: '关注时事政治，开展政策研讨。分析国内外政治形势，培养政治素养。',
            activityTime: '每周一 19:00-21:00',
            location: '周恩来政府管理学院201',
            contact: 'shizheng@nankai.edu.cn'
        },
        '法治宣讲团': {
            description: '宣传法律知识，提高法治意识。开展普法活动，培养法律素养。',
            activityTime: '每周五 18:00-20:00',
            location: '法学院401',
            contact: 'fazhi@nankai.edu.cn'
        },
        '棋牌协会': {
            description: '开展棋牌活动，培养策略思维与竞技精神。组织棋牌比赛，丰富校园文化生活。',
            activityTime: '每周二、四 18:30-21:00',
            location: '学生活动中心301',
            contact: 'chess@nankai.edu.cn'
        },
        '篮球协会': {
            description: '推广篮球运动，提高篮球技能。组织篮球比赛和训练，培养团队精神。',
            activityTime: '每周一、三、五 17:00-19:00',
            location: '体育馆篮球场',
            contact: 'basketball@nankai.edu.cn'
        },
        '足球协会': {
            description: '发展足球运动，提高足球水平。组织足球比赛和训练，增强体质。',
            activityTime: '每周二、四 17:00-19:00',
            location: '足球场',
            contact: 'football@nankai.edu.cn'
        },
        '羽毛球协会': {
            description: '推广羽毛球运动，提高羽毛球技能。组织羽毛球比赛和活动，增强体质。',
            activityTime: '每周三、五 18:00-20:00',
            location: '体育馆羽毛球场',
            contact: 'badminton@nankai.edu.cn'
        },
        '乒乓球协会': {
            description: '开展乒乓球活动，提高乒乓球技术。组织乒乓球比赛和训练，培养竞技精神。',
            activityTime: '每周一、四 18:30-20:30',
            location: '体育馆乒乓球场',
            contact: 'pingpong@nankai.edu.cn'
        },
        '网球协会': {
            description: '推广网球运动，提高网球技能。组织网球比赛和训练，培养运动兴趣。',
            activityTime: '每周二、五 17:30-19:30',
            location: '网球场',
            contact: 'tennis@nankai.edu.cn'
        },
        '排球协会': {
            description: '发展排球运动，提高排球水平。组织排球比赛和训练，培养团队协作能力。',
            activityTime: '每周三、六 18:00-20:00',
            location: '体育馆排球场',
            contact: 'volleyball@nankai.edu.cn'
        },
        '游泳协会': {
            description: '推广游泳运动，提高游泳技能。组织游泳训练和比赛，增强体质。',
            activityTime: '每周一、三、五 19:00-21:00',
            location: '游泳馆',
            contact: 'swimming@nankai.edu.cn'
        },
        '田径协会': {
            description: '开展田径运动，提高身体素质。组织田径训练和比赛，培养运动精神。',
            activityTime: '每周二、四、六 17:00-19:00',
            location: '田径场',
            contact: 'track@nankai.edu.cn'
        },
        '武术协会': {
            description: '传承中华武术，弘扬武术精神。开展武术训练和表演，培养意志品质。',
            activityTime: '每周一、三、五 18:30-20:30',
            location: '体育馆武术室',
            contact: 'wushu@nankai.edu.cn'
        },
        '民乐团': {
            description: '演奏民族音乐，传承中华优秀音乐文化。组织民乐排练和演出，培养音乐素养。',
            activityTime: '每周二、四 19:00-21:00',
            location: '学生活动中心音乐厅',
            contact: 'minyue@nankai.edu.cn'
        },
        '合唱团': {
            description: '开展合唱活动，提高声乐水平。组织合唱排练和演出，培养音乐素养。',
            activityTime: '每周一、三 18:30-20:30',
            location: '学生活动中心音乐厅',
            contact: 'chorus@nankai.edu.cn'
        },
        '舞蹈团': {
            description: '开展舞蹈活动，提高舞蹈水平。组织舞蹈排练和演出，培养艺术素养。',
            activityTime: '每周二、四 18:30-20:30',
            location: '学生活动中心舞蹈室',
            contact: 'dance@nankai.edu.cn'
        },
        '话剧社': {
            description: '开展话剧表演活动，提高表演水平。组织话剧排练和演出，培养表演能力。',
            activityTime: '每周三、五 19:00-21:00',
            location: '学生活动中心剧场',
            contact: 'drama@nankai.edu.cn'
        },
        '摄影协会': {
            description: '开展摄影活动，提高摄影技术。组织摄影采风和展览，培养艺术眼光。',
            activityTime: '每周六 9:00-11:30',
            location: '学生活动中心301',
            contact: 'photo@nankai.edu.cn'
        },
        '书法协会': {
            description: '传承书法艺术，提高书法水平。开展书法练习和展览，培养艺术修养。',
            activityTime: '每周二、四 18:30-20:30',
            location: '学生活动中心401',
            contact: 'shufa@nankai.edu.cn'
        },
        '绘画协会': {
            description: '开展绘画活动，提高绘画技能。组织绘画创作和展览，培养艺术素养。',
            activityTime: '每周三、五 18:30-20:30',
            location: '学生活动中心美术室',
            contact: 'painting@nankai.edu.cn'
        },
        '文学社': {
            description: '开展文学创作活动，提高文学素养。组织文学研讨和创作，培养文学兴趣。',
            activityTime: '每周四 19:00-21:00',
            location: '文学院楼301',
            contact: 'literature@nankai.edu.cn'
        },
        '电影协会': {
            description: '推广电影艺术，开展电影赏析活动。组织电影放映和研讨，培养电影素养。',
            activityTime: '每周六 19:00-21:30',
            location: '学生活动中心影院',
            contact: 'film@nankai.edu.cn'
        },
        '动漫协会': {
            description: '推广动漫文化，开展动漫创作活动。组织动漫展览和比赛，培养动漫兴趣。',
            activityTime: '每周五 18:30-20:30',
            location: '学生活动中心302',
            contact: 'anime@nankai.edu.cn'
        },
        '哲学研习会': {
            description: '探讨哲学问题，培养哲学思维与素养。开展哲学研讨和讲座，提高思辨能力。',
            activityTime: '每周三 19:00-21:00',
            location: '哲学院楼401',
            contact: 'philosophy@nankai.edu.cn'
        },
        '经济学研习社': {
            description: '研究经济学理论，分析经济现象。开展经济学研讨和讲座，培养经济思维。',
            activityTime: '每周四 18:30-20:30',
            location: '经济学院楼502',
            contact: 'economics@nankai.edu.cn'
        },
        '法学研习社': {
            description: '研究法学理论，探讨法律问题。开展法学研讨和讲座，培养法律思维。',
            activityTime: '每周二 19:00-21:00',
            location: '法学院楼301',
            contact: 'law@nankai.edu.cn'
        },
        '历史学研习社': {
            description: '研究历史问题，传承历史文化。开展历史研讨和讲座，培养历史思维。',
            activityTime: '每周五 18:30-20:30',
            location: '历史学院楼401',
            contact: 'history@nankai.edu.cn'
        },
        '文学研习社': {
            description: '研究文学作品，探讨文学问题。开展文学研讨和讲座，培养文学素养。',
            activityTime: '每周三 19:00-21:00',
            location: '文学院楼501',
            contact: 'literature@nankai.edu.cn'
        },
        '数学研习社': {
            description: '研究数学理论，解决数学问题。开展数学研讨和讲座，培养数学思维。',
            activityTime: '每周四 18:30-20:30',
            location: '数学科学学院楼301',
            contact: 'math@nankai.edu.cn'
        },
        '物理学研习社': {
            description: '研究物理现象，探索物理规律。开展物理实验和研讨，培养科学思维。',
            activityTime: '每周二 19:00-21:00',
            location: '物理科学学院楼401',
            contact: 'physics@nankai.edu.cn'
        },
        '化学研习社': {
            description: '研究化学现象，探索化学规律。开展化学实验和研讨，培养科学素养。',
            activityTime: '每周三 18:30-20:30',
            location: '化学学院楼301',
            contact: 'chemistry@nankai.edu.cn'
        },
        '生物学研习社': {
            description: '研究生物现象，探索生命规律。开展生物实验和研讨，培养科学思维。',
            activityTime: '每周四 19:00-21:00',
            location: '生命科学学院楼401',
            contact: 'biology@nankai.edu.cn'
        },
        '地理学研习社': {
            description: '研究地理现象，探索地理规律。开展地理考察和研讨，培养地理思维。',
            activityTime: '每周五 18:30-20:30',
            location: '环境科学与工程学院楼301',
            contact: 'geography@nankai.edu.cn'
        }
    };
    
    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前点击的按钮添加active类
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-category');
            
            // 显示/隐藏社团卡片
            clubCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // 添加淡入动画
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // 初始化卡片样式
    clubCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    // 社团卡片点击事件
    clubCards.forEach(card => {
        card.addEventListener('click', function() {
            const clubName = this.querySelector('.club-name').textContent;
            const clubDesc = this.querySelector('.club-desc').textContent;
            
            // 更新模态框内容
            modalClubName.textContent = clubName;
            
            // 如果有详细信息，使用详细信息；否则使用卡片上的描述
            if (clubDetails[clubName]) {
                modalClubDesc.textContent = clubDetails[clubName].description;
            } else {
                modalClubDesc.textContent = clubDesc;
            }
            
            // 显示模态框
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复背景滚动
    });
    
    // 点击模态框外部关闭模态框
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 恢复背景滚动
        }
    });
    

    
    // 添加淡出动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // 处理ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 恢复背景滚动
        }
    });
});