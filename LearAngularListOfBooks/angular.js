angular.module('app',[])

angular.module('app').controller('MainController',function(){
    var vm = this
    vm.title = 'Learn Angular by example'
    vm.searchInput = ''
    vm.shows = [
        {
            title: 'Doi mat co lua',
            author: 'Nguyen Hung Son',
            favorite: true
        },
        {
            title: 'Ke Huy Diet code',
            author: 'Ong Duc Long',
            favorite: false
        },
        {
            title: 'Chua te ngon ngu',
            author: 'Do Hong Son',
            favorite: true
        },
        {
            title: 'Code khong kho',
            author: 'Luu Quang Tu',
            favorite: false
        },
        {
            title: 'Hoc code today',
            author: 'Fpt',
            favorite: true
        },
    ]
    vm.orders = [
        {
            id: 1,
            title: 'Author Ascending',
            key: 'author',
            reverse: false
        },
        {
            id: 2,
            title: 'Author Descending',
            key: 'author',
            reverse: true
        },
        {
            id: 3,
            title: 'title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'title Ascending',
            key: 'title',
            reverse: true
        },
    ]
    vm.order = vm.orders[0]
    vm.new = {}
    vm.addShow = function(){
        vm.shows.push(vm.new)
        vm.new = {}
    }
})