import { Component, OnInit } from '@angular/core';
import { ConnectionManagerService } from './services/connection-manager.service';
import {RippleModule} from 'primeng/ripple';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'Code Colosseum';
  path: string = "../assets/images/colosseum-72.png";
  alttext: string = "code colossem image";
  
  constructor(
    private readonly connectionManager: ConnectionManagerService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  public get isConnected(): boolean {
    return this.connectionManager.isConnected;
  }

  public get username(): string {
    return this.connectionManager.username;
  }

  public get serverUrl(): string {
    return this.connectionManager.url;
  }

  public async disconnect(): Promise<void> {
    this.connectionManager.disconnect();
  }
}
