import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpService } from '@natec/mef-dev-platform-connector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpService {

	constructor(public http: HttpClient) {}

	get(
		path: string, options?: {
			headers?: HttpHeaders | {
				[header: string]: string | string[];
			};
			context?: HttpContext;
			observe?: 'body';
			params?: HttpParams | {
				[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
			};
			reportProgress?: boolean;
			responseType?: 'json';
			withCredentials?: boolean;
		}
	): Observable<any> {
		return this.http.get(path, options);
	}

	getT<T>(
		path: string, options?: {
			headers?: HttpHeaders | {
				[header: string]: string | string[];
			};
			context?: HttpContext;
			observe?: 'body';
			params?: HttpParams | {
				[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
			};
			reportProgress?: boolean;
			responseType?: 'json';
			withCredentials?: boolean;
		}
	): Observable<T> {
		return this.http.get<T>(path, options);
	}

	post(
		path: string, body: any | null, options?: {
			headers?: HttpHeaders | {
				[header: string]: string | string[];
			};
			context?: HttpContext;
			observe?: 'body';
			params?: HttpParams | {
				[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
			};
			reportProgress?: boolean;
			responseType?: 'json';
			withCredentials?: boolean;
		}
	): Observable<any> {
		return this.http.post(path, body, options);
	}

	postSimple(
		path: string, body: any | null, options?: {
			headers?: HttpHeaders | {
				[header: string]: string | string[];
			};
			context?: HttpContext;
			observe?: 'body';
			params?: HttpParams | {
				[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
			};
			reportProgress?: boolean;
			responseType?: 'json';
			withCredentials?: boolean;
		}): Observable<any> {
    return this.http.post(path, body, options);
  }


	postT<T>(
		path: string, body: any | null, options?: {
			headers?: HttpHeaders | {
				[header: string]: string | string[];
			};
			context?: HttpContext;
			observe?: 'body';
			params?: HttpParams | {
				[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
			};
			reportProgress?: boolean;
			responseType?: 'json';
			withCredentials?: boolean;
		}): Observable<T> {
		return this.http.post<T>(path, body, options);
	}

	del(
		path: string, options?: {
			headers?: HttpHeaders | {
				[header: string]: string | string[];
			};
			context?: HttpContext;
			observe?: 'body';
			params?: HttpParams | {
				[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
			};
			reportProgress?: boolean;
			responseType?: 'json';
			withCredentials?: boolean;
			body?: any | null;
		}): Observable<any> {
		return this.http.delete(path, options);
	  }

  deleteT<T>(path: string, options?: {
	headers?: HttpHeaders | {
		[header: string]: string | string[];
	};
	context?: HttpContext;
	observe?: 'body';
	params?: HttpParams | {
		[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
	};
	reportProgress?: boolean;
	responseType?: 'json';
	withCredentials?: boolean;
	body?: any | null;
}): Observable<any> {
    return this.http.delete<T>(path, options);
  }
}
