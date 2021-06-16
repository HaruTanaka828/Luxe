// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require bootstrap




//トップfooterロゴ クリックでスクロール

$(document).on('turbolinks:load', function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});


document.addEventListener("turbolinks:load", function() {

//リンク先にスクロール

$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});


//ヘッダー

jQuery(function($){
  var hsize = $('header').innerHeight();//paddingを含めた高さを取得
  var pos = 0;
  $(window).on('scroll', function(){
    var currentPos = $(this).scrollTop();
    if(currentPos < pos || currentPos == 0 ){
    //上スクロール時の処理(header引っ込める)
    $("header").css({"top":0});
    }else{
    //下スクロール時の処理(header出す)
    $("header").css({'top' : "-" + hsize + "px" });
    }
    pos = currentPos;//現在地保存
  });
});


//社訓のフェードイン

$(function() {
    // class'show'をdiv要素に追加
    $('div').addClass('show');
});

$('.droneimg').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.droneimg').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});

$('.motto-title').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.motto-title').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});

$('.motto-text').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.motto-text').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});


//サービスのスライドイン

$('.area').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.area').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("SlideRight");
  }
 });
});

$('.meo').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.meo').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("SlideLeft");
  }
 });
});

$('.site').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.site').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("SlideRight");
  }
 });
});

$('.sns').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.sns').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("SlideLeft");
  }
 });
});

$('.listing').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.listing').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("SlideRight");
  }
 });
});


//スキッパー

$(document).ready(function () {
  $(".images").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'slide',
    // 変化に係る時間(ミリ秒)
    speed : 2000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : false,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 3000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
  });
});


})

