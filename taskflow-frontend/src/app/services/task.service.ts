import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TaskService{
    private apiUrl = 'http://localhost:5251/api/tareas'

    constructor(private http: HttpClient){}

    obtenerTareas(): Observable<any>{
        return this.http.get<any>(this.apiUrl);
    }
}

