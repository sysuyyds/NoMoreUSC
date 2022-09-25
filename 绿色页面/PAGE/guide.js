function commentShow(codeStr){
	var urlStr=location.origin+"/"+location.pathname.split("/")[0]+"taskcenter/";
	$.ajax({
		type:"get",
		url:urlStr+"client/stats/apps?domain=sysu.edu.cn",
		async:false,
		success:function(res){
			if(res.errno==0){
				var data=res.entities;
				for(var i=0;i<data.length;i++){
					if(data[i].code==codeStr){
						var _rate =data[i].rating|| 1;
						if (_rate) {
							var rate = Math.round(_rate * 2 / 20) / 2;
							$('#star').raty({ 
								readOnly: true,
								score: rate,
								path:"img/"
							});
						}
						if(data[i].rated){
							var rated=data[i].rated;
						}else{
							var rated=0;
						}
						$(".comment_num").html(rated+"人已评");
						return;
					}
				}
			}
		}
	});
}

$(function(){
	var campus = $(`<dl>
						<dt>南校园</dt>
						<dd>
							<p>地址：中山楼（二期）一楼</p>
							<p>电话：020-84111391</p>
						</dd>
					</dl>
					<dl>
						<dt>北校园</dt>
						<dd>
							<p>地址：办公楼北103</p>
							<p>电话：020-87335512</p>
						</dd>
					</dl>
					<dl>
						<dt>东校园</dt>
						<dd>
							<p>地址：行政楼B座103</p>
							<p>电话：020-39336233</p>
						</dd>
					</dl>
					<dl>
						<dt>珠海校区</dt>
						<dd>
							<p>地址：教学楼B201</p>
							<p>电话：0756-3668502</p>
						</dd>
					</dl>
					<dl>
						<dt>深圳校区</dt>
						<dd>
							<p>地址：西区教学楼四栋101</p>
							<p>电话：0755-23262600</p>
						</dd>
					</dl>`);
	if($(".guide_footer_div_center").size()>0) {
		$(".guide_footer_div_center").empty().append(campus);
	}
})
