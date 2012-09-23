var Playable=util.Class.create({init:function(a){this.title=a;this.log=[]},play:function(){this.log.unshift("Playing: "+this.title)}}),playable=new Playable("House of Cards");playable.play();
