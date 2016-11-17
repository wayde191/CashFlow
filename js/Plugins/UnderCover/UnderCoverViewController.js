
/*
 * Copyright (c) 2012-2020, iHakula Studio Software Inc.
 * Use, modification, and distribution subject to terms of license.
 * @version: 1.0
 * @date: 5/8/2013
 * @author: Wayde Sun
 * @email: hakula@ihakula.com
 * @website: www.ihakula.com
 */

  ih.defineClass("ih.plugins.underCoverViewController", null, null, function(UC, uc){
  
    uc.prototype.init = function(){
      this.loadContent();
    };
    
    uc.prototype.loadContent = function(){
      this.accountHtml = '<div style="clear:both;"><h2>谁是卧底007</h2><div id="ih-panelBody" style="width:100%; height:600px;">'+
        '<img style="margin-left: 6px; width: 100px; height:100px; float:left;" src="./images/logos/undercover_logo.png" />'+
        '<div style="float:left; margin-left:20px; width:600px; height:100%;">'+
          '<div style="float:left; width:300px; height:100%;">'+
            '<div><h3>免费版：</h3></div><p>AppStore:</p><div><a target="_blank" href="https://itunes.apple.com/cn/app/shui-shi-wo-di007-mian-fei-ban/id680156991?l=en&mt=8"><img src="./images/undercover/appstore.png" /></a></div><div><p>二维码:</p><img style="width: 200px; height:200px;" src="./images/undercover/qrcode-undercover-free.png" /></div>'+
          '</div>'+
          '<div style="float:left; width:300px; height:100%;">'+
            '<div style="float:left; width:300px; height:100%;">'+
            '<div><h3>收费版：</h3></div><p>AppStore:</p><div><a target="_blank" href="https://itunes.apple.com/cn/app/shui-shi-wo-di007/id679459643?l=en&mt=8"><img src="./images/undercover/appstore.png" /></a></div><div><p>二维码:</p><img style="width: 200px; height:200px;" src="./images/undercover/qrcode-undercover-pay.png" /></div>'+
          '</div>'+
        '</div>'+
        '</div></div>';
        
      $("#content").html(this.accountHtml);
    }
  });