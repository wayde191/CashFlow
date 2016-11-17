
/*
 * Copyright (c) 2012-2020, iHakula Studio Software Inc.
 * Use, modification, and distribution subject to terms of license.
 * @version: 1.0
 * @date: 5/29/2013
 * @author: Wayde Sun
 * @email: hakula@ihakula.com
 * @website: www.ihakula.com
 */

  ih.defineClass("ih.plugins.productsViewController", null, null, function(PRODUCT, product){
  
    product.prototype.init = function(){
      this.dm = new ih.plugins.productsDataModel();
      this.dm.delegate = this;
      this.loadContent();
    };
    
    product.prototype.loadContent = function(){
      this.accountHtml = '<div style="clear:both;"><h2>iHakula Store</h2><div id="ih-panelBody">'+
        '<table class="" cellpadding="0" cellspacing="0" style="margin-top:15px;">'+
        '<tbody>'+
          '<tr>'+
            '<td id="ih-navPanelContainer" class="OK" style="">'+
            '<div id="ih-newNavPanel" style="">'+
              '<div class="q"><div class="cC">产品列表</div>'+
              '<div class="Hc"><div id="ih-tally" class="P selecting"><div class="hm">精品推荐</div></div></div>'+
              '<div class="Hc"><div id="ih-statistics" class="P"><div class="hm">生活常用</div></div></div>'+
              '<div class="Hc"><div id="ih-analyse" class="P"><div class="hm">友情推荐</div></div></div>'+
           '</div>'+
           '</td>'+
           '<td id="ih-navToggle" class="St"><div class="Bmb"></div></td>'+
           '<td id="ih-view" class="BQ">'+
            '<div class="IJ">'+
              '<div class="mw">'+
                '<div id="ih-reportContainer" class="Ti">'+
                  '<div class="card-list">'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
           '</td>'+
           '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div></div>';
        
      $("#content").html(this.accountHtml);
      
      this.cardHtml = 
        '<div class="card apps square-cover tiny one-rationale" id="@pid">'+
            '<div class="card-content track-click track-impression">'+
                '<div class="cover">'+
                    '<div class="cover-image-container">'+
                        '<div class="cover-outer-align">'+
                            '<div class="cover-inner-align">'+
                                '<img class="cover-image" src="@img-src">'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<a class="card-content-link">'+
                        '<span class="preview-overlay-container">  </span>'+
                    '</a>'+
                '</div>'+
                '<div style="height: 100px;width: 75%;position: absolute;top: 5px;left: 138px">@content</div>'+
                '<div class="details">'+
                    '<a class="title"> @title'+
                        '<span class="paragraph-end"></span>'+
                    '</a>'+
                    '<div class="subtitle-container">'+
                        '<a class="subtitle">@sub-title</a>'+
                        
                        '<span class="price-container">'+
                            '<span class="buy-button-container apps  is-price-tag">'+
                                '<span class="price buy">'+
                                    '<span>@free</span>'+
                                '</span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
      '</div>';
      
      var products = [
      {title:"《加点出装 for DotA》", subtitle:"V1.1.0", content:"《加点出装 for DotA》，加点出装for DotA, 玩家可以在竞技的同时，查看我们为大家推荐的官方出装和加点，该推荐同时支持DotA和DotA2，也可以评论大家对这一套出装不同的看法，发表自己的观点，让自己的意见帮助到更多其它玩家。希望能帮助所有DotA玩家尽情游戏。", logo:"./images/logos/idota_logo.png", price:"免费"},
      
      {title:"收益通", subtitle:"V1.1.0", content:"《收益通》，官方使用说明视频道：<a target='blank' href='http://v.youku.com/v_show/id_XNzEwMjEzNjU2.html'>点击观看</a> <br/>收益统一查看，囊括理财宝、微信理财通等众多宝贝基金，收益统一查看，方便亲们统一查看一天的总收益，让您再也不用一个又个APP来回翻看。同时也能方便您对比各宝贝收益的趋势，让您能更快的决策，更改投资配比。贴心的是，我们会收集大家的反馈，将反馈声最高的基金，主动入库，方便大家查看自己喜爱的基金，欢迎大家积极反馈，我们会尽最大的努力将您想了解的基金入库，方便您随时查看 ", logo:"./images/logos/shouyitong_logo.png", price:"免费"},
      {title:"收益通-专业版", subtitle:"V1.1.0", content:"《收益通》，官方使用说明视频道：<a target='blank' href='http://v.youku.com/v_show/id_XNzEwMjEzNjU2.html'>点击观看</a> <br/>收益统一查看，囊括理财宝、微信理财通等众多宝贝基金，收益统一查看，方便亲们统一查看一天的总收益，让您再也不用一个又个APP来回翻看。同时也能方便您对比各宝贝收益的趋势，让您能更快的决策，更改投资配比。贴心的是，我们会收集大家的反馈，将反馈声最高的基金，主动入库，方便大家查看自己喜爱的基金，欢迎大家积极反馈，我们会尽最大的努力将您想了解的基金入库，方便您随时查看 ", logo:"./images/logos/shouyitong_logo.png", price:"¥6.00"},
      
      {title:"谁是卧底007-免费版", subtitle:"V1.0", content:"《谁是卧底》，是一款最先由湖南卫视《快乐大本营》节目组发明并创建游戏规则，火速得到普及的一款多人聚会游戏。<br/>游戏系列之《谁是卧底007》，基于原规则进行了创新，让所有玩家都能参与其中，引入回合制、积分制，让所有玩家切身体会到竞技休闲游戏的乐趣；设置了更合理的输赢评判标准。丰富的在线更新词库，让您尽情游戏，乐在其中", logo:"./images/logos/undercover_logo.png", price:"免费"},
      {title:"谁是卧底007", subtitle:"V1.0", content:"《谁是卧底》，是一款最先由湖南卫视《快乐大本营》节目组发明并创建游戏规则，火速得到普及的一款多人聚会游戏。<br/>游戏系列之《谁是卧底007》，基于原规则进行了创新，让所有玩家都能参与其中，引入回合制、积分制，让所有玩家切身体会到竞技休闲游戏的乐趣；设置了更合理的输赢评判标准。丰富的在线更新词库，让您尽情游戏，乐在其中", logo:"./images/logos/undercover_logo.png", price:"¥6.00"},
      {title:"Gantt", subtitle:"V0.1", content:"《Gantt》，是一款帮助大家做计划并可靠记录进度的一款Web应用。<br/>Web应用系列之《Gantt》，旨在帮助大家更好，更有条理的做好一件事，从细小的计划开始，不断更新进度来跟进计划进度，方便大家管理和帮助大家成为一个高效利用时间的管理者", logo:"./images/logos/gantt_logo.png", price:"免费"},
      {title:"iAccount", subtitle:"V0.1", content:"《iAccount》，是一款帮助大家理财的一款Web应用。<br/>Web应用系列之《iAccount》，可以帮助大家养成记账的好习惯，并同时帮助分析收入和支出的细节，而且还会生成以月、为单位的统计数据，方便大家总结一年的收入和花销，做到有的放矢，开源节流。而且会提供简单的理账小工具，随时随刻让自己清楚账产分布情况。适用于个人，家庭。", logo:"./images/logos/iaccount_logo.png", price:"免费"},
      
      {title:"阿标旅游", subtitle:"V0.1", content:"旅游系列之《阿标旅游》，主推云南热门品质游，提供自助游、车辆服务、酒店服务和票务相关服务。<br/>为了更好的为大家提供服务，我们是国内以个人名义推出旅游客户端的第一人。与时俱进，旨在方便大家更便捷的了解旅游第一资讯，联系我们和反馈宝贵意见。我们将不遗余力为大家带来更优质的服务。", logo:"./images/logos/abiao_logo.png", price:"免费"}
      ];
      
      var ps = "";
      for(var i = 0; i < products.length; i++){
        var p = products[i];
        var product = this.cardHtml.replace(/@img-src/i, p.logo);
        product = product.replace(/@pid/i, i+1);
        product = product.replace(/@content/i, p.content);
        product = product.replace(/@title/i, p.title);
        product = product.replace(/@sub-title/i, p.subtitle);
        product = product.replace(/@free/i, p.price);
        ps += product;
      }

      $(".card-list").html(ps);
      
      $(".card-list [id='1'] .cover").click(ih.$F(function(){
        this.onIDotaClicked();
      }).bind(this));
      $(".card-list [id='1'] .title").click(ih.$F(function(){
        this.onIDotaClicked();
      }).bind(this));
      $(".card-list [id='1'] .subtitle").click(ih.$F(function(){
        this.onIDotaClicked();
      }).bind(this));
      $(".card-list [id='1'] .price").click(ih.$F(function(){
        this.onIDotaClicked();
      }).bind(this));
      
      $(".card-list [id='2'] .cover").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      $(".card-list [id='2'] .title").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      $(".card-list [id='2'] .subtitle").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      $(".card-list [id='2'] .price").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      
      $(".card-list [id='3'] .cover").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      $(".card-list [id='3'] .title").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      $(".card-list [id='3'] .subtitle").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      $(".card-list [id='3'] .price").click(ih.$F(function(){
        this.onShouyitongClicked();
      }).bind(this));
      
      $(".card-list [id='8'] .cover").click(ih.$F(function(){
        this.onAbiaoClicked();
      }).bind(this));
      $(".card-list [id='8'] .title").click(ih.$F(function(){
        this.onAbiaoClicked();
      }).bind(this));
      $(".card-list [id='8'] .subtitle").click(ih.$F(function(){
        this.onAbiaoClicked();
      }).bind(this));
      $(".card-list [id='8'] .price").click(ih.$F(function(){
        this.onAbiaoClicked();
      }).bind(this));
      
      $(".card-list [id='4'] .cover").click(ih.$F(function(){
        this.onUnderCoverFreeClicked();
      }).bind(this));
      $(".card-list [id='4'] .title").click(ih.$F(function(){
        this.onUnderCoverFreeClicked();
      }).bind(this));
      $(".card-list [id='4'] .subtitle").click(ih.$F(function(){
        this.onUnderCoverFreeClicked();
      }).bind(this));
      $(".card-list [id='4'] .price").click(ih.$F(function(){
        this.onUnderCoverFreeClicked();
      }).bind(this));
      
      $(".card-list [id='5'] .cover").click(ih.$F(function(){
        this.onUnderCoverClicked();
      }).bind(this));
      $(".card-list [id='5'] .title").click(ih.$F(function(){
        this.onUnderCoverClicked();
      }).bind(this));
      $(".card-list [id='5'] .subtitle").click(ih.$F(function(){
        this.onUnderCoverClicked();
      }).bind(this));
      $(".card-list [id='5'] .price").click(ih.$F(function(){
        this.onUnderCoverClicked();
      }).bind(this));
      
      $(".card-list [id='6'] .cover").click(ih.$F(function(){
        this.onGanttClicked();
      }).bind(this));
      $(".card-list [id='6'] .title").click(ih.$F(function(){
        this.onGanttClicked();
      }).bind(this));
      $(".card-list [id='6'] .subtitle").click(ih.$F(function(){
        this.onGanttClicked();
      }).bind(this));
      $(".card-list [id='6'] .price").click(ih.$F(function(){
        this.onGanttClicked();
      }).bind(this));
      
      $(".card-list [id='7'] .cover").click(ih.$F(function(){
        this.oniAccountClicked();
      }).bind(this));
      $(".card-list [id='7'] .title").click(ih.$F(function(){
        this.oniAccountClicked();
      }).bind(this));
      $(".card-list [id='7'] .subtitle").click(ih.$F(function(){
        this.oniAccountClicked();
      }).bind(this));
      $(".card-list [id='7'] .price").click(ih.$F(function(){
        this.oniAccountClicked();
      }).bind(this));
    
    };
    
    product.prototype.onIDotaClicked = function(){
        var journeyPlugin = ihSysEngine.root.findChildPluginById("ih.plugins.id");
              if(!journeyPlugin.scriptsLoaded) {
                ih.plugins.rootPlugin.showMaskSpinner();
                journeyPlugin.loadScripts();
              } else {
                journeyPlugin.pluginAnchor.scriptsLoaded();
              }
    };
    
    product.prototype.onShouyitongClicked = function(){
      var journeyPlugin = ihSysEngine.root.findChildPluginById("ih.plugins.if");
      if(!journeyPlugin.scriptsLoaded) {
        ih.plugins.rootPlugin.showMaskSpinner();
        journeyPlugin.loadScripts();
      } else {
        journeyPlugin.pluginAnchor.scriptsLoaded();
      }
    };
    
    product.prototype.onAbiaoClicked = function(){
      var journeyPlugin = ihSysEngine.root.findChildPluginById("ih.plugins.journey");
      if(!journeyPlugin.scriptsLoaded) {
        ih.plugins.rootPlugin.showMaskSpinner();
        journeyPlugin.loadScripts();
      } else {
        journeyPlugin.pluginAnchor.scriptsLoaded();
      }
    };
    
    product.prototype.onUnderCoverFreeClicked = function(){
      var journeyPlugin = ihSysEngine.root.findChildPluginById("ih.plugins.undercover");
      if(!journeyPlugin.scriptsLoaded) {
        ih.plugins.rootPlugin.showMaskSpinner();
        journeyPlugin.loadScripts();
      } else {
        journeyPlugin.pluginAnchor.scriptsLoaded();
      }
    };
    
    product.prototype.onUnderCoverClicked = function(){
      var journeyPlugin = ihSysEngine.root.findChildPluginById("ih.plugins.undercover");
      if(!journeyPlugin.scriptsLoaded) {
        ih.plugins.rootPlugin.showMaskSpinner();
        journeyPlugin.loadScripts();
      } else {
        journeyPlugin.pluginAnchor.scriptsLoaded();
      }
    };
    
    product.prototype.onGanttClicked = function(){
      var ganttPlugin = ihSysEngine.root.findChildPluginById("ih.plugins.gantt");
      if(!ganttPlugin.scriptsLoaded) {
        ih.plugins.rootPlugin.showMaskSpinner();
        ganttPlugin.loadScripts();
      } else {
        ganttPlugin.pluginAnchor.scriptsLoaded();
      }
    };
    
    product.prototype.oniAccountClicked = function(){
      var accountPlugin = ihSysEngine.root.findChildPluginById("ih.plugins.account");
      if(!accountPlugin.scriptsLoaded) {
        ih.plugins.rootPlugin.showMaskSpinner();
        accountPlugin.loadScripts();
      } else {
        accountPlugin.pluginAnchor.scriptsLoaded();
      }
    };
    
    product.prototype.showMessage = function(dialogMsg){
      // Dialog
        $('#dialog').dialog({
            autoOpen: false,
            width: 600,
            title: dialogMsg.title,
            buttons: {
                "Sure": function() {
                    $(this).dialog("close");
                }
            }
        });

        // Dialog Link
        $('#dialog').html(dialogMsg.text).dialog('open');
    };
    
  });