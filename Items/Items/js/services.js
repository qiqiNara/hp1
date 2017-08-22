var dservices=angular.module("dServices",[]);
dservices.service("aboutServices",function(){
    this.aboutList=aboutList;
});
dservices.service("newsListServices",function(){
    this.newsList=newsList;
});
dservices.service("newsListDetailsServices",function(){
    this.newsDetailsList=newsDetailsList;
});
dservices.service("caseListServices",function(){
    this.caseList=caseList;
})