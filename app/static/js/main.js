//選出状況を取得する配列
var en_array = new Array('未選出', '未選出', '未選出','未選出', '未選出', '未選出');

$('.en_btn').on('click', function(){
  var id =  $(this).attr("id"); //buttonタグのID取得
  var texid = id.replace("en", "");
  let num = Number(texid); //IDをintに変換
  num = num -1 //IDと配列の番号を合わせる
  console.log( id );
  console.log( num );
  console.log( en_array );

  if (en_array[num] != '未選出'){
    en_array[num] = '未選出'
  }else if ($.inArray('1番目',en_array) == -1){
    en_array[num] = '1番目'
  }else if ($.inArray('2番目', en_array) == -1){
    en_array[num] = '2番目'
  }else if ($.inArray('3番目', en_array) == -1){
    en_array[num] = '3番目'
  }

  var str = en_array[num]; //IDとButtonのテキストを決定
  document.getElementById(id).innerText = str; //Buttonのテキストの変更
  document.getElementById('en_select' + texid).value = str; //inputのvalueの変更

  return true;
});

//選出状況を取得する配列
var my_array = new Array('未選出', '未選出', '未選出','未選出', '未選出', '未選出');

$('.my_btn').on('click', function(){
  var id =  $(this).attr("id"); //buttonタグのID取得
  var texid = id.replace("my", "");
  let num = Number(texid); //IDをintに変換
  num = num -1 //IDと配列の番号を合わせる
  console.log( id );
  console.log( num );
  console.log( my_array );

  if (my_array[num] != '未選出'){
    my_array[num] = '未選出'
  }else if ($.inArray('1番目',my_array) == -1){
    my_array[num] = '1番目'
  }else if ($.inArray('2番目', my_array) == -1){
    my_array[num] = '2番目'
  }else if ($.inArray('3番目', my_array) == -1){
    my_array[num] = '3番目'
  }

  var str = my_array[num]; //IDとButtonのテキストを決定
  document.getElementById(id).innerText = str; //Buttonのテキストの変更
  document.getElementById('my_select' + texid).value = str; //inputのvalueの変更

  return true;
});

  //検索のサジェスト（JSON）
  $('.poke').autocomplete({
    source: function(req, resp){
      $.ajax({
        url: "/serch_poke_name",
        type: "POST",
        cache: false,
        dataType: "json",
        timeout: 10000,
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
          param1: req.term
          }),
        success: function(o){
        resp(o);
        },
        error: function(xhr, ts, err){
        resp(['']);
        }
    });
    },
    delay: 500,
    minLength: 2,
  })
  ;


  //入力されたポケモンのNoを取得して画像を表示する
  $('.poke').change(function() {
    const poke_name = $(this).val();
    const id =  $(this).attr("id"); //inputタグのID取得
    console.log(poke_name);
    $.ajax({
      url: "/get_poke_no",
      type: "POST",
      cache: false,
      dataType: "json",
      contentType: 'application/json;charset=UTF-8',
      data: JSON.stringify({
        name: poke_name
        })
      })
    .done(function( data ) {
      console.log(data); //ポケモンのNo,name,typeを取得
      poke_no = data["no"];
      const img_id = id + "_img";
      const src = "../static/img/icons/"+`${poke_no}`+".png";
      $("#"+`${img_id}`).attr("src",src);

      })
    .fail(function(jqXHR, textStatus ,errorThrown) {
        //通信失敗時の処理
        console.log("失敗"); //失敗メッセージをHTMLで表示
      });
  });
