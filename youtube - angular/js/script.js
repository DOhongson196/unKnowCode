angular.module('myApp',[])

angular.module('myApp').controller('mainController',function(){
    this.searchInput = ''
    ngOnInit() {
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            this.totalAngularPackages = data.total;
        })        
    }
})