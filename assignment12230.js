// lru cache

class LRUCache{
    constructor(size){
        this.data=[];
        if(size!=undefined)
        this.size=size;
        else this.size=2;
    }
    put(a,b){
        if(!a || !b) {
            console.log("send data properly");
        }
        else{
            // check if data size less than size insert
            // console.log(this.data.length);
            if(this.data.length<this.size){
                this.data.push([a,b]);
            }
            else{
                console.log("hii");
                // you have to delete the last one 
                this.data.splice(0,1);
                this.data.push([a,b]);
            }
            console.log("updated cache is ");
            console.log(this.data);
        }
    }
    get(a){
        console.log("request for a "+a);
        if(typeof a!=="number"){
            console.log("not found");
            
            return;
        }
        
        // now get the position
        let pos=-1;
        
        for(let index in this.data){
            if(this.data[index][0]==a){
                // foound
                pos=index;
                
                break;
            }
        }

        console.log("pos "+pos);
        if(pos==-1){
            console.log("not found");
            return -1;
        }
        // delete 
        let ele=this.data.splice(pos,1);
        console.log(ele);
        this.data.push(ele[0]);
        console.log(this.data);
        return ele[0][1];
    }
}

let cache=new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
console.log(cache.get(2));
cache.put(12,23);
console.log(cache.get(1));
console.log(cache.get(2));
console.log(cache.get(12));
// cache.get(12);
console.log(cache);