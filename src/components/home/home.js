class HomeFunc {
    constructor (year) {
        this.year = year + 1;
        this.getName = (year) => 'i' + year + 'i'
    }
    say (words) {
        return 'you said: ' + words;
    }
}
export default HomeFunc;