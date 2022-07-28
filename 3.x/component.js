// const app = Vue.createApp({})
//     .component('SearchInput', searchInputComponent)
//     .directive('focus', FocusDirective)
//     .use(LocalePlugin)
const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    // mounted() {
    //     setInterval(() => {
    //         this.counter++;
    //     }, 1000)
    // },
    methods: {
        add() {
            this.counter++;
        }
    }
}

const Booker = {
    data(){
        return {
            author: {
              name: 'John Doe',
              books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
              ]
            }
        }
    },
    computed: {
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No';
        }
    }
}

Vue.createApp(Booker).mount("#booker");
Vue.createApp(Counter).mount("#counter");

const watchExampleVM = Vue.createApp({
    data(){
        return {
            question:"",
            answer: '问题要有问号 ;-)',
            imagePath: 'empty'
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
