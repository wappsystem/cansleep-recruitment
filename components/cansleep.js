(function(){
    var modules={
        "panel-main-cansleep":    			 {url:"$A/modules/elig-questions-data.html",Table:"cansleep-recruitment-record"},
        "panel-main-cansleep-eligible":      {url:"$A/modules/elig-questions-eligible-data.html",Table:"cansleep-recruitment-record"},
        "panel-main-cansleep-non-eligible":  {url:"$A/modules/elig-questions-non-eligible-data.html",Table:"cansleep-recruitment-record"},
   }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
