import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-aside',
  templateUrl: './admin-aside.component.html',
  styleUrls: ['./admin-aside.component.css']
})
export class AdminAsideComponent implements OnInit {

  constructor(
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.setBackground()
  }

  toggleSidebar(nameSidebar: string) {

    setTimeout(() => {
      
      if(this.router.url.includes(nameSidebar)) {

        const el = document.querySelector('#' + nameSidebar)
        const navLink = document.getElementsByClassName('nav-link')
        
        for(let i = 0; i < navLink.length; i++) {
          navLink[i].classList.remove('bg-gradient-primary')
        }

        el?.classList.add('bg-gradient-primary')
  
      }
    }, 50);
    
  }

  idElSidebar = ['admin', 'products', 'users']

  setBackground() {
    
    for(let i = 0; i < this.idElSidebar.length; i++) {
      if(this.router.url.includes(this.idElSidebar[i])) {
        const navLink = document.getElementsByClassName('nav-link')
        
        for(let i = 0; i < navLink.length; i++) {
          navLink[i].classList.remove('bg-gradient-primary')
        }
        const el = document.querySelector('#' + this.idElSidebar[i])
        el?.classList.add('bg-gradient-primary')
      }
    }
  }

}
