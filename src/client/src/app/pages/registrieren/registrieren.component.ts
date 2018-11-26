import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title }  from '@angular/platform-browser';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.component.html',
  styleUrls: ['./registrieren.component.scss']
})
export class RegistrierenComponent implements OnInit {
  private benutzername = new FormControl('');
  private email = new FormControl('');
  private password = new FormControl('');
  private passwordConfirm = new FormControl('');
  private userId:number;
  private registrmessage:string;
  private type:string;
  private statusMessage:string;
  constructor(private titleService: Title, private authService: AuthentificationService) { }

  ngOnInit() {
    this.setTitle();
  }

  onSubmit(){
    if((this.benutzername.value != '') && (this.password.value != '') && (this.passwordConfirm.value != '')){

      this.type = 'success';
      this.registrmessage='in der if';

      this.authService.register(this.benutzername.value, this.email.value, this.password.value).subscribe((data: any) => {
        this.userId=data.user.id;
        this.type = 'success';
        this.registrmessage='User erfolgreich registriert. UserID: ',this.userId;
       });
       

    }else{
      this.type = 'danger';
      this.registrmessage='Bitte alle Felder ausfüllen.';
    }
  }

  setTitle(){
    this.titleService.setTitle('Registrieren');
  }
}
