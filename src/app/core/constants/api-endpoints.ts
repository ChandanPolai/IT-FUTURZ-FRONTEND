import { environment } from '../../../env/env.local';

class ApiEndpoints {
  private PATH: string = `${environment.baseURL}/${environment.route}`;
  public SIGN_IN: string = `${this.PATH}/login`;
  public CONTACT_US: string = `${this.PATH}/contact_us`; 
  public ENROLL_COURSE: string = `${this.PATH}/courses`; 
  public HIRE_DEVELOPER: string = `${this.PATH}/hire_developer`;
  public JOIN_OUR_TEAM: string = `${this.PATH}/join_our_team`;
}

export let apiEndpoints = new ApiEndpoints();
