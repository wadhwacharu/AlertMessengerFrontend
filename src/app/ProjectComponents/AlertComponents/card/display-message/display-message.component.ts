import { Component,Input ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent implements OnInit{
  @Input() curRow=new Set<Alertmessage>();
  show!: boolean;
  ngOnInit(): void {
    this.show=false;
  }
  constructor(private router:Router)
  {

  }
  toggle()
  {
    this.show=!this.show;
  }
  onClose()
  {
   this.router.navigate(['/card-component'])
  .then(() => {
    window.location.reload();
  });
  }

}
