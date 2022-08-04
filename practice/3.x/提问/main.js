const watchExampleVM = Vue.createApp({
    data(){
        return {
            question:"",
            answer: '问题要有问号哦 ;-)',
            imagePath: ''
        }
    },
    watch: {
        // watch input框
        question(newQ, oldQ) {
            if (newQ.indexOf('?') > -1 || newQ.indexOf('？') > -1) {
                this.getAnswer();
            }
        }
    },
    methods: {
        getAnswer(){
            this.answer = 'Thinking...'
            axios
                .get('https://yesno.wtf/api')
                .then(response => {
                    this.answer = response.data.answer;
                    this.imagePath = response.data.image;
                })
                .catch(error => {
                    this.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
}).mount("#yesorno");
