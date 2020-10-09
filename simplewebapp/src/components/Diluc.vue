<template>
  <div class="diluc">
    <input v-model="message" placeholder="edit me">
    <h1>Output : {{ result[index-1] }}</h1>
    <button v-on:click="reverse">Reverse</button>
    &nbsp;
    <button @click="oneClick()">Undo/Redo</button>
  </div>
</template>

<script>
export default {
  name: 'Diluc',
  props: {
    msg: String
  },
  data() {
      return {
        message: '',
        result: [],
        index: 0,
        delay: 700,
        clicks: 0,
        timer: null
      }
  },
  
methods: {
    reverse() {
        console.log('test')
        this.result.push(this.message.split("").reverse().join(""))
        console.log(this.result)
        this.index++
    },
    undo() {
        console.log('1 klik')
        this.index--
        console.log(this.index)
    },
    redo() {
        console.log('1 klik')
        this.index++
        console.log(this.index)
    },
    oneClick() {
        this.clicks++
        if(this.clicks === 1) {
        var self = this
        this.timer = setTimeout(function() {
            self.undo()
            self.clicks = 0
        }, this.delay);
        } else{
            clearTimeout(this.timer);  
            this.redo()
            this.clicks = 0;
        }        	
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.diluc {
    margin-top: 20%;
}
</style>
