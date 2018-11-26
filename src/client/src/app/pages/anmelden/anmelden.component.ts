import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title }  from '@angular/platform-browser';
import { AuthentificationService } from '../../services/authentification.service';



@Component({
  selector: 'app-anmelden',
  templateUrl: './anmelden.component.html',
  styleUrls: ['./anmelden.component.scss']
})
export class AnmeldenComponent implements OnInit {
  private userId=0;
  name = new FormControl('');
  password = new FormControl('');
  private loginmessage:string;
  private type:string;

  constructor(private titleService: Title, private authService: AuthentificationService) { }

  ngOnInit() { 
    this.titleService.setTitle('Anmelden');
  }
 
  onSubmit(){
    if(this.name.value == '' || this.password.value == '' ){
      this.type = 'danger';
      this.loginmessage = 'Bitte die Felder für Namen und Passwort ausfüllen.';
    }else{

      this.authService.login(this.name.value, this.password.value).subscribe((data:any) => {
        this.userId=data.user.id;
        this.type = 'success';
        this.loginmessage ='Einloggen erfolgreich. DEV:UserID: '+this.userId;
      },(err:any) => {
        this.password.setValue('')
        this.userId = 0;
        this.type = 'danger';
        this.loginmessage = 'Ihr Passwort oder der Benutzername war nicht korrekt.';
      });

    }
  }
}
