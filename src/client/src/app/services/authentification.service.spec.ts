import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthentificationService } from './authentification.service';

describe('AuthentificationService', () => {

  // classundertest/service object
  let service: AuthentificationService;
  // new registered user id
  let userId: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthentificationService]
    });
    service = TestBed.get(AuthentificationService);
  });

  /**
   * Create authentification service object.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Register a new user.
   */
  it('should be registered', (done) => {
    service.register('Max', 'Max@Mustermann.de', '12345').subscribe((data: any) => {
      // data: {
      //   "msg": "User successful registered.",
      //   "user": {
      //       "id": <id>,
      //       "name": "Max",
      //       "email": "Max@Mustermann.de",
      //       "pwd": "$2b$04$xJeu9AGP0hF89i.LqtdexO5dcAkiIfGx3I/TVyHlse0LppYx5RVta"
      //   }
      // }
      expect(data).toBeTruthy();
      expect(data.msg).toEqual('User successful registered.');
      expect(data.user).toBeTruthy();
      expect(data.user.id).toBeTruthy();
      userId = data.user.id;
      expect(data.user.name).toEqual('Max');
      expect(data.user.email).toEqual('Max@Mustermann.de');
      expect(data.user.pwd).toEqual('$2b$04$xJeu9AGP0hF89i.LqtdexO5dcAkiIfGx3I/TVyHlse0LppYx5RVta');
      done();
    });
  });

  /**
   * Try to register the same user again
   */
  it('should not be registered', (done) => {
    service.register('Max', 'Max@Mustermann.de', '12345').subscribe((data: any) => {
      // data: {
      //   "msg": "Username already exists."
      // }
      expect(data).toBeTruthy();
      expect(data.msg).toEqual('Username already exists.');
      expect(data.user).not.toBeTruthy();
      done();
    });
  });

  /**
   * Log user in.
   */
  it('should be logged in', (done) => {
    service.login('Max', '12345').subscribe((data: any) => {
      // data: {
      //   "msg": "Login successful.",
      //   "token": "<token>",
      //   "user": {
      //       "id": 2,
      //       "name": "Max"
      //   }
      // }
      expect(data).toBeTruthy();
      expect(data.msg).toEqual('Login successful.');
      expect(data.token).toBeTruthy();
      expect(data.user).toBeTruthy();
      expect(data.user.id).toBeTruthy();
      expect(data.user.name).toEqual('Max');
      done();
    });
  });

  /**
   * Tidy up. Delete new registered user.
   * This will also test if the user token is set!
   */
  it('should be deleted', (done) => {
    service.removeUser(userId).subscribe((data: any) => {
      // data: {
      //   msg: 'User deleted.'
      // }
      expect(data).toBeTruthy();
      expect(data.msg).toEqual('User deleted.');
      expect(data.error).not.toBeTruthy();
      done();
    });
  });
});
