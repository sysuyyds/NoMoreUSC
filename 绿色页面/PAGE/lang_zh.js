/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {
		closeText: '关闭',
		prevText: '&#x3c;上月',
		nextText: '下月&#x3e;',
		currentText: '今天',
		monthNames: ['一月','二月','三月','四月','五月','六月',
		'七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort: ['一','二','三','四','五','六',
		'七','八','九','十','十一','十二'],
		dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		dayNamesMin: ['日','一','二','三','四','五','六'],
		weekHeader: '周',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '年'};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});

﻿(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": {               // Add your regex rules here, you can take telephone as an example   
                    "regex": "none",
                    "alertText": "* 此项必须填写.",
                    "alertTextCheckboxMultiple": "* 请选择一个选项.",
                    "alertTextCheckboxe": "* 请选择一个复选框."
                },
                "length": {
                    "regex": "none",
                    "alertText": "* 长度必须在 ",
                    "alertText2": " 至 ",
                    "alertText3": " 之间."
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* 最多选择 ", //官方文档这里有问题   
                    "alertText2": " 项."
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* 至少选择 ",
                    "alertText2": " 项."
                },
                "confirm": {
                    "regex": "none",
                    "alertText": "* 两次输入不一致,请重新输入."
                },
                "telephone": {
                    "regex": "/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/",
                    "alertText": "* 请输入有效的电话号码,如:010-29292929."
                },
                "mobilephone": {
                    "regex": "/(^0?[1][358][0-9]{9}$)/",
                    "alertText": "* 请输入有效的手机号码."
                },
                "email": {
                    "regex": "/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
                    "alertText": "* 请输入有效的邮件地址."
                },
                "date": {
                    "regex": "/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/",
                    "alertText": "* 请输入有效的日期,如:2008-08-08."
                },
                "ipv4": {
                    "regex": "/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/",
                    "alertText": "* 请输入有效的IP."
                },
                "chinese": {
                    "regex": "/^[\u4e00-\u9fa5]+$/",
                    "alertText": "* 请输入中文."
                },
                "url": {
                    "regex": "/^[a-zA-z]:\\/\\/[^s]$/", //这些验证请自己加强   
                    "alertText": "* 请输入有效的网址."
                },
                "zipcode": {
                    "regex": "/^[1-9]\d{5}$/",
                    "alertText": "* 请输入有效的邮政编码."
                },
                "qq": {
                    "regex": "/^[1-9]\d{4,9}$/",
                    "alertText": "* 请输入有效的QQ号码."
                },
                "onlyNumber": {
                    "regex": "/^[0-9]+$/",
                    "alertText": "* 请输入数字."
                },
                "onlyLetter": {
                    "regex": "/^[a-zA-Z]+$/",
                    "alertText": "* 请输入英文字母."
                },
                "noSpecialCaracters": {
                    "regex": "/^[0-9a-zA-Z]+$/",
                    "alertText": "* 请输入英文字母和数字."
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "formatError": {
                    "alertText": "请按正确格式输入"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);
(function() {

    $.fn.timeago.defaults.lang = {
        units: {
            second: "秒",
            seconds: "秒",
            minute: "分钟",
            minutes: "分钟",
            hour: "小时",
            hours: "小时",
            day: "天",
            days: "天",
            month: "月",
            months: "月",
            year: "年",
            years: "年"
        },
        prefixes: {
            lt: "不到1",
            about: "约",
            over: "超过",
            almost: "接近",
            ago: ""
        },
        suffix: "之前"
    };

}).call(this);
(function(window,undefined){var language={};language.common={ok:"确定",confirm:"确定",confirmAction:"好",cancel:"取消",history:"历史",review:"批注",save:"保存",print:"打印",download:"下载",help:"帮助",instruction:"填表说明",progress:"办理进度",tips:"提示",dismiss:"我知道了",doAtOnce:"立即办理",notDoAtOnce:"暂不办理",fail:"失败",networkError:"请检查您的网络",load:"加载",choose:"请选择",deleteText:"删除",close:"关闭",yes:"是",no:"否",reload:"刷新",compare:"数据比较",printInvoice:"打印小票",wait:"请稍候",back:"返回"};language.dialog={button:{close:"关闭",min:"最小化",restore:"还原",openNew:"新窗口打开"}};language.status={complete:"已完成",terminate:"已终止",offline:"已挂起",doing:"进行中",admin:"管理数据"};language.load={loadPage:"正在加载页面",loadWorkflow:"加载流程",loadForm:"加载表单",workflowInfo:"正在加载流程信息",loading:"正在加载中",finish:"加载完成",fail:"出错了",paramError:"页面参数不正确",unknownError:"未知的错误"};language.error={error:"错误",parameter:"页面参数不正确",unknown:"未知的错误",lackOfPara:"缺少参数",occur:"发生错误：",showDetail:"点击显示错误的详细信息",detail:"详细信息　"};language.tip={noMoreTip:"不再提示",recoverTips:"恢复提示",recovered:"已恢复所有提示，在下次打开页面时将显示所有提示信息"};language.login={needReLogin:"很抱歉，您的本次登录会话已经过期。\n如果您有尚未保存的数据，请不要刷新页面！请点击'重新登录'，系统会在新页面为您登录并返回自动重试。",reLogin:"重新登录",clickHere:"点此",retry:"弹出新窗口登录，登录后再点以下确定按钮重新尝试先前的操作。",entrust:"很抱歉，您的本次登录已超时，请刷新页面。"};language.todo={doStep:"您现在可以继续办理",doSteps:"您现在可以继续办理，请点击选择",doing:"正在办理",user:"相关用户",doJob:"办理"};language.start={viewInstance:"直接查看"};language.save={tip:"保存您当前填写的内容，保存后\n可再次从待办中打开继续编辑",saving:"保存草稿",wait:"正在为您保存草稿，请稍等...",success:"草稿保存成功",scrollTip:"存草稿",adminModifyReason:"请输入修改数据的理由",reasonRequired:"必须输入修改理由"};language.submit={needParam:"缺少必要的参数",needAction:"无可办理动作",prepare:"准备提交表单,请稍候...",requestMsg:"提交表单",submitting:"正在为您提交表单,请稍候...",request:"准备提交表单",scanBarcode:"请扫码输入编号",inputBarcode:"请输入条码编号",noAction:"无可办理动作",inputRemark:"请填写备注信息",mustInputRemark:"您必须填写此备注",mustInputRemark2:"必须输入备注",clickComment:"如有其它相关说明，请点击",linkComment:"备注",orComment:"，或直接",makeRemark:"批注",remarkInForm:"在填表内容处",viewRemarks:"请查看填表内容处的批注",remarkDone:"（已批注<div class='memo_count'><p>{0}</p></div>处）",lastRemarkDiff:"请注意，您{0}已被系统更改(点击复制)",lastRemark:"上次填写的备注",nextSteps:"完成本操作后，流程将转到以下步骤",executor:"办理人",choose:"-- 请选择 --",allUser:"-- 所有用户 --",helper:{title:"您可以指定此步骤的办理人，如果不指定，\n所有有权限的用户将都可办理此步骤",content:"您可以指定此步骤的办理人，如果不指定，所有有权限的用户将都可办理此步骤",mustChoose:"您必须指定此步骤的办理人",chooseBySystem:"系统指定",chooseOneBySystem:"系统随机指定"},chooseStepExecutor:"请选择操作{0}步骤的用户",success:"办理成功!",pleaseClick:"请点击",relative:"相应",continueTodo:"本步骤可连续办理，请点击下一个继续办理{0}",continueTodoList:"您有权办理以下步骤，请选择并点击下一步办理:",continueToDebug:"继续调试",openInNewWindow:"点击下一步后将在新窗口中继续",canContinueTodo:"您也可以点击下一步办理{0}",pleaseContinueTodo:"请点击下一步办理{0}",doStep:"办理{0}",next:"下一个",nextStep:"下一步",parseDataError:"抱歉，服务器发生未知异常，请刷新重试或者与系统管理员联系。",jsonError:"JSON反序列化失败",hasNotDo:{print:"如果您尚未打印过，",download:"如果您尚未下载过，",printOrDownload:"如果您尚未打印或下载过，"},canDo:{print:"本步骤可以打印，",download:"本步骤可以下载表单内容，",printOrDownload:"本步骤可以打印、下载表单内容，"},canClick:{print:"可点击下面“打印”按钮。您也可以将来在办事大厅中再次打开此页面重复打印。",download:"可点击下面“下载”按钮。您也可以将来在办事大厅中再次打开此页面重复下载。",printOrDownload:"请点击下面相应按钮。您也可以将来在办事大厅中再次打开此页面重复打印或下载。"},closeAfterPrint:"请打印或下载后通过浏览器的关闭功能关闭本页"};language.print={printNow:"立即打印",helper:"本步骤可以打印，您可以点击上面<span style='color:#4a4a4a'><i class='i-icon-print'></i></span>按钮，或点击下面立即打印。",printAfterAction:"请在办理完成后再打印",printAfterActionHelper:"本步骤可以打印，请在办理完成后再打印",notSupport:"本步骤不支持打印",support:"本步骤可打印",fail:"加载打印页失败"};language.download={downloadAfterAction:"本步骤可以下载，请在办理完成后再下载",pleaseDownloadAfterAction:"请在办理完成后再下载",downloadPrintAfterAction:"本步骤可以打印下载，请在办理完成后再打印或下载",support:"本步骤可下载",notSupport:"本步骤不支持下载",choose:"请选择下载方式",downloadDirectly:"下载",start:"开始下载",confirmDownloadDirectly:"您确定直接下载吗？",downloadDirectlyTip:"直接下载可能导致下载内容和界面不符，如您未对当前业务做任何修改可选择直接下载。",saveBeforeDownload:"保存并下载"};language.compare={support:"本步骤可对比数据",notSupport:"本步骤不支持数据对比",compare:"比较",introduce:"请选择比较数据",requesting:"正在获取历史数据",requestHistory:"获取历史数据",initData:"初始数据",compareType:{typeNew:"新增",typeModify:"有变更",typeDelete:"已清除",typeDeleteAll:"此处删除了所有内容",typeDeleteRows:"此处删除了{0}行内容",typeNewRow:"此行为新增内容",typeNewSection:"此段为新增内容",typeDetail:"详细数据有变更"},compareNow:"立即比较",compared:"变动之处已显示提示标签，",clickHereToRemove:"点此清除",removeTips:"所有提示",same:"未找到任何不同之处",previousValue:{previous:"原值:",empty:"原值为空"},helperText:"系统检测到您曾经办理过本环节，您可以点击上面<span style='color:#4a4a4a'><i class='i-icon-my-library-books'></i></span>按钮来加亮显示和之前内容的不同之处，或点击下面立即比较。"};language.admin={exit:"退出数据管理",manage:"管理表单数据",showRemark:"显示数据管理历史"};language.command={helper:"点此区域按钮提交",isDone:"此任务已处理,您无需任何操作",noAction:"您无需任何操作",admin:"您正在管理数据",all:"所有操作",cancel:"取消操作"};language.kill={message:"终止表单",blockMessage:"正在为您终止,请稍候...",title:"终止",confirmTitle:"确定终止本次服务吗？",success:"终止成功！",confirm:"终止后当前业务将立即结束",reason:"您可以填写终止备注描述终止原因",tip:"终止本流程，立即结束当前业务",menuTip:"终止本流程"};language.forward={title:"转交",forwardButton:"转交",addForwardButton:"同时转交…",returnMessage:"被转交人办理完之后返回本步骤",chooseMessage:"请选择需要转交的步骤"};language.withdraw={message:"撤回表单",blockMessage:"正在为您撤回,请稍候...",success:"撤回成功！",confirm:"确定撤回上一步的操作吗？\n撤回后您可以重新编辑。",title:"撤回",tip:"撤回到上一步,如果上一步的办理人是您，那撤回的任务可以在待办页面中找到"};language.preview={loadError:"出错了",starting:"正在为您启动新流程,请稍候...",start:"启动新流程",refused:"您暂时无法办理",startButtonText:"开始办理",department:"主管部门：",contact:"联系方式：",rateCount:"{0}次评分",previous:"上一页",next:"下一页"};language.remarkHistory={loading:"正在为您加载历史信息,请稍候...",request:"加载历史信息",user:{you:"您",related:"相关用户",system:"系统"},entrust:"委托",debug:"调试",action:{doing:"正在填写/办理",youDoing:"正在填写/办理",done:"填写/办理了",sub:"正在办理",doneSub:"办理了",admin:"办理了数据管理",kill:"终止了此次服务",withdraw:"办理了撤回",done2:"办理了",receiving:"正在接收"},showHide:"点击展开{0}个较早历史",hideRemark:"(已隐藏)",createTime:"指派时间",actionTime:"办理时间",snapshotTitle:"查看该环节表单的快照",showReview:"显示{0}处批注",viewReviewLink:"查看{0}处批注",viewReviews:"查看批注",viewCcLink:"显示{0}个抄送人",viewCcs:"显示抄送人",searchCc:"查找抄送人",showAdmin:"显示数据管理历史",showAdminOrCc:"显示数据管理和抄送历史",review:{next:"下一个",previous:"上一个",close:"隐藏"},read:"已阅读",subHistory:{link:"显示子流程",title:"子流程(流水号:{0})"}};language.snapshot={tip:'您正在查看{0}办理的"{1}"环节的表单快照'};language.milestone={doing:"您正在办理此步",didAt:"该步办理于{0}",done:"该步已完成",todo:"该步尚待处理"};language.debug={tip:"您正在调试模式下，点击弹出调试窗口",helperText:'您打开的是一个调试版的流程实例，您的操作将不会影响正式环境的数据。在调试版中，您可通过右上角的"调试按钮"查看更多调试信息，并会增加额外的警告提示来不正确的控件、字段配置。'};language.entrust={showWindow:"显示委托窗口",tip:{entrust:"您当前正在以{0}的身份进行委托办理",startEntrust:"您当前正在以{0}的身份进行委托发起",debug:"您当前正在以{0}的身份进行调试办理",startDebug:"您当前正在以{0}的身份进行调试发起"},switchButton:"切换",continueButton:"继续",attention:"办理历史中将显示{0}办理了该业务，您的真实身份{1}也会被系统记录，请谨慎操作。",debugAttention:"办理历史中将显示{0}办理了该业务，您的登录身份{1}也会被系统记录，点此栏可切换调试办理人。",startAttention:"办理历史中将显示{0}发起了该业务，您的真实身份{1}也会被系统记录，请谨慎操作。",abort:{entrust:"退出委托",debug:"退出调试"},close:"关闭",support:"本步支持委托办理，",startSupport:"本步支持委托发起，",continueDo:"请点击继续办理此业务",startContinueDo:"请点击继续发起此业务",choose:"，或选择其它身份办理",startChoose:"，或选择其它身份发起",noUser:"没有委托人信息，点击继续将以您自己的身份办理",specified:"指定账号",chooseSpecifiedAccount:"请输入指定帐号",current:{debug:"当前调试人",entrust:"当前委托人",login:"当前登录人"},request:{entrust:{requesting:{entrust:"正在请求委托办理...",debug:"正在请求调试办理..."},request:{entrust:"委托请求",debug:"调试请求"},fail:{entrust:"委托办理请求失败",debug:"调试办理请求失败"}},abort:{requesting:{entrust:"正在退出委托...",debug:"正在退出调试..."},request:{entrust:"退出委托",debug:"退出调试"},fail:{entrust:"退出委托请求失败",debug:"退出调试请求失败"}}}};language.validation={fail:"验证失败",ensure:"请确保填写内容完整及格式正确！",selfLoop:"字段{0}的parent设置存在自环，请检查",detailError:"详细信息出错，请修改"};language.workflow={workflowNo:"流水号",department:"主管部门",contact:"联系方式",admin:"管理数据",printInvoice:"打印小票",backToTop:"回到顶端",entrust:"委托办理",confirmEntrust:"您确定要发起委托流程吗？",help:"求助反馈",support:"求助反馈",confirmFeedback:"您确定要发起求助流程吗？"};language.control={createError:"字段{0}创建控件时发生错误，请检查数据类型和渲染类型是否匹配！"};language.anchor={defaultText:"链接",closeAfterAction:"操作完毕后关闭",closeAfterActionDescription:"请在新窗口中进行相关操作\n操作完毕后请关闭本窗口"};language.suggester={moreItem:"按↓键到此行或PageDown键获取更多",moreUser:"共找到{0}位用户,请输入更多条件缩小范围\n请输入汉字,拼音,账号,学工号,院系等多个条件空格分隔",emptyItem:"〈清空〉",emptyHint:"请输入汉字或拼音(支持拼音首字母)",emptyUser:"请输入汉字,拼音,账号,学工号,院系(多个条件空格分隔)",noData:"未找到符合条件的数据",inaccurateTotal:{hundredThousand:"大于10万",tenThousand:"大于1万",thousand:"大于1千"},noCode:"字段{0}创建控件时发生错误，请检查是否设置了代码表！"};language.suggester2={moreUser:"共找到{0}位用户,请输入更多条件(姓名、拼音、学工号、院系等,以空格分隔)",errorLoading:"无法载入结果",tooLong:"请删除{0}个字符",tooShort:"请再输入至少{0}个字符",loadMore:"载入更多结果…",maxSelect:"最多只能选择{0}个结果",noResult:"未找到结果",emptyUser:"请输入汉字,拼音,账号,学工号,院系(多个条件空格分隔)",emptyHint:"请输入汉字或拼音(支持拼音首字母)",searching:"搜索中...",inaccurateTotal:{hundredThousand:"大于10万",tenThousand:"大于1万",thousand:"大于1千"}};language.button={defaultText:"按钮"};language.date={validateMessage:"请正确输入日期",errorFormat:"{0}的格式不正确，请正确设置"};language.time={validateMessage:"请正确输入时间",done:"确定"};language.edit={validateIntegerMessage:"请正确输入整数",validateFloatMessage:"请正确输入数值",formatWarning:"文本框控件{0}，format填写不合法"};language.file={uploading:"正在上传{0},请稍候",uploadFail:"上传文件失败,请重新选择文件上传",uploadSuccess:"上传成功",suffix:"请上传后缀为{0}的文件",sizeLimit:"选择的文件超出上传文件大小限制({0})",createAt:"创建于{0}",confirmDelete:"您确定要删除该文件吗?",oldIe:"您正使用老版本ie，请点击前面的图标上传",prepareSecureLink:"正在为您产生安全下载链接",secureLinkReady:"已经为您产生一次性安全链接，",link:"点此",download:"下载",invalidText:"({0}秒内有效)",docEditRequestError:"请求编辑链接失败，请联系管理员",menu:{download:"下载",beforeEdit:"编辑前",afterEdit:"编辑后",edit:"编辑",preview:"预览",remove:"删除",open:"打开"},batchMenu:{batchButton:"批量...",dialog:{title:"批量处理",selectAll:"全选",download:"下载",secureLinkDownload:"生成安全连接并下载",deleteText:"删除",},selectMoreMessage:"请至少选择一个文件"}};language.label={timezone:"当前时区",xhtmlWarning:"标签控件{0}数据类型为xhtml且具有可写权限，这可能引起安全问题",formatWarning:"标签控件{0}，format填写不合法"};language.picture={widthWarning:"请勿设置图片控件({0})宽度为百分比宽度，请设置为固定像素宽度",upload:"点击上传图片",uploadFail:"上传文件失败,请重新选择文件上传",uploadSuccess:"上传成功",suffix:"请上传后缀为{0}的文件",sizeLimit:"选择的图片超出上传图片大小限制({0})",confirmDelete:"您确定要删除该图片吗?"};language.remark={inputValue:"请输入文本内容",maxLength:"最多可输入{0}个字符"};language.review={buttonTip:"您可以点击此处添加批注。批注不会影响您<br>的填表内容，但可以被后续的办理人查看。",tip:"您可以选择任何表单内高亮的区域添加批注信息。批注不会影响您的填表内容，但可以被后续的办理人查看。",tipCount:"已批注<div class='memo_count'><p>{0}</p></div>处",cancel:"取消",ok:"完成",menu:{minimize:"收起",maximize:"还原",remove:"移除"}};language.select={choose:"-请选择-"};language.checkList={deprecated:"请不要保存过时的值"};language.text={xhtmlWarning:"大文本控件{0}数据类型为xhtml且具有可写权限，这可能引起安全问题",maxLength:"最多可输入{0}个字符"};language.thing={name:"名称",pleaseInput:"请输入物品名称",code:"编号",notFound:"未找到物品相关信息，请手工输入",scan:"扫码",clickToInput:"点击输入物品名称",print:"打印物品",deleteConfirm:"您确定要删除该物品吗?",check:{code:"请输入条码编号",codeError:"条码编号错误，请重新输入",name:"请输入名称"},printInvoice:"打印小票",nothingToPrint:"无可打印的物品",choosePrint:"请选择需要打印的物品"};language.signature={dialog:{title:"选章",missSealInfo:"缺少印章信息，请检查!"}};language.seal={dialog:{title:"选章",missSealInfo:"缺少印章信息，请检查!"},menu:{edit:"重选",view:"查看",remove:"删除",},sealSignatures:{title:"印章属性",sealInfo:{title:"印章信息",sealText:"印章名称",sealImage:"印章图标",},sealCertificate:{title:"印章证书",subject:"使用者",issuer:"颁发者",signature:"签名算法",serialNumber:"序列号",termOfValidity:"有效期",intendedUse:"预期用途"},sealUse:{title:"印章使用",signatory:"签署人",signatureTime:"签名时间",comment:"签署意见"}}};language.richtext={image:{upload:"上传图片",uploadFail:"上传图片失败,请重新选择文件上传",suffix:"请上传后缀为{0}的图片文件",sizeLimit:"选择的图片超出大小限制({0})"}};language.map={selectCurrentPositionTitle:"请输入位置标签或从列表中选择",usePoint:"使用此位置",currentPosition:"当前选择位置：{0}",navigation:"导航",inputLabel:"请输入位置标签",autoPosition:"自动获取",noPosition:"无",deletePosition:"删除",confirmDelete:'您确定删除已选择的位置"{0}"吗？',naviTip:"导航功能正在尝试为您启动已安装的地图应用...",geolocation:{timeout:"定位超时，请在浏览器询问是否允许获取您的位置时及时选择允许。",unknown:"定位错误，未知位置",unavailable:"无法获取当前位置",denied:"无定位权限，请在浏览器询问是否允许获取您的位置时选择允许。如果已经选择了禁止，请在网站安全设置中改为允许。"}};language.priority={current:"当前优先级为{0}",clickToChange:"，点击设置本业务优先级",level3:"普通",level5:"重要",changeSuccessfully:"修改优先级成功，当前优先级为{0}",changeFailed:"修改优先级失败，{0}"};language.popupMenu={up:"上移",down:"下移",add:"新增",deleteText:"删除",noAction:"无任何操作",detail:"详细",maxLimit:"超出最大行数，不能再新增",minLimit:"已达最小行数，不能再删除"};language.repeatAddLink={addText:"新增"};language.repeatControl={settingError:"{0}设置错误，请检查是否应该用重复节替代重复表",fieldNotFound:"未找到字段{0}的信息，请检查是否正确上传视图",detail:"详细信息",shrink:"收起",expand:"展开",deleteRow:"您将要删除该行内容，是否继续？",deleteSection:"您将要删除该段内容，是否继续？"};language.candidates={searching:"搜索中...",error:"查询数据出错",searchKeyword:"请输入姓名或账号搜索",mailto:"发送邮件给{0}",noResult:"未找到结果"};language.dynamics={error:{valueNotSet:"{0}的动态{1}未设置动态值，请检查"}};language.timezone={time:"时间","UTC-12:00":"国际日期变更线西","UTC-11:00":"协调世界时-11","UTC-10:00":"夏威夷","UTC-9:00":"阿拉斯加","UTC-8:00":"太平洋","UTC-7:00":"亚利桑那","UTC-6:00":"墨西哥城","UTC-5:00":"波哥大","UTC-4:30":"加拉加斯","UTC-4:00":"乔治敦","UTC-3:30":"纽芬兰","UTC-3:00":"布宜诺斯艾利斯","UTC-2:00":"协调世界时-02","UTC-1:00":"佛得角群岛",UTC:"伦敦","UTC+1:00":"柏林","UTC+2:00":"雅典","UTC+3:00":"莫斯科","UTC+3:30":"德黑兰","UTC+4:00":"阿布扎比","UTC+4:30":"喀布尔","UTC+5:00":"伊斯兰堡","UTC+5:30":"新德里","UTC+5:45":"加德满都","UTC+6:00":"达卡","UTC+6:30":"仰光","UTC+7:00":"曼谷","UTC+8:00":"北京","UTC+8:30":"平壤","UTC+9:00":"东京","UTC+9:30":"阿德莱德","UTC+10:00":"布里斯班","UTC+11:00":"所罗门群岛","UTC+12:00":"奥克兰","UTC+13:00":"萨摩亚群岛","UTC+14:00":"圣诞岛"};language.back={dialog:{content:"您即将离开当前页面...{0}秒",}};define("InfoPlus.Language",language)})(window);
