import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { TransferStateService } from '@scullyio/ng-lib';

@Component({
    selector: 'app-donuts',
    templateUrl: './donuts.component.html',
    styleUrls: ['./donuts.component.scss'],
})
export class DonutsComponent implements OnInit {
    donuts: any[] = [];

    constructor(private http: HttpClient, private transferStateService: TransferStateService) {
        // Cache the api calls during build step. creates a json file and does not call the actual api at server
        // works even when the server goes down.

        const donuts$ = this.transferStateService.useScullyTransferState(
            'donuts',
            this.http.get<any[]>(`${environment.API.BASE_URL}/donuts`)
        );
        // this.http.get<any[]>(`${environment.API.BASE_URL}/donuts`);

        donuts$.subscribe(res => {
            this.donuts = res;
        });
    }

    ngOnInit(): void {}
}
