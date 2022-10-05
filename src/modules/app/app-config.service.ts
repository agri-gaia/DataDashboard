import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export interface AppConfig {
  id: string
  dataManagementApiUrl: string;
  catalogUrl: string;
  storageAccount: string;
  apiKey: string;
  storageExplorerLinkTemplate: string;
  theme: string;
  logo: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config?: AppConfig;
  allConfigs: BehaviorSubject<AppConfig[]> = new BehaviorSubject<AppConfig[]>([]);

  constructor(private http: HttpClient) {
  }

  loadConfig(): Promise<void> {
    return this.http
      .get<any>('/assets/config/app.config.json')
      .toPromise()
      .then(data => {
        let id = localStorage.getItem("data-dashboard-id");
        this.config = data[id ?? 'lmis'];
        this.allConfigs.next(data);
      });
  }

  getConfig(): AppConfig | undefined {
    return this.config;
  }

  getAllConfigs(): Observable<AppConfig[]> {
    return this.allConfigs;
  }

  setCurId(id: string) {
    localStorage.setItem("data-dashboard-id", id);
    window.location.reload();
  }
}
