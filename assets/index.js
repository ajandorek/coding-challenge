new Vue({
  el: '#app',
  data: {
    courses: []
  },
  mounted() {
    var vm = this;
    axios.get('https://mkt-endpoint.now.sh/products').then(res => {
      vm.courses = res.data;
      vm.courses.sort((a, b) => {
        return a.price - b.price;
      });
    });
  }
});
