new Vue({
  el: '#app',
  data: {
    count: 10,
    countBefore: 9,
    countAfter: 11,
    isBefore: false,
    isAfter: false,
  },
  computed: {
    isAnimating() {
      return this.isBefore || this.isAfter
    }
  },
  methods: {
    subtract() {
      this.isBefore = true
      
      setTimeout(() => {
        this.count--
        this.countBefore = this.count - 1
        this.countAfter = this.count + 1
        this.isBefore = false
      }, 200)
    },
    add() {
      this.isAfter = true
      
      setTimeout(() => {
        this.count++
        this.countBefore = this.count - 1
        this.countAfter = this.count + 1
        this.isAfter = false
      }, 200)
    }
  }
})