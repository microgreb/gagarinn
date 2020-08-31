export default {
    data(){
        return{
            mobileWidthMax: 414,
            mobileWidthMin: 320
        }
    },
    methods: {
        isMobile: function () {
            if(window.innerWidth <= this.mobileWidthMax) {
                console.log(window.innerWidth);
                return true;
            }
            return false;
        }
    }
}