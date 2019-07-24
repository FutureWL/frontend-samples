import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {MessageService} from './message.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = 'api/users';

  private httpOptions: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  private log(message: string) {
    this.messageService.add(`UserService:${message}`)
  }

  /**
   * 功能描述：获取所有的用户列表
   */
  getUsers(): Observable<User[]> {
    this.log('已经获取到用户列表!');
    return this.http.get<User[]>(this.usersURL)
      .pipe(
        tap(Users => this.log('fetched Users')),
        catchError(this.handleError('getUser', []))
      )
  }

  /**
   * 功能描述：获得用户对象
   * @param id
   */
  getUser(id: number): Observable<User> {
    this.log(`已经获取道用户 id=${id}`);
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    )
  }

  /**
   * 功能描述：更新用户
   * @param user
   */
  updateUser(user: User): Observable<any> {
    return this.http.put<User>(this.usersURL, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    )
  }

  /**
   * 功能描述：新增用户
   * @param user
   */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersURL, user, this.httpOptions).pipe(
      tap((user: User) => this.log(`added user id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    )
  }

  /**
   * 功能描述：删除用户
   * @param user
   */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersURL}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe();
  }

  /**
   * 功能描述：搜索用户信息
   * @param term
   */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersURL}/?name=${term}`).pipe(
      tap(_ => this.log(`found Users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
