import { Component, Input, OnInit } from '@angular/core';
import { ResourceLink } from '../../../../interfaces/resource-link';

@Component({
  selector: 'app-resource-link',
  templateUrl: './resource-link.component.html',
  styleUrls: ['./resource-link.component.scss']
})
export class ResourceLinkComponent implements OnInit {

  @Input() link!: ResourceLink;

  constructor () { }

  ngOnInit (): void {
  }

}
