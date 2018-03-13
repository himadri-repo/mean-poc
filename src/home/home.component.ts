import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    public showHome: boolean = true;
    public showKitchen: boolean = false;

    constructor(private router: ActivatedRoute) {

    }

    ngOnInit(): void {
        const homeComponent: any = this;
        this.router.params.forEach(params => {
            console.log('I am initialized ' + homeComponent.showHome + ' - ' + homeComponent.showKitchen);

            if (params.id === '1') {
                this.showHome = true;
                this.showKitchen = false;
                console.log('I am in 1');
            } else if (params.id === '2') {
                this.showHome = false;
                this.showKitchen = true;
                console.log('I am in 2');
            }
            console.log('Id: ' + params.id + ' showHome: ' + this.showHome + ' showKitchen: ' + this.showKitchen);
        });
    }
}
