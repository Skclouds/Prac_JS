let obj={
    name:"klaushal",
    age:23,
    eng:90,
    math:80,
    sci:70,
    get:function getAvg(){
                let avg=(this.eng+this.math+this.sci)/3
                console.log(avg)
    }
}
obj.get()