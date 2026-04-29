// ============================================================
//  I18N — 所有页面文本
// ============================================================
const I18N = {
  zh: {
    title:       '🦠 深圳市污水流行病学（WBE）新冠核酸检测数据分析报告',
    subtitle:    '基于 2039 份污水样本 PCR 检测结果的综合统计分析 · SLAN-96P qPCR 平台 · 四合一磁珠富集提取方法',
    meta1: '检测时间跨度：2022-10 至 2023-08',
    meta2: '覆盖地区：深圳市坪山区 / 福田区 / 罗湖区',
    meta3: '检测靶标：N 基因（HEX）· ORF1ab（FAM）· 内标 IC（CY5）',
    meta4: '阳性阈值：Ct < 37（严格）/ Ct < 40（宽松）',

    sec_kpi:    '📊 核心检测指标总览',
    kpi1_label: '原始收集样本',       kpi1_sub: '有效样本 1,123 份（55.1%）',
    kpi2_label: 'N 基因检出率（Ct < 40）', kpi2_sub: '606 / 1123 份检出 · 平均 Ct = 35.18', kpi2_badge: '严格阳性（Ct<37）：35.0%',
    kpi3_label: 'ORF1ab 检出率（Ct < 40）', kpi3_sub: '356 / 1123 份检出 · 平均 Ct = 34.87', kpi3_badge: '严格阳性（Ct<37）：18.8%',
    kpi4_label: '双靶标阳性率（Ct < 37）',  kpi4_sub: '173 / 1123 份双靶标阳性',           kpi4_badge: '内标通过率：73.6%',

    sec_time:           '📈 时间维度分析',
    chart_trend_title:  '月度检测阳性率趋势（N 基因 / ORF1ab / 双靶标）',
    chart_count_title:  '月度样本量分布',

    sec_region:         '🗺️ 地区与采样点分析',
    chart_pie_title:    '三地区样本分布',
    chart_rbar_title:   '地区阳性率对比（Ct<37）',
    chart_cross_title:  '地区 × 月度双靶标阳性率趋势',

    sec_ct:             '🔬 Ct 值分布与双靶标相关性',
    chart_hist_title:   'N 基因 Ct 值频次分布',
    chart_scatter_title:'N 基因 vs ORF1ab Ct 值相关性散点图',

    sec_class:          '🧪 样本阳性分类统计',
    chart_donut_title:  '样本阳性分级构成',
    class_table_title:  '样本分类详细说明',
    th_class: '分类', th_count: '数量', th_pct: '占比', th_criterion: '判定标准',
    cls_high: '高度阳性', cls_high_crit: '双靶标均 Ct < 37',
    cls_med:  '中度阳性', cls_med_crit:  '单靶标 Ct < 37',
    cls_low:  '低阳性',   cls_low_crit:  '任一靶标 Ct 37–40',
    cls_neg:  '阴性',     cls_neg_crit:  '所有靶标均无扩增',
    cls_ic:   'IC 失败',  cls_ic_crit:   '内标 Ct ≥ 40 或无 Ct',
    ic_note: '<b>💡 内标说明：</b>828 份获得数值型 RNase P Ct，其中 IC Ct&lt;40 有 826 份（占数值型内标样本 99.8%）。IC 失败率 26.4%（297/1123）提示部分污水样本含有 PCR 抑制物，为污水基质检测的固有挑战。',

    sec_sites: '📍 主要采样点检测统计',
    th_site: '采样点', th_region: '地区', th_n: '样本数', th_npos: 'N 阳性率',
    th_opos: 'O 阳性率', th_dual: '双靶标阳性率', th_nct: 'N 平均 Ct', th_oct: 'O 平均 Ct', th_risk: '风险等级',

    sec_insights: '💡 关键发现与科学洞察',
    ins1_title: '疫情消退拐点清晰（2022-10 → 2023-04）',
    ins1_body:  '双靶标阳性率从 2022 年 10 月峰值 <b>38.7%</b> 持续下降至 2023 年 5–8 月的 <b>0%</b>，完美呈现奥密克戎疫情消退曲线。2023 年 4 月样本量最大（552 份），仍维持 15.9% 的双靶标阳性率。',
    ins2_title: '罗湖区早期疫情信号更强',
    ins2_body:  '罗湖区在 2022 年 10 月（42.9%）和 12 月（39.3%）双靶标阳性率均高于福田区（35.3% / 11.1%），提示罗湖区作为早期预警哨点具有优先监测价值。福田区 2023 年 1 月骤升至 37% 略晚于罗湖区。',
    ins3_title: 'N 基因比 ORF1ab 更敏感',
    ins3_body:  'N 基因检出率（54.0%）显著高于 ORF1ab（31.7%），在阳性样本中 N 基因平均 Ct = 35.18，ORF1ab = 34.87，两靶标 Ct 值高度相关（r≈0.92）。N 基因作为主要筛查靶标更优。',
    ins4_title: 'Ct 值中位数揭示低病毒载量',
    ins4_body:  'N 基因 Ct 中位数 <b>36.3</b>（范围 6.9–44.7），75% 分位数达 38.7，表明污水样本中病毒浓度普遍较低，处于检测下限附近，与污水样本的高稀释率一致。',
    ins5_title: '水质净化厂阳性率高',
    ins5_body:  '滨河水质净化厂（21.8%）、福田保税区泵房（20.8%）、黄冈街道（20.0%）双靶标阳性率最高，这与污水处理厂汇聚上游人口、集中放大病毒信号的原理相符。',
    ins6_title: '内标失效率需关注（26.4%）',
    ins6_body:  '内标通过率仅 73.6%（826/828），2023 年 5–7 月内标通过率更降至 33–39%，提示这批样本可能含高浓度 PCR 抑制物，或提取效率下降。磁珠富集预处理在改善这一问题上具有关键价值。',

    sec_method:     '检测方法与质控说明',
    method1_title:  '样本采集',
    method1_body:   '污水样本来自深圳市坪山、福田、罗湖三区的泵站和水质净化厂，采样量 1000 µL，采用四合一一步磁珠富集提取法（TM-ZCH 方案）进行前处理，有效去除抑制物并浓缩病毒核酸。',
    method2_title:  'PCR 检测',
    method2_body:   '仪器：SLAN-96P 实时荧光定量 PCR 仪<br>靶标：FAM → ORF1ab · HEX → N 基因 · CY5 → 内标 IC<br>阈值：Ct &lt; 37（强阳性）/ Ct &lt; 40（弱阳性）',
    method3_title:  '数据质控',
    method3_body:   '原始 2039 份 → 剔除完全无 Ct 值样本 → 有效 1123 份（55.1%）。内标监控：IC Ct &lt; 40 视为提取成功。双靶标交叉验证降低假阳性率。',

    footer: 'Analysis Report · Based on PCR Testing Data from 2,040 Wastewater Samples · Data Range: Oct 2022 – Aug 2023 · Shenzhen Three-District Wastewater-Based Epidemiology Monitoring Study',

    // ===== 实验方法章节 =====
    sec_exp_methods: '⚗️ 实验方法与操作流程',
    tab_sample: '📦 样本采集与制备',
    tab_enrich: '🧲 磁珠富集提取',
    tab_pcr:    '🔬 qPCR 扩增检测',
    tab_lod:    '✅ 最低检出限验证',

    exp_sample_h:   'I. 污水样本采集与前处理',
    exp_sample_src: '来源文件：4月30日海狸实验报告 · 超滤实验论文草稿',
    step1_l:'现场采样',   step1_d:'泵站/净化厂<br>聚乙烯瓶收集<br>冰上运输',
    step2_l:'低温保存',   step2_d:'4°C 保存<br>避免反复冻融<br>及时处理',
    step3_l:'离心预处理', step3_d:'5000×g<br>离心 30 min<br>取上清',
    step4_l:'假病毒接种', step4_d:'内参 PMMoV<br>SARS-CoV-2<br>假病毒标定',
    step5_l:'富集浓缩',   step5_d:'磁珠直接法<br>或超滤管法<br>500 µL→50 µL',
    step6_l:'核酸提取',   step6_d:'裂解/洗涤<br>洗脱 50-80 µL<br>-20°C 保存',

    exp_wastewater_h: '污水样本类型',
    ww_type1: '进水废水（污水处理厂进水口）', ww_type2: '泵站提升污水（管网截流）',
    ww_type3: '河水 / 海水 / 湖水（环境对照）', ww_type4: '厨余污水 / 厕所污水（生活源）',
    ww_type5: '清水（阴性对照）',
    ww_note: '所有样本收集于深圳市福田、罗湖、坪山三区；高压灭菌聚乙烯瓶收集，冰上运输，4°C 保存至提取',

    exp_pseudovirus_h: '假病毒内参体系',
    pv1: 'SARS-CoV-2 假病毒（主要检测靶标）', pv2: '甲流病毒假病毒（H1N1 代替）',
    pv3: '诺如病毒假病毒（GI / GII）',        pv4: '猴痘病毒假病毒',
    pv5: 'MS2 噬菌体（提取过程内参）',         pv6: 'PMMoV 辣椒轻斑驳病毒（流量标准化内参）',
    pv_note: '假病毒储液 −80°C 保存；使用前按梯度稀释（1:0.1:0.05:0.025:0.0125），加标浓度 100 拷贝/mL',

    exp_reagent_h: '实验试剂与耗材',
    th_cat: '类别', th_item: '试剂/耗材', th_spec: '规格/说明',
    cat_pcr: 'PCR 试剂', spec_pcr_a: '17 µL / 反应', spec_pcr_b: '3 µL / 反应，含逆转录酶',
    cat_extract: '提取试剂',
    item_lysis: '裂解液', spec_lysis: '3.6 mL / 样本，含离液盐',
    item_protk: '蛋白酶 K', spec_protk: '20 µL / 样本，预处理蛋白降解',
    item_beads: '磁珠悬液', spec_beads: '20 µL / 样本，SiO₂ 磁珠',
    item_wash: '洗涤液 A/B/C', spec_wash: '各 3 mL / 板孔',
    item_elut: '洗脱液', spec_elut: '50–80 µL，90°C 温浴 3 min',
    cat_equip: '仪器设备',
    item_extractor: '奕昕自动提取仪', spec_extractor: '全自动磁珠转移，24 孔深孔板',
    item_qpcr: 'SLAN-96P qPCR 仪', spec_qpcr: '三通道荧光检测 FAM/HEX/CY5',
    item_centri: '离心机', spec_centri: '5000×g，30 min 预处理离心',

    exp_enrich_h: 'II. 磁珠直接富集提取法（核心方案）',
    exp_enrich_src: '来源文件：最低检出限验证报告（V8）· 海狸实验报告',
    enrich_s1_l:'样本制备', enrich_s1_d:'4×4 mL 样本<br>置于 15 mL<br>离心管',
    enrich_s2_l:'裂解反应', enrich_s2_d:'加入裂解液<br>蛋白酶K<br>95°C, 8 min',
    enrich_s3_l:'磁珠结合', enrich_s3_d:'加磁珠悬液<br>混匀结合<br>核酸吸附',
    enrich_s4_l:'磁力分离', enrich_s4_d:'磁力架 2 min<br>弃上清<br>保留磁珠',
    enrich_s5_l:'洗涤纯化', enrich_s5_d:'漂洗液 1×3 mL<br>漂洗液 2×3 mL<br>四管合并',
    enrich_s6_l:'洗脱回收', enrich_s6_d:'40°C 干燥 3 min<br>洗脱液 50-80 µL<br>90°C 温浴 3 min',

    enrich_detail_h: '关键操作要点',
    enrich_k1: '污水样本 4°C 保存，离心（5000×g, 30 min）去除大颗粒',
    enrich_k2: '蛋白酶 K 预处理可降解蛋白质，减少 PCR 抑制物',
    enrich_k3: '磁珠与核酸结合后，通过磁力架实现固液分离',
    enrich_k4: '4 管合并洗涤：将 4×4 mL 样本浓缩至 50–80 µL',
    enrich_k5: '最终浓缩倍数约 200–320×，显著提高检测灵敏度',
    enrich_k6: '全流程 2 小时（自动化）/ 4 小时（手动）',
    enrich_ultra_h: '超滤管富集法（对比方案）',
    ultra1: '美正富集仪配套超滤浓缩管', ultra2: '500 mL 洗液浸泡，针管反复抽吸富集病毒',
    ultra3: '洗脱：底部没入洗脱液，抽吸 20 次', ultra4: '蛋白酶处理优化孵育时间：10/20/30 min',
    ultra5: 'PBS 缓冲液辅助提高蛋白酶活性',
    ultra_note: '与磁珠法对比：超滤管法适用于大体积样本（500 mL），磁珠法适用于小体积（16 mL），两种方法互补覆盖不同场景',
    enrich_4in1_h: '奕昕 4in1 四合一方案（创新点）',
    enrich_4in1_body: '在标准提取流程第四步（五孔）中，暂停程序，将四孔含磁珠的液体合并至第四孔，充分富集后继续运行。',
    '4in1_1': '磁珠量：20 µL；蛋白酶 K：20 µL',
    '4in1_2': '裂解液：3.6 mL；样本：4 mL / 孔',
    '4in1_3': '四孔并一：等效处理 16 mL 样本',
    '4in1_4': '相比通用试剂，检测下限提升约 4×',
    enrich_compare_h: '方法对比',
    cmp_method:'方法', cmp_vol:'处理量', cmp_time:'耗时',
    cmp_m1:'磁珠直接法', cmp_m2:'超滤管法', cmp_m3:'4in1 集成法', cmp_m4:'凯杰试剂盒',

    exp_pcr_h:   'III. 实时荧光定量 RT-qPCR 检测方法',
    exp_pcr_src: '来源文件：4月30日海狸实验报告',
    pcr_react_h: '反应体系配制（20 µL 总体积）',
    th_component: '组份', th_volume: '加入量 (µL)',
    comp_template: '待测核酸 / 阴性对照 / 阳性对照',
    pcr_react_note: '每批次须包含阳性对照和阴性对照（各 1 管）；每份 RNA 样本技术复制 n = 2',
    pcr_channel_h: '荧光通道设置',
    th_channel:'通道', th_target:'检测靶标', th_dye:'荧光染料',
    ch_ic: '内标基因 IC', ch_ref: '参比荧光',
    pcr_program_h: 'PCR 程序参数',
    th_step:'步骤', th_stage:'阶段', th_temp:'温度', th_time:'时间', th_cycle:'循环数',
    prog_rt:'逆转录反应', prog_act:'Taq 酶活化', prog_den:'变性', prog_ann:'退火延伸 + 荧光采集',
    pcr_interpret_h: '结果判读标准',
    th_verdict: '判定结果',
    verdict_pos:'阳性', verdict_suspect:'可疑（复检）', verdict_retest:'提取异常，重测',
    verdict_neg:'阴性', verdict_invalid:'扩增异常，重测',
    pcr_limit_h: '检测方法局限性',
    pcr_comp_a: '2019-nCoV PCR 反应液 A',
    pcr_comp_b: '2019-nCoV PCR 反应液 B（含逆转录酶）',
    pcr_target_orf: 'ORF1ab 基因',
    pcr_target_n: 'N 基因',
    pcr_th_famvic: 'FAM/VIC 通道 (ORF1ab / N)',
    pcr_th_cy5: 'CY5 通道 (IC)',
    pcr_cond1: 'Ct < 37',
    pcr_cond2: '37 ≤ Ct < 40',
    pcr_cond3: 'Ct ≥ 40 或无扩增',
    pcr_cond_ic1: 'Ct < 37 或无扩增',
    pcr_cond_ic2: 'Ct < 37',
    pcr_cond_ic3: 'Ct > 37 或无扩增',
    limit1:'试剂盒仅限于规定的样本类型（污水基质）',
    limit2:'不合理的样本采集/转运/储存可能导致假阴性',
    limit3:'样本处理交叉污染可能导致假阳性',
    limit4:'低于最低检出限（&lt; 10 拷贝/mL）的样本可能无法检出',
    limit5:'污水基质含 PCR 抑制物，可导致内标失效（IC Ct &gt; 40）',

    exp_lod_h:   'IV. 最低检出限（LoD）验证试验',
    exp_lod_src: '来源文件：检测报告-最低检出限验证 V8（深圳市第二人民医院 · 2023年12月）',
    lod_design_h: '验证实验设计',
    lod_d1:'检测对象：SARS-CoV-2 假病毒核酸标准样品',
    lod_d2:'加标浓度：100 拷贝/mL（基准）',
    lod_d3:'稀释梯度：1 : 0.1 : 0.05 : 0.025 : 0.0125',
    lod_d4:'对应浓度：100, 10, 5, 2.5, 1.25 拷贝/mL',
    lod_d5:'每份样品 50 mL，共 6 份验证样品',
    lod_d6:'技术复制：每份 RNA 样本 n = 2',
    lod_d7:'背景对照：阴性污水样本',
    lod_compare_h: '对比验证方案',
    lod_c1:'方案 A：通用磁珠核酸提取试剂盒（行业参考）',
    lod_c2:'方案 B：项目组研制磁珠直接提取法',
    lod_c3:'两组提取后均使用通用荧光定量 PCR 检测',
    lod_c4:'检测体积：16 mL / 份（4×4 mL）',
    lod_c5:'委托单位：深圳市第二人民医院',
    lod_c6:'验证日期：2023年12月8–11日',
    lod_result_h: '验证结果',
    lod_result_body: '项目组研制方法在污水样本中可检测到稀释后预期浓度 <b>1.25–5 拷贝/mL</b> 范围内的病毒信号，经与通用核酸提取试剂盒对比，项目方法获得更低的 Ct 值（即更高灵敏度）。回收率计算公式：<code style="background:#e8f0f8;padding:1px 4px;border-radius:3px;">V1/V2 × 2^(CT2−CT1) × 100%</code>',
    lod_chip1:'最低检出限<br>拷贝/mL', lod_chip2:'核酸平均<br>回收率', lod_chip3:'自动化提取<br>全程耗时', lod_chip4:'手动提取<br>全程耗时',
    lod_ct_h: '📊 验证实验 Ct 值结果（样品预期浓度 vs N基因 Ct）',
    th_sample_type:'样品类型', th_conc:'核酸浓度 (拷贝/mL)', th_n_ct:'N 基因 Ct 值', th_ic_ct:'内标 Ct 值', th_result:'检测结果',
    samp_pos:'SARS-CoV-2 假病毒阳性污水', samp_neg:'阴性背景污水',
    res_pos:'阳性', res_pos2:'阳性', res_pos3:'阳性', res_borderline:'检出（边界）', res_detect:'弱检出', res_neg:'阴性',
    ct_none:'无扩增',
    lod_conclusion_h:'验证结论：',
    lod_conclusion_body:'深圳市第二人民医院项目组研制的磁珠直接提取法达到最低检出限 <b>10 拷贝/mL</b>，实际可检测低至 <b>1.25 拷贝/mL</b> 浓度的病毒核酸信号。核酸回收率 &gt; 87%，显著优于通用试剂盒。该方法通过了第三方验证，具备用于污水流行病学监测的技术可行性。',

    // 地图模块
    sec_map:           '深圳三区 WBE 阳性率地理热力图',
    map_metric_label:  '显示指标：',
    map_metric_dual:   '双靶标阳性率',
    map_metric_n:      'N 基因阳性率',
    map_metric_ic:     '内标通过率',
    map_drag_hint:     '拖动下方滑块切换月份',
    map_loading:       '正在加载真实地图数据...',
    map_play:          '▶ 播放',
    map_pause:         '⏸ 暂停',
    map_reset:         '↺ 重置',
    map_legend_title:  '双靶标阳性率 颜色图例',
    map_legend_dual:   '双靶标阳性率 颜色图例',
    map_legend_n:      'N基因阳性率 颜色图例',
    map_legend_ic:     '内标通过率 颜色图例',
    map_no_data:       '无数据',
    map_dual_tip:      '双靶标阳性率',
    map_npos_tip:      'N 基因阳性率',
    map_ic_tip:        '内标通过率',
    map_click_hint:    '点击查看详情',
    map_click_outside: '点击空白区域关闭',
    map_zoom_hint:     '滚轮缩放 · 拖拽平移 · 双击重置',

    // 图表标签
    lbl_n_pos:    'N基因阳性率(%)',
    lbl_o_pos:    'ORF1ab阳性率(%)',
    lbl_dual_pos: '双靶标阳性率(%)',
    lbl_ic_pass:  '内标通过率(%)',
    lbl_samples:  '样本数',
    lbl_regions:  ['福田区','罗湖区','坪山区'],
    lbl_rbar_cats:['N阳性(Ct<37)','ORF1ab阳性(Ct<37)','双靶标阳性(Ct<37)','内标通过率'],
    lbl_donut:    ['高度阳性(双靶Ct<37)','中度阳性(单靶Ct<37)','低阳性(Ct 37-40)','阴性','IC失败'],
    lbl_hist:     'N基因Ct值频次',
    lbl_scatter1: '阳性样本（N vs ORF1ab）',
    lbl_scatter2: '参考线（y=x）',
    lbl_xct:      'N 基因 Ct 值',
    lbl_yct:      'ORF1ab Ct 值',
    lbl_pie_unit: '份',
    risk_high:    '高风险', risk_med: '中风险', risk_low: '低风险',
    site_regions: { '福田区':'福田区', '罗湖区':'罗湖区', '坪山区':'坪山区' },
    site_names: [
      '滨河水质净化厂','福田保税区泵房','黄冈街道','蛇口水质净化厂','竹韵花园',
      '莲塘尾泵站','石厦泵站','渔民村','福田水质净化厂','皇岗村截污泵站',
      '福星泵站','上沙椰树村','创业路污水泵站','中心公园','罗湖村'
    ],
  },
  en: {
    title:       '🦠 Shenzhen WBE SARS-CoV-2 qPCR Data Analysis Report',
    subtitle:    'Comprehensive statistical analysis of 2,039 wastewater samples · SLAN-96P qPCR · 4-in-1 Magnetic Bead Enrichment Method',
    meta1: 'Detection period: Oct 2022 – Aug 2023',
    meta2: 'Districts: Pingshan / Futian / Luohu, Shenzhen',
    meta3: 'Targets: N gene (HEX) · ORF1ab (FAM) · Internal Control (CY5)',
    meta4: 'Positive threshold: Ct < 37 (strict) / Ct < 40 (inclusive)',

    sec_kpi:    '📊 Key Detection Metrics',
    kpi1_label: 'Total Samples Collected', kpi1_sub: 'Valid samples: 1,123 (55.1%)',
    kpi2_label: 'N Gene Detection Rate (Ct < 40)', kpi2_sub: '606 / 1123 detected · Mean Ct = 35.18', kpi2_badge: 'Strict positive (Ct<37): 35.0%',
    kpi3_label: 'ORF1ab Detection Rate (Ct < 40)',  kpi3_sub: '356 / 1123 detected · Mean Ct = 34.87', kpi3_badge: 'Strict positive (Ct<37): 18.8%',
    kpi4_label: 'Dual-Target Positive Rate (Ct < 37)', kpi4_sub: '173 / 1123 dual-target positive', kpi4_badge: 'IC Pass Rate: 73.6%',

    sec_time:           '📈 Temporal Analysis',
    chart_trend_title:  'Monthly Positive Rate Trend (N gene / ORF1ab / Dual-target)',
    chart_count_title:  'Monthly Sample Count Distribution',

    sec_region:         '🗺️ Geographic & Sampling Site Analysis',
    chart_pie_title:    'Sample Distribution by District',
    chart_rbar_title:   'Positive Rate Comparison by District (Ct<37)',
    chart_cross_title:  'District × Monthly Dual-Target Positive Rate Trend',

    sec_ct:             '🔬 Ct Value Distribution & Dual-Target Correlation',
    chart_hist_title:   'N Gene Ct Value Frequency Distribution',
    chart_scatter_title:'N Gene vs ORF1ab Ct Value Correlation Scatter Plot',

    sec_class:          '🧪 Sample Positivity Classification',
    chart_donut_title:  'Sample Positivity Grade Composition',
    class_table_title:  'Classification Criteria Details',
    th_class: 'Category', th_count: 'Count', th_pct: 'Ratio', th_criterion: 'Criterion',
    cls_high: 'High Positive', cls_high_crit: 'Both targets Ct < 37',
    cls_med:  'Moderate Positive', cls_med_crit: 'Single target Ct < 37',
    cls_low:  'Low Positive',  cls_low_crit:  'Any target Ct 37–40',
    cls_neg:  'Negative',      cls_neg_crit:  'No amplification detected',
    cls_ic:   'IC Failure',    cls_ic_crit:   'IC Ct ≥ 40 or no Ct',
    ic_note: '<b>💡 Internal Control Note:</b> 828 samples yielded numeric RNase P Ct values; 826 had IC Ct&lt;40 (99.8% among numeric IC samples). A 26.4% IC failure rate (297/1123) indicates PCR inhibitors in some wastewater samples—an inherent challenge for environmental matrices.',

    sec_sites: '📍 Key Sampling Site Statistics',
    th_site: 'Sampling Site', th_region: 'District', th_n: 'Samples', th_npos: 'N Pos Rate',
    th_opos: 'O Pos Rate', th_dual: 'Dual-Target Rate', th_nct: 'Mean N Ct', th_oct: 'Mean O Ct', th_risk: 'Risk Level',

    sec_insights: '💡 Key Findings & Scientific Insights',
    ins1_title: 'Clear Epidemic Decline Inflection (Oct 2022 → Apr 2023)',
    ins1_body:  'Dual-target positive rate declined continuously from the Oct 2022 peak of <b>38.7%</b> to <b>0%</b> in May–Aug 2023, perfectly tracing the Omicron epidemic recession curve. April 2023 had the largest sample volume (552), yet maintained a 15.9% dual-target rate.',
    ins2_title: 'Luohu District Showed Stronger Early Signal',
    ins2_body:  "Luohu's dual-target rate in Oct 2022 (42.9%) and Dec 2022 (39.3%) exceeded Futian (35.3% / 11.1%), suggesting Luohu as a priority early-warning sentinel site. Futian's sharp rise to 37% in Jan 2023 lagged Luohu by ~1 month.",
    ins3_title: 'N Gene More Sensitive than ORF1ab',
    ins3_body:  'N gene detection rate (54.0%) substantially exceeded ORF1ab (31.7%). Mean Ct: N = 35.18, ORF1ab = 34.87. The two targets are highly correlated (r ≈ 0.92), confirming N gene as the preferred primary screening target.',
    ins4_title: 'Median Ct Indicates Low Viral Load',
    ins4_body:  'N gene Ct median = <b>36.3</b> (range 6.9–44.7); 75th percentile at 38.7, indicating generally low virus concentration near the detection limit—consistent with high dilution in wastewater matrices.',
    ins5_title: 'Treatment Plants Show Highest Positivity',
    ins5_body:  'Binhe WWTP (21.8%), Futian Bonded Zone Pump Station (20.8%), and Huanggang Subdistrict (20.0%) had the highest dual-target rates, consistent with the wastewater treatment plant\'s role in amplifying upstream population signals.',
    ins6_title: 'IC Failure Rate Warrants Attention (26.4%)',
    ins6_body:  'IC pass rate was 73.6% (826/828); dropping further to 33–39% in May–Jul 2023, suggesting high PCR inhibitor concentrations or extraction efficiency decline. Magnetic bead enrichment pretreatment is critical for addressing this issue.',

    sec_method:     'Detection Methods & Quality Control',
    method1_title:  'Sample Collection',
    method1_body:   'Wastewater samples from pump stations and WWTPs in Pingshan, Futian, and Luohu districts (1000 µL aliquots). Preprocessed using the 4-in-1 one-step magnetic bead enrichment/extraction protocol (TM-ZCH), effectively removing inhibitors and concentrating viral nucleic acids.',
    method2_title:  'PCR Detection',
    method2_body:   'Instrument: SLAN-96P real-time qPCR system<br>Targets: FAM → ORF1ab · HEX → N gene · CY5 → Internal Control<br>Thresholds: Ct &lt; 37 (strong positive) / Ct &lt; 40 (weak positive)',
    method3_title:  'Data QC',
    method3_body:   'Raw 2,039 samples → removed samples with no Ct values → 1,123 valid (55.1%). IC monitoring: IC Ct &lt; 40 = extraction successful. Dual-target cross-validation reduces false positives.',

    footer: 'Analytics Report · Based on PCR qPCR data from 2,040 wastewater samples · Oct 2022 – Aug 2023 · Shenzhen WBE Surveillance Study',

    // ===== EXPERIMENTAL METHODS =====
    sec_exp_methods: '⚗️ Experimental Methods & Protocols',
    tab_sample: '📦 Sample Collection',
    tab_enrich: '🧲 Magnetic Bead Enrichment',
    tab_pcr:    '🔬 qPCR Detection',
    tab_lod:    '✅ LoD Verification',

    exp_sample_h:   'I. Wastewater Sample Collection & Pre-treatment',
    exp_sample_src: 'Source: Haili Lab Report (Apr 30) · Ultrafiltration Manuscript Draft',
    step1_l:'Field Sampling',  step1_d:'Pump station / WTP<br>PE bottle collection<br>Ice transport',
    step2_l:'Cold Storage',    step2_d:'Store at 4°C<br>Avoid freeze-thaw<br>Process promptly',
    step3_l:'Centrifugation',  step3_d:'5,000×g<br>30 min spin<br>Collect supernatant',
    step4_l:'Spike Controls',  step4_d:'PMMoV internal std<br>SARS-CoV-2 pseudovirus<br>Calibration',
    step5_l:'Enrichment',      step5_d:'Magnetic bead / UF<br>tube method<br>500 µL→50 µL',
    step6_l:'Nucleic Acid Ext',step6_d:'Lysis / washing<br>Elution 50-80 µL<br>Store −20°C',

    exp_wastewater_h: 'Wastewater Sample Types',
    ww_type1: 'Influent wastewater (WTP intake)', ww_type2: 'Pump station sewage (intercepted)',
    ww_type3: 'River / seawater / lake water (environmental control)', ww_type4: 'Kitchen / toilet wastewater (domestic source)',
    ww_type5: 'Tap water (negative control)',
    ww_note: 'All samples from Futian, Luohu, Pingshan districts, Shenzhen; collected in autoclaved PE bottles, transported on ice, stored at 4°C until extraction',

    exp_pseudovirus_h: 'Pseudovirus & Internal Control Panel',
    pv1: 'SARS-CoV-2 pseudovirus (primary target)', pv2: 'Influenza A pseudovirus (H1N1 surrogate)',
    pv3: 'Norovirus pseudovirus (GI / GII)',         pv4: 'Monkeypox virus pseudovirus',
    pv5: 'MS2 bacteriophage (extraction process control)', pv6: 'PMMoV — Pepper Mild Mottle Virus (flow normalization)',
    pv_note: 'Pseudovirus stocks stored at −80°C; serial dilution before use (1:0.1:0.05:0.025:0.0125); spike concentration 100 copies/mL',

    exp_reagent_h: 'Reagents & Consumables',
    th_cat: 'Category', th_item: 'Reagent/Item', th_spec: 'Specification',
    cat_pcr: 'PCR Reagents', spec_pcr_a: '17 µL / reaction', spec_pcr_b: '3 µL / reaction, contains reverse transcriptase',
    cat_extract: 'Extraction Reagents',
    item_lysis: 'Lysis Buffer', spec_lysis: '3.6 mL / sample, chaotropic salts',
    item_protk: 'Proteinase K', spec_protk: '20 µL / sample, protein digestion pre-treatment',
    item_beads: 'Magnetic Bead Suspension', spec_beads: '20 µL / sample, SiO₂ magnetic beads',
    item_wash: 'Wash Buffers A/B/C', spec_wash: '3 mL each / well',
    item_elut: 'Elution Buffer', spec_elut: '50–80 µL, 90°C incubation 3 min',
    cat_equip: 'Equipment',
    item_extractor: 'YiXin Auto Extractor', spec_extractor: 'Automated magnetic bead transfer, 24-well deep well plate',
    item_qpcr: 'SLAN-96P qPCR Instrument', spec_qpcr: '3-channel fluorescence FAM/HEX/CY5',
    item_centri: 'Centrifuge', spec_centri: '5,000×g, 30 min pre-treatment spin',

    exp_enrich_h: 'II. Direct Magnetic Bead Enrichment Protocol (Core Method)',
    exp_enrich_src: 'Source: LoD Verification Report (V8) · Haili Lab Report',
    enrich_s1_l:'Sample Prep',   enrich_s1_d:'4×4 mL samples<br>into 15 mL<br>centrifuge tubes',
    enrich_s2_l:'Lysis',         enrich_s2_d:'Add lysis buffer<br>Proteinase K<br>95°C, 8 min',
    enrich_s3_l:'Bead Binding',  enrich_s3_d:'Add bead suspension<br>Mix to bind<br>NA adsorption',
    enrich_s4_l:'Separation',    enrich_s4_d:'Magnetic rack 2 min<br>Remove supernatant<br>Retain beads',
    enrich_s5_l:'Washing',       enrich_s5_d:'Wash buffer 1×3 mL<br>Wash buffer 2×3 mL<br>Merge 4 tubes',
    enrich_s6_l:'Elution',       enrich_s6_d:'Dry 40°C 3 min<br>Elution buffer 50-80 µL<br>90°C incubate 3 min',

    enrich_detail_h: 'Key Operation Notes',
    enrich_k1: 'Store samples at 4°C; pre-spin at 5,000×g for 30 min to remove large particles',
    enrich_k2: 'Proteinase K pre-treatment degrades proteins and reduces PCR inhibitors',
    enrich_k3: 'After bead-NA binding, magnetic rack enables solid-liquid separation',
    enrich_k4: 'Merge 4 tubes: concentrates 4×4 mL sample into 50–80 µL',
    enrich_k5: 'Final concentration factor ~200–320×, significantly improves detection sensitivity',
    enrich_k6: 'Total workflow: ~2 hours (automated) / ~4 hours (manual)',
    enrich_ultra_h: 'Ultrafiltration Tube Method (Comparative)',
    ultra1: 'Meizhen enrichment instrument + UF concentrator tube', ultra2: '500 mL wash liquid immersion, syringe pumping to concentrate virus',
    ultra3: 'Elution: submerge bottom in eluate, pump 20 times',   ultra4: 'Proteinase incubation time optimization: 10/20/30 min',
    ultra5: 'PBS buffer improves proteinase activity',
    ultra_note: 'Ultrafiltration is suited for large volumes (500 mL); magnetic bead method for small volumes (16 mL). Complementary approaches covering different scenarios.',
    enrich_4in1_h: 'YiXin 4-in-1 Integrated Protocol (Innovation)',
    enrich_4in1_body: 'At step 4 (5-well plate), pause the program, transfer magnetic bead solutions from all 4 wells into well 4, enrich, then resume protocol.',
    '4in1_1': 'Magnetic beads: 20 µL; Proteinase K: 20 µL',
    '4in1_2': 'Lysis buffer: 3.6 mL; Sample: 4 mL / well',
    '4in1_3': 'Merge 4 wells: equivalent to processing 16 mL sample',
    '4in1_4': '~4× improvement in detection limit vs. universal reagent kit',
    enrich_compare_h: 'Method Comparison',
    cmp_method:'Method', cmp_vol:'Volume', cmp_time:'Time',
    cmp_m1:'Magnetic Bead Direct', cmp_m2:'Ultrafiltration Tube', cmp_m3:'4-in-1 Integrated', cmp_m4:'Qiagen Kit',

    exp_pcr_h:   'III. Real-time Fluorescent RT-qPCR Detection',
    exp_pcr_src: 'Source: Haili Lab Report (Apr 30)',
    pcr_react_h: 'Reaction System (20 µL total volume)',
    th_component: 'Component', th_volume: 'Volume (µL)',
    comp_template: 'Sample RNA / Negative control / Positive control',
    pcr_react_note: 'Each run must include 1× positive and 1× negative control; technical duplicate n = 2 per RNA sample',
    pcr_channel_h: 'Fluorescence Channel Setup',
    th_channel:'Channel', th_target:'Target', th_dye:'Fluorescent Dye',
    ch_ic: 'Internal Control (IC)', ch_ref: 'Passive Reference',
    pcr_program_h: 'PCR Thermal Program',
    th_step:'Step', th_stage:'Stage', th_temp:'Temp', th_time:'Duration', th_cycle:'Cycles',
    prog_rt:'Reverse Transcription', prog_act:'Taq Enzyme Activation', prog_den:'Denaturation', prog_ann:'Annealing / Extension + Fluorescence',
    pcr_interpret_h: 'Result Interpretation',
    th_verdict: 'Result',
    verdict_pos:'Positive', verdict_suspect:'Suspect (Retest)', verdict_retest:'Extraction Error, Retest',
    verdict_neg:'Negative', verdict_invalid:'Amplification Error, Retest',
    pcr_limit_h: 'Method Limitations',
    pcr_comp_a: '2019-nCoV PCR Reaction Mix A',
    pcr_comp_b: '2019-nCoV PCR Reaction Mix B (contains reverse transcriptase)',
    pcr_target_orf: 'ORF1ab Gene',
    pcr_target_n: 'N Gene',
    pcr_th_famvic: 'FAM/VIC Channel (ORF1ab / N)',
    pcr_th_cy5: 'CY5 Channel (IC)',
    pcr_cond1: 'Ct < 37',
    pcr_cond2: '37 ≤ Ct < 40',
    pcr_cond3: 'Ct ≥ 40 or No amplification',
    pcr_cond_ic1: 'Ct < 37 or No amplification',
    pcr_cond_ic2: 'Ct < 37',
    pcr_cond_ic3: 'Ct > 37 or No amplification',
    limit1:'Kit limited to specified sample types (wastewater matrix)',
    limit2:'Improper collection/transport/storage may cause false negatives',
    limit3:'Cross-contamination during handling may cause false positives',
    limit4:'Samples below LoD (&lt; 10 copies/mL) may not be detected',
    limit5:'PCR inhibitors in wastewater matrix can cause IC failure (Ct &gt; 40)',

    exp_lod_h:   'IV. Limit of Detection (LoD) Verification Study',
    exp_lod_src: 'Source: LoD Verification Report V8 (Shenzhen 2nd People\'s Hospital · Dec 2023)',
    lod_design_h: 'Experimental Design',
    lod_d1:'Target: SARS-CoV-2 pseudovirus nucleic acid standard',
    lod_d2:'Spike concentration: 100 copies/mL (baseline)',
    lod_d3:'Dilution series: 1 : 0.1 : 0.05 : 0.025 : 0.0125',
    lod_d4:'Concentrations tested: 100, 10, 5, 2.5, 1.25 copies/mL',
    lod_d5:'Sample volume: 50 mL/sample, 6 validation samples total',
    lod_d6:'Technical replicates: n = 2 per RNA sample',
    lod_d7:'Negative control: background wastewater (matrix blank)',
    lod_compare_h: 'Comparative Validation',
    lod_c1:'Protocol A: Universal magnetic bead extraction kit (reference)',
    lod_c2:'Protocol B: Project-developed direct magnetic bead method',
    lod_c3:'Both protocols followed by standard RT-qPCR detection',
    lod_c4:'Detection volume: 16 mL / sample (4×4 mL)',
    lod_c5:'Commissioned by: Shenzhen 2nd People\'s Hospital',
    lod_c6:'Validation dates: Dec 8–11, 2023',
    lod_result_h: 'Validation Results',
    lod_result_body: 'The project-developed method detected virus signal down to <b>1.25–5 copies/mL</b>. Compared to universal extraction kit, project method achieved lower Ct values (higher sensitivity). Recovery formula: <code style="background:#e8f0f8;padding:1px 4px;border-radius:3px;">V1/V2 × 2^(CT2−CT1) × 100%</code>',
    lod_chip1:'Limit of Detection<br>(copies/mL)', lod_chip2:'Mean Nucleic Acid<br>Recovery Rate', lod_chip3:'Automated<br>Workflow Time', lod_chip4:'Manual<br>Workflow Time',
    lod_ct_h: '📊 LoD Verification Ct Values (Expected Concentration vs. N Gene Ct)',
    th_sample_type:'Sample Type', th_conc:'Concentration (copies/mL)', th_n_ct:'N Gene Ct', th_ic_ct:'IC Ct', th_result:'Result',
    samp_pos:'SARS-CoV-2 pseudovirus positive wastewater', samp_neg:'Negative background wastewater',
    res_pos:'Positive', res_pos2:'Positive', res_pos3:'Positive', res_borderline:'Detected (Borderline)', res_detect:'Weakly Detected', res_neg:'Negative',
    ct_none:'No Amplification',
    lod_conclusion_h:'Conclusion:',
    lod_conclusion_body:'The magnetic bead direct extraction method developed by Shenzhen 2nd People\'s Hospital achieved a limit of detection of <b>10 copies/mL</b>, with actual detection capability as low as <b>1.25 copies/mL</b>. Nucleic acid recovery &gt; 87%, significantly outperforming commercial kits. Third-party validated for wastewater-based epidemiology (WBE) surveillance.',

    // Map module
    sec_map:           'Shenzhen WBE Positivity Rate Geo Heatmap',
    map_metric_label:  'Metric:',
    map_metric_dual:   'Dual-Target Positive Rate',
    map_metric_n:      'N Gene Positive Rate',
    map_metric_ic:     'IC Pass Rate',
    map_drag_hint:     'Drag the slider below to switch months',
    map_loading:       'Loading real map data...',
    map_play:          '▶ Play',
    map_pause:         '⏸ Pause',
    map_reset:         '↺ Reset',
    map_legend_title:  'Dual-Target Rate — Color Legend',
    map_legend_dual:   'Dual-Target Rate — Color Legend',
    map_legend_n:      'N Gene Positive Rate — Color Legend',
    map_legend_ic:     'IC Pass Rate — Color Legend',
    map_no_data:       'No Data',
    map_dual_tip:      'Dual-Target Positive Rate',
    map_npos_tip:      'N Gene Positive Rate',
    map_ic_tip:        'IC Pass Rate',
    map_click_hint:    'Click for details',
    map_click_outside: 'Click outside to close',
    map_zoom_hint:     'Scroll to zoom · Drag to pan · Double-click to reset',

    // 图表标签
    lbl_n_pos:    'N Gene Positive Rate (%)',
    lbl_o_pos:    'ORF1ab Positive Rate (%)',
    lbl_dual_pos: 'Dual-Target Positive Rate (%)',
    lbl_ic_pass:  'IC Pass Rate (%)',
    lbl_samples:  'Sample Count',
    lbl_regions:  ['Futian','Luohu','Pingshan'],
    lbl_rbar_cats:['N Pos (Ct<37)','ORF1ab Pos (Ct<37)','Dual-Target (Ct<37)','IC Pass Rate'],
    lbl_donut:    ['High Pos (Dual Ct<37)','Mod Pos (Single Ct<37)','Low Pos (Ct 37-40)','Negative','IC Failure'],
    lbl_hist:     'N Gene Ct Frequency',
    lbl_scatter1: 'Positive Samples (N vs ORF1ab)',
    lbl_scatter2: 'Reference Line (y=x)',
    lbl_xct:      'N Gene Ct Value',
    lbl_yct:      'ORF1ab Ct Value',
    lbl_pie_unit: ' samples',
    risk_high:    'High Risk', risk_med: 'Med Risk', risk_low: 'Low Risk',
    site_regions: { '福田区':'Futian', '罗湖区':'Luohu', '坪山区':'Pingshan' },
    site_names: [
      'Binhe WWTP','Futian Bonded Zone Pump Stn','Huanggang Subdistrict','Shekou WWTP','Zhuyun Garden',
      'Liantangwei Pump Stn','Shixia Pump Stn','Fishermen\'s Village','Futian WWTP','Huanggang Village Pump Stn',
      'Fuxing Pump Stn','Shangsha Coconut Village','Chuangye Rd Pump Stn','Central Park','Luohu Village'
    ],
  },
  ja: {
    title:       '🦠 深圳市汚水疫学（WBE）SARS-CoV-2 qPCR データ分析レポート',
    subtitle:    '2,039件の汚水サンプルPCR検査結果に基づく総合統計解析 · SLAN-96P qPCRプラットフォーム · 4-in-1磁気ビーズ濃縮抽出法',
    meta1: '検出期間：2022年10月 – 2023年8月',
    meta2: '対象地域：深圳市坪山区 / 福田区 / 羅湖区',
    meta3: 'ターゲット：N遺伝子（HEX）· ORF1ab（FAM）· 内部コントロールIC（CY5）',
    meta4: '陽性閾値：Ct < 37（厳格）/ Ct < 40（緩和）',

    sec_kpi:    '📊 主要検出指標概要',
    kpi1_label: '収集サンプル総数',       kpi1_sub: '有効サンプル1,123件（55.1%）',
    kpi2_label: 'N遺伝子検出率（Ct < 40）', kpi2_sub: '606 / 1,123件検出 · 平均Ct = 35.18', kpi2_badge: '厳格陽性（Ct<37）：35.0%',
    kpi3_label: 'ORF1ab検出率（Ct < 40）', kpi3_sub: '356 / 1,123件検出 · 平均Ct = 34.87', kpi3_badge: '厳格陽性（Ct<37）：18.8%',
    kpi4_label: 'デュアルターゲット陽性率（Ct < 37）',  kpi4_sub: '173 / 1,123件デュアルターゲット陽性',           kpi4_badge: 'IC通過率：73.6%',

    sec_time:           '📈 時系列分析',
    chart_trend_title:  '月別陽性率推移（N遺伝子 / ORF1ab / デュアルターゲット）',
    chart_count_title:  '月別サンプル量分布',

    sec_region:         '🗺️ 地域・採水地点分析',
    chart_pie_title:    '三地域サンプル分布',
    chart_rbar_title:   '地域別陽性率比較（Ct<37）',
    chart_cross_title:  '地域 × 月別デュアルターゲット陽性率推移',

    sec_ct:             '🔬 Ct値分布とデュアルターゲット相関',
    chart_hist_title:   'N遺伝子Ct値度数分布',
    chart_scatter_title:'N遺伝子 vs ORF1ab Ct値相関散布図',

    sec_class:          '🧪 サンプル陽性分類統計',
    chart_donut_title:  'サンプル陽性グレード構成',
    class_table_title:  '分類基準詳細',
    th_class: '分類', th_count: '件数', th_pct: '割合', th_criterion: '判定基準',
    cls_high: '高度陽性', cls_high_crit: '双方のターゲットがCt < 37',
    cls_med:  '中度陽性', cls_med_crit:  '単一ターゲットCt < 37',
    cls_low:  '低陽性',   cls_low_crit:  'いずれかのターゲットCt 37–40',
    cls_neg:  '陰性',     cls_neg_crit:  '全ターゲットで増幅なし',
    cls_ic:   'IC失敗',  cls_ic_crit:   'ICのCt ≥ 40またはCtなし',
    ic_note: '<b>💡 内部コントロール（IC）について：</b>828件が数値型RNase P Ct値を取得し、そのうちIC Ct&lt;40は826件（数値型ICサンプル内で99.8%）。26.4%のIC失効率（297/1123）は、一部の汚水サンプルにPCR阻害物が含まれていることを示唆しており、環境マトリックス特有の課題です。',

    sec_sites: '📍 主要採水地点統計',
    th_site: '採水地点', th_region: '地域', th_n: 'サンプル数', th_npos: 'N陽性率',
    th_opos: 'O陽性率', th_dual: 'デュアル陽性率', th_nct: 'N平均Ct', th_oct: 'O平均Ct', th_risk: 'リスク等級',

    sec_insights: '💡 重要な発見と科学的洞察',
    ins1_title: '感染症終息の転換点が明確（2022-10 → 2023-04）',
    ins1_body:  'デュアルターゲット陽性率は2022年10月のピーク<b>38.7%</b>から、2023年5–8月には<b>0%</b>まで継続的に低下し、オミクロン株流行の終息曲線を完全に描いています。2023年4月は最大サンプル量（552件）でありながら、15.9%のデュアル陽性率を維持していました。',
    ins2_title: '羅湖区は早期感染信号が強力',
    ins2_body:  '羅湖区は2022年10月（42.9%）と12月（39.3%）のデュアル陽性率が福田区（35.3% / 11.1%）を上回っており、羅湖区を優先的な早期警戒拠点としての価値を示しています。福田区は2023年1月に急上昇した37%は羅湖区より約1ヶ月遅れていました。',
    ins3_title: 'N遺伝子の方がORF1abより感度が高い',
    ins3_body:  'N遺伝子検出率（54.0%）はORF1ab（31.7%）を有意に上回っています。陽性サンプルにおける平均Ct：N=35.18、ORF1ab=34.87。両ターゲットのCt値は高度に相関（r≈0.92）しており、N遺伝子を主要スクリーニングターゲットとして推奨します。',
    ins4_title: 'Ct値中央値は低ウイルス負荷を示す',
    ins4_body:  'N遺伝子Ct中央値=<b>36.3</b>（範囲6.9–44.7）、75パーセンタイル値38.7。汚水サンプル中のウイルス濃度が一般的に低く、検出限界付近にあることを示しており、高希釈率による汚水マトリックスの特性と一致しています。',
    ins5_title: '水処理場の陽性率が最も高く',
    ins5_body:  '浜河水質浄化厂（21.8%）、福田保税区ポンプ場（20.8%）、黄岡街道（20.0%）が最高のデュアル陽性率を示しました。これは処理場が上流人口を集約・ウイルス信号を増幅する原理と一致します。',
    ins6_title: 'IC失効率に注意が必要（26.4%）',
    ins6_body:  'IC通過率はわずか73.6%（826/828）。2023年5–7月には33–39%にさらに低下しており、高濃度のPCR阻害物または抽出効率低下を示唆しています。磁気ビード濃縮前処理はこの問題への対処に重要です。',

    sec_method:     '検出方法と品質管理',
    method1_title:  'サンプル採取',
    method1_body:   '汚水サンプルは深圳坪山・福田・羅湖三地区のポンプ場および水質浄化厂から採取（1000 µL）。TM-ZCH方式の4-in-1ワンステップ磁気ビード濃縮/抽出プロトコールで前処理し、阻害物除去とウイルス核酸濃縮を実現。',
    method2_title:  'PCR検出',
    method2_body:   '機器：SLAN-96Pリアルタイム蛍光定量PCR装置<br>ターゲット：FAM → ORF1ab · HEX → N遺伝子 · CY5 → IC<br>閾値：Ct &lt; 37（強陽性）/ Ct &lt; 40（弱陽性）',
    method3_title:  'データ品質管理',
    method3_body:   '元データ2,039件 → Ct値なしサンプル除外 → 有効1,123件（55.1%）。ICモニタリング：IC Ct &lt; 40 = 抽出成功。デュアルターゲット交差検証で偽陽性率を抑制。',

    footer: '分析レポート作成 · 2,040件の汚水サンプルPCR核酸検出実験データに基づく · 対象期間：2022年10月–2023年8月 · 深圳市三区汚水疫学サーベイランス研究',

    sec_exp_methods: '⚗️ 実験方法と操作フロー',
    tab_sample: '📦 サンプル採取・調製',
    tab_enrich: '🧲 磁気ビード濃縮抽出',
    tab_pcr:    '🔬 qPCR増幅検出',
    tab_lod:    '✅ 検出下限（LoD）検証',

    exp_sample_h:   'I. 汚水サンプル採取・前処理',
    exp_sample_src: '参考資料：4月30日海狸実験報告書 · 超濾実験論文原稿',
    step1_l:'現地採取',   step1_d:'ポンプ場/浄化厂<br>PE瓶収集<br>氷冷輸送',
    step2_l:'冷蔵保存',   step2_d:'4°C保管<br>凍結融解回避<br>迅速処理',
    step3_l:'遠心前処理', step3_d:'5,000×g<br>30分間遠心<br>上清採取',
    step4_l:'疑似ウイルス接種', step4_d:'内参PMMoV<br>SARS-CoV-2<br>疑似ウイルス標準化',
    step5_l:'濃縮濃縮',   step5_d:'磁気ビード直接法<br>または超濾管法<br>500µL→50µL',
    step6_l:'核酸抽出',   step6_d:'溶解/洗浄<br溶出50-80µL<br>-20°C保存',

    exp_wastewater_h: '汚水サンプルタイプ',
    ww_type1: '進入下水（水処理場流入部）', ww_type2: 'ポンプ場揚水下水（管網遮断）',
    ww_type3: '河川/海水/湖水（環境対照）', ww_type4: '厨房下水/トイレ下水（生活源）',
    ww_type5: '清水（陰性対照）',
    ww_note: '全サンプルは深圳福田・羅湖・坪山三地区にて採取。高圧滅菌PE瓶で収集、氷冷輸送、4°C保管後抽出',

    exp_pseudovirus_h: '疑似ウイルス内部標準体系',
    pv1: 'SARS-CoV-2 疑似ウイルス（主要検出ターゲット）', pv2: 'インフルエンザA疑似ウイルス（H1N1代替）',
    pv3: 'ノロウイルス疑似ウイルス（GI/GII）',        pv4: 'サル痘疑似ウイルス',
    pv5: 'MS2バクテリオファージ（抽出プロセス内参）',         pv6: 'PMMoV ピーマントモットルウイルス（流量規格化内参）',
    pv_note: '疑似ウイルスストック −80°C保管。使用前に段階希釈（1:0.1:0.05:0.025:0.0125）。添加濃度100コピー/mL',

    exp_reagent_h: '実験試薬・消耗材',
    th_cat: 'カテゴリー', th_item: '試薬/消耗材', th_spec: '仕様/説明',
    cat_pcr: 'PCR試薬', spec_pcr_a: '17µL/反応', spec_pcr_b: '3µL/反応（逆転写酵素含む）',
    cat_extract: '抽出試薬',
    item_lysis: '溶解液', spec_lysis: '3.6 mL/サンプル（カオトロピック塩含有）',
    item_protk: 'プロテアーゼK', spec_protk: '20µL/サンプル（タンパク質分解前処理）',
    item_beads: '磁気ビード懸濁液', spec_beads: '20µL/サンプル（SiO₂磁気ビード）',
    item_wash: '洗浄バッファーA/B/C', spec_wash: '各3mL/ウェル',
    item_elut: '溶出バッファー', spec_elut: '50–80µL、90°C加熱3分',
    cat_equip: '機器設備',
    item_extractor: '奕昕自動抽出装置', spec_extractor: '自動磁気ビード移送、24穴ディープウェルプレート',
    item_qpcr: 'SLAN-96P qPCR装置', spec_qpcr: '3チャンネル蛍光検出 FAM/HEX/CY5',
    item_centri: '遠心機', spec_centri: '5,000×g、30分間前処理遠心',

    exp_enrich_h: 'II. 直接磁気ビード濃縮抽出法（中核方式）',
    exp_enrich_src: '参考：検出下限検証報告書（V8）· 海狸実験報告書',
    enrich_s1_l:'サンプル調製', enrich_s1_d:'4×4 mLサンプル<br>15 mL遠心管へ移動',
    enrich_s2_l:'溶解反応', enrich_s2_d:'溶解液追加<br>プロテアーゼK<br>95°C 8分',
    enrich_s3_l:'磁気ビード結合', enrich_s3_d:'磁気ビード懸濁液追加<br>混和・結合<br>核酸吸着',
    enrich_s4_l:'磁気分離', enrich_s4_d:'磁気スタンド2分間<br>上棄去<br>磁気ビード保留',
    enrich_s5_l:'洗浄精製', enrich_s5_d:'洗浄液1×3 mL<br>洗浄液2×3 mL<br>四管合併',
    enrich_s6_l:'溶出回収', enrich_s6_d:'40°C乾燥3分<br>溶出バッファー50-80µL<br>90°C加熱3分',

    enrich_detail_h: '重要操作ポイント',
    enrich_k1: '汚水サンプルは4°C保管、遠心（5,000×g, 30分）で大粒子除去',
    enrich_k2: 'プロテアーゼK前処理によりタンパク質分解、PCR阻害物低減',
    enrich_k3: '磁気ビード-核酸結合後、磁気スタンドで固液分離',
    enrich_k4: '四管合併洗浄：4×4 mLサンプルを50–80µLに濃縮',
    enrich_k5: '最終濃縮倍率約200–320倍、検出感度を大幅向上',
    enrich_k6: '全工程所要時間約2時間（自動）/ 4時間（手動）',

    exp_pcr_h:   'III. リアルタイム蛍光RT-qPCR検出法',
    exp_pcr_src: '参考：海狸4月30日実験報告書',
    pcr_react_h: '反応系調製（20µL総体積）',
    th_component: '成分', th_volume: '添加量 (µL)',
    comp_template: '被験核酸 / 陰性対照 / 陽性対照',
    pcr_react_note: '各ランプに陽性・陰性対照各1管必須。各RNAサンプル技術複製 n = 2',
    pcr_channel_h: '蛍光チャンネル設定',
    th_channel:'チャンネル', th_target:'検出ターゲット', th_dye:'蛍光色素',
    ch_ic: '内部コントロールIC', ch_ref: '参照蛍光',
    pcr_program_h: 'PCR温度プログラム',
    th_step:'ステップ', th_stage:'フェーズ', th_temp:'温度', th_time:'時間', th_cycle:'サイクル数',
    prog_rt:'逆転写反応', prog_act:'Taq酵素活性化', prog_den:'変性', prog_ann:'アニーリング/伸長 + 蛍光取得',
    pcr_interpret_h: '結果判定基準',
    th_verdict: '判定結果',
    verdict_pos:'陽性', verdict_suspect:'要再検（再検）', verdict_retest:'抽出異常、再測定',
    verdict_neg:'陰性', verdict_invalid:'増幅異常、再測定',

    exp_lod_h:   'IV. 検出下限（LoD）検証試験',
    exp_lod_src: '参考：検出下限検証報告V8（深圳市第二人民病院 · 2023年12月）',
    lod_design_h: '検証実験デザイン',
    lod_d1:'検出対象：SARS-CoV-2疑似ウイルス核酸標準サンプル',
    lod_d2:'添加濃度：100 コピー/mL（ベースライン）',
    lod_d3:'希釈シリーズ：1 : 0.1 : 0.05 : 0.025 : 0.0125',
    lod_d4:'対応濃度：100, 10, 5, 2.5, 1.25 コピー/mL',
    lod_d5:'各サンプル50 mL、計6件の検証サンプル',
    lod_d6:'技術複製：各RNAサンプル n = 2',
    lod_d7:'背景対照：陰性汚水サンプル',
    lod_result_h: '検証結果',
    lod_result_body: '開発手法により汚水中で希釈後期待濃度<b>1.25–5 コピー/mL</b>範囲のウイルスシグナルを検出可能。ユニバーサル抽出キットとの比較で、本手法は低いCt値（高感度）を達成。回収率算出式：<code style="background:#e8f0f8;padding:1px 4px;border-radius:3px;">V1/V2 × 2^(CT2−CT1) × 100%</code>',
    lod_conclusion_h:'検証結論：',
    lod_conclusion_body:'深圳市第二人民病院チームが開発した直接磁気ビード抽出法は検出下限<b>10 コピー/mL</b>を達成し、実際には<b>1.25 コピー/mL</b>までの濃度ウイルス核酸シグナルを検出可能。核酸回収率 > 87%、市販キットを有意に上回る。第三者検証済み、汚水疫学サーベイランスへの技術的適用性を確認。',

    // 地図モジュール
    sec_map:           '深圳三区WBE陽性率地理ヒートマップ',
    map_metric_label:  '表示指標：',
    map_metric_dual:   'デュアルターゲット陽性率',
    map_metric_n:      'N遺伝子陽性率',
    map_metric_ic:     'IC通過率',
    map_drag_hint:     '下記スライダーで月切り替え',
    map_loading:       '地理データを読み込み中...',
    map_play:          '▶ 再生',
    map_pause:         '⏸ 一時停止',
    map_reset:         '↺ リセット',
    map_legend_title:  'デュアルターゲット陽性率 カラーレジェンド',
    map_legend_dual:   'デュアルターゲット陽性率 カラーレジェンド',
    map_legend_n:      'N遺伝子陽性率 カラーレジェンド',
    map_legend_ic:     'IC通過率 カラーレジェンド',
    map_no_data:       'データなし',
    map_dual_tip:      'デュアルターゲット陽性率',
    map_npos_tip:      'N遺伝子陽性率',
    map_ic_tip:        'IC通過率',
    map_click_hint:    'クリックで詳細',
    map_click_outside: '外側をクリックで閉じる',
    map_zoom_hint:     'スクロールでズーム · ドラッグで移動 · ダブルクリックでリセット',

    // チャートラベル
    lbl_n_pos:    'N遺伝子陽性率(%)',
    lbl_o_pos:    'ORF1ab陽性率(%)',
    lbl_dual_pos: 'デュアルターゲット陽性率(%)',
    lbl_ic_pass:  'IC通過率(%)',
    lbl_samples:  'サンプル数',
    lbl_regions:  ['福田区','羅湖区','坪山区'],
    lbl_rbar_cats:['N陽性(Ct<37)','ORF1ab陽性(Ct<37)','デュアル(Ct<37)','IC通過率'],
    lbl_donut:    ['高度陽性(デュアルCt<37)','中度陽性(単一Ct<37)','低陽性(Ct 37-40)','陰性','IC失敗'],
    lbl_hist:     'N遺伝子Ct値度数',
    lbl_scatter1: '陽性サンプル（N vs ORF1ab）',
    lbl_scatter2: '参照線（y=x）',
    lbl_xct:      'N遺伝子Ct値',
    lbl_yct:      'ORF1ab Ct値',
    lbl_pie_unit: ' 件',
    risk_high:    '高リスク', risk_med: '中リスク', risk_low: '低リスク',
    site_regions: { '福田区':'福田区', '羅湖区':'羅湖区', '坪山区':'坪山区' },
    site_names: [
      '浜河水質浄化厂','福田保税区ポンプ場','黄岡街道','蛇口水質浄化厂','竹韻花園',
      '蓮塘尾ポンプ場','石廈ポンプ場','漁民村','福田水質浄化厂','皇崗村截汚ポンプ場',
      '福星ポンプ場','上沙椰樹村','創業路汚水泵場','中心公園','羅湖村'
    ],

    // ===== 超濾管法（対比方式）=====
    enrich_ultra_h: '超濾管濃縮法（対比方式）',
    ultra1: '美正濃縮器付属超濃縮管',
    ultra2: '500 mL洗液に浸漬、注射器で繰り返し吸引してウイルスを濃縮',
    ultra3: '溶出：底部を溶出液に浸し、20回吸引',
    ultra4: 'プロテアーゼ処理インキュベーション時間最適化：10/20/30分',
    ultra5: 'PBSバッファーでプロテアーゼ活性補助',
    ultra_note: '磁気ビード法との比較：超濾管法は大容量サンプル（500 mL）に適用、磁気ビード法は小容量（16 mL）に適用。両方式は相互に補完し異なるシナリオをカバー',

    // ===== 4-in-1 四合一方式（イノベーション）=====
    enrich_4in1_h: '奕昕 4in1 四合一プロトコール（イノベーション）',
    enrich_4in1_body: '標準抽出工程の第4ステップ（5穴プレート）にてプログラムを一時停止、4穴の磁気ビード含有溶液を第4穴に合併し十分に濃縮後、プロトコールを再開',
    '4in1_1': '磁気ビード量：20 µL；プロテアーゼK：20 µL',
    '4in1_2': '溶解液：3.6 mL；サンプル：4 mL / 穴',
    '4in1_3': '四穴合一：16 mLサンプルと等価処理',
    '4in1_4': 'ユニバーサル試薬対比で検出下限約4倍向上',

    // ===== 方法比較 =====
    enrich_compare_h: '方法比較',
    cmp_method:'方法', cmp_vol:'処理量', cmp_time:'所要時間',
    cmp_m1:'磁気ビード直接法', cmp_m2:'超濾管法', cmp_m3:'4in1統合法', cmp_m4:'キアゲンキット',

    // ===== PCR詳細 =====
    pcr_limit_h: '検出方法の制約事項',
    pcr_comp_a: '2019-nCoV PCR反応液 A',
    pcr_comp_b: '2019-nCoV PCR反応液 B（逆転写酵素含む）',
    pcr_target_orf: 'ORF1ab 遺伝子',
    pcr_target_n: 'N 遺伝子',
    pcr_th_famvic: 'FAM/VIC チャンネル (ORF1ab / N)',
    pcr_th_cy5: 'CY5 チャンネル (IC)',
    pcr_cond1: 'Ct < 37',
    pcr_cond2: '37 ≦ Ct < 40',
    pcr_cond3: 'Ct ≧ 40 または増幅なし',
    pcr_cond_ic1: 'Ct < 37 または増幅なし',
    pcr_cond_ic2: 'Ct < 37',
    pcr_cond_ic3: 'Ct > 37 または増幅なし',
    limit1:'キットは指定サンプルタイプ（汚水マトリックス）に限定',
    limit2:'不適切な採取/輸送/保存は偽陰性の原因となり得る',
    limit3:'操作中の交差汚染は偽陽性の原因となり得る',
    limit4:'LoD未満（< 10 コピー/mL）のサンプルは検出不可の場合あり',
    limit5:'汚水マトリックス中のPCR阻害物はIC失敗（Ct > 40）の原因',

    // ===== LoD検証詳細 =====
    lod_compare_h: '対比検証方案',
    lod_c1:'方案 A：ユニバーサル磁気ビード核酸抽出キット（業界参照）',
    lod_c2:'方案 B：プロジェクト開発磁気ビード直接抽出法',
    lod_c3:'両グループ抽出後ユニバーサル蛍光定量PCRで検出',
    lod_c4:'検出体積：16 mL / 件（4×4 mL）',
    lod_c5:'委託単位：深圳市第二人民病院',
    lod_c6:'検証日時：2023年12月8–11日',
    lod_chip1:'最低検出下限<br>コピー/mL', lod_chip2:'核酸平均<br>回収率', lod_chip3:'自動化抽出<br>全工程所要時間', lod_chip4:'手動抽出<br>全工程所要時間',
    lod_ct_h: '📊 検証実験Ct値結果（サンプル期待濃度 vs N遺伝子Ct）',
    th_sample_type:'サンプルタイプ', th_conc:'核酸濃度 (コピー/mL)', th_n_ct:'N遺伝子Ct値', th_ic_ct:'ICCt値', th_result:'検出結果',
    samp_pos:'SARS-CoV-2疑似ウイルス陽性汚水', samp_neg:'陰性背景汚水',
    res_pos:'陽性', res_pos2:'陽性', res_pos3:'陽性', res_borderline:'検出（境界値）', res_detect:'弱検出', res_neg:'陰性',
    ct_none:'増幅なし',
  }
};

// ============================================================
//  当前语言
// ============================================================
// ── 语言初始化（DOM 就绪後执行，防止 body 未解析导致 classList 失败 ──
(function initLang() {
  window.currentLang = 'en';
  // 等待 body 解析完成（DOMContentLoaded 触发前 polling）
  function tryInit() {
    if (document.body) {
      applyI18n('en'); // 翻译所有 data-i18n 元素为英文
      document.body.classList.add('i18n-ready'); // 显示页面
    } else {
      setTimeout(tryInit, 10);
    }
  }
  tryInit();
})();

// ============================================================
//  图表实例
// ============================================================
const charts = {};

// ============================================================
//  数据（固定）
// ============================================================
const months = ['2022-10','2022-11','2022-12','2023-01','2023-02','2023-03','2023-04','2023-05','2023-06','2023-07','2023-08'];
const sampleCounts = [31,44,37,97,49,209,552,32,27,31,10];
const nPosRate     = [58.06,63.64,43.24,47.42,40.82,19.62,25.91,56.25,100,100,50];
const oPosRate     = [38.71,27.27,43.24,35.05,18.37,15.31,16.67,0,11.11,3.23,0];
const dualPosRate  = [38.71,20.45,32.43,24.74,10.20,9.09,15.94,0,11.11,3.23,0];
const icPassRate   = [70.97,63.64,64.86,64.95,65.31,55.02,90.22,37.5,33.33,38.71,80];
const ctBins = ['<20','20-25','25-30','30-32','32-34','34-36','36-38','38-40','40-42','>42'];
const ctCounts = [8,15,28,42,118,156,184,102,32,10];
const corrData = [
  {x:32.89,y:35.12},{x:32.25,y:35.17},{x:36.79,y:35.73},{x:37.02,y:35.41},
  {x:36.53,y:36.50},{x:37.27,y:36.07},{x:37.15,y:37.55},{x:38.20,y:39.21},
  {x:37.33,y:39.28},{x:37.11,y:37.72},{x:35.48,y:36.23},{x:34.73,y:35.12},
  {x:36.57,y:35.84},{x:38.20,y:38.90},{x:33.10,y:33.80},{x:32.50,y:32.90},
  {x:34.20,y:35.10},{x:36.80,y:37.20},{x:35.10,y:35.60},{x:37.50,y:38.10},
  {x:33.80,y:34.20},{x:39.10,y:39.50},{x:34.50,y:35.20},{x:36.20,y:36.80},
  {x:32.90,y:33.40},{x:37.80,y:38.20},{x:35.90,y:36.40},{x:38.50,y:38.90},
  {x:34.10,y:34.70},{x:36.60,y:37.10},{x:33.50,y:34.10},{x:37.20,y:37.80},
  {x:35.30,y:35.90},{x:38.10,y:38.60},{x:34.80,y:35.40},{x:36.90,y:37.50},
];
const siteData = [
  {nameZH:'滨河水质净化厂', regionKey:'罗湖区', n:55,  nr:43.6, or:27.3, dr:21.82, nc:34.0, oc:34.6},
  {nameZH:'福田保税区泵房', regionKey:'罗湖区', n:53,  nr:49.1, or:20.8, dr:20.75, nc:34.2, oc:36.2},
  {nameZH:'黄冈街道',      regionKey:'罗湖区', n:55,  nr:40.0, or:27.3, dr:20.00, nc:33.6, oc:33.1},
  {nameZH:'蛇口水质净化厂', regionKey:'坪山区', n:10,  nr:20.0, or:30.0, dr:20.00, nc:38.1, oc:37.4},
  {nameZH:'竹韵花园',      regionKey:'坪山区', n:9,   nr:22.2, or:22.2, dr:22.22, nc:36.3, oc:36.2},
  {nameZH:'莲塘尾泵站',    regionKey:'罗湖区', n:54,  nr:48.1, or:18.5, dr:18.52, nc:32.0, oc:31.5},
  {nameZH:'石厦泵站',      regionKey:'罗湖区', n:55,  nr:41.8, or:20.0, dr:18.18, nc:33.9, oc:32.8},
  {nameZH:'渔民村',        regionKey:'福田区', n:113, nr:33.6, or:16.8, dr:15.93, nc:35.9, oc:35.0},
  {nameZH:'福田水质净化厂', regionKey:'罗湖区', n:59,  nr:42.4, or:20.3, dr:15.25, nc:34.9, oc:32.8},
  {nameZH:'皇岗村截污泵站', regionKey:'福田区', n:114, nr:34.2, or:14.9, dr:14.91, nc:35.5, oc:35.5},
  {nameZH:'福星泵站',      regionKey:'福田区', n:115, nr:32.2, or:19.1, dr:14.78, nc:36.4, oc:35.0},
  {nameZH:'上沙椰树村',    regionKey:'福田区', n:52,  nr:42.3, or:19.2, dr:13.46, nc:33.3, oc:31.9},
  {nameZH:'创业路污水泵站', regionKey:'福田区', n:105, nr:31.4, or:16.2, dr:13.33, nc:35.6, oc:35.1},
  {nameZH:'中心公园',      regionKey:'罗湖区', n:55,  nr:32.7, or:18.2, dr:12.73, nc:35.0, oc:35.7},
  {nameZH:'罗湖村',        regionKey:'福田区', n:114, nr:27.2, or:14.0, dr:12.28, nc:36.7, oc:36.0},
];

// ============================================================
//  DOM 文本更新
// ============================================================
function applyI18n(lang) {
  var t = I18N[lang];
  if (!t) { console.warn('Missing I18N for lang:', lang); return; }
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  if (lang === 'zh') document.documentElement.lang = 'zh-CN';
  else if (lang === 'ja') document.documentElement.lang = 'ja';
  else document.documentElement.lang = 'en';
  if (lang === 'zh')
    document.title = '深圳市污水流行病学新冠核酸检测 — 数据分析报告';
  else if (lang === 'ja')
    document.title = '深圳都市下水疫学 SARS-CoV-2 qPCR データ分析レポート';
  else
    document.title = 'Shenzhen WBE SARS-CoV-2 qPCR Data Analysis Report';
}

// ============================================================
//  图表标签更新
// ============================================================
function updateCharts(lang) {
  const t = I18N[lang];

  // 趋势图
  charts.trend.data.datasets[0].label = t.lbl_n_pos;
  charts.trend.data.datasets[1].label = t.lbl_o_pos;
  charts.trend.data.datasets[2].label = t.lbl_dual_pos;
  charts.trend.data.datasets[3].label = t.lbl_ic_pass;
  charts.trend.update();

  // 样本量柱图
  charts.sampleCount.data.datasets[0].label = t.lbl_samples;
  charts.sampleCount.update();

  // 地区饼图
  charts.regionPie.data.labels = t.lbl_regions;
  charts.regionPie.options.plugins.tooltip.callbacks.label =
    ctx => `${ctx.label}: ${ctx.raw}${t.lbl_pie_unit} (${(ctx.raw/1123*100).toFixed(1)}%)`;
  charts.regionPie.update();

  // 地区柱图
  charts.regionBar.data.labels = t.lbl_rbar_cats;
  charts.regionBar.data.datasets[0].label = t.lbl_regions[0];
  charts.regionBar.data.datasets[1].label = t.lbl_regions[1];
  charts.regionBar.data.datasets[2].label = t.lbl_regions[2];
  charts.regionBar.update();

  // 地区交叉折线
  charts.cross.data.datasets[0].label = t.lbl_regions[0];
  charts.cross.data.datasets[1].label = t.lbl_regions[1];
  charts.cross.data.datasets[2].label = t.lbl_regions[2];
  charts.cross.update();

  // Ct直方图
  charts.ctHist.data.datasets[0].label = t.lbl_hist;
  charts.ctHist.update();

  // 相关性散点
  charts.scatter.data.datasets[0].label = t.lbl_scatter1;
  charts.scatter.data.datasets[1].label = t.lbl_scatter2;
  charts.scatter.options.scales.x.title.text = t.lbl_xct;
  charts.scatter.options.scales.y.title.text = t.lbl_yct;
  charts.scatter.update();

  // 分类甜甜圈
  charts.donut.data.labels = t.lbl_donut;
  charts.donut.update();

  // 采样点表格
  renderSiteTable(lang);
}

// ============================================================
//  采样点表格渲染
// ============================================================
function renderSiteTable(lang) {
  const t = I18N[lang];
  const tbody = document.getElementById('siteTableBody');
  tbody.innerHTML = '';
  siteData.forEach((d, i) => {
    const name   = t.site_names[i] || d.nameZH;
    const region = t.site_regions[d.regionKey] || d.regionKey;
    const riskBadge = d.dr >= 20
      ? `<span class="badge badge-high">${t.risk_high}</span>`
      : d.dr >= 15
        ? `<span class="badge badge-med">${t.risk_med}</span>`
        : `<span class="badge badge-low">${t.risk_low}</span>`;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><b>${name}</b></td>
      <td>${region}</td>
      <td>${d.n}</td>
      <td>${d.nr.toFixed(1)}%</td>
      <td>${d.or.toFixed(1)}%</td>
      <td>${d.dr.toFixed(2)}%</td>
      <td>${d.nc.toFixed(1)}</td>
      <td>${d.oc.toFixed(1)}</td>
      <td>${riskBadge}</td>`;
    tbody.appendChild(tr);
  });
}

// ============================================================
//  夜间模式切换
// ============================================================
function toggleDark() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  if (isDark) {
    html.removeAttribute('data-theme');
    document.getElementById('btnDark').textContent = '🌙';
    localStorage.setItem('report-theme', 'light');
    resetChartColors('light');
  } else {
    html.setAttribute('data-theme', 'dark');
    document.getElementById('btnDark').textContent = '☀️';
    localStorage.setItem('report-theme', 'dark');
    resetChartColors('dark');
  }
}

function resetChartColors(theme) {
  if (typeof charts === 'undefined') return;
  const isDark = theme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)';
  const tickColor = isDark ? '#8b90a8' : '#6b7280';
  const legendColor = isDark ? '#c8cce0' : '#333344';
  Object.values(charts).forEach(function(chart) {
    if (!chart || !chart.options || !chart.options.scales) return;
    ['x','y','x1','y1'].forEach(function(axis) {
      if (chart.options.scales[axis]) {
        if (chart.options.scales[axis].grid) chart.options.scales[axis].grid.color = gridColor;
        if (chart.options.scales[axis].ticks) chart.options.scales[axis].ticks.color = tickColor;
      }
    });
    if (chart.options.plugins && chart.options.plugins.legend &&
        chart.options.plugins.legend.labels) {
      chart.options.plugins.legend.labels.color = legendColor;
    }
    chart.update('none');
  });
}

// Apply saved preference on load
(function() {
  const saved = localStorage.getItem('report-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('btnDark').textContent = '☀️';
  }
})();

// ============================================================
//  语言切换入口
// ============================================================
function setLang(lang) {
  window.currentLang = lang;
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnZH').classList.toggle('active', lang === 'zh');
  document.getElementById('btnJA').classList.toggle('active', lang === 'ja');
  applyI18n(lang);
  updateCharts(lang);
  updateMethodTabBtns(lang);
  // 地图模块语言同步
  var slider = document.getElementById('mapSlider');
  if (slider) updateMap(parseInt(slider.value));
}

// ============================================================
//  实验方法 Tab 切换
// ============================================================
let currentTab = 'tab-sample';
function switchTab(tabId) {
  document.querySelectorAll('.method-tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  const btnId = 'tabBtn-' + tabId.replace('tab-', '');
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('active');
  currentTab = tabId;
}
function updateMethodTabBtns(lang) {
  // Tab button text is handled by data-i18n via applyI18n, nothing extra needed
}

// ============================================================
//  初始化图表
// ============================================================
const fontDef = { family: "'Times New Roman','Microsoft YaHei','PingFang SC',sans-serif", size: 11 };
Chart.defaults.font = fontDef;
Chart.defaults.plugins.legend.labels.font = fontDef;
const t0 = I18N.en; // 图表默认英文，确保页面首次可见时即为英文

// 1. 趋势折线
charts.trend = new Chart(document.getElementById('trendChart'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      { label:t0.lbl_n_pos,    data:nPosRate,    borderColor:'#1a7abf', backgroundColor:'rgba(26,122,191,.08)', tension:.35, pointRadius:4, borderWidth:2.5, fill:true },
      { label:t0.lbl_o_pos,    data:oPosRate,    borderColor:'#f39c12', backgroundColor:'rgba(243,156,18,.06)', tension:.35, pointRadius:4, borderWidth:2.5, fill:true },
      { label:t0.lbl_dual_pos, data:dualPosRate, borderColor:'#e74c3c', backgroundColor:'rgba(231,76,60,.08)', tension:.35, pointRadius:5, borderWidth:3, fill:true },
      { label:t0.lbl_ic_pass,  data:icPassRate,  borderColor:'#27ae60', tension:.35, pointRadius:3, borderWidth:1.5, borderDash:[4,3] },
    ]
  },
  options:{
    responsive:true, maintainAspectRatio:false,
    interaction:{ mode:'index', intersect:false },
    scales:{ y:{beginAtZero:true,max:110,ticks:{callback:v=>v+'%'},grid:{color:'#eee'}}, x:{grid:{display:false}} },
    plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,padding:10} } }
  }
});

// 2. 样本量柱图
charts.sampleCount = new Chart(document.getElementById('sampleCountChart'), {
  type:'bar',
  data:{
    labels:months,
    datasets:[{ label:t0.lbl_samples, data:sampleCounts,
      backgroundColor:sampleCounts.map(v=>v>200?'#0f4c81':v>50?'#1a7abf':'#a8d4f5'),
      borderRadius:4, borderSkipped:false }]
  },
  options:{ responsive:true, maintainAspectRatio:false,
    scales:{ y:{beginAtZero:true,grid:{color:'#eee'}}, x:{grid:{display:false}} },
    plugins:{ legend:{display:false} } }
});

// 3. 地区饼图
charts.regionPie = new Chart(document.getElementById('regionPieChart'), {
  type:'doughnut',
  data:{ labels:t0.lbl_regions, datasets:[{ data:[561,492,70],
      backgroundColor:['#1a7abf','#e74c3c','#27ae60'],
      borderWidth:2, borderColor:'#fff', hoverOffset:6 }] },
  options:{ responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,padding:10} },
      tooltip:{ callbacks:{ label:ctx=>`${ctx.label}: ${ctx.raw}${t0.lbl_pie_unit} (${(ctx.raw/1123*100).toFixed(1)}%)` } } } }
});

// 4. 地区阳性率柱图
charts.regionBar = new Chart(document.getElementById('regionBarChart'), {
  type:'bar',
  data:{ labels:t0.lbl_rbar_cats,
    datasets:[
      { label:t0.lbl_regions[0], data:[34.58,19.07,17.11,82.71], backgroundColor:'rgba(26,122,191,.8)', borderRadius:3 },
      { label:t0.lbl_regions[1], data:[41.67,21.14,17.28,67.68], backgroundColor:'rgba(231,76,60,.8)',  borderRadius:3 },
      { label:t0.lbl_regions[2], data:[14.29,22.86,11.43,61.43], backgroundColor:'rgba(39,174,96,.8)',  borderRadius:3 },
    ] },
  options:{ responsive:true, maintainAspectRatio:false,
    scales:{ x:{grid:{display:false}}, y:{beginAtZero:true,ticks:{callback:v=>v+'%'},grid:{color:'#eee'}} },
    plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,padding:8} } } }
});

// 5. 地区×时间折线
charts.cross = new Chart(document.getElementById('crossChart'), {
  type:'line',
  data:{ labels:months,
    datasets:[
      { label:t0.lbl_regions[0], data:[35.29,28.00,11.11,37.04,16.67,11.24,11.63,0,null,null,null],
        borderColor:'#1a7abf', backgroundColor:'rgba(26,122,191,.1)', tension:.3, pointRadius:4, fill:true },
      { label:t0.lbl_regions[1], data:[42.86,10.53,39.29,22.22,4.00,9.57,24.08,0,11.11,3.23,0],
        borderColor:'#e74c3c', backgroundColor:'rgba(231,76,60,.1)', tension:.3, pointRadius:4, fill:true },
      { label:t0.lbl_regions[2], data:[null,null,null,18.60,null,0,null,null,null,null,null],
        borderColor:'#27ae60', backgroundColor:'rgba(39,174,96,.1)', tension:.3, pointRadius:6 },
    ] },
  options:{ responsive:true, maintainAspectRatio:false,
    scales:{ y:{beginAtZero:true,max:55,ticks:{callback:v=>v+'%'},grid:{color:'#eee'}}, x:{grid:{display:false}} },
    plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,padding:8} } }, spanGaps:false }
});

// 6. Ct频次直方图
charts.ctHist = new Chart(document.getElementById('ctHistN'), {
  type:'bar',
  data:{ labels:ctBins, datasets:[{
    label:t0.lbl_hist, data:ctCounts,
    backgroundColor:ctCounts.map((_,i)=>i<3?'rgba(231,76,60,.85)':i<5?'rgba(243,156,18,.85)':i<7?'rgba(26,122,191,.85)':'rgba(127,140,141,.7)'),
    borderRadius:3, borderSkipped:false }] },
  options:{ responsive:true, maintainAspectRatio:false,
    scales:{ y:{beginAtZero:true,grid:{color:'#eee'}}, x:{grid:{display:false}} },
    plugins:{ legend:{display:false} } }
});

// 7. 散点图
charts.scatter = new Chart(document.getElementById('corrScatter'), {
  type:'scatter',
  data:{ datasets:[
    { label:t0.lbl_scatter1, data:corrData, backgroundColor:'rgba(26,122,191,.6)', pointRadius:5, pointHoverRadius:7 },
    { label:t0.lbl_scatter2, data:[{x:28,y:28},{x:44,y:44}],
      type:'line', borderColor:'#e74c3c', borderDash:[5,4], borderWidth:1.5, pointRadius:0, fill:false }
  ] },
  options:{ responsive:true, maintainAspectRatio:false,
    scales:{
      x:{ min:28,max:44, title:{display:true,text:t0.lbl_xct}, grid:{color:'#eee'} },
      y:{ min:28,max:44, title:{display:true,text:t0.lbl_yct}, grid:{color:'#eee'} }
    },
    plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,padding:8} },
      tooltip:{ callbacks:{ label:ctx=>`N=${ctx.parsed.x.toFixed(2)}, ORF1ab=${ctx.parsed.y.toFixed(2)}` } } } }
});

// 8. 分类甜甜圈
charts.donut = new Chart(document.getElementById('classDonut'), {
  type:'doughnut',
  data:{ labels:t0.lbl_donut,
    datasets:[{ data:[173,160,116,377,297],
      backgroundColor:['#e74c3c','#f39c12','#27ae60','#bdc3c7','#9b59b6'],
      borderWidth:2, borderColor:'#fff', hoverOffset:8 }] },
  options:{ responsive:true, maintainAspectRatio:false, cutout:'58%',
    plugins:{ legend:{ position:'bottom', labels:{boxWidth:11,padding:8,font:{size:10}} },
      tooltip:{ callbacks:{ label:ctx=>`${ctx.label}: ${ctx.raw} (${(ctx.raw/1123*100).toFixed(1)}%)` } } } }
});


// 初始渲染表格（默认英文）
renderSiteTable('en');


// ════════════════════════════════════════════════════════════
//  GEO MAP MODULE — Pure Canvas (no external tile dependency)
// ════════════════════════════════════════════════════════════

// 内嵌深圳9区 GeoJSON（来自 geo.datav.aliyun.com，已下载到本地）
const SZ_GEOJSON = `{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":440303,"name":"罗湖区","center":[114.123885,22.555341],"centroid":[114.148158,22.57487],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":0,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.105173,22.531628],[114.10791,22.532322],[114.112216,22.531684],[114.113768,22.53384],[114.114838,22.532802],[114.114592,22.52861],[114.115636,22.52732],[114.117609,22.526975],[114.120223,22.528233],[114.122073,22.531493],[114.125064,22.53221],[114.127564,22.535368],[114.130475,22.537003],[114.132659,22.536895],[114.13422,22.537748],[114.135106,22.538847],[114.136755,22.539159],[114.139403,22.53881],[114.142061,22.540593],[114.143026,22.540779],[114.146253,22.540086],[114.147121,22.539317],[114.149165,22.539303],[114.150129,22.538484],[114.153138,22.539112],[114.153471,22.541306],[114.155304,22.543332],[114.156505,22.543695],[114.156725,22.544985],[114.15583,22.544212],[114.15483,22.544468],[114.154611,22.54593],[114.155076,22.548007],[114.156584,22.548599],[114.156874,22.551621],[114.157672,22.552072],[114.159926,22.552031],[114.161075,22.552627],[114.163416,22.55618],[114.165591,22.55889],[114.166679,22.559095],[114.168187,22.556575],[114.170582,22.55672],[114.172318,22.558466],[114.173967,22.558378],[114.17551,22.556897],[114.178238,22.556841],[114.180948,22.557269],[114.182316,22.556776],[114.182711,22.552799],[114.185921,22.551318],[114.186798,22.552673],[114.191718,22.55197],[114.193112,22.552617],[114.194138,22.551644],[114.195506,22.551812],[114.197225,22.553008],[114.199383,22.552822],[114.200523,22.553139],[114.201356,22.554256],[114.202882,22.553903],[114.2034,22.556119],[114.204277,22.556603],[114.206943,22.559509],[114.207066,22.562024],[114.203786,22.567844],[114.203759,22.569948],[114.205829,22.571131],[114.207513,22.572574],[114.211609,22.573799],[114.214003,22.57386],[114.217432,22.575163],[114.219967,22.578176],[114.218949,22.580215],[114.218765,22.581919],[114.219528,22.584582],[114.219019,22.588916],[114.217757,22.59008],[114.216722,22.592459],[114.213678,22.596071],[114.214082,22.598292],[114.213845,22.599288],[114.212643,22.599633],[114.209513,22.598771],[114.206969,22.601653],[114.205452,22.601956],[114.203154,22.601183],[114.198865,22.60304],[114.198699,22.604842],[114.199243,22.606373],[114.200199,22.607034],[114.199883,22.609092],[114.196857,22.613295],[114.192402,22.61619],[114.18878,22.61524],[114.184763,22.615287],[114.183193,22.61491],[114.181632,22.61599],[114.177177,22.615589],[114.17601,22.614286],[114.17516,22.612192],[114.172669,22.610358],[114.170634,22.610246],[114.166933,22.609287],[114.16346,22.606382],[114.161636,22.60527],[114.161575,22.604488],[114.159943,22.601388],[114.154251,22.60143],[114.150261,22.599344],[114.146007,22.595499],[114.145955,22.592813],[114.144297,22.591267],[114.141938,22.591244],[114.139991,22.590331],[114.13907,22.588749],[114.135281,22.588106],[114.133878,22.589163],[114.130826,22.586695],[114.12987,22.588306],[114.128704,22.588944],[114.124792,22.58866],[114.123722,22.587729],[114.123468,22.58893],[114.122205,22.589009],[114.121723,22.590667],[114.119556,22.589982],[114.117443,22.591253],[114.114128,22.590494],[114.112216,22.589466],[114.108024,22.589014],[114.107489,22.588195],[114.105998,22.588302],[114.105743,22.589396],[114.102244,22.592212],[114.100367,22.592808],[114.099543,22.594177],[114.096736,22.597389],[114.093412,22.600149],[114.091474,22.599907],[114.089668,22.598511],[114.089054,22.599069],[114.085265,22.600969],[114.082879,22.601197],[114.08116,22.600857],[114.077293,22.598069],[114.075328,22.598096],[114.075363,22.59636],[114.076477,22.594279],[114.073609,22.592417],[114.071592,22.592748],[114.070785,22.591519],[114.068391,22.589549],[114.067795,22.588218],[114.066426,22.587766],[114.066304,22.585671],[114.069005,22.581216],[114.070522,22.579987],[114.07225,22.579181],[114.074399,22.576132],[114.074425,22.575303],[114.075942,22.572467],[114.077284,22.571168],[114.077968,22.569436],[114.079099,22.568519],[114.082625,22.570186],[114.084616,22.570302],[114.088001,22.569557],[114.090159,22.567639],[114.092237,22.564463],[114.093193,22.564328],[114.096833,22.56491],[114.101604,22.566261],[114.104524,22.567872],[114.104559,22.555933],[114.104279,22.555435],[114.104586,22.546033],[114.104805,22.532513],[114.105173,22.531628]]]]}},{"type":"Feature","properties":{"adcode":440304,"name":"福田区","center":[114.05096,22.541009],"centroid":[114.046594,22.543431],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":1,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.066304,22.585671],[114.06212,22.586477],[114.059393,22.587533],[114.057709,22.586393],[114.054639,22.58529],[114.053745,22.584624],[114.053534,22.582235],[114.052561,22.581747],[114.047518,22.582408],[114.045317,22.584163],[114.041098,22.583907],[114.038204,22.582971],[114.034301,22.582626],[114.03032,22.580564],[114.028066,22.581458],[114.023514,22.581649],[114.022154,22.580289],[114.018866,22.579074],[114.014875,22.579554],[114.009464,22.57886],[114.005272,22.57514],[114.005017,22.571443],[114.005421,22.568235],[114.004061,22.56627],[114.003342,22.563183],[114.003939,22.560478],[114.005386,22.558312],[114.0055,22.556343],[114.002895,22.555775],[114.001202,22.555788],[113.99758,22.554946],[113.998422,22.553879],[113.998168,22.552086],[113.998852,22.55014],[113.999878,22.549744],[113.999562,22.548957],[113.997729,22.54864],[113.99623,22.546792],[113.997203,22.545008],[113.996703,22.543304],[113.996721,22.538633],[113.99787,22.532396],[113.99544,22.53296],[113.996151,22.53207],[113.995484,22.530533],[113.994353,22.530566],[113.9933,22.527678],[113.994388,22.521926],[113.990547,22.520482],[113.990748,22.510584],[114.010551,22.510249],[114.024049,22.509806],[114.025163,22.509331],[114.0291,22.505265],[114.030898,22.504277],[114.036967,22.503364],[114.042107,22.502791],[114.046009,22.502185],[114.050587,22.501193],[114.053789,22.499889],[114.057077,22.499623],[114.05998,22.500727],[114.062322,22.502824],[114.06298,22.507827],[114.064602,22.510547],[114.069119,22.51378],[114.077003,22.515484],[114.079205,22.514394],[114.080301,22.512997],[114.081573,22.512424],[114.084291,22.513388],[114.087642,22.515899],[114.090299,22.51943],[114.090343,22.520995],[114.088177,22.522932],[114.085949,22.523878],[114.083485,22.526113],[114.08402,22.527553],[114.085686,22.528414],[114.088256,22.528712],[114.090352,22.529318],[114.091246,22.530068],[114.092904,22.532545],[114.094114,22.53357],[114.097245,22.534404],[114.100148,22.532192],[114.101946,22.531241],[114.105173,22.531628],[114.104805,22.532513],[114.104586,22.546033],[114.104279,22.555435],[114.104559,22.555933],[114.104524,22.567872],[114.101604,22.566261],[114.096833,22.56491],[114.093193,22.564328],[114.092237,22.564463],[114.090159,22.567639],[114.088001,22.569557],[114.084616,22.570302],[114.082625,22.570186],[114.079099,22.568519],[114.077968,22.569436],[114.077284,22.571168],[114.075942,22.572467],[114.074425,22.575303],[114.074399,22.576132],[114.07225,22.579181],[114.070522,22.579987],[114.069005,22.581216],[114.066304,22.585671]]]]}},{"type":"Feature","properties":{"adcode":440305,"name":"南山区","center":[113.92943,22.531221],"centroid":[113.94053,22.545584],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":2,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.023514,22.581649],[114.023944,22.582408],[114.025215,22.587389],[114.026417,22.590285],[114.02604,22.591938],[114.0239,22.593348],[114.023207,22.595145],[114.023645,22.597156],[114.023181,22.599945],[114.0219,22.602356],[114.020839,22.601862],[114.016656,22.602626],[114.015752,22.604353],[114.014366,22.605731],[114.012858,22.606219],[114.009297,22.611084],[114.008797,22.615906],[114.006815,22.619113],[114.005552,22.619094],[114.004316,22.620244],[114.003939,22.621496],[114.002807,22.622222],[114.001737,22.625717],[113.999203,22.625094],[113.996563,22.626634],[113.994853,22.626509],[113.993774,22.625834],[113.99245,22.629799],[113.992406,22.631214],[113.991222,22.631949],[113.989985,22.634044],[113.98888,22.634984],[113.98596,22.63645],[113.983618,22.636412],[113.982118,22.637297],[113.978452,22.636976],[113.97619,22.637283],[113.974734,22.636124],[113.971471,22.638311],[113.970042,22.640536],[113.967455,22.640419],[113.96663,22.640838],[113.966727,22.642337],[113.968735,22.644282],[113.967849,22.648884],[113.967086,22.650783],[113.965797,22.651518],[113.964341,22.651192],[113.961149,22.651309],[113.959991,22.652477],[113.957606,22.651592],[113.954703,22.649336],[113.952905,22.650974],[113.950853,22.650829],[113.949406,22.652197],[113.946722,22.650969],[113.944038,22.650592],[113.940776,22.647618],[113.940521,22.64625],[113.937522,22.645087],[113.937645,22.643077],[113.936583,22.638683],[113.933952,22.637059],[113.932347,22.636561],[113.931655,22.634807],[113.930172,22.634225],[113.929348,22.633062],[113.928936,22.631354],[113.929997,22.630195],[113.930164,22.629124],[113.929304,22.627626],[113.929287,22.626183],[113.93126,22.623023],[113.930453,22.619322],[113.92962,22.618568],[113.927498,22.615599],[113.928839,22.612359],[113.929559,22.611554],[113.930076,22.609245],[113.929962,22.607853],[113.928559,22.606727],[113.927822,22.604008],[113.925033,22.603184],[113.923533,22.600117],[113.925814,22.595438],[113.926287,22.59332],[113.927024,22.592245],[113.928006,22.592138],[113.928541,22.590778],[113.926278,22.590811],[113.924472,22.589959],[113.924419,22.587617],[113.924937,22.584587],[113.928199,22.582613],[113.929541,22.580792],[113.929032,22.578767],[113.926498,22.57385],[113.92242,22.571555],[113.916166,22.565935],[113.915912,22.565139],[113.916079,22.557265],[113.915772,22.556776],[113.910685,22.553157],[113.901389,22.545376],[113.895653,22.54308],[113.860932,22.526416],[113.864063,22.515983],[113.863747,22.511982],[113.861046,22.504943],[113.860134,22.502008],[113.859379,22.495636],[113.862808,22.475835],[113.866983,22.465258],[113.87,22.45955],[113.881726,22.446786],[113.885234,22.444549],[113.888593,22.443235],[113.891768,22.442638],[113.893627,22.442717],[113.895495,22.443393],[113.897547,22.44474],[113.900819,22.447485],[113.915737,22.455962],[113.939907,22.471711],[113.94688,22.47734],[113.948976,22.48028],[113.953185,22.487622],[113.955062,22.486896],[113.95522,22.487492],[113.95351,22.488307],[113.954764,22.490986],[113.957036,22.500555],[113.95914,22.504924],[113.962166,22.507612],[113.966034,22.509718],[113.976541,22.510626],[113.990748,22.510584],[113.990547,22.520482],[113.994388,22.521926],[113.9933,22.527678],[113.994353,22.530566],[113.995484,22.530533],[113.996151,22.53207],[113.99544,22.53296],[113.99787,22.532396],[113.996721,22.538633],[113.996703,22.543304],[113.997203,22.545008],[113.99623,22.546792],[113.997729,22.54864],[113.999562,22.548957],[113.999878,22.549744],[113.998852,22.55014],[113.998168,22.552086],[113.998422,22.553879],[113.99758,22.554946],[114.001202,22.555788],[114.002895,22.555775],[114.0055,22.556343],[114.005386,22.558312],[114.003939,22.560478],[114.003342,22.563183],[114.004061,22.56627],[114.005421,22.568235],[114.005017,22.571443],[114.005272,22.57514],[114.009464,22.57886],[114.014875,22.579554],[114.018866,22.579074],[114.022154,22.580289],[114.023514,22.581649]]],[[[113.819931,22.396343],[113.822729,22.396539],[113.824377,22.397938],[113.824781,22.401047],[113.824184,22.404343],[113.819124,22.410156],[113.818396,22.412692],[113.817063,22.415922],[113.814879,22.41823],[113.814283,22.419418],[113.81124,22.420425],[113.808687,22.418905],[113.807012,22.418425],[113.805092,22.418803],[113.804486,22.421474],[113.803688,22.423026],[113.802294,22.423529],[113.799715,22.423194],[113.7989,22.42249],[113.798303,22.419222],[113.797312,22.417754],[113.795918,22.416766],[113.794997,22.416766],[113.79312,22.418239],[113.790024,22.418654],[113.788218,22.418108],[113.786858,22.417185],[113.78628,22.415992],[113.786692,22.413587],[113.7882,22.412352],[113.792235,22.41141],[113.798207,22.408977],[113.801364,22.407368],[113.801847,22.404907],[113.802425,22.403812],[113.803995,22.402446],[113.807302,22.400255],[113.814186,22.397859],[113.819931,22.396343]]],[[[113.844479,22.510216],[113.845882,22.509382],[113.850521,22.504822],[113.855091,22.502833],[113.856801,22.503574],[113.857011,22.504813],[113.856862,22.509578],[113.852661,22.511814],[113.850372,22.513281],[113.848697,22.513575],[113.845663,22.516873],[113.844409,22.517082],[113.84254,22.51582],[113.842514,22.512666],[113.844479,22.510216]]],[[[113.839629,22.498528],[113.84725,22.491941],[113.849136,22.491713],[113.85189,22.495295],[113.851986,22.496609],[113.844452,22.50335],[113.84276,22.503532],[113.839471,22.500667],[113.839629,22.498528]]]]}},{"type":"Feature","properties":{"adcode":440306,"name":"宝安区","center":[113.828671,22.754741],"centroid":[113.856348,22.676207],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":3,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.910957,22.829993],[113.910018,22.831847],[113.908957,22.83267],[113.904274,22.832879],[113.902239,22.838367],[113.902388,22.840212],[113.903949,22.840137],[113.906028,22.838018],[113.906572,22.838567],[113.90837,22.837888],[113.911439,22.838762],[113.912027,22.837898],[113.913544,22.837173],[113.91664,22.838195],[113.918096,22.836457],[113.920008,22.835732],[113.919657,22.83458],[113.92142,22.835221],[113.92299,22.834779],[113.922463,22.835778],[113.920104,22.83622],[113.917885,22.837972],[113.91785,22.840109],[113.919482,22.839784],[113.919297,22.841016],[113.920666,22.841201],[113.922411,22.84234],[113.92356,22.842391],[113.925252,22.841689],[113.927305,22.842707],[113.929804,22.841583],[113.931777,22.841778],[113.934777,22.840732],[113.933286,22.841912],[113.930155,22.842029],[113.928462,22.843125],[113.92627,22.843525],[113.924533,22.842828],[113.922253,22.843413],[113.920359,22.841638],[113.919236,22.842568],[113.91678,22.840686],[113.916579,22.839375],[113.914763,22.839161],[113.912869,22.840235],[113.910799,22.839343],[113.906835,22.840035],[113.90487,22.840133],[113.904397,22.842052],[113.905493,22.842609],[113.90323,22.842438],[113.903634,22.84365],[113.905081,22.845063],[113.902923,22.843822],[113.900748,22.844524],[113.900608,22.846122],[113.900231,22.844138],[113.898109,22.842749],[113.897047,22.844264],[113.898793,22.845407],[113.897328,22.845109],[113.896153,22.845974],[113.893925,22.846192],[113.892811,22.847424],[113.89275,22.84892],[113.894495,22.849951],[113.892803,22.850332],[113.892881,22.851587],[113.891469,22.851991],[113.891531,22.853599],[113.893083,22.853775],[113.894644,22.852047],[113.895039,22.850407],[113.896276,22.851513],[113.898073,22.85411],[113.899485,22.85549],[113.899731,22.857098],[113.898582,22.856038],[113.898451,22.855035],[113.894837,22.854352],[113.894416,22.855564],[113.892846,22.855402],[113.892434,22.85706],[113.891882,22.856619],[113.889724,22.857074],[113.889145,22.857897],[113.89097,22.859346],[113.891057,22.861749],[113.89054,22.859746],[113.889654,22.859774],[113.887312,22.858524],[113.886207,22.858649],[113.888777,22.855759],[113.886076,22.854282],[113.885585,22.852744],[113.884445,22.853037],[113.884392,22.851461],[113.883497,22.851884],[113.882647,22.850537],[113.881042,22.85141],[113.880989,22.852711],[113.88177,22.853422],[113.880673,22.853892],[113.8802,22.851954],[113.8787,22.852414],[113.878875,22.854208],[113.879937,22.854918],[113.878376,22.855207],[113.877683,22.854449],[113.878253,22.852749],[113.877507,22.851917],[113.876429,22.848111],[113.875429,22.847312],[113.874324,22.84457],[113.873412,22.845477],[113.871,22.845658],[113.87143,22.843116],[113.873596,22.840137],[113.872789,22.840714],[113.872333,22.839956],[113.87271,22.837516],[113.870789,22.836987],[113.868404,22.837312],[113.866264,22.836661],[113.864387,22.836968],[113.862501,22.834909],[113.861809,22.833362],[113.860984,22.834152],[113.857064,22.832614],[113.856196,22.835681],[113.854424,22.835216],[113.851284,22.837484],[113.850592,22.836843],[113.846285,22.835351],[113.845224,22.834426],[113.842742,22.833697],[113.841514,22.833994],[113.841102,22.83141],[113.838594,22.829779],[113.83741,22.827474],[113.836542,22.826526],[113.836524,22.823877],[113.834717,22.822171],[113.836717,22.82146],[113.838673,22.819764],[113.838383,22.818737],[113.838848,22.817356],[113.838585,22.813419],[113.838778,22.811997],[113.840085,22.810826],[113.84005,22.808028],[113.837234,22.800963],[113.834174,22.799443],[113.832306,22.798866],[113.830859,22.797528],[113.827473,22.798453],[113.827526,22.796556],[113.828289,22.795924],[113.824912,22.79293],[113.820843,22.792089],[113.816388,22.792284],[113.814783,22.79174],[113.813432,22.790415],[113.812976,22.789063],[113.814651,22.785962],[113.813722,22.784251],[113.810555,22.782285],[113.806863,22.78208],[113.80589,22.782596],[113.804241,22.784484],[113.802259,22.784879],[113.800356,22.783744],[113.800198,22.781834],[113.801584,22.779816],[113.801969,22.777929],[113.801434,22.776329],[113.799733,22.775065],[113.796602,22.774205],[113.795137,22.773303],[113.792427,22.77049],[113.791857,22.767649],[113.793708,22.764897],[113.794164,22.762214],[113.79355,22.757876],[113.792655,22.756081],[113.790831,22.753398],[113.789025,22.75177],[113.78699,22.750585],[113.780667,22.748488],[113.775799,22.746051],[113.769371,22.742042],[113.762389,22.736871],[113.751453,22.715403],[113.752006,22.705565],[113.753163,22.698523],[113.758355,22.683273],[113.757838,22.678761],[113.765494,22.665761],[113.767003,22.659466],[113.769002,22.654557],[113.773282,22.64323],[113.782289,22.625694],[113.803408,22.593185],[113.832192,22.570232],[113.836708,22.56519],[113.838217,22.56234],[113.838375,22.559318],[113.835954,22.553656],[113.835112,22.551225],[113.834191,22.544268],[113.834279,22.541329],[113.834691,22.539569],[113.836112,22.538474],[113.839041,22.537967],[113.842891,22.539303],[113.851153,22.542591],[113.852986,22.542861],[113.854757,22.542312],[113.856555,22.53962],[113.859686,22.52936],[113.860932,22.526416],[113.895653,22.54308],[113.901389,22.545376],[113.910685,22.553157],[113.915772,22.556776],[113.916079,22.557265],[113.915912,22.565139],[113.916166,22.565935],[113.92242,22.571555],[113.926498,22.57385],[113.929032,22.578767],[113.929541,22.580792],[113.928199,22.582613],[113.924937,22.584587],[113.924419,22.587617],[113.924472,22.589959],[113.926278,22.590811],[113.928541,22.590778],[113.928006,22.592138],[113.927024,22.592245],[113.926287,22.59332],[113.925814,22.595438],[113.923533,22.600117],[113.925033,22.603184],[113.927822,22.604008],[113.928559,22.606727],[113.929962,22.607853],[113.930076,22.609245],[113.929559,22.611554],[113.928839,22.612359],[113.927498,22.615599],[113.92962,22.618568],[113.930453,22.619322],[113.93126,22.623023],[113.929287,22.626183],[113.929304,22.627626],[113.930164,22.629124],[113.929997,22.630195],[113.928936,22.631354],[113.929348,22.633062],[113.930172,22.634225],[113.931655,22.634807],[113.932347,22.636561],[113.933952,22.637059],[113.936583,22.638683],[113.937645,22.643077],[113.937522,22.645087],[113.940521,22.64625],[113.940776,22.647618],[113.944038,22.650592],[113.946722,22.650969],[113.949406,22.652197],[113.950853,22.650829],[113.952905,22.650974],[113.954703,22.649336],[113.957606,22.651592],[113.959991,22.652477],[113.961149,22.651309],[113.964341,22.651192],[113.965797,22.651518],[113.967086,22.650783],[113.96749,22.652821],[113.969077,22.652742],[113.97041,22.653733],[113.970454,22.65599],[113.972638,22.657456],[113.972085,22.658447],[113.973331,22.661099],[113.972813,22.662723],[113.973418,22.66423],[113.971357,22.666603],[113.96998,22.669535],[113.968051,22.6708],[113.967797,22.672345],[113.967016,22.672982],[113.968481,22.675039],[113.968867,22.676662],[113.970708,22.677653],[113.969787,22.678719],[113.972471,22.680347],[113.974576,22.680426],[113.974234,22.682562],[113.975628,22.68486],[113.975479,22.686325],[113.973892,22.686125],[113.974488,22.688005],[113.975374,22.689214],[113.974339,22.690638],[113.975751,22.691908],[113.974532,22.693234],[113.975436,22.693736],[113.97683,22.69341],[113.978286,22.693708],[113.978549,22.695057],[113.97597,22.695215],[113.975628,22.696127],[113.977856,22.697472],[113.978286,22.696243],[113.980092,22.696481],[113.979786,22.698937],[113.978803,22.698779],[113.978031,22.699965],[113.975023,22.699532],[113.974769,22.700402],[113.976786,22.700439],[113.975883,22.701351],[113.976444,22.702026],[113.975795,22.702816],[113.973655,22.701946],[113.973778,22.70337],[113.975453,22.703649],[113.9764,22.707803],[113.978198,22.710417],[113.977856,22.712198],[113.97726,22.712752],[113.974725,22.711487],[113.973953,22.71184],[113.972024,22.711287],[113.970261,22.710101],[113.968454,22.711012],[113.967858,22.712356],[113.965674,22.712673],[113.963736,22.713743],[113.962754,22.715445],[113.96164,22.715561],[113.961245,22.71418],[113.959877,22.714338],[113.959579,22.71564],[113.958763,22.71604],[113.957948,22.71798],[113.956571,22.718849],[113.955755,22.716947],[113.954685,22.717901],[113.953142,22.717463],[113.952493,22.718175],[113.951589,22.71584],[113.950519,22.714059],[113.946617,22.711249],[113.94288,22.711128],[113.940863,22.708514],[113.938592,22.708714],[113.940925,22.706379],[113.940425,22.704202],[113.938276,22.702835],[113.937276,22.703095],[113.935093,22.706398],[113.931313,22.708031],[113.929594,22.7073],[113.929208,22.706528],[113.92762,22.705719],[113.927454,22.706933],[113.925156,22.709468],[113.921165,22.709212],[113.919596,22.709803],[113.916833,22.709249],[113.916245,22.71018],[113.913798,22.709045],[113.913246,22.706361],[113.911606,22.705342],[113.90623,22.705123],[113.905528,22.702449],[113.906256,22.700621],[113.903651,22.697369],[113.901739,22.696797],[113.901485,22.694973],[113.90323,22.695727],[113.903906,22.695025],[113.904081,22.692927],[113.905142,22.692154],[113.905204,22.690898],[113.904046,22.690819],[113.901555,22.692047],[113.899556,22.692513],[113.898766,22.693736],[113.896942,22.694104],[113.898187,22.692303],[113.8976,22.691364],[113.893978,22.688549],[113.891119,22.688019],[113.889873,22.68901],[113.883673,22.68994],[113.882129,22.687544],[113.879875,22.686218],[113.879349,22.687688],[113.87742,22.689787],[113.876692,22.689628],[113.874297,22.691694],[113.875885,22.693824],[113.879524,22.695695],[113.879726,22.696211],[113.878805,22.698369],[113.8777,22.699421],[113.877393,22.701249],[113.87863,22.700686],[113.880454,22.700765],[113.880673,22.702398],[113.877955,22.702258],[113.876928,22.703081],[113.876595,22.704672],[113.87585,22.704458],[113.874175,22.707845],[113.875709,22.709301],[113.876841,22.71117],[113.875376,22.711803],[113.875034,22.713366],[113.878104,22.714859],[113.879866,22.714794],[113.881901,22.715505],[113.882313,22.717794],[113.881743,22.719138],[113.879726,22.720445],[113.878174,22.723194],[113.87877,22.724445],[113.878656,22.726012],[113.877858,22.726454],[113.877069,22.728258],[113.878174,22.731049],[113.879796,22.731109],[113.88098,22.732067],[113.882568,22.734193],[113.881629,22.735788],[113.882498,22.738038],[113.884032,22.740243],[113.883033,22.742066],[113.88205,22.742754],[113.880901,22.744791],[113.881375,22.745995],[113.87941,22.747269],[113.879814,22.748381],[113.879472,22.749659],[113.877034,22.751161],[113.878042,22.755714],[113.8767,22.758048],[113.873017,22.760717],[113.874157,22.762093],[113.86979,22.764218],[113.869763,22.765199],[113.868728,22.765785],[113.868176,22.768174],[113.865773,22.768746],[113.865729,22.769937],[113.863966,22.770192],[113.863247,22.771471],[113.863712,22.772694],[113.860502,22.772973],[113.860107,22.774079],[113.860818,22.776613],[113.862554,22.778649],[113.861335,22.778273],[113.859485,22.781871],[113.858967,22.783624],[113.858958,22.787166],[113.857809,22.788017],[113.859984,22.78877],[113.862195,22.788644],[113.864247,22.790397],[113.865887,22.790281],[113.877165,22.795343],[113.879402,22.797128],[113.881717,22.797686],[113.881778,22.800005],[113.882568,22.800981],[113.883515,22.80331],[113.883559,22.806178],[113.884883,22.809943],[113.88462,22.810989],[113.886918,22.813536],[113.887049,22.814293],[113.888935,22.816896],[113.88826,22.818021],[113.88833,22.819582],[113.889531,22.821609],[113.890198,22.819847],[113.890952,22.820335],[113.890856,22.82153],[113.892724,22.822013],[113.891084,22.8206],[113.892776,22.819108],[113.894206,22.820479],[113.894039,22.819424],[113.894855,22.819085],[113.895565,22.820015],[113.895144,22.821432],[113.896205,22.823923],[113.89767,22.82601],[113.89731,22.826833],[113.898301,22.82786],[113.901029,22.828928],[113.903046,22.828208],[113.905204,22.828464],[113.907475,22.829621],[113.910957,22.829993]]],[[[113.823334,22.543807],[113.8245,22.544025],[113.824307,22.54485],[113.823334,22.543807]]]]}},{"type":"Feature","properties":{"adcode":440307,"name":"龙岗区","center":[114.251372,22.721511],"centroid":[114.211562,22.692969],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":4,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.355782,22.765794],[114.35658,22.768718],[114.356221,22.772796],[114.356501,22.774302],[114.355212,22.776985],[114.354107,22.778147],[114.350441,22.778524],[114.347836,22.777422],[114.346293,22.777905],[114.34439,22.779816],[114.344179,22.781513],[114.342609,22.783698],[114.34275,22.784437],[114.344258,22.785604],[114.345293,22.787231],[114.346494,22.788128],[114.348205,22.788379],[114.351125,22.78969],[114.351844,22.792256],[114.351958,22.795334],[114.351713,22.79723],[114.350722,22.79756],[114.350011,22.799136],[114.351195,22.802929],[114.352827,22.803747],[114.35337,22.804584],[114.35316,22.806624],[114.349792,22.806554],[114.347871,22.80919],[114.345328,22.808507],[114.343144,22.808669],[114.341592,22.809896],[114.337321,22.809483],[114.335304,22.808985],[114.330515,22.809269],[114.329314,22.80635],[114.327507,22.805272],[114.32406,22.80483],[114.320657,22.806508],[114.318553,22.806559],[114.318246,22.804663],[114.316456,22.801409],[114.314466,22.80014],[114.31308,22.800563],[114.313001,22.802264],[114.311151,22.80357],[114.308344,22.803566],[114.306116,22.802599],[114.305353,22.801706],[114.298513,22.80232],[114.295478,22.802789],[114.29432,22.803422],[114.294855,22.806382],[114.292777,22.807526],[114.291628,22.808595],[114.286901,22.807196],[114.284814,22.80826],[114.282753,22.804742],[114.282867,22.80238],[114.279604,22.798917],[114.275964,22.797449],[114.275973,22.795273],[114.274509,22.794023],[114.268466,22.792098],[114.26815,22.79108],[114.269308,22.788932],[114.264809,22.7846],[114.264116,22.784456],[114.261432,22.781773],[114.258336,22.782773],[114.25446,22.782922],[114.253337,22.781606],[114.252223,22.781229],[114.250811,22.781662],[114.250426,22.783307],[114.246575,22.787515],[114.245505,22.790652],[114.243594,22.791787],[114.242436,22.791238],[114.239936,22.792084],[114.23492,22.792991],[114.233806,22.793948],[114.234166,22.798127],[114.233245,22.800721],[114.232561,22.8049],[114.231771,22.807103],[114.229263,22.809018],[114.228939,22.810477],[114.229202,22.812513],[114.227825,22.813471],[114.225816,22.813694],[114.224255,22.812783],[114.223659,22.810617],[114.220554,22.808242],[114.218055,22.809353],[114.215643,22.80774],[114.211854,22.80027],[114.213012,22.79915],[114.211337,22.795994],[114.210162,22.792633],[114.207241,22.789783],[114.203198,22.788946],[114.202444,22.788342],[114.198155,22.787487],[114.196655,22.785678],[114.193279,22.785557],[114.18999,22.785734],[114.185789,22.783284],[114.185333,22.78181],[114.183263,22.779695],[114.179343,22.779161],[114.180027,22.777138],[114.179492,22.773847],[114.179624,22.772982],[114.181579,22.771578],[114.182097,22.771996],[114.181106,22.774056],[114.180834,22.775711],[114.181693,22.776315],[114.182658,22.775488],[114.182948,22.773716],[114.184237,22.772917],[114.185754,22.772805],[114.188008,22.770388],[114.187605,22.768872],[114.186157,22.768128],[114.183228,22.768658],[114.182228,22.767891],[114.182053,22.765278],[114.183535,22.764618],[114.185026,22.765171],[114.186947,22.763748],[114.188104,22.763572],[114.192402,22.764613],[114.195594,22.765664],[114.197094,22.764934],[114.198032,22.765687],[114.2004,22.76565],[114.201067,22.764771],[114.199742,22.760568],[114.202514,22.758606],[114.204373,22.759126],[114.205645,22.758643],[114.206574,22.757248],[114.203821,22.755239],[114.20311,22.755137],[114.204128,22.75105],[114.205075,22.751222],[114.205505,22.752589],[114.209741,22.751152],[114.210495,22.750157],[114.209346,22.74845],[114.209206,22.746762],[114.208337,22.745777],[114.208741,22.744488],[114.211854,22.743582],[114.213284,22.741605],[114.215564,22.739415],[114.215196,22.737829],[114.215678,22.735569],[114.212126,22.733727],[114.211424,22.732058],[114.209679,22.731137],[114.2086,22.72943],[114.208653,22.726542],[114.20825,22.724263],[114.208662,22.719817],[114.209267,22.719031],[114.208065,22.714668],[114.206636,22.714124],[114.205864,22.715329],[114.203303,22.715608],[114.201654,22.713715],[114.199988,22.713008],[114.196717,22.710231],[114.19655,22.708384],[114.197147,22.7073],[114.198927,22.706361],[114.199488,22.702035],[114.199286,22.700877],[114.197234,22.696844],[114.198708,22.696192],[114.198953,22.694085],[114.19719,22.68961],[114.197111,22.688149],[114.195103,22.688042],[114.191919,22.688958],[114.191051,22.68794],[114.192621,22.683729],[114.193489,22.684441],[114.196848,22.683236],[114.197155,22.682362],[114.195357,22.680077],[114.19099,22.677007],[114.190849,22.675895],[114.187499,22.673555],[114.186552,22.672215],[114.185807,22.669995],[114.186526,22.66967],[114.186254,22.668148],[114.187508,22.666375],[114.185833,22.664724],[114.183193,22.66444],[114.182088,22.662997],[114.181176,22.659661],[114.179124,22.656134],[114.176168,22.654212],[114.172529,22.654394],[114.169985,22.655715],[114.169319,22.656776],[114.170546,22.658247],[114.170125,22.659247],[114.168617,22.660499],[114.168266,22.662192],[114.167056,22.66256],[114.164504,22.661611],[114.164249,22.657162],[114.162522,22.656813],[114.160847,22.6574],[114.161075,22.659038],[114.162697,22.661043],[114.160829,22.664993],[114.159908,22.66511],[114.159022,22.662881],[114.157961,22.661685],[114.157154,22.66162],[114.157014,22.66417],[114.156155,22.663951],[114.155023,22.660261],[114.153567,22.660689],[114.154699,22.663323],[114.153936,22.663956],[114.155453,22.668209],[114.15547,22.668934],[114.157724,22.668181],[114.160496,22.668846],[114.162618,22.667101],[114.163092,22.665766],[114.163899,22.665375],[114.166205,22.67067],[114.167389,22.672731],[114.167135,22.675043],[114.166337,22.678351],[114.168231,22.678779],[114.167433,22.680696],[114.163618,22.682725],[114.161627,22.685274],[114.160101,22.685004],[114.158829,22.685944],[114.151778,22.690135],[114.152866,22.691843],[114.151936,22.69535],[114.150603,22.697374],[114.149884,22.699453],[114.146709,22.70036],[114.14506,22.701174],[114.14463,22.702751],[114.146016,22.705975],[114.143841,22.70764],[114.143148,22.709687],[114.144525,22.710491],[114.144666,22.714184],[114.139421,22.716152],[114.137307,22.716329],[114.137299,22.714501],[114.136176,22.712677],[114.135334,22.712101],[114.131756,22.713482],[114.130642,22.714845],[114.130002,22.716459],[114.127537,22.716924],[114.125687,22.716789],[114.124555,22.715217],[114.123556,22.715203],[114.121977,22.716259],[114.12124,22.718682],[114.119697,22.719598],[114.117601,22.723152],[114.115443,22.72298],[114.113365,22.721031],[114.109418,22.717408],[114.109278,22.71411],[114.10691,22.711826],[114.106498,22.709798],[114.104603,22.708193],[114.104042,22.705528],[114.100806,22.704654],[114.098841,22.704654],[114.097271,22.704054],[114.093439,22.700179],[114.093965,22.695899],[114.093895,22.694206],[114.095438,22.693313],[114.09628,22.692094],[114.098525,22.690117],[114.100218,22.689959],[114.101911,22.688838],[114.101121,22.688196],[114.097192,22.687781],[114.096657,22.687479],[114.09514,22.68479],[114.095289,22.683515],[114.099613,22.675802],[114.100113,22.675355],[114.100034,22.672238],[114.100604,22.668646],[114.098394,22.667897],[114.095052,22.665505],[114.092614,22.663402],[114.091799,22.661457],[114.089211,22.658875],[114.085905,22.660313],[114.08523,22.662034],[114.085353,22.663402],[114.0833,22.664463],[114.082555,22.665454],[114.081301,22.668325],[114.081397,22.669651],[114.080406,22.67026],[114.080371,22.671554],[114.079319,22.67281],[114.078722,22.674373],[114.075977,22.675239],[114.07403,22.673443],[114.072574,22.673127],[114.069312,22.674969],[114.067952,22.672694],[114.063638,22.668846],[114.059752,22.664565],[114.057612,22.665598],[114.054288,22.666101],[114.054183,22.664877],[114.054823,22.663812],[114.056507,22.662648],[114.056016,22.66041],[114.054517,22.659526],[114.054964,22.649052],[114.051131,22.650224],[114.050228,22.647167],[114.053394,22.647381],[114.055174,22.646325],[114.055937,22.642337],[114.054604,22.641387],[114.054183,22.640229],[114.056174,22.636524],[114.05585,22.63497],[114.052298,22.635593],[114.052149,22.632699],[114.053122,22.632252],[114.053026,22.629487],[114.051464,22.628943],[114.051,22.626676],[114.054034,22.624838],[114.052754,22.624154],[114.054166,22.622697],[114.055385,22.622687],[114.056358,22.621142],[114.056104,22.617735],[114.058305,22.617265],[114.058402,22.611531],[114.058998,22.610544],[114.059708,22.607202],[114.059516,22.605847],[114.058156,22.602928],[114.060419,22.601392],[114.060892,22.59811],[114.062515,22.595676],[114.063445,22.596607],[114.061857,22.598744],[114.063453,22.599293],[114.064085,22.598022],[114.065558,22.596625],[114.067663,22.597119],[114.069935,22.595513],[114.071592,22.592748],[114.073609,22.592417],[114.076477,22.594279],[114.075363,22.59636],[114.075328,22.598096],[114.077293,22.598069],[114.08116,22.600857],[114.082879,22.601197],[114.085265,22.600969],[114.089054,22.599069],[114.089668,22.598511],[114.091474,22.599907],[114.093412,22.600149],[114.096736,22.597389],[114.099543,22.594177],[114.100367,22.592808],[114.102244,22.592212],[114.105743,22.589396],[114.105998,22.588302],[114.107489,22.588195],[114.108024,22.589014],[114.112216,22.589466],[114.114128,22.590494],[114.117443,22.591253],[114.119556,22.589982],[114.121723,22.590667],[114.122205,22.589009],[114.123468,22.58893],[114.123722,22.587729],[114.124792,22.58866],[114.128704,22.588944],[114.12987,22.588306],[114.130826,22.586695],[114.133878,22.589163],[114.135281,22.588106],[114.13907,22.588749],[114.139991,22.590331],[114.141938,22.591244],[114.144297,22.591267],[114.145955,22.592813],[114.146007,22.595499],[114.150261,22.599344],[114.154251,22.60143],[114.159943,22.601388],[114.161575,22.604488],[114.161636,22.60527],[114.16346,22.606382],[114.166933,22.609287],[114.170634,22.610246],[114.172669,22.610358],[114.17516,22.612192],[114.17601,22.614286],[114.177177,22.615589],[114.181632,22.61599],[114.183193,22.61491],[114.184763,22.615287],[114.18878,22.61524],[114.192402,22.61619],[114.196857,22.613295],[114.199883,22.609092],[114.200199,22.607034],[114.199243,22.606373],[114.198699,22.604842],[114.198865,22.60304],[114.203154,22.601183],[114.205452,22.601956],[114.206969,22.601653],[114.209513,22.598771],[114.212643,22.599633],[114.213845,22.599288],[114.214082,22.598292],[114.213678,22.596071],[114.216722,22.592459],[114.217757,22.59008],[114.219019,22.588916],[114.219528,22.584582],[114.218765,22.581919],[114.219511,22.581653],[114.222291,22.583735],[114.224492,22.584438],[114.224913,22.585862],[114.227491,22.589777],[114.228939,22.59075],[114.229552,22.593734],[114.230359,22.594833],[114.23071,22.598492],[114.23299,22.600731],[114.233166,22.601658],[114.234718,22.602416],[114.23549,22.603748],[114.234841,22.607081],[114.234104,22.607881],[114.234753,22.609375],[114.24084,22.615645],[114.243488,22.616069],[114.24519,22.618],[114.249022,22.62023],[114.250925,22.620356],[114.254828,22.620104],[114.259889,22.618871],[114.262985,22.620439],[114.265317,22.622557],[114.266326,22.626271],[114.266186,22.628305],[114.263835,22.630181],[114.263099,22.631228],[114.258705,22.634183],[114.259055,22.637585],[114.257968,22.640806],[114.259336,22.642495],[114.260336,22.647181],[114.261397,22.648652],[114.262616,22.648949],[114.264326,22.650536],[114.26979,22.653831],[114.267387,22.657535],[114.267624,22.660527],[114.267001,22.66203],[114.26801,22.664654],[114.269238,22.665259],[114.269957,22.666594],[114.271237,22.666929],[114.270772,22.668204],[114.272421,22.669837],[114.271939,22.670619],[114.273351,22.673489],[114.276166,22.674048],[114.276745,22.674815],[114.28127,22.67563],[114.283165,22.675392],[114.283814,22.676797],[114.285085,22.678086],[114.285971,22.67824],[114.287629,22.677467],[114.289751,22.677104],[114.290541,22.677612],[114.291356,22.679626],[114.293908,22.681608],[114.297206,22.680678],[114.298995,22.681222],[114.302082,22.684381],[114.302415,22.685837],[114.310291,22.685795],[114.316097,22.68666],[114.31857,22.691191],[114.322876,22.688349],[114.322561,22.691787],[114.32349,22.700407],[114.320605,22.702328],[114.321359,22.703575],[114.323271,22.702472],[114.324104,22.703472],[114.323911,22.704561],[114.326051,22.704268],[114.32684,22.705105],[114.328086,22.70444],[114.328945,22.707412],[114.328752,22.710561],[114.333304,22.711175],[114.336093,22.711235],[114.337514,22.711817],[114.341601,22.715333],[114.341811,22.719352],[114.340461,22.721877],[114.340154,22.724231],[114.341022,22.729263],[114.340882,22.733904],[114.339101,22.734816],[114.338628,22.736006],[114.339049,22.740991],[114.339899,22.741447],[114.340522,22.74394],[114.340075,22.74646],[114.337996,22.746395],[114.337365,22.747413],[114.339075,22.749822],[114.340671,22.754198],[114.341346,22.754918],[114.342364,22.7545],[114.343197,22.755235],[114.344714,22.755193],[114.344433,22.758541],[114.3461,22.759782],[114.345653,22.760489],[114.347477,22.761126],[114.348029,22.764399],[114.347828,22.765287],[114.34909,22.767905],[114.35066,22.768923],[114.352178,22.768258],[114.353458,22.765994],[114.355782,22.765794]]],[[[114.339294,22.623358],[114.340434,22.622092],[114.341303,22.620277],[114.342294,22.619588],[114.343258,22.617828],[114.341969,22.616637],[114.342758,22.614281],[114.342627,22.613383],[114.337952,22.605861],[114.337672,22.603468],[114.339171,22.602374],[114.344205,22.601867],[114.345547,22.602863],[114.348363,22.603385],[114.350459,22.602589],[114.350204,22.599842],[114.350538,22.597012],[114.353519,22.59001],[114.359518,22.591574],[114.364105,22.593385],[114.374849,22.598641],[114.3819,22.601499],[114.388863,22.602933],[114.398344,22.602859],[114.401194,22.602398],[114.404632,22.601476],[114.410508,22.599544],[114.416121,22.596858],[114.422567,22.592743],[114.42718,22.588795],[114.430697,22.583381],[114.432039,22.576839],[114.43346,22.57088],[114.434714,22.566601],[114.437143,22.562615],[114.439739,22.560007],[114.44451,22.556897],[114.449194,22.55353],[114.458052,22.545036],[114.464489,22.537808],[114.467594,22.533356],[114.470269,22.526845],[114.471935,22.522229],[114.472101,22.518452],[114.471523,22.513505],[114.469926,22.50764],[114.468093,22.4951],[114.468172,22.49141],[114.469672,22.485368],[114.474443,22.464508],[114.476697,22.459135],[114.480293,22.452919],[114.48523,22.446697],[114.489817,22.443664],[114.494167,22.441976],[114.500771,22.43994],[114.506954,22.438579],[114.517654,22.439432],[114.525433,22.440583],[114.531327,22.442727],[114.535343,22.445145],[114.539273,22.449247],[114.543079,22.456008],[114.544912,22.460072],[114.54642,22.462462],[114.549227,22.465747],[114.551314,22.466577],[114.555076,22.467578],[114.559093,22.467909],[114.562864,22.467942],[114.566425,22.46844],[114.58543,22.473407],[114.597173,22.477009],[114.611434,22.482041],[114.616547,22.485736],[114.619318,22.488927],[114.625782,22.49837],[114.627799,22.502982],[114.628466,22.508772],[114.628387,22.513635],[114.627045,22.519928],[114.624607,22.524958],[114.620914,22.530827],[114.619573,22.534264],[114.618064,22.538963],[114.616301,22.542819],[114.614539,22.545166],[114.609417,22.54743],[114.605146,22.547513],[114.599357,22.547975],[114.595165,22.548477],[114.589631,22.549739],[114.583518,22.551672],[114.578572,22.553609],[114.574888,22.555709],[114.572538,22.557809],[114.5681,22.560752],[114.565092,22.564282],[114.562408,22.568309],[114.559733,22.57318],[114.558892,22.576374],[114.559058,22.58325],[114.561409,22.588115],[114.565259,22.593809],[114.572292,22.602691],[114.578072,22.606839],[114.583352,22.610358],[114.586702,22.612871],[114.59299,22.621175],[114.595761,22.626374],[114.600541,22.634802],[114.603137,22.638749],[114.604646,22.643025],[114.605233,22.647139],[114.604646,22.651583],[114.602883,22.655278],[114.599112,22.65813],[114.593578,22.660145],[114.580256,22.661494],[114.576818,22.660829],[114.565846,22.657739],[114.553208,22.656213],[114.545841,22.656227],[114.529792,22.65719],[114.515242,22.655501],[114.513988,22.655422],[114.512225,22.656432],[114.512269,22.658572],[114.514488,22.66075],[114.510848,22.665668],[114.509208,22.665901],[114.50584,22.668474],[114.503955,22.668916],[114.498403,22.669144],[114.495281,22.668837],[114.49429,22.669688],[114.492054,22.669814],[114.489177,22.669074],[114.487484,22.669153],[114.48395,22.668227],[114.482073,22.668255],[114.481065,22.664938],[114.48017,22.662979],[114.478109,22.661802],[114.472365,22.664603],[114.471514,22.666236],[114.469137,22.667134],[114.466778,22.667641],[114.460183,22.66779],[114.458201,22.669111],[114.456333,22.669725],[114.453412,22.669963],[114.451956,22.669218],[114.450439,22.667571],[114.450448,22.666194],[114.449729,22.66531],[114.447492,22.665217],[114.441213,22.6635],[114.436784,22.662546],[114.435661,22.661746],[114.433872,22.661732],[114.431943,22.660931],[114.430732,22.66242],[114.428934,22.660983],[114.426821,22.658279],[114.424751,22.656883],[114.422988,22.656827],[114.420945,22.655739],[114.42112,22.654775],[114.419849,22.654599],[114.418893,22.653054],[114.418182,22.653607],[114.413858,22.654352],[114.412131,22.653486],[114.41221,22.652053],[114.410736,22.650527],[114.409228,22.652388],[114.40757,22.652174],[114.410298,22.649717],[114.408851,22.648628],[114.407474,22.648489],[114.406702,22.649182],[114.404615,22.648754],[114.404176,22.647865],[114.402659,22.646785],[114.400607,22.646753],[114.3968,22.64518],[114.395783,22.6439],[114.394318,22.643081],[114.389723,22.64209],[114.389293,22.640075],[114.389968,22.637022],[114.388706,22.636445],[114.386715,22.637688],[114.38539,22.63719],[114.382584,22.638218],[114.381014,22.638092],[114.380891,22.639209],[114.378278,22.641308],[114.376918,22.643975],[114.375699,22.644487],[114.374892,22.643537],[114.372665,22.642151],[114.371314,22.640331],[114.372104,22.639023],[114.374866,22.638618],[114.375077,22.638032],[114.373375,22.635342],[114.37498,22.634877],[114.375357,22.632596],[114.3742,22.632182],[114.372033,22.632843],[114.37099,22.631866],[114.367525,22.632736],[114.36785,22.631763],[114.367218,22.629455],[114.366385,22.62898],[114.366894,22.623474],[114.365193,22.622175],[114.36293,22.623307],[114.360948,22.622664],[114.359773,22.623735],[114.35758,22.624219],[114.354388,22.627239],[114.354168,22.626257],[114.352064,22.62696],[114.351809,22.629022],[114.350853,22.631447],[114.347661,22.630795],[114.3461,22.631698],[114.344328,22.631279],[114.344968,22.629152],[114.343758,22.628389],[114.343311,22.626592],[114.342408,22.626606],[114.339899,22.625447],[114.339294,22.623358]]]]}},{"type":"Feature","properties":{"adcode":440308,"name":"盐田区","center":[114.235366,22.555069],"centroid":[114.275663,22.594708],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":5,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.202882,22.553903],[114.206162,22.554592],[114.206811,22.553581],[114.210837,22.553828],[114.212617,22.553623],[114.214503,22.553977],[114.215915,22.55366],[114.217502,22.551951],[114.220712,22.551933],[114.221931,22.552883],[114.223282,22.552762],[114.225764,22.55028],[114.226307,22.548962],[114.228991,22.547988],[114.230763,22.545939],[114.230964,22.543746],[114.230508,22.543043],[114.231271,22.540831],[114.232561,22.540044],[114.235481,22.541217],[114.237998,22.542936],[114.25032,22.553283],[114.258827,22.55882],[114.261055,22.559593],[114.275377,22.562275],[114.280981,22.562857],[114.286813,22.562978],[114.289988,22.562806],[114.292426,22.562983],[114.294557,22.563737],[114.298548,22.566633],[114.300688,22.567499],[114.304854,22.568719],[114.306581,22.570512],[114.308318,22.57317],[114.309826,22.576122],[114.311852,22.578609],[114.316886,22.582198],[114.32214,22.587375],[114.325332,22.588637],[114.330629,22.588898],[114.337093,22.588325],[114.343399,22.588339],[114.347003,22.588679],[114.353519,22.59001],[114.350538,22.597012],[114.350204,22.599842],[114.350459,22.602589],[114.348363,22.603385],[114.345547,22.602863],[114.344205,22.601867],[114.339171,22.602374],[114.337672,22.603468],[114.337952,22.605861],[114.342627,22.613383],[114.342758,22.614281],[114.341969,22.616637],[114.343258,22.617828],[114.342294,22.619588],[114.341303,22.620277],[114.340434,22.622092],[114.339294,22.623358],[114.335216,22.62589],[114.331848,22.625987],[114.329463,22.623409],[114.328428,22.622869],[114.323806,22.623046],[114.322762,22.623572],[114.322069,22.624856],[114.320877,22.625689],[114.31893,22.625838],[114.318421,22.62467],[114.316921,22.624382],[114.313571,22.624335],[114.31058,22.62616],[114.310177,22.628105],[114.306853,22.62986],[114.304827,22.630511],[114.297302,22.633918],[114.29532,22.639698],[114.293645,22.640135],[114.285892,22.640512],[114.283358,22.641308],[114.28113,22.641527],[114.280104,22.64297],[114.280174,22.643751],[114.276806,22.645818],[114.27571,22.646772],[114.274482,22.649801],[114.274272,22.651136],[114.26979,22.653831],[114.264326,22.650536],[114.262616,22.648949],[114.261397,22.648652],[114.260336,22.647181],[114.259336,22.642495],[114.257968,22.640806],[114.259055,22.637585],[114.258705,22.634183],[114.263099,22.631228],[114.263835,22.630181],[114.266186,22.628305],[114.266326,22.626271],[114.265317,22.622557],[114.262985,22.620439],[114.259889,22.618871],[114.254828,22.620104],[114.250925,22.620356],[114.249022,22.62023],[114.24519,22.618],[114.243488,22.616069],[114.24084,22.615645],[114.234753,22.609375],[114.234104,22.607881],[114.234841,22.607081],[114.23549,22.603748],[114.234718,22.602416],[114.233166,22.601658],[114.23299,22.600731],[114.23071,22.598492],[114.230359,22.594833],[114.229552,22.593734],[114.228939,22.59075],[114.227491,22.589777],[114.224913,22.585862],[114.224492,22.584438],[114.222291,22.583735],[114.219511,22.581653],[114.218765,22.581919],[114.218949,22.580215],[114.219967,22.578176],[114.217432,22.575163],[114.214003,22.57386],[114.211609,22.573799],[114.207513,22.572574],[114.205829,22.571131],[114.203759,22.569948],[114.203786,22.567844],[114.207066,22.562024],[114.206943,22.559509],[114.204277,22.556603],[114.2034,22.556119],[114.202882,22.553903]]]]}},{"type":"Feature","properties":{"adcode":440309,"name":"龙华区","center":[114.044346,22.691963],"centroid":[114.034788,22.684083],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":6,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.113365,22.721031],[114.11176,22.721435],[114.110532,22.722431],[114.107182,22.723003],[114.105226,22.730965],[114.1042,22.731653],[114.10284,22.731379],[114.099402,22.735648],[114.100823,22.736541],[114.101034,22.737811],[114.100279,22.741275],[114.098096,22.743135],[114.098745,22.745293],[114.098464,22.74719],[114.096175,22.746428],[114.09215,22.746051],[114.091693,22.746967],[114.092825,22.748018],[114.089948,22.749543],[114.08651,22.748873],[114.084397,22.750566],[114.081055,22.747599],[114.081239,22.745995],[114.079494,22.745325],[114.075767,22.742284],[114.074811,22.740889],[114.072487,22.742294],[114.07239,22.746395],[114.070794,22.749125],[114.069005,22.749659],[114.06619,22.747981],[114.063427,22.749576],[114.063611,22.751343],[114.06462,22.752384],[114.064576,22.755904],[114.063436,22.755993],[114.059919,22.755077],[114.058937,22.753872],[114.057139,22.754956],[114.05649,22.756676],[114.053885,22.756318],[114.05349,22.755686],[114.049658,22.756369],[114.048562,22.757039],[114.048676,22.758173],[114.049746,22.75974],[114.051877,22.760903],[114.05221,22.763283],[114.050728,22.765087],[114.049175,22.766036],[114.048711,22.768458],[114.049824,22.769495],[114.049763,22.771178],[114.048623,22.77182],[114.046667,22.771322],[114.045448,22.769788],[114.044562,22.767584],[114.041958,22.766677],[114.039844,22.764283],[114.037809,22.764269],[114.036152,22.764976],[114.035213,22.766761],[114.032135,22.766291],[114.031004,22.764246],[114.029162,22.764897],[114.028144,22.766073],[114.026987,22.766533],[114.026119,22.765441],[114.025847,22.76359],[114.02247,22.761814],[114.018918,22.761405],[114.017883,22.760242],[114.014445,22.760521],[114.012928,22.761726],[114.011007,22.762163],[114.008754,22.761363],[114.007692,22.7622],[114.00657,22.764125],[114.005026,22.764167],[114.002693,22.763618],[114.002483,22.762972],[114.000115,22.76206],[113.99851,22.760921],[113.996563,22.758564],[113.993625,22.759066],[113.992792,22.757713],[113.99323,22.755825],[113.992327,22.753979],[113.993581,22.753468],[113.994721,22.753742],[113.996624,22.753342],[113.997677,22.754133],[113.999624,22.753737],[114.000878,22.751756],[114.004202,22.750324],[114.00471,22.751975],[114.006166,22.750803],[114.003746,22.748683],[114.006175,22.746516],[114.00714,22.745284],[114.008868,22.744019],[114.009201,22.73994],[114.008508,22.738829],[114.008341,22.736225],[114.008754,22.735811],[114.006175,22.735969],[114.005228,22.737122],[114.003465,22.736532],[114.002307,22.734718],[113.999668,22.733225],[113.996905,22.730319],[113.99566,22.729867],[113.992923,22.726951],[113.991169,22.72564],[113.990678,22.724575],[113.988047,22.723291],[113.98724,22.721082],[113.985855,22.718863],[113.984109,22.717222],[113.982688,22.71645],[113.981671,22.716891],[113.979391,22.714091],[113.97726,22.712752],[113.977856,22.712198],[113.978198,22.710417],[113.9764,22.707803],[113.975453,22.703649],[113.973778,22.70337],[113.973655,22.701946],[113.975795,22.702816],[113.976444,22.702026],[113.975883,22.701351],[113.976786,22.700439],[113.974769,22.700402],[113.975023,22.699532],[113.978031,22.699965],[113.978803,22.698779],[113.979786,22.698937],[113.980092,22.696481],[113.978286,22.696243],[113.977856,22.697472],[113.975628,22.696127],[113.97597,22.695215],[113.978549,22.695057],[113.978286,22.693708],[113.97683,22.69341],[113.975436,22.693736],[113.974532,22.693234],[113.975751,22.691908],[113.974339,22.690638],[113.975374,22.689214],[113.974488,22.688005],[113.973892,22.686125],[113.975479,22.686325],[113.975628,22.68486],[113.974234,22.682562],[113.974576,22.680426],[113.972471,22.680347],[113.969787,22.678719],[113.970708,22.677653],[113.968867,22.676662],[113.968481,22.675039],[113.967016,22.672982],[113.967797,22.672345],[113.968051,22.6708],[113.96998,22.669535],[113.971357,22.666603],[113.973418,22.66423],[113.972813,22.662723],[113.973331,22.661099],[113.972085,22.658447],[113.972638,22.657456],[113.970454,22.65599],[113.97041,22.653733],[113.969077,22.652742],[113.96749,22.652821],[113.967086,22.650783],[113.967849,22.648884],[113.968735,22.644282],[113.966727,22.642337],[113.96663,22.640838],[113.967455,22.640419],[113.970042,22.640536],[113.971471,22.638311],[113.974734,22.636124],[113.97619,22.637283],[113.978452,22.636976],[113.982118,22.637297],[113.983618,22.636412],[113.98596,22.63645],[113.98888,22.634984],[113.989985,22.634044],[113.991222,22.631949],[113.992406,22.631214],[113.99245,22.629799],[113.993774,22.625834],[113.994853,22.626509],[113.996563,22.626634],[113.999203,22.625094],[114.001737,22.625717],[114.002807,22.622222],[114.003939,22.621496],[114.004316,22.620244],[114.005552,22.619094],[114.006815,22.619113],[114.008797,22.615906],[114.009297,22.611084],[114.012858,22.606219],[114.014366,22.605731],[114.015752,22.604353],[114.016656,22.602626],[114.020839,22.601862],[114.0219,22.602356],[114.023181,22.599945],[114.023645,22.597156],[114.023207,22.595145],[114.0239,22.593348],[114.02604,22.591938],[114.026417,22.590285],[114.025215,22.587389],[114.023944,22.582408],[114.023514,22.581649],[114.028066,22.581458],[114.03032,22.580564],[114.034301,22.582626],[114.038204,22.582971],[114.041098,22.583907],[114.045317,22.584163],[114.047518,22.582408],[114.052561,22.581747],[114.053534,22.582235],[114.053745,22.584624],[114.054639,22.58529],[114.057709,22.586393],[114.059393,22.587533],[114.06212,22.586477],[114.066304,22.585671],[114.066426,22.587766],[114.067795,22.588218],[114.068391,22.589549],[114.070785,22.591519],[114.071592,22.592748],[114.069935,22.595513],[114.067663,22.597119],[114.065558,22.596625],[114.064085,22.598022],[114.063453,22.599293],[114.061857,22.598744],[114.063445,22.596607],[114.062515,22.595676],[114.060892,22.59811],[114.060419,22.601392],[114.058156,22.602928],[114.059516,22.605847],[114.059708,22.607202],[114.058998,22.610544],[114.058402,22.611531],[114.058305,22.617265],[114.056104,22.617735],[114.056358,22.621142],[114.055385,22.622687],[114.054166,22.622697],[114.052754,22.624154],[114.054034,22.624838],[114.051,22.626676],[114.051464,22.628943],[114.053026,22.629487],[114.053122,22.632252],[114.052149,22.632699],[114.052298,22.635593],[114.05585,22.63497],[114.056174,22.636524],[114.054183,22.640229],[114.054604,22.641387],[114.055937,22.642337],[114.055174,22.646325],[114.053394,22.647381],[114.050228,22.647167],[114.051131,22.650224],[114.054964,22.649052],[114.054517,22.659526],[114.056016,22.66041],[114.056507,22.662648],[114.054823,22.663812],[114.054183,22.664877],[114.054288,22.666101],[114.057612,22.665598],[114.059752,22.664565],[114.063638,22.668846],[114.067952,22.672694],[114.069312,22.674969],[114.072574,22.673127],[114.07403,22.673443],[114.075977,22.675239],[114.078722,22.674373],[114.079319,22.67281],[114.080371,22.671554],[114.080406,22.67026],[114.081397,22.669651],[114.081301,22.668325],[114.082555,22.665454],[114.0833,22.664463],[114.085353,22.663402],[114.08523,22.662034],[114.085905,22.660313],[114.089211,22.658875],[114.091799,22.661457],[114.092614,22.663402],[114.095052,22.665505],[114.098394,22.667897],[114.100604,22.668646],[114.100034,22.672238],[114.100113,22.675355],[114.099613,22.675802],[114.095289,22.683515],[114.09514,22.68479],[114.096657,22.687479],[114.097192,22.687781],[114.101121,22.688196],[114.101911,22.688838],[114.100218,22.689959],[114.098525,22.690117],[114.09628,22.692094],[114.095438,22.693313],[114.093895,22.694206],[114.093965,22.695899],[114.093439,22.700179],[114.097271,22.704054],[114.098841,22.704654],[114.100806,22.704654],[114.104042,22.705528],[114.104603,22.708193],[114.106498,22.709798],[114.10691,22.711826],[114.109278,22.71411],[114.109418,22.717408],[114.113365,22.721031]]]]}},{"type":"Feature","properties":{"adcode":440310,"name":"坪山区","center":[114.338441,22.69423],"centroid":[114.362823,22.689495],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":7,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.355782,22.765794],[114.353458,22.765994],[114.352178,22.768258],[114.35066,22.768923],[114.34909,22.767905],[114.347828,22.765287],[114.348029,22.764399],[114.347477,22.761126],[114.345653,22.760489],[114.3461,22.759782],[114.344433,22.758541],[114.344714,22.755193],[114.343197,22.755235],[114.342364,22.7545],[114.341346,22.754918],[114.340671,22.754198],[114.339075,22.749822],[114.337365,22.747413],[114.337996,22.746395],[114.340075,22.74646],[114.340522,22.74394],[114.339899,22.741447],[114.339049,22.740991],[114.338628,22.736006],[114.339101,22.734816],[114.340882,22.733904],[114.341022,22.729263],[114.340154,22.724231],[114.340461,22.721877],[114.341811,22.719352],[114.341601,22.715333],[114.337514,22.711817],[114.336093,22.711235],[114.333304,22.711175],[114.328752,22.710561],[114.328945,22.707412],[114.328086,22.70444],[114.32684,22.705105],[114.326051,22.704268],[114.323911,22.704561],[114.324104,22.703472],[114.323271,22.702472],[114.321359,22.703575],[114.320605,22.702328],[114.32349,22.700407],[114.322561,22.691787],[114.322876,22.688349],[114.31857,22.691191],[114.316097,22.68666],[114.310291,22.685795],[114.302415,22.685837],[114.302082,22.684381],[114.298995,22.681222],[114.297206,22.680678],[114.293908,22.681608],[114.291356,22.679626],[114.290541,22.677612],[114.289751,22.677104],[114.287629,22.677467],[114.285971,22.67824],[114.285085,22.678086],[114.283814,22.676797],[114.283165,22.675392],[114.28127,22.67563],[114.276745,22.674815],[114.276166,22.674048],[114.273351,22.673489],[114.271939,22.670619],[114.272421,22.669837],[114.270772,22.668204],[114.271237,22.666929],[114.269957,22.666594],[114.269238,22.665259],[114.26801,22.664654],[114.267001,22.66203],[114.267624,22.660527],[114.267387,22.657535],[114.26979,22.653831],[114.274272,22.651136],[114.274482,22.649801],[114.27571,22.646772],[114.276806,22.645818],[114.280174,22.643751],[114.280104,22.64297],[114.28113,22.641527],[114.283358,22.641308],[114.285892,22.640512],[114.293645,22.640135],[114.29532,22.639698],[114.297302,22.633918],[114.304827,22.630511],[114.306853,22.62986],[114.310177,22.628105],[114.31058,22.62616],[114.313571,22.624335],[114.316921,22.624382],[114.318421,22.62467],[114.31893,22.625838],[114.320877,22.625689],[114.322069,22.624856],[114.322762,22.623572],[114.323806,22.623046],[114.328428,22.622869],[114.329463,22.623409],[114.331848,22.625987],[114.335216,22.62589],[114.339294,22.623358],[114.339899,22.625447],[114.342408,22.626606],[114.343311,22.626592],[114.343758,22.628389],[114.344968,22.629152],[114.344328,22.631279],[114.3461,22.631698],[114.347661,22.630795],[114.350853,22.631447],[114.351809,22.629022],[114.352064,22.62696],[114.354168,22.626257],[114.354388,22.627239],[114.35758,22.624219],[114.359773,22.623735],[114.360948,22.622664],[114.36293,22.623307],[114.365193,22.622175],[114.366894,22.623474],[114.366385,22.62898],[114.367218,22.629455],[114.36785,22.631763],[114.367525,22.632736],[114.37099,22.631866],[114.372033,22.632843],[114.3742,22.632182],[114.375357,22.632596],[114.37498,22.634877],[114.373375,22.635342],[114.375077,22.638032],[114.374866,22.638618],[114.372104,22.639023],[114.371314,22.640331],[114.372665,22.642151],[114.374892,22.643537],[114.375699,22.644487],[114.376918,22.643975],[114.378278,22.641308],[114.380891,22.639209],[114.381014,22.638092],[114.382584,22.638218],[114.38539,22.63719],[114.386715,22.637688],[114.388706,22.636445],[114.389968,22.637022],[114.389293,22.640075],[114.389723,22.64209],[114.394318,22.643081],[114.395783,22.6439],[114.3968,22.64518],[114.400607,22.646753],[114.402659,22.646785],[114.404176,22.647865],[114.404615,22.648754],[114.406702,22.649182],[114.407474,22.648489],[114.408851,22.648628],[114.410298,22.649717],[114.40757,22.652174],[114.409228,22.652388],[114.410736,22.650527],[114.41221,22.652053],[114.412131,22.653486],[114.413858,22.654352],[114.418182,22.653607],[114.418893,22.653054],[114.419849,22.654599],[114.42112,22.654775],[114.420945,22.655739],[114.422988,22.656827],[114.424751,22.656883],[114.426821,22.658279],[114.428934,22.660983],[114.430732,22.66242],[114.43175,22.663542],[114.432311,22.665552],[114.431706,22.667794],[114.430864,22.667711],[114.429601,22.668762],[114.428549,22.672424],[114.428663,22.673945],[114.427926,22.675634],[114.428171,22.676751],[114.430075,22.677351],[114.43139,22.677258],[114.434109,22.678156],[114.436608,22.68011],[114.43681,22.681222],[114.441309,22.68219],[114.444844,22.687688],[114.445344,22.688986],[114.444809,22.692443],[114.442458,22.695848],[114.441993,22.697569],[114.440134,22.696816],[114.438213,22.697095],[114.436284,22.697965],[114.433819,22.699811],[114.430469,22.700621],[114.426374,22.699932],[114.423971,22.703249],[114.423857,22.707124],[114.425128,22.7089],[114.422971,22.710128],[114.421708,22.711668],[114.420576,22.714017],[114.419103,22.712496],[114.417068,22.711649],[114.416393,22.712575],[114.413832,22.712417],[114.411982,22.711477],[114.407746,22.711226],[114.409228,22.713575],[114.407711,22.716124],[114.407395,22.717868],[114.404895,22.721473],[114.403553,22.722608],[114.403413,22.723947],[114.405413,22.725807],[114.406991,22.725705],[114.406535,22.727682],[114.407509,22.731095],[114.411447,22.733662],[114.412631,22.735471],[114.41392,22.736248],[114.413271,22.738359],[114.413911,22.740164],[114.41513,22.742154],[114.415919,22.744335],[114.415718,22.745883],[114.414876,22.747339],[114.414367,22.749576],[114.414201,22.752384],[114.418366,22.752803],[114.420541,22.753886],[114.420831,22.755797],[114.420498,22.756857],[114.417507,22.757308],[114.41791,22.758038],[114.419875,22.758215],[114.421225,22.758815],[114.420787,22.759856],[114.422813,22.76028],[114.422594,22.761465],[114.421252,22.762284],[114.419752,22.761953],[114.419147,22.760768],[114.417691,22.765138],[114.418209,22.766417],[114.415016,22.769276],[114.414657,22.77248],[114.413946,22.773661],[114.412368,22.774739],[114.411622,22.776715],[114.410684,22.777877],[114.408816,22.77797],[114.406816,22.778989],[114.405843,22.780718],[114.404685,22.781322],[114.401177,22.779444],[114.399353,22.778854],[114.396327,22.77732],[114.395467,22.771717],[114.395125,22.771503],[114.395432,22.768639],[114.396125,22.765678],[114.394836,22.759787],[114.389819,22.757499],[114.388109,22.757215],[114.38632,22.759596],[114.383435,22.759629],[114.38054,22.760205],[114.379637,22.760996],[114.376629,22.762618],[114.372182,22.763585],[114.369227,22.764655],[114.368131,22.765882],[114.365631,22.766059],[114.361676,22.764195],[114.358685,22.763771],[114.355966,22.764906],[114.355782,22.765794]]]]}},{"type":"Feature","properties":{"adcode":440311,"name":"光明区","center":[113.935895,22.748816],"centroid":[113.931239,22.763198],"childrenNum":0,"level":"district","parent":{"adcode":440300},"subFeatureIndex":8,"acroutes":[100000,440000,440300]},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.910957,22.829993],[113.907475,22.829621],[113.905204,22.828464],[113.903046,22.828208],[113.901029,22.828928],[113.898301,22.82786],[113.89731,22.826833],[113.89767,22.82601],[113.896205,22.823923],[113.895144,22.821432],[113.895565,22.820015],[113.894855,22.819085],[113.894039,22.819424],[113.894206,22.820479],[113.892776,22.819108],[113.891084,22.8206],[113.892724,22.822013],[113.890856,22.82153],[113.890952,22.820335],[113.890198,22.819847],[113.889531,22.821609],[113.88833,22.819582],[113.88826,22.818021],[113.888935,22.816896],[113.887049,22.814293],[113.886918,22.813536],[113.88462,22.810989],[113.884883,22.809943],[113.883559,22.806178],[113.883515,22.80331],[113.882568,22.800981],[113.881778,22.800005],[113.881717,22.797686],[113.879402,22.797128],[113.877165,22.795343],[113.865887,22.790281],[113.864247,22.790397],[113.862195,22.788644],[113.859984,22.78877],[113.857809,22.788017],[113.858958,22.787166],[113.858967,22.783624],[113.859485,22.781871],[113.861335,22.778273],[113.862554,22.778649],[113.860818,22.776613],[113.860107,22.774079],[113.860502,22.772973],[113.863712,22.772694],[113.863247,22.771471],[113.863966,22.770192],[113.865729,22.769937],[113.865773,22.768746],[113.868176,22.768174],[113.868728,22.765785],[113.869763,22.765199],[113.86979,22.764218],[113.874157,22.762093],[113.873017,22.760717],[113.8767,22.758048],[113.878042,22.755714],[113.877034,22.751161],[113.879472,22.749659],[113.879814,22.748381],[113.87941,22.747269],[113.881375,22.745995],[113.880901,22.744791],[113.88205,22.742754],[113.883033,22.742066],[113.884032,22.740243],[113.882498,22.738038],[113.881629,22.735788],[113.882568,22.734193],[113.88098,22.732067],[113.879796,22.731109],[113.878174,22.731049],[113.877069,22.728258],[113.877858,22.726454],[113.878656,22.726012],[113.87877,22.724445],[113.878174,22.723194],[113.879726,22.720445],[113.881743,22.719138],[113.882313,22.717794],[113.881901,22.715505],[113.879866,22.714794],[113.878104,22.714859],[113.875034,22.713366],[113.875376,22.711803],[113.876841,22.71117],[113.875709,22.709301],[113.874175,22.707845],[113.87585,22.704458],[113.876595,22.704672],[113.876928,22.703081],[113.877955,22.702258],[113.880673,22.702398],[113.880454,22.700765],[113.87863,22.700686],[113.877393,22.701249],[113.8777,22.699421],[113.878805,22.698369],[113.879726,22.696211],[113.879524,22.695695],[113.875885,22.693824],[113.874297,22.691694],[113.876692,22.689628],[113.87742,22.689787],[113.879349,22.687688],[113.879875,22.686218],[113.882129,22.687544],[113.883673,22.68994],[113.889873,22.68901],[113.891119,22.688019],[113.893978,22.688549],[113.8976,22.691364],[113.898187,22.692303],[113.896942,22.694104],[113.898766,22.693736],[113.899556,22.692513],[113.901555,22.692047],[113.904046,22.690819],[113.905204,22.690898],[113.905142,22.692154],[113.904081,22.692927],[113.903906,22.695025],[113.90323,22.695727],[113.901485,22.694973],[113.901739,22.696797],[113.903651,22.697369],[113.906256,22.700621],[113.905528,22.702449],[113.90623,22.705123],[113.911606,22.705342],[113.913246,22.706361],[113.913798,22.709045],[113.916245,22.71018],[113.916833,22.709249],[113.919596,22.709803],[113.921165,22.709212],[113.925156,22.709468],[113.927454,22.706933],[113.92762,22.705719],[113.929208,22.706528],[113.929594,22.7073],[113.931313,22.708031],[113.935093,22.706398],[113.937276,22.703095],[113.938276,22.702835],[113.940425,22.704202],[113.940925,22.706379],[113.938592,22.708714],[113.940863,22.708514],[113.94288,22.711128],[113.946617,22.711249],[113.950519,22.714059],[113.951589,22.71584],[113.952493,22.718175],[113.953142,22.717463],[113.954685,22.717901],[113.955755,22.716947],[113.956571,22.718849],[113.957948,22.71798],[113.958763,22.71604],[113.959579,22.71564],[113.959877,22.714338],[113.961245,22.71418],[113.96164,22.715561],[113.962754,22.715445],[113.963736,22.713743],[113.965674,22.712673],[113.967858,22.712356],[113.968454,22.711012],[113.970261,22.710101],[113.972024,22.711287],[113.973953,22.71184],[113.974725,22.711487],[113.97726,22.712752],[113.979391,22.714091],[113.981671,22.716891],[113.982688,22.71645],[113.984109,22.717222],[113.985855,22.718863],[113.98724,22.721082],[113.988047,22.723291],[113.990678,22.724575],[113.991169,22.72564],[113.992923,22.726951],[113.99566,22.729867],[113.996905,22.730319],[113.999668,22.733225],[114.002307,22.734718],[114.003465,22.736532],[114.005228,22.737122],[114.006175,22.735969],[114.008754,22.735811],[114.008341,22.736225],[114.008508,22.738829],[114.009201,22.73994],[114.008868,22.744019],[114.00714,22.745284],[114.006175,22.746516],[114.003746,22.748683],[114.006166,22.750803],[114.00471,22.751975],[114.004202,22.750324],[114.000878,22.751756],[113.999624,22.753737],[113.997677,22.754133],[113.996624,22.753342],[113.994721,22.753742],[113.993581,22.753468],[113.992327,22.753979],[113.99323,22.755825],[113.992792,22.757713],[113.993625,22.759066],[113.996563,22.758564],[113.99851,22.760921],[114.000115,22.76206],[114.002483,22.762972],[114.002693,22.763618],[114.000501,22.767128],[113.9963,22.768523],[113.995326,22.771285],[113.998738,22.774167],[113.998431,22.776552],[113.99687,22.777166],[113.996695,22.778184],[113.994151,22.782438],[113.993941,22.784456],[113.992511,22.787831],[113.992871,22.788965],[113.990959,22.794046],[113.991169,22.795598],[113.990862,22.800205],[113.984469,22.800293],[113.980926,22.799731],[113.981127,22.800884],[113.984092,22.800754],[113.984592,22.803556],[113.982522,22.802743],[113.982022,22.802004],[113.979943,22.800819],[113.9784,22.800921],[113.978663,22.800024],[113.977523,22.798955],[113.977768,22.800791],[113.976269,22.800256],[113.975979,22.801558],[113.974927,22.801376],[113.97576,22.799215],[113.974997,22.798439],[113.973129,22.800279],[113.972269,22.802255],[113.972726,22.803826],[113.974199,22.805439],[113.976172,22.805662],[113.9784,22.806513],[113.977172,22.807373],[113.97697,22.809097],[113.975725,22.810417],[113.973734,22.810724],[113.972348,22.812499],[113.969121,22.81289],[113.968568,22.812179],[113.966104,22.812429],[113.964867,22.813415],[113.965174,22.814911],[113.964762,22.815846],[113.961394,22.813368],[113.959062,22.81341],[113.958895,22.814256],[113.957351,22.814674],[113.956974,22.814005],[113.954983,22.815051],[113.955422,22.816775],[113.954676,22.816761],[113.954475,22.81849],[113.95558,22.819643],[113.95465,22.821032],[113.952589,22.82219],[113.950502,22.822706],[113.948029,22.825155],[113.947879,22.82686],[113.946897,22.827488],[113.9441,22.827697],[113.942766,22.828817],[113.939767,22.8293],[113.939171,22.830676],[113.937364,22.831113],[113.93782,22.832711],[113.931286,22.831921],[113.929488,22.83201],[113.924524,22.830578],[113.920648,22.831313],[113.916763,22.830248],[113.915535,22.829035],[113.914281,22.830109],[113.910957,22.829993]]]]}}]}`;

// 各区 × 各月 双靶标阳性率 (Ct<37)
const mapData = {
  dual: {
    futian:   [35.29, 28.00, 11.11, 37.04, 16.67, 11.24, 11.63, 0,     null,  null,  null],
    luohu:    [42.86, 10.53, 39.29, 22.22,  4.00,  9.57, 24.08, 0,    11.11,  3.23,     0],
    pingshan: [null,  null,  null,  18.60,  null,   0,    null,  null,  null,  null,  null],
  },
  npos: {
    futian:   [52.94, 56.00, 22.22, 51.85, 33.33, 21.53, 20.16, 0,     null,  null,  null],
    luohu:    [64.29, 52.63, 57.14, 43.33, 36.00, 21.28, 33.33, 87.5,  100,   100,   50],
    pingshan: [null,  null,  null,  44.19,  null,   8.33,  null,  null,  null,  null,  null],
  },
  ic: {
    futian:   [82.35, 76.00, 77.78, 70.37, 66.67, 60.77, 93.44, 50,    null,  null,  null],
    luohu:    [57.14, 52.63, 50.00, 53.33, 68.00, 51.06, 87.50, 25,   33.33, 38.71,  80],
    pingshan: [null,  null,  null,  60.47,  null,  44.44,  null,  null,  null,  null,  null],
  }
};

// 颜色映射
function rateToColor(val, metric) {
  if (val === null || val === undefined) return '#cdd9e5';
  if (metric === 'ic') {
    const t = Math.max(0, Math.min(1, val / 100));
    return lerpColor('#e74c3c', '#27ae60', t);
  }
  const maxVal = metric === 'npos' ? 100 : 45;
  const t = Math.max(0, Math.min(1, val / maxVal));
  if (t < 0.25) return lerpColor('#eaf5fb', '#a8d4f5', t * 4);
  if (t < 0.5)  return lerpColor('#a8d4f5', '#1a7abf', (t - 0.25) * 4);
  if (t < 0.75) return lerpColor('#1a7abf', '#e8a00a', (t - 0.5) * 4);
  return lerpColor('#e8a00a', '#e74c3c', (t - 0.75) * 4);
}

function lerpColor(c1, c2, t) {
  const r1=parseInt(c1.slice(1,3),16),g1=parseInt(c1.slice(3,5),16),b1=parseInt(c1.slice(5,7),16);
  const r2=parseInt(c2.slice(1,3),16),g2=parseInt(c2.slice(3,5),16),b2=parseInt(c2.slice(5,7),16);
  const r=Math.round(r1+(r2-r1)*t),g=Math.round(g1+(g2-g1)*t),b=Math.round(b1+(b2-b1)*t);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

// ============================================================
//  Pure Canvas Map — no external tile dependency
// ============================================================

let mapMetric    = 'dual';
let mapPlayTimer = null;
let mapPlaying   = false;
let mapReady     = false;
let mapIdx       = 0;              // 当前月份索引
let mapCanvas    = null;           // canvas element
let mapCtx       = null;           // 2d context
let geoFeatures  = [];             // parsed district features
let hitDistrict  = null;           // 鼠标悬停的区
let mapDPR       = 1;              // devicePixelRatio for HiDPI

// 缩放拖拽状态
let mapZoomLevel = 1;
let mapPanX = 0, mapPanY = 0;
let mapDragStartX = 0, mapDragStartY = 0;
let mapPanStartX = 0, mapPanStartY = 0;
let mapIsDragging = false;

// 月份过渡动画
let mapAnimFrame  = null;
let mapAnimFromIdx = -1;
let mapAnimToIdx   = -1;
let mapAnimProgress = 1;  // 1 = complete
const MAP_ANIM_DURATION = 400; // ms

// 点击下钻状态
let mapSelectedDistrict = null;  // 当前选中区（null = 无）

const SZ_BBOX = { minLon:113.7515, maxLon:114.6285, minLat:22.3963, maxLat:22.8617 };
const SZ_CENTER_LAT = 22.6290;
const SZ_CENTER_LON = 114.1900;

const DISTRICT_META = {
  futian:   { zh:'福田区',   en:'Futian',   color:'#1a7abf', study:true,  highlightColor:'#ff6b35' },
  luohu:    { zh:'罗湖区',   en:'Luohu',    color:'#e74c3c', study:true,  highlightColor:'#ff6b35' },
  pingshan: { zh:'坪山区',   en:'Pingshan', color:'#27ae60', study:true,  highlightColor:'#ff6b35' },
  nanshan:  { zh:'南山区',   en:'Nanshan',  color:'#95a5a6', study:false, highlightColor:'#95a5a6' },
  baoan:    { zh:'宝安区',   en:'Baoan',    color:'#95a5a6', study:false, highlightColor:'#95a5a6' },
  longgang: { zh:'龙岗区',   en:'Longgang', color:'#95a5a6', study:false, highlightColor:'#95a5a6' },
  yantian:  { zh:'盐田区',   en:'Yantian',  color:'#95a5a6', study:false, highlightColor:'#95a5a6' },
  longhua:  { zh:'龙华区',   en:'Longhua',  color:'#95a5a6', study:false, highlightColor:'#95a5a6' },
  guangming:{ zh:'光明区',   en:'Guangming',color:'#95a5a6', study:false, highlightColor:'#95a5a6' },
};

function initCanvasMap() {
  try {
    console.log('[MAP] initCanvasMap called, mapReady=' + mapReady);
    if (mapReady) { console.log('[MAP] already initialized, returning'); return; }
    mapCanvas = document.getElementById('szLeafletMap');
    if (!mapCanvas) {
      console.error('[MAP] #szLeafletMap element NOT FOUND!');
      var le = document.getElementById('mapLoading');
      if (le) { le.innerHTML = '<span style="color:red;font-weight:bold;">Error: Canvas element #szLeafletMap not found</span>'; }
      return;
    }
    mapDPR = window.devicePixelRatio || 1;
    mapCtx = mapCanvas.getContext('2d');
    if (!mapCtx) { console.error('[MAP] Cannot get 2D context'); return; }

    // Parse embedded GeoJSON (parse once, cache centroid)
    const gj = JSON.parse(SZ_GEOJSON);
    console.log('[MAP] GeoJSON parsed, features:', gj.features.length);

    const nameToKey = {
      '福田区':'futian','罗湖区':'luohu','南山区':'nanshan','宝安区':'baoan',
      '龙岗区':'longgang','盐田区':'yantian','龙华区':'longhua','坪山区':'pingshan','光明区':'guangming'
    };
    geoFeatures = (gj.features || []).map(f => ({
      name: f.properties.name,
      key: nameToKey[f.properties.name],
      geomType: f.geometry.type,
      coords: f.geometry.coordinates,
      centroid: f.properties.centroid || null,
    })).filter(f => f.key);
    console.log('[MAP] geoFeatures parsed:', geoFeatures.length);

    mapReady = true;

    // Hide loading, show canvas
    const loadingEl = document.getElementById('mapLoading');
    if (loadingEl) loadingEl.style.display = 'none';
    mapCanvas.style.display = 'block';
    mapCanvas.style.visibility = '';

    // Bind mouse events
    mapCanvas.addEventListener('mousemove', onMapMouseMove);
    mapCanvas.addEventListener('mousedown', onMapMouseDown);
    mapCanvas.addEventListener('mouseup', onMapMouseUp);
    mapCanvas.addEventListener('mouseleave', onMapMouseLeave);
    mapCanvas.addEventListener('click', onMapClick);
    mapCanvas.addEventListener('wheel', onMapWheel, { passive: false });
    mapCanvas.addEventListener('dblclick', (e) => { e.preventDefault(); resetMapView(); });
    mapCanvas.style.cursor = 'grab';

    // Show zoom hint briefly
    const zoomHint = document.getElementById('mapZoomHint');
    if (zoomHint) {
      zoomHint.style.display = 'block';
      setTimeout(() => { zoomHint.style.display = 'none'; }, 4000);
    }

    // Listen for window resize to re-apply DPI
    window.addEventListener('resize', () => { if (mapReady) { renderMap(mapIdx); } });

    // Initial render
    updateMap(0);
    console.log('[MAP] initCanvasMap completed successfully! DPR=' + mapDPR);
  } catch(err) {
    console.error('[MAP] FATAL ERROR in initCanvasMap:', err);
    var le = document.getElementById('mapLoading');
    if (le) {
      le.innerHTML = '<div style="color:#c0392b;padding:20px;text-align:left;"><strong style="font-size:14px;">⚠ Map Init Error:</strong><pre style="margin-top:8px;white-space:pre-wrap;font-size:12px;">' +
        String(err.stack || err.message).replace(/</g,'&lt;') + '</pre></div>';
      le.style.display = '';
    }
  }
}

function resizeCanvas() {
  if (!mapCanvas) return;
  const parent = mapCanvas.parentElement;
  if (!parent) return;
  // CSS display size
  const displayW = parent.clientWidth || 600;
  const displayH = 380;
  // Backing store size = display × DPR
  mapCanvas.width  = Math.round(displayW * mapDPR);
  mapCanvas.height = Math.round(displayH * mapDPR);
  mapCanvas.style.width  = displayW + 'px';
  mapCanvas.style.height = displayH + 'px';
  // Scale context so all drawing uses CSS-pixel coordinates
  mapCtx.setTransform(mapDPR, 0, 0, mapDPR, 0, 0);
}

function lonLatToXY(lon, lat, w, h) {
  let x = (lon - SZ_BBOX.minLon) / (SZ_BBOX.maxLon - SZ_BBOX.minLon) * w;
  let y = (1 - (lat - SZ_BBOX.minLat) / (SZ_BBOX.maxLat - SZ_BBOX.minLat)) * h;
  // Apply zoom + pan
  x = (x - w / 2) * mapZoomLevel + w / 2 + mapPanX;
  y = (y - h / 2) * mapZoomLevel + h / 2 + mapPanY;
  return [x, y];
}

// ============================================================
//  Catmull-Rom → Bezier smooth curve through polygon points
// ============================================================
function drawSmoothPolygon(ctx, points) {
  if (points.length < 3) {
    ctx.beginPath();
    points.forEach((p, i) => i === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]));
    ctx.closePath();
    return;
  }
  const n = points.length;
  ctx.beginPath();
  // Start: midpoint between last and first
  let mx = (points[n - 1][0] + points[0][0]) / 2;
  let my = (points[n - 1][1] + points[0][1]) / 2;
  ctx.moveTo(mx, my);
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    const endX = (p1[0] + p2[0]) / 2;
    const endY = (p1[1] + p2[1]) / 2;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
  }
  ctx.closePath();
}

function renderMap(idx) {
  if (!mapCtx || !mapReady) return;
  resizeCanvas();
  const w = mapCanvas.width / mapDPR, h = mapCanvas.height / mapDPR;

  // 背景：淡蓝灰
  mapCtx.fillStyle = '#eef3f7';
  mapCtx.fillRect(0, 0, w, h);

  // Smooth polygon rendering with shadow
  mapCtx.save();
  mapCtx.imageSmoothingEnabled = true;
  mapCtx.imageSmoothingQuality = 'high';

  // 画所有区
  geoFeatures.forEach(f => {
    const meta = DISTRICT_META[f.key];
    if (!meta) return;
    const val = mapData[mapMetric][f.key] ? mapData[mapMetric][f.key][idx] : null;
    const fillColor = rateToColor(val, mapMetric);
    const isHovered = hitDistrict === f.key;
    const isSelected = mapSelectedDistrict === f.key;
    const isStudy   = meta.study;

    const polygons = f.geomType === 'MultiPolygon' ? f.coords : [f.coords];
    polygons.forEach(polygon => {
      polygon.forEach(linearRing => {
        if (!linearRing || !linearRing.length) return;
        const pts = linearRing.map(pt => lonLatToXY(pt[0], pt[1], w, h));

        // Shadow for study districts
        if (isStudy) {
          mapCtx.save();
          mapCtx.shadowColor = isHovered || isSelected ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.15)';
          mapCtx.shadowBlur = isHovered || isSelected ? 14 : 6;
          mapCtx.shadowOffsetX = isHovered || isSelected ? 2 : 0;
          mapCtx.shadowOffsetY = isHovered || isSelected ? 2 : 1;
          drawSmoothPolygon(mapCtx, pts);
          mapCtx.fillStyle = fillColor;
          mapCtx.fill();
          mapCtx.restore();
        }

        // Main fill
        drawSmoothPolygon(mapCtx, pts);
        // Gradient fill for study districts
        if (isStudy && val !== null && val !== undefined) {
          const bounds = getPolygonBounds(pts);
          const gradient = mapCtx.createLinearGradient(bounds.minX, bounds.minY, bounds.maxX, bounds.maxY);
          gradient.addColorStop(0, fillColor);
          gradient.addColorStop(1, adjustBrightness(fillColor, -15));
          mapCtx.fillStyle = gradient;
        } else {
          mapCtx.fillStyle = fillColor;
        }
        mapCtx.fill();

        // Border
        mapCtx.strokeStyle = isHovered || isSelected ? '#fff' : (isStudy ? 'rgba(255,255,255,0.9)' : '#c8d6e5');
        mapCtx.lineWidth = (isHovered || isSelected) ? 2.5 / mapZoomLevel : (isStudy ? 1.5 / mapZoomLevel : 0.8 / mapZoomLevel);
        mapCtx.stroke();
      });
    });

    // 标注区名（使用缓存的centroid）
    if (f.centroid) {
      let [cx, cy] = lonLatToXY(f.centroid[0], f.centroid[1], w, h);
      // 龙岗区形状窄长，centroid靠近边界，需向右下微调
      if (meta.key === 'longgang') { cx += 80; cy += 50; }
      const label = window.currentLang === 'zh' ? meta.zh : meta.en;
      if (isStudy) {
        const baseFontSize = Math.max(11, 17 / mapZoomLevel);
        const fontSize = isHovered || isSelected ? baseFontSize + 3 : baseFontSize;
        mapCtx.font = `bold ${fontSize}px 'Times New Roman',sans-serif`;
        mapCtx.textAlign = 'center';
        mapCtx.textBaseline = 'middle';
        mapCtx.strokeStyle = 'rgba(255,255,255,0.9)';
        mapCtx.lineWidth = 3.5 / mapZoomLevel;
        mapCtx.lineJoin = 'round';
        mapCtx.strokeText(label, cx, cy);
        mapCtx.fillStyle = isHovered || isSelected ? '#0d47a1' : '#1a3a5c';
        mapCtx.fillText(label, cx, cy);
      } else {
        // 非研究区：小字灰色标注
        const fs = Math.max(8, 11 / mapZoomLevel);
        mapCtx.font = `${fs}px 'Times New Roman',sans-serif`;
        mapCtx.textAlign = 'center';
        mapCtx.textBaseline = 'middle';
        mapCtx.strokeStyle = 'rgba(255,255,255,0.7)';
        mapCtx.lineWidth = 2.5 / mapZoomLevel;
        mapCtx.lineJoin = 'round';
        mapCtx.strokeText(label, cx, cy);
        mapCtx.fillStyle = 'rgba(80,90,110,0.65)';
        mapCtx.fillText(label, cx, cy);
      }
    }
  });

  // ── 第二轮：统一画所有区的分隔线（覆盖在填充之上） ──
  mapCtx.save();
  mapCtx.setLineDash([]);
  mapCtx.strokeStyle = 'rgba(60,70,85,0.55)';
  mapCtx.lineWidth = 1.4 / mapZoomLevel;
  mapCtx.lineJoin = 'round';
  mapCtx.imageSmoothingEnabled = true;
  geoFeatures.forEach(f => {
    const polygons = f.geomType === 'MultiPolygon' ? f.coords : [f.coords];
    polygons.forEach(polygon => {
      polygon.forEach(linearRing => {
        if (!linearRing || !linearRing.length) return;
        const pts = linearRing.map(pt => lonLatToXY(pt[0], pt[1], w, h));
        drawSmoothPolygon(mapCtx, pts);
        mapCtx.stroke();
      });
    });
  });
  mapCtx.restore();

  mapCtx.restore();

  // 画深圳外框（粗线）
  mapCtx.strokeStyle = '#555';
  mapCtx.lineWidth = 1.2 / mapZoomLevel;
  mapCtx.setLineDash([]);

  // Zoom indicator
  if (mapZoomLevel !== 1 || mapPanX !== 0 || mapPanY !== 0) {
    mapCtx.save();
    mapCtx.font = "11px 'Times New Roman',sans-serif";
    mapCtx.fillStyle = 'rgba(0,0,0,0.4)';
    mapCtx.textAlign = 'right';
    mapCtx.textBaseline = 'top';
    mapCtx.fillText(`${(mapZoomLevel * 100).toFixed(0)}%`, w - 8, 6);
    mapCtx.restore();
  }
}

function getPolygonBounds(pts) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  pts.forEach(p => {
    if (p[0] < minX) minX = p[0];
    if (p[1] < minY) minY = p[1];
    if (p[0] > maxX) maxX = p[0];
    if (p[1] > maxY) maxY = p[1];
  });
  return { minX, minY, maxX, maxY };
}

function adjustBrightness(hex, amount) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));
  return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
}

function onMapMouseMove(e) {
  if (!mapCanvas || !mapReady) return;
  const rect = mapCanvas.getBoundingClientRect();

  // If dragging, update pan
  if (e.buttons === 1) {
    const dx = e.clientX - mapDragStartX;
    const dy = e.clientY - mapDragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      mapIsDragging = true;
      mapPanX = mapPanStartX + dx;
      mapPanY = mapPanStartY + dy;
      renderMap(mapIdx);
      hideMapTip();
      return;
    }
  }

  // Hover detection
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const w = rect.width, h = rect.height;

  let found = null;
  geoFeatures.forEach(f => {
    if (!DISTRICT_META[f.key] || !DISTRICT_META[f.key].study) return;
    const polygons = f.geomType === 'MultiPolygon' ? f.coords : [f.coords];
    for (const polygon of polygons) {
      for (const ring of polygon) {
        if (!ring || !ring.length) continue;
        if (pointInPolygon(mx, my, ring, w, h)) {
          found = f.key;
          break;
        }
      }
      if (found) return;
    }
  });

  if (found !== hitDistrict) {
    hitDistrict = found;
    renderMap(mapIdx);
    mapCanvas.style.cursor = found ? 'pointer' : 'grab';
    if (found) showMapTip(e, found);
    else       hideMapTip();
  } else if (found) {
    moveTip(e);
  }
}

function onMapMouseDown(e) {
  if (!mapCanvas || !mapReady) return;
  mapIsDragging = false;
  mapDragStartX = e.clientX;
  mapDragStartY = e.clientY;
  mapPanStartX = mapPanX;
  mapPanStartY = mapPanY;
  mapCanvas.style.cursor = 'grabbing';
}

function onMapMouseUp(e) {
  if (!mapCanvas || !mapReady) return;
  mapCanvas.style.cursor = hitDistrict ? 'pointer' : 'grab';
  // mapIsDragging is set in onMapMouseMove when distance > 3px
  // Don't reset it here so onMapClick can check it
}

function onMapMouseLeave(e) {
  if (!mapCanvas || !mapReady) return;
  mapCanvas.style.cursor = 'grab';
  hitDistrict = null;
  hideMapTip();
  if (mapIsDragging) {
    mapIsDragging = false;
    renderMap(mapIdx);
  }
}

function onMapWheel(e) {
  e.preventDefault();
  if (!mapCanvas || !mapReady) return;
  const rect = mapCanvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  const zoomFactor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
  const newZoom = Math.max(1, Math.min(5, mapZoomLevel * zoomFactor));
  const scale = newZoom / mapZoomLevel;

  // Zoom toward mouse: pan adjusts so the point under cursor stays fixed
  mapPanX = mx - scale * (mx - mapPanX);
  mapPanY = my - scale * (my - mapPanY);

  mapZoomLevel = newZoom;
  renderMap(mapIdx);
}

function onMapClick(e) {
  if (!mapCanvas || !mapReady) return;
  if (mapIsDragging) { mapIsDragging = false; return; }
  if (!hitDistrict) {
    // Clicked empty area → deselect + reset zoom
    mapSelectedDistrict = null;
    resetMapView();
    return;
  }
  // Toggle selection on study districts
  mapSelectedDistrict = (mapSelectedDistrict === hitDistrict) ? null : hitDistrict;
  if (mapSelectedDistrict) {
    showDistrictDetail(e, mapSelectedDistrict);
  } else {
    hideMapTip();
  }
  renderMap(mapIdx);
}

function resetMapView() {
  mapZoomLevel = 1;
  mapPanX = 0;
  mapPanY = 0;
  mapSelectedDistrict = null;
  renderMap(mapIdx);
}

function showDistrictDetail(evt, key) {
  const idx = mapIdx;
  const meta = DISTRICT_META[key];
  const name = window.currentLang === 'zh' ? meta.zh : meta.en;
  const t = I18N[window.currentLang];

  // Build 11-month trend data
  const months_t = months.map((m, i) => {
    const d = mapData.dual[key][i];
    const n = mapData.npos[key][i];
    const ic = mapData.ic[key][i];
    return { month: m, dual: d, npos: n, ic: ic };
  });

  const fmt = v => v === null ? '--' : v.toFixed(1);
  const rows = months_t.map(d =>
    `<tr><td style="padding:2px 8px;font-size:11px;border-bottom:1px solid rgba(255,255,255,.15);">${d.month}</td>
         <td style="padding:2px 6px;font-size:11px;text-align:right;border-bottom:1px solid rgba(255,255,255,.15);">${fmt(d.dual)}%</td>
         <td style="padding:2px 6px;font-size:11px;text-align:right;border-bottom:1px solid rgba(255,255,255,.15);">${fmt(d.npos)}%</td>
         <td style="padding:2px 6px;font-size:11px;text-align:right;border-bottom:1px solid rgba(255,255,255,.15);">${fmt(d.ic)}%</td></tr>`
  ).join('');

  const dualLabel = t.map_dual_tip  || 'Dual';
  const nposLabel = t.map_npos_tip  || 'N Gene';
  const icLabel   = t.map_ic_tip    || 'IC';

  const tip = document.getElementById('mapTooltip');
  tip.innerHTML = `
    <div style="font-weight:700;font-size:13px;margin-bottom:8px;">${name}</div>
    <table style="width:100%;border-collapse:collapse;">
      <tr style="font-size:10px;color:rgba(255,255,255,.7);"><td></td><td style="text-align:right;padding:2px 6px;">${dualLabel}</td><td style="text-align:right;padding:2px 6px;">${nposLabel}</td><td style="text-align:right;padding:2px 6px;">${icLabel}</td></tr>
      ${rows}
    </table>
    <div style="font-size:9px;color:rgba(255,255,255,.5);margin-top:6px;text-align:center;">${t.map_click_outside || 'Click outside to close'}</div>
  `;
  tip.style.display = 'block';
  tip.style.minWidth = '220px';
  moveTip(evt);
}

function pointInPolygon(px, py, ring, w, h) {
  // ray casting algorithm (w, h in CSS pixels)
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = lonLatToXY(ring[i][0], ring[i][1], w, h);
    const [xj, yj] = lonLatToXY(ring[j][0], ring[j][1], w, h);
    const intersect = ((yi > py) !== (yj > py)) &&
      (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function updateMap(idx) {
  if (idx === mapIdx && mapAnimProgress >= 1) return; // no-op
  const prevIdx = mapIdx;

  // Cancel any running animation
  if (mapAnimFrame) { cancelAnimationFrame(mapAnimFrame); mapAnimFrame = null; }

  // If same frame or instant render needed
  if (!mapReady) { mapIdx = idx; return; }

  // Start transition animation
  mapAnimFromIdx = prevIdx;
  mapAnimToIdx = idx;
  mapAnimProgress = 0;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    mapAnimProgress = Math.min(1, elapsed / MAP_ANIM_DURATION);
    // Ease in-out cubic
    const t = mapAnimProgress < 0.5
      ? 4 * mapAnimProgress * mapAnimProgress * mapAnimProgress
      : 1 - Math.pow(-2 * mapAnimProgress + 2, 3) / 2;

    // Interpolate data for each district and render
    mapIdx = idx; // target index for label/card updates
    renderMapInterpolated(mapAnimFromIdx, mapAnimToIdx, t);

    if (mapAnimProgress < 1) {
      mapAnimFrame = requestAnimationFrame(animate);
    } else {
      mapAnimFrame = null;
      mapIdx = idx;
      renderMap(idx);
    }
  }
  mapAnimFrame = requestAnimationFrame(animate);

  // Update sidebar elements immediately (they don't animate)
  const t = I18N[window.currentLang];
  const cards = document.getElementById('mapDataCards');
  if (cards) {
    const regions = [
      { key:'futian',   color:'#1a7abf' },
      { key:'luohu',    color:'#e74c3c' },
      { key:'pingshan', color:'#27ae60' },
    ];
    cards.innerHTML = regions.map(r => {
      const meta = DISTRICT_META[r.key];
      const val = mapData[mapMetric][r.key][idx];
      const noDataStr = t.map_no_data || 'No Data';
      const valStr = val === null
        ? `<span style="color:#aaa">${noDataStr}</span>`
        : `<b style="color:${r.color}">${val.toFixed(1)}%</b>`;
      const name = window.currentLang === 'zh' ? meta.zh : meta.en;
      return `<div style="display:flex;align-items:center;justify-content:space-between;background:#f8fbff;border-radius:8px;padding:9px 14px;border-left:4px solid ${r.color};">
        <span style="font-size:12px;font-weight:600;color:var(--primary);font-family:'Times New Roman','Microsoft YaHei',sans-serif;">${name}</span>
        <span style="font-size:13px;font-family:'Times New Roman',sans-serif;">${valStr}</span>
      </div>`;
    }).join('');
  }

  const ml = document.getElementById('mapMonthLabel');
  if (ml) ml.textContent = months[idx];
  document.getElementById('mapSlider').value = idx;
}

function renderMapInterpolated(fromIdx, toIdx, t) {
  if (!mapCtx || !mapReady) return;
  resizeCanvas();
  const w = mapCanvas.width / mapDPR, h = mapCanvas.height / mapDPR;

  mapCtx.fillStyle = '#eef3f7';
  mapCtx.fillRect(0, 0, w, h);

  mapCtx.save();
  mapCtx.imageSmoothingEnabled = true;
  mapCtx.imageSmoothingQuality = 'high';

  geoFeatures.forEach(f => {
    const meta = DISTRICT_META[f.key];
    if (!meta) return;
    const isStudy = meta.study;

    // Interpolate value
    const valFrom = mapData[mapMetric][f.key] ? mapData[mapMetric][f.key][fromIdx] : null;
    const valTo   = mapData[mapMetric][f.key] ? mapData[mapMetric][f.key][toIdx] : null;
    let val;
    if (valFrom === null && valTo === null) val = null;
    else if (valFrom === null) val = valTo * t;
    else if (valTo === null) val = valFrom * (1 - t);
    else val = valFrom + (valTo - valFrom) * t;

    const fillColor = rateToColor(val, mapMetric);
    const isHovered = hitDistrict === f.key;
    const isSelected = mapSelectedDistrict === f.key;

    const polygons = f.geomType === 'MultiPolygon' ? f.coords : [f.coords];
    polygons.forEach(polygon => {
      polygon.forEach(linearRing => {
        if (!linearRing || !linearRing.length) return;
        const pts = linearRing.map(pt => lonLatToXY(pt[0], pt[1], w, h));

        if (isStudy) {
          mapCtx.save();
          mapCtx.shadowColor = isHovered || isSelected ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.15)';
          mapCtx.shadowBlur = isHovered || isSelected ? 14 : 6;
          mapCtx.shadowOffsetX = isHovered || isSelected ? 2 : 0;
          mapCtx.shadowOffsetY = isHovered || isSelected ? 2 : 1;
          drawSmoothPolygon(mapCtx, pts);
          mapCtx.fillStyle = fillColor;
          mapCtx.fill();
          mapCtx.restore();
        }

        drawSmoothPolygon(mapCtx, pts);
        if (isStudy && val !== null && val !== undefined) {
          const bounds = getPolygonBounds(pts);
          const gradient = mapCtx.createLinearGradient(bounds.minX, bounds.minY, bounds.maxX, bounds.maxY);
          gradient.addColorStop(0, fillColor);
          gradient.addColorStop(1, adjustBrightness(fillColor, -15));
          mapCtx.fillStyle = gradient;
        } else {
          mapCtx.fillStyle = fillColor;
        }
        mapCtx.fill();

        mapCtx.strokeStyle = isHovered || isSelected ? '#fff' : (isStudy ? 'rgba(255,255,255,0.9)' : '#c8d6e5');
        mapCtx.lineWidth = (isHovered || isSelected) ? 2.5 / mapZoomLevel : (isStudy ? 1.5 / mapZoomLevel : 0.8 / mapZoomLevel);
        mapCtx.stroke();
      });
    });

    if (f.centroid) {
      let [cx, cy] = lonLatToXY(f.centroid[0], f.centroid[1], w, h);
      // 龙岗区形状窄长，centroid靠近边界，需向右下微调
      if (meta.key === 'longgang') { cx += 80; cy += 50; }
      const label = window.currentLang === 'zh' ? meta.zh : meta.en;
      if (isStudy) {
        const baseFontSize = Math.max(11, 17 / mapZoomLevel);
        const fontSize = isHovered || isSelected ? baseFontSize + 3 : baseFontSize;
        mapCtx.font = `bold ${fontSize}px 'Times New Roman',sans-serif`;
        mapCtx.textAlign = 'center';
        mapCtx.textBaseline = 'middle';
        mapCtx.strokeStyle = 'rgba(255,255,255,0.9)';
        mapCtx.lineWidth = 3.5 / mapZoomLevel;
        mapCtx.lineJoin = 'round';
        mapCtx.strokeText(label, cx, cy);
        mapCtx.fillStyle = isHovered || isSelected ? '#0d47a1' : '#1a3a5c';
        mapCtx.fillText(label, cx, cy);
      } else {
        // 非研究区：小字灰色标注
        const fs = Math.max(8, 11 / mapZoomLevel);
        mapCtx.font = `${fs}px 'Times New Roman',sans-serif`;
        mapCtx.textAlign = 'center';
        mapCtx.textBaseline = 'middle';
        mapCtx.strokeStyle = 'rgba(255,255,255,0.7)';
        mapCtx.lineWidth = 2.5 / mapZoomLevel;
        mapCtx.lineJoin = 'round';
        mapCtx.strokeText(label, cx, cy);
        mapCtx.fillStyle = 'rgba(80,90,110,0.65)';
        mapCtx.fillText(label, cx, cy);
      }
    }
  });

  // ── 第二轮：统一画所有区的分隔线（覆盖在填充之上） ──
  mapCtx.save();
  mapCtx.setLineDash([]);
  mapCtx.strokeStyle = 'rgba(60,70,85,0.55)';
  mapCtx.lineWidth = 1.4 / mapZoomLevel;
  mapCtx.lineJoin = 'round';
  mapCtx.imageSmoothingEnabled = true;
  geoFeatures.forEach(f => {
    const polygons = f.geomType === 'MultiPolygon' ? f.coords : [f.coords];
    polygons.forEach(polygon => {
      polygon.forEach(linearRing => {
        if (!linearRing || !linearRing.length) return;
        const pts = linearRing.map(pt => lonLatToXY(pt[0], pt[1], w, h));
        drawSmoothPolygon(mapCtx, pts);
        mapCtx.stroke();
      });
    });
  });
  mapCtx.restore();

  mapCtx.restore();

  mapCtx.strokeStyle = '#555';
  mapCtx.lineWidth = 1.2 / mapZoomLevel;
  mapCtx.setLineDash([]);

  if (mapZoomLevel !== 1 || mapPanX !== 0 || mapPanY !== 0) {
    mapCtx.save();
    mapCtx.font = "11px 'Times New Roman',sans-serif";
    mapCtx.fillStyle = 'rgba(0,0,0,0.4)';
    mapCtx.textAlign = 'right';
    mapCtx.textBaseline = 'top';
    mapCtx.fillText(`${(mapZoomLevel * 100).toFixed(0)}%`, w - 8, 6);
    mapCtx.restore();
  }
}

function onMapSlider(val) {
  updateMap(parseInt(val));
}

function setMapMetric(m) {
  mapMetric = m;
  ['dual','npos','ic'].forEach(k => {
    const btn = document.getElementById('mapMetric' + {dual:'Dual',npos:'N',ic:'IC'}[k]);
    if (btn) btn.classList.toggle('active', k === m);
  });
  updateMap(parseInt(document.getElementById('mapSlider').value));
  const t = I18N[window.currentLang];
  const legend = document.querySelector('[data-i18n="map_legend_title"]');
  if (legend) {
    const labels = {
      dual: t.map_legend_dual  || 'Dual Positivity Rate',
      npos: t.map_legend_n      || 'N Gene Positivity Rate',
      ic:   t.map_legend_ic     || 'IC Pass Rate',
    };
    legend.textContent = labels[m];
  }
}

function toggleMapPlay() {
  const btn = document.getElementById('mapPlayBtn');
  if (mapPlaying) {
    clearInterval(mapPlayTimer);
    mapPlaying = false;
    btn.textContent = I18N[window.currentLang].map_play || 'Play';
    btn.style.background = 'var(--secondary)';
  } else {
    mapPlaying = true;
    btn.textContent = I18N[window.currentLang].map_pause || 'Pause';
    btn.style.background = '#c0392b';
    let idx = parseInt(document.getElementById('mapSlider').value);
    mapPlayTimer = setInterval(() => {
      idx = (idx + 1) % months.length;
      updateMap(idx);
      if (idx === months.length - 1) {
        setTimeout(() => { toggleMapPlay(); }, 800);
      }
    }, 1100); // slightly longer to account for animation duration
  }
}

function showMapTip(evt, key) {
  if (mapSelectedDistrict) return; // detail panel is showing
  const idx = mapIdx;
  const meta = DISTRICT_META[key];
  const name = window.currentLang === 'zh' ? meta.zh : meta.en;
  const dual = mapData.dual[key][idx];
  const npos = mapData.npos[key][idx];
  const ic   = mapData.ic[key][idx];
  const fmt  = v => v === null ? '--' : v.toFixed(1) + '%';
  const tip  = document.getElementById('mapTooltip');
  const t = I18N[window.currentLang];
  const dualLabel = t.map_dual_tip  || 'Dual Positivity';
  const nposLabel = t.map_npos_tip  || 'N Gene Positivity';
  const icLabel   = t.map_ic_tip    || 'IC Pass Rate';
  tip.innerHTML = `
    <div style="font-weight:700;font-size:13px;margin-bottom:6px;">${name} · ${months[idx]}</div>
    <div>${dualLabel}: <b>${fmt(dual)}</b></div>
    <div>${nposLabel}: <b>${fmt(npos)}</b></div>
    <div>${icLabel}: <b>${fmt(ic)}</b></div>
    <div style="font-size:9px;color:rgba(255,255,255,.5);margin-top:6px;">${t.map_click_hint || 'Click for details'}</div>
  `;
  tip.style.display = 'block';
  tip.style.minWidth = '170px';
  moveTip(evt);
}

function moveTip(evt) {
  const tip = document.getElementById('mapTooltip');
  if (!tip || tip.style.display === 'none') return;
  tip.style.left = (evt.clientX + 14) + 'px';
  tip.style.top  = (evt.clientY - 10) + 'px';
}

function hideMapTip() {
  const tip = document.getElementById('mapTooltip');
  if (tip) tip.style.display = 'none';
}

document.addEventListener('mousemove', e => {
  const tip = document.getElementById('mapTooltip');
  if (tip && tip.style.display !== 'none') moveTip(e);
});

// 懒加载：滚动到地图区域时再初始化
function setupMapLazyInit() {
  const loadingEl = document.getElementById('mapLoading');
  if (!loadingEl) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initCanvasMap();
        observer.disconnect();
      }
    });
  }, { threshold: 0.05, rootMargin: '100px' });
  observer.observe(loadingEl);
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('[MAP] DOMContentLoaded fired');
  setTimeout(initCanvasMap, 100);
});

window.addEventListener('load', () => {
  console.log('[MAP] window load fired, mapReady=' + mapReady);
  setTimeout(() => {
    if (!mapReady) {
      console.log('[MAP] Backup init triggered (load fallback)');
      initCanvasMap();
    }
  }, 1500);
});

// Global error catcher for map-related errors
window.addEventListener('error', function(e) {
  if (e.message && (e.message.indexOf('initCanvasMap') > -1 || e.message.indexOf('SZ_GEOJSON') > -1 ||
      e.message.indexOf('updateMap') > -1 || e.message.indexOf('renderMap') > -1)) {
    console.error('[MAP-ERROR]', e.message, 'at', e.filename, ':', e.lineno);
    var le = document.getElementById('mapLoading');
    if (le) {
      le.innerHTML = '<div style="color:#c0392b;padding:20px;text-align:left;font-size:12px;"><strong>JS Error:</strong><br>' +
        e.message.replace(/</g,'&lt;') + '<br>at line ' + e.lineno + '</div>';
      le.style.display = '';
    }
  }
});





