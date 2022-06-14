window.onload = function(){
  // document.write("Hello JavaScript");
};

$(function(){
  //按按鈕時觸發
  $("input").on("click",function(){
    //取list長度
    var numListItem = $("#choices li").length;
    //按照list長度取亂數
    var randomChildNumber = Math.floor(Math.random()*numListItem);
    //彈出視窗
    alert($("#choices li").eq(randomChildNumber).text());
    //刷新h1部分的text
    $("#dinner").text($("#choices li").eq(randomChildNumber).text());
    
    //先檢查是否有圖片，有的話先刪除
    var obj = document.getElementById("output_img");
    if(obj){
      var parentObj = obj.parentNode;
      parentObj.removeChild(obj);
    }

    //輸出對應圖片
    var bigImg = document.createElement("img");
    var img_path = "work/RandomSelector/image"
    switch (randomChildNumber) {
      case 0:
        bigImg.src = img_path + "/拉麵.jpg";
        bigImg.id = "output_img"
        var Img_space = document.getElementById('img_space');
        Img_space.appendChild(bigImg)
        break;
      case 1:
        bigImg.src = img_path + "/滷肉飯.jpg";
        bigImg.id = "output_img"
        var Img_space = document.getElementById('img_space');
        Img_space.appendChild(bigImg)
        break;
      case 2:
        bigImg.src = img_path + "/水餃.jpg";
        bigImg.id = "output_img"
        var Img_space = document.getElementById('img_space');
        Img_space.appendChild(bigImg)
        break;
      default:
        alert('沒有符合的條件');
    }
  });
});