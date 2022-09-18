import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Truma } from "../models/truma.model";


@Injectable({
    providedIn: 'root'
})
export class TrumaService {

    constructor(private http: HttpClient){}

    getTrumot() : Observable<Truma[]> {
        return this.http.get<Truma[]>(`${environment.webApi}donations/trumot`);
    }

    upsertTruma(truma: Truma) : Observable<any> {
        return this.http.post<any>(`${environment.webApi}donations/upsertTruma`, truma);
    }
}