// ==UserScript==
// @name         51JOB
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://search.51job.com/jobsearch/*
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  setTimeout(function () {
    
    $('#resultList .el .t2 a').each(function () {
      var txt = $(this).html();
      if (localStorage.getItem(txt) != null) {
        $(this).parent().parent().remove();
        console.log('pb');
      }
    });
    
    
    $('#resultList .el').eq(0).removeClass('el');
    $('#resultList .el .t2').each(function () {
      $(this).html('<a class=\'pb51\'>屏蔽→ </a>' + $(this).html());
    });
    $('.pb51').css('color', 'red');
    
    
    $('.pb51').click(function () {
      var str = $(this).next().text();
      if (confirm('确定屏蔽 ' + str + ' 吗?')) {
        localStorage.setItem(str, str);
        $(this).parent().parent().remove();
        console.log('已经屏蔽→' + str);
      }
    });
    
    
  }, 100);
  // Your code here...
}) ();
