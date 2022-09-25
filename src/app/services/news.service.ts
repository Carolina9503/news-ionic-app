import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article, NewsResponse } from '../interfaces';
import {map} from 'rxjs/operators'

const apiKey = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines():Observable<Article[]>{
    // return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business`,{
      params:{
        apiKey: apiKey
      }
    }).pipe(
      map(({articles}) => articles)
    )
  }
}
