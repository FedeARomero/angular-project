import { Component, OnInit } from '@angular/core';
import { ResourceLink } from '../../../../interfaces/resource-link';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  title = 'personal-project';

  resourseLinks: ResourceLink[] = [
    { text: 'Learn anguar', url: 'https://angular.io/tutorial', img: 'learn-angular-icon' },
    { text: 'CLI Documentation', url: 'https://angular.io/cli', img: 'cli-documentation-icon' },
    { text: 'Angular Blog', url: 'https://blog.angular.io/', img: 'angular-blog-icon' },
    { text: 'Angular DevTools', url: 'https://angular.io/devtools/', img: 'angular-dev-tools-icon' }
  ];

  constructor () { }

  ngOnInit (): void {
  }

}
