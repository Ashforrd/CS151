function CreateTable(){
  $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
  let topicCount = topic.length;
  //一秒鐘有1000毫秒
  //每分鐘60秒、每小時60分鐘、每天24小時
  let millisecsPerDay = 24*60*60*1000;
  for(var x=0;x<topicCount;x++){
    var class_num = "class" + x;
    var set_item = "<tr id=" + class_num + ">" + `<td>${x+1}</td>` + `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>` + `<td>${topic[x]}</td>` + "</tr>";
    $("#courseTable").append(set_item);
  }

  // for(var i=0;i<topicCount;i++){
  //   $("#class"+i).css("color","red");    
  // }

  $("#courseTable tr").each(function(){
    var currentRow=$(this);
    var col1_value=currentRow.find("td:eq(0)").text();
    var col2_value=currentRow.find("td:eq(1)").text();
    var col3_value=currentRow.find("td:eq(2)").text();
    if(col3_value == "停課"){
      $(currentRow).css('color','red');
    }
  });
}

//刷新預設表格
$(function(){
  CreateTable();
});

$(function(){
  $( "#datepicker-widget-format" ).datepicker();
});

//選定日期重新生成表格
function set(){
  var dateObj = $( "#datepicker-widget-format" ).datepicker("getDate");
  startDate = dateObj;

  $("#courseTable tr").each(function(){
      var currentRow=$(this);
      currentRow.remove()
  });

  CreateTable()
}

