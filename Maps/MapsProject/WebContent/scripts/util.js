Function.prototype.method=function(name,func){
	if(!this.prototype[name]){
		this.prototype[name]=func;
		return this;
	}
};

String.method("format", function() {
	  var s = arguments[0];
	  for (var i = 0; i < arguments.length - 1; i++) {       
	    var reg = new RegExp("\\{" + i + "\\}", "gm");             
	    s = s.replace(reg, arguments[i + 1]);
	  }

	  return s;
});

Number.method("toRad",function(){
	return this * Math.PI / 180;
});


var Set=function(){
	
	var hashTable=new Hashtable();
		
	return{
		add:function(elem){
			if(!this.contains(elem)) hashTable.put(elem,true);
		},
		addList:function(list){
			for(elem in list){
				this.add(list[elem]);
			}
		},
		contains:function(elem){
			return hashTable.containsKey(elem);
		},
		each:function(func){
			hashTable.each(function(key,val){
				func(key);
			});
		}
	};
};