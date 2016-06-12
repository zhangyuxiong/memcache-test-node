var Memcached=require('memcached')
var memcached=new Memcached("192.168.241.131:11211")
 
memcached.add("test","test2",1000,function(err){
    console.log(1)
    console.log(err)
});

memcached.get("test",function(err,data){
    console.log(data);
})


console.log(memcached)