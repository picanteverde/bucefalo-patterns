var start, 
	end,
	i,
	j=0,
	arr =[];

for(i=0; i< 10000000; i++){
	arr.push({val:i+Math.random()});
}




start = new Date();
for (i=0; i< arr.length; i++){
	j += arr[i].val;
}
end =new Date();

console.log('standar for :' + (end.getMilliseconds() - start.getMilliseconds()));

j=0;
i=arr.length;
var l=i-1;
start = new Date();
while(i--){
	j += arr[l-i].val;
}
end =new Date();


console.log('while :' + (end.getMilliseconds() - start.getMilliseconds()));
