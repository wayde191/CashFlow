
/*
 * Copyright (c) 2012-2020, iHakula Studio Software Inc.
 * Use, modification, and distribution subject to terms of license.
 * @version: 1.0
 * @date: 5/8/2013
 * @author: Wayde Sun
 * @email: hakula@ihakula.com
 * @website: www.ihakula.com
 */

  ih.defineClass("ih.plugins.idViewController", null, null, function(ACCOUNT, account){
  
    account.prototype.init = function(){
      this.loadContent();
    };
    
    account.prototype.loadContent = function(){
      this.accountHtml = '<div style="clear:both;"><h2>加点出装 for DotA</h2><div id="ih-panelBody" style="width:100%; height:400px;">'+
        '<img style="margin-left: 6px; width: 100px; height:100px; float:left;" src="./images/logos/idota_logo.png" />'+
        '<div style="float:left; margin-left:20px; width:600px; height:100%;">'+
          '<div style="float:left; width:300px; height:100%;">'+
            '<div><h3>免费版：</h3></div><p>AppStore:</p><div><a target="_blank" href="https://itunes.apple.com/cn/app/shou-yi-tong/id897772676?l=en&mt=8"><img src="./images/undercover/appstore.png" /></a></div><div><p>二维码:</p><img style="width: 200px; height:200px;" src="./images/journey/idota-qrcode.png" /></div>'+
          '</div>'+
        
        '</div>'+
        '</div></div>'+
        '<embed style="margin-left:200px" src="http://player.youku.com/player.php/sid/XNzc1NDAyNDA0/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
        ;
        
      $("#content").html(this.accountHtml);
    }
  });