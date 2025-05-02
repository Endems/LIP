import { Component, OnInit } from '@angular/core';
import { CoreModule } from './core/core.module';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, // Mark as standalone
  imports: [CoreModule],
})
export class AppComponent implements OnInit {
  title = 'LIP';

  ngOnInit() {
    initFlowbite()
  }
}
