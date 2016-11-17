
/*
 * Copyright (c) 2012-2020, iHakula Studio Software Inc.
 * Use, modification, and distribution subject to terms of license.
 * @version: 1.0
 * @date: 5/8/2013
 * @author: Wayde Sun
 * @email: hakula@ihakula.com
 * @website: www.ihakula.com
 */

  ih.defineClass("ih.plugins.journeyViewController", null, null, function(ACCOUNT, account){
  
    account.prototype.init = function(){
      this.loadContent();
    };
    

    
    account.prototype.loadContent = function(){
      this.accountHtml = '<div style="clear:both;"><h2>阿标旅游</h2><div id="ih-panelBody">'+
        '<img style="margin-left: 96px;" src="./images/journey/journey_bill.png" />'+
        '</div></div>';
        
      $("#content").html(this.accountHtml);
    }
  });