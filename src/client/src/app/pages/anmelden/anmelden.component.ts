import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-anmelden',
  templateUrl: './anmelden.component.html',
  styleUrls: ['./anmelden.component.scss']
})
export class AnmeldenComponent implements OnInit {
  private userId: number;
  name = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit() {
  }
  private statusMessage = '';
  private loginMessage = '';
  private type = '';
  onSubmit(){

    if(this.name.value == '' || this.password.value == '' ){
      this.type = 'danger';
      this.loginMessage='Bitte Namen und Passwort angeben.';
    }else{
      /*
      let service: AuthentificationService;

      service.login(this.name.value, this.password.value).subscribe((data:any) => {
        this.statusMessage=data.msg;
        //this.userId=data.user.id;
      });
      
      this.type = 'success';
      this.loginMessage=this.statusMessage;
      */

      this.type = 'success';
      this.loginMessage='TODO: Erreichen von Backend-Server-Seite';

    }
  }

  
}
