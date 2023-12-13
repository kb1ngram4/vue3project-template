<template>
  <div class="array">
    <p>数组</p>
  </div>
</template>
<script>
export default {
  setup() {
    const array = [1, 2, 3, 4, 5];
    // 计算总和
    /**
     * Array.prototype.reduce(callbackFn,initValue())
     * accumulator:上次调用callbackFn的结果,若指定initValue则为指定值否则为array[0]
     * currentValue:若指定initValue则为指定值否则为array[1]
     * index: currentValue 在数组中的索引位置。在第一次调用时，如果指定了 initialValue 则为 0，否则为 1
     * 
     */
    const sun = array.reduce((accumulator, currentValue, index) => {
      return accumulator + currentValue;
    }, 1);
    console.log(array, sun);

    // 展平嵌套数组
    const flatArray = [[1,2],[3,4],[5,6]]
    const flattend = flatArray.reduce(( accumulator,currentValue,index )=>{
        return accumulator.concat(currentValue)
    })
    console.log(flattend);

    // 统计对象中值出现的次数
    const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
    const countNames = names.reduce((Allnames,name,index)=>{
        console.log('21321',Allnames[name]);
        const curCount = Allnames[name] ?? 0
        
        return{
            ...Allnames,
            [name]:curCount+1
        }
    },{})
    console.log(countNames);
  },
};
</script>
